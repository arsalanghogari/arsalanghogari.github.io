---
title: "Training YOLO Underwater"
description: "What changes when your camera is submerged: color attenuation, distortion, and the dataset tricks that took our detection mAP from 0.70 to 0.90."
date: 2026-02-10
tags: ["computer-vision", "robosub", "yolo"]
draft: false
---

> Draft — this is a starter post seeded from my RoboSub work. I'll expand it with real training curves and camera footage.

Most object detectors are trained on photos taken in air. Underwater, three things break that assumption at once:

- **Color attenuation.** Red disappears first, then orange, then yellow. By a few meters down, everything trends blue-green. A model that learned "red buoy" on land has nothing to grab onto.
- **Distortion.** Refraction at the housing and the water itself warps geometry. Straight edges bend.
- **Low, uneven light.** Backscatter from particles in the water adds noise that looks a lot like texture.

## What actually moved the needle

The biggest win wasn't a fancier architecture — it was **building datasets from our own ROS bags**. Every test run recorded raw camera topics; I pulled frames straight from those bags so the training data matched the exact conditions the sub would see in competition.

From there:

1. **Color-space augmentation** that mimics depth — pushing images toward blue-green so the model stops relying on land-like color.
2. **Hard-negative mining** on backscatter so noise stopped triggering false positives.
3. **Tight, consistent labeling** of the few object classes that matter for the mission.

The combination took detection **mAP from 0.70 to 0.90** — enough that the navigation stack could actually trust what perception was reporting.

## The lesson

Underwater perception is less about the model and more about **making your training distribution look like the deployment distribution**. Record everything, train on what the robot will actually see, and measure relentlessly.

*More to come: training curves, the RT-DETR comparison, and why fusing sonar mattered when the optics gave up.*
