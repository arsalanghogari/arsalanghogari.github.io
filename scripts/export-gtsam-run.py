"""Export a real GTSAM landmark-graph run for the site's factor-graph SVG.

Drives barracuda_estimation's own `_associate_landmark` / `_landmark_factor`
over a mission-shaped trajectory with noisy ZED-style detections, then
optimizes with Levenberg-Marquardt at increasing iteration caps so the SVG can
replay convergence. Poses are held by tight priors (stand-in for IMU/DVL
odometry), exactly as the package's own real-gtsam test does.

Usage (needs gtsam + numpy on the path, and barracuda_estimation importable):
  PYTHONPATH=~/barracuda/barracuda_ws/src/barracuda_estimation \
    python scripts/export-gtsam-run.py > src/data/gtsam-run.json
"""
import json
import math
import sys

import gtsam
import numpy as np
from gtsam.symbol_shorthand import L, X

from barracuda_estimation.gtsam_estimator import GtsamEstimator
from barracuda_estimation.measurement_types import CameraLandmarkSample

RNG = np.random.default_rng(3)
OBS_NOISE = 0.08       # m, per-axis body-frame detection noise
SEED_OFFSET = 0.35     # m, how far the first-sighting seed is pushed off truth
MAX_RANGE, HALF_FOV = 5.0, math.radians(38)
POSE_PRIOR = gtsam.noiseModel.Isotropic.Sigma(6, 1e-3)

# truth: gate pipes, slalom poles, bin (metres, z = depth of the prop centre)
TRUTH = [
    ("gate", (6.0, 1.6, -1.0)), ("gate", (6.0, 3.4, -1.0)),
    ("red_pipe", (10.5, 5.5, -1.0)), ("red_pipe", (10.5, 7.2, -1.0)), ("red_pipe", (10.5, 8.9, -1.0)),
    ("bin", (4.5, 10.0, -1.6)),
]
WAYPOINTS = [(1.5, 1.5), (3, 2.5), (9.2, 2.5), (11.2, 3.8), (9.5, 5.5), (11.5, 7.2), (9.5, 8.9), (9.8, 10.8), (4.5, 10.0), (1.5, 7)]


def trajectory(n=60):
    pts = []
    for i in range(len(WAYPOINTS)):
        a, b = np.array(WAYPOINTS[i]), np.array(WAYPOINTS[(i + 1) % len(WAYPOINTS)])
        for u in np.linspace(0, 1, 8, endpoint=False):
            pts.append(a + (b - a) * u)
    pts = np.array(pts)
    # light smoothing then resample to n
    k = 5
    sm = np.array([pts[(np.arange(j - k, j + k + 1)) % len(pts)].mean(0) for j in range(len(pts))])
    idx = np.linspace(0, len(sm) - 1, n).astype(int)
    out = []
    for j in idx:
        p, q = sm[j], sm[(j + 1) % len(sm)]
        yaw = math.atan2(q[1] - p[1], q[0] - p[0])
        out.append(gtsam.Pose3(gtsam.Rot3.Yaw(yaw), gtsam.Point3(p[0], p[1], -1.0)))
    return out


def visible(pose, world):
    body = np.asarray(pose.transformTo(gtsam.Point3(*world)), dtype=float)
    r = float(np.linalg.norm(body[:2]))
    return 0.6 < r < MAX_RANGE and abs(math.atan2(body[1], body[0])) < HALF_FOV, body


def main():
    est = GtsamEstimator()
    poses = trajectory()
    graph = gtsam.NonlinearFactorGraph()
    initial = gtsam.Values()
    edges, lid_truth, seeds = [], {}, {}
    for i, pose in enumerate(poses):
        graph.add(gtsam.PriorFactorPose3(X(i), pose, POSE_PRIOR))
        initial.insert(X(i), pose)
        for t_idx, (label, world) in enumerate(TRUTH):
            ok, body = visible(pose, world)
            if not ok:
                continue
            measured = body + RNG.normal(0.0, OBS_NOISE, 3)
            sample = CameraLandmarkSample(stamp_sec=float(i), class_label=label, score=0.9, position_xyz=(0.0, 0.0, 0.0))
            lid, is_new = est._associate_landmark(sample, pose, measured)
            if lid is None:
                continue
            graph.add(est._landmark_factor(i, lid, measured))
            edges.append((i, int(lid)))
            if is_new:
                seed = np.asarray(est.landmarks[lid]["world_xyz"], dtype=float)
                seed = seed + RNG.normal(0.0, 1.0, 3) / math.sqrt(3) * SEED_OFFSET
                initial.insert(L(lid), gtsam.Point3(*seed))
                seeds[int(lid)] = seed.tolist()
                lid_truth[int(lid)] = t_idx

    lids = sorted(seeds)
    frames = []
    for it in range(0, 9):
        params = gtsam.LevenbergMarquardtParams()
        params.setMaxIterations(it)
        result = gtsam.LevenbergMarquardtOptimizer(graph, initial, params).optimize() if it else initial
        lm = {lid: np.asarray(result.atPoint3(L(lid)), dtype=float) for lid in lids}
        errs = {lid: float(np.linalg.norm(lm[lid] - np.array(TRUTH[lid_truth[lid]][1]))) for lid in lids}
        frames.append({"iter": it, "landmarks": {str(k): [round(float(v[0]), 3), round(float(v[1]), 3)] for k, v in lm.items()},
                       "error": {str(k): round(v, 3) for k, v in errs.items()}, "cost": round(float(graph.error(result)), 3)})
        if it and frames[-1]["cost"] == frames[-2]["cost"]:
            break

    out = {
        "note": "Real GTSAM (LM) run through barracuda_estimation's landmark association + factors; poses pinned by tight priors as the package's own test does. Observations: synthetic ZED-style detections, 8 cm noise.",
        "poses": [[round(float(p.x()), 3), round(float(p.y()), 3), round(float(p.rotation().yaw()), 3)] for p in poses],
        "truth": [{"label": l, "xy": [x, y]} for l, (x, y, _) in TRUTH],
        "landmarks": [{"id": lid, "label": TRUTH[lid_truth[lid]][0], "truth": lid_truth[lid], "seed": seeds[lid][:2]} for lid in lids],
        "edges": edges,
        "frames": frames,
    }
    json.dump(out, sys.stdout, separators=(",", ":"))
    # ponytail: one self-check — every landmark must land under the 0.3 m spec
    worst = max(frames[-1]["error"].values())
    assert worst < 0.3, f"worst landmark error {worst} m"
    print(f"\n# {len(poses)} poses, {len(lids)} landmarks, {len(edges)} factors, {len(frames)-1} LM iters, worst err {worst:.3f} m", file=sys.stderr)


if __name__ == "__main__":
    main()
