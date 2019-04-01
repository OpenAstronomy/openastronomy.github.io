---
name: Develop sunkit-image
desc: Add features to a new package for solar image analysis.
requirements:
 - Good understanding of Python.
 - Some understanding of mathematics.
 - Enthusiasm to learn image processing.
difficulty: medium
issues:
 - https://github.com/sunpy/sunkit-image/issues/1
 - https://github.com/sunpy/sunkit-image/issues/3
 - https://github.com/sunpy/sunkit-image/issues/5
 - https://github.com/sunpy/sunkit-image/issues/6
 - https://github.com/sunpy/sunkit-image/issues/7
 - https://github.com/sunpy/sunkit-image/issues/9
 - https://github.com/sunpy/sunkit-image/issues/10
 - https://github.com/sunpy/sunkit-image/issues/13
mentors:
 - nabobalis
 - wafels
initiatives:
 - GSOC
 - SOCIS
tags:
 - python
 - numpy
 - cython
collaborating_projects:
 - sunpy
---

#### Description

There have been various proposals for adding image processing and manipulation code to the SunPy library.
SunPy has decided that this functionality will instead reside in an affiliated package, named [sunkit-image.](https://github.com/sunpy/sunkit-image/)
This project will implement the initial functionality with a broad scope.

We have a range of open issues that form the starting core of the project and contain more concreate steps and information about each feature request.

This project should achieve most or all of the following goals (roughly in this order):

1. Implement the [normalizing-radial-graded filter (NRGF)](http://adsabs.harvard.edu/abs/2006SoPh..236..263M).
2. Port the Multi-Scale Gaussian Normalisation (MGN) code from [#1899](https://github.com/sunpy/sunpy/pull/1899).
3. Implement the [OCCULT-2 algorithm](http://arxiv.org/abs/1307.5046) for coronal loop tracing.
4. Implement the [soft morphological filtering of solar images](https://www.aanda.org/articles/aa/pdf/2006/38/aa4852-06.pdf)

There are more complex features we would like but will only be looked at once the previous features have been implemented.

5. Refactor and write a Python wrapper for [FLCT](https://arxiv.org/abs/0712.4289) [code](http://solarmuri.ssl.berkeley.edu/overview/publicdownloads/software.html).
6. Implement image alignment using feature detection and tracking. [Example](http://scikit-image.org/docs/dev/auto_examples/features_detection/plot_brief.html)
7. Implement image re-sampling as described [here](https://link.springer.com/content/pdf/10.1023/B:SOLA.0000021743.24248.b0.pdf) through updating [this pull request](https://github.com/astropy/reproject/pull/52) to the Astropy [image resampling](https://reproject.readthedocs.io/en/stable/) repository.

#### Milestones

##### Coding starts

* Have familiarized yourself with the algorithms.
* Have set up a development environment.
* Understand of what is currently in `sunkit-image`.

##### To be completed by the Phase 1 Evaluation Deadline

* Have implemented, tested and documented the NRGF code.
* Have implemented, tested and documented the MGN code.

##### To be completed by the Phase 2 Evaluation Deadline

* Have successfully merged the NRGF and MGN code.
* Have implemented OCCULT-2.

##### To be completed by the end of GSoC

* Have implemented, tested and documented soft morphological filtering code.
* Have tested, documented and merged the OCCULT-2 code.
