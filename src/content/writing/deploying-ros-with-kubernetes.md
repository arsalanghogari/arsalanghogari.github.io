---
title: "Deploying ROS with Kubernetes"
description: "Running a robot's software as orchestrated services across a Jetson + Raspberry Pi stack — and why it was worth the complexity."
date: 2026-01-20
tags: ["robotics", "ros", "kubernetes", "devops"]
draft: false
---

> Draft — seeded from my RoboSub deployment work. I'll add the manifests and a real architecture diagram.

ROS is usually run the casual way: `roslaunch` on one machine, everything in one process tree, and a prayer that nothing crashes mid-run. That falls apart the moment you have **multiple compute boards**, **services that need to restart independently**, and a competition where a single node dying means a failed run.

So we deployed our ROS services with **Kubernetes** across a **Raspberry Pi + NVIDIA Jetson Xavier** stack.

## Why bother

- **Independent restarts.** If perception crashes, it comes back without taking navigation down with it.
- **Heterogeneous hardware.** The Jetson handles inference; the Pi handles lighter coordination. Kubernetes schedules each workload where it belongs.
- **Reproducibility.** The same containers run on a laptop in the lab and on the sub. No "works on my machine."

## The hard parts

1. **Networking.** ROS's discovery model and Kubernetes networking don't naturally agree. Getting nodes to find each other across pods took the most iteration.
2. **Real-time-ish constraints.** Orchestration adds latency you have to budget for. Not everything belongs in a pod — the tightest control loops stay close to the metal.
3. **Resource limits on a Jetson.** You learn fast what your model actually costs in memory and watts.

## Was it worth it

For a one-off demo, no. For a system that has to survive a real mission with people who didn't write every line — yes. The discipline of containerizing each service forced clean boundaries between perception, navigation, and mission control, and that boundary-drawing made the whole stack easier to reason about.

*More to come: the actual manifests, and how the mission-control node sequences tasks with fallbacks.*
