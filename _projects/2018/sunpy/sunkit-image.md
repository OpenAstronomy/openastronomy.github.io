---
name: Develop sunkit-image
desc: Create and develop a package for solar image analysis.
requirements:
 - Good understanding of Python.
 - Enthusiasm to learn solar image processing.
difficulty: low
issues:
 - https://github.com/sunpy/sunpy/pull/1899
 - https://github.com/sunpy/sunpy/pull/1876
mentors:
 - Cadair
 - wafels
 - Nabobalis
initiatives:
 - GSOC
 - SOCIS
tags:
 - python
 - sunpy
collaborating_projects:
 - sunpy
---

In this project you would create the foundations of the 'sunkit-image' SunPy
affiliated package, a package to contain image processing routines and
functionality specific to the analysis of solar physics data.

#### Description

There have been various proposals for adding image processing and manipulation
code to the SunPy library. SunPy has decided that this functionality will
instead reside in an affiliated package, tentatively named 'sunkit-image'. This
project will setup this package and implement the initial functionality.

There is various functionality that should be added to 'sunkit-image' some of it
already developed, some of it not! This project should achieve some or all of
the following goals (roughly in this order):

1. Port the Multi-Scale Gaussian Normalisation code from [#1899](https://github.com/sunpy/sunpy/pull/1899).
2. Convert the [differential rotation code](https://github.com/sunpy/sunpy/blob/master/sunpy/physics/differential_rotation.py) in SunPy to use [`sunpy.coordinates`](https://github.com/sunpy/sunpy/tree/master/sunpy/map).
3. Implement image warping for solar differential rotation. [#1876](https://github.com/sunpy/sunpy/pull/1876).
4. Implement the [OCCULT-2 algorithm](http://arxiv.org/abs/1307.5046) for coronal loop tracing.
5. Implement running and base difference functionality and the persistence transform. See Figure 2 in [this paper](http://iopscience.iop.org/article/10.1088/0004-637X/736/2/102/pdf) for some ideas.

optional extras:

6. Refactor and write a Python wrapper for [FLCT](https://arxiv.org/abs/0712.4289) [code](http://solarmuri.ssl.berkeley.edu/overview/publicdownloads/software.html).
8. Implement image alignment using feature detection and tracking. [Example](http://scikit-image.org/docs/dev/auto_examples/features_detection/plot_brief.html)


#### Milestones

##### GSOC 2017 CODING STARTS

* Have familiarised yourself with the algorithms and with Python packaging. Have worked with the mentors to get the package repository setup on GitHub and the CI and documentation running.

##### GSOC 2017 MIDTERM

* Have copied in and documented and tested the MGN code.
* Have opened a PR to SunPy to convert the `sunpy.physics` module to use `sunpy.coordinates`.
* Have implemented the Map warping code.

##### GSOC 2017 FINAL 

* Have got the SunPy PR for coordinates in `sunpy.physics` merged.
* Have implemented OCCULT-2.
