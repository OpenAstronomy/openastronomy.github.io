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

The SunPy Ecosystem currently has well developed support for making 2D plots (primarily with Matplotlib), but currently a simple interface for making 3D plots.

[sunkit-pyvista](https://github.com/sunpy/sunkit-pyvista) came out of a previous GSoC project and enables "simple" 3D plotting of sunpy Maps.
This is achieved by wrapping parts of [pyvista](https://github.com/pyvista/pyvista) and adding a "solar-spin"  on their API.

However, due to this, some issues have cropped up, such as by adding a hidden plotter class, the API has become `plotter.plotter` to access the underlying pyvista API.

It also lacks some useful features such as plotting current sheets and animations.
There are open pull requests for these and we would like them finished by the student for this project.
We appreciate that this not the interesting project as it will mostly fixing up issues and open pull requests.

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
