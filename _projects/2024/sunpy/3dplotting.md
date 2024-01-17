---
name: Improve sunkit-pyvista
desc: Improve the 3D plotting capabilities within the SunPy Ecosystem
requirements:
 - Familiarity with Python
 - Familiarity with pyvista
difficulty: medium to high
issues:
 - https://github.com/sunpy/sunkit-pyvista/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc
 - https://github.com/sunpy/sunkit-pyvista/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc
mentors:
 - nabobalis
 - <ADD SOMEONE ELSE>
project_size:
 - 175 h / medium
tags:
 - python
 - plotting
 - 3D
collaborating_projects:
 - sunpy
---

# Description

The SunPy Ecosystem currently has well developed support for making 2D plots (with Matplotlib), but currently a simpler interface for making 3D plots.

[sunkit-pyvista](https://github.com/sunpy/sunkit-pyvista) came out of a previous GSoC project and enables  3D plotting of sunpy Maps.
This is achieved by wrapping [pyvista](https://github.com/pyvista/pyvista) and adding a "solar-spin"  on their API.

However, after this GSoC, progress was much slower and issues have cropped up with time, the main one being the the API currently has a `plotter.plotter` to access the underlying pyvista API.
It also lacks some useful features such as plotting current sheets and animations.

This project will be addressing these issues, in part by taking over existing pull requests.

## Goals

### Community Bonding Period

* Get familiar with sunkit-pyvista.
* Get familiar with pyvista.
* Setup a development environment.

### Coding starts

* Start working on the first issue.

#### 1st evaluation

* Have around ~50% of the issues and pull requests taken care of.

#### Final evaluation

* Ideally have 100% of the issues and pull requests finished.
