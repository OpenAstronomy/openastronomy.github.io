---
name: Develop sunkit-image
desc: Create and develop a package for solar image analysis.
requirements:
 - Good understanding of Python.
 - Enthusiasm to learn solar image processing.
difficulty: medium to low
issues:
 - https://github.com/sunpy/sunpy/pull/1899
mentors:
 - Cadair
 - wafels
 - nabobalis
 - mbobra
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
instead reside in an affiliated package, named 'sunkit-image'. This
project will setup this package and implement the initial functionality.

There is various functionality that should be added to 'sunkit-image' some of it
already developed, some of it not. This project should achieve some or all of
the following goals (roughly in this order):

1. Implement the [normalizing-radial-graded filter (NRGF)](http://adsabs.harvard.edu/abs/2006SoPh..236..263M).
2. Port the Multi-Scale Gaussian Normalisation (MGN) code from [#1899](https://github.com/sunpy/sunpy/pull/1899).
3. Implement the [OCCULT-2 algorithm](http://arxiv.org/abs/1307.5046) for coronal loop tracing.
4. Implement image re-sampling as described [here](https://link.springer.com/content/pdf/10.1023/B:SOLA.0000021743.24248.b0.pdf) through updating [this pull request](https://github.com/astropy/reproject/pull/52) to the Astropy [image resampling](https://reproject.readthedocs.io/en/stable/) repository.

Optional extras:

5. Implement the [soft morphological filtering of solar images](https://www.aanda.org/articles/aa/pdf/2006/38/aa4852-06.pdf)
6. Refactor and write a Python wrapper for [FLCT](https://arxiv.org/abs/0712.4289) [code](http://solarmuri.ssl.berkeley.edu/overview/publicdownloads/software.html).
7. Implement image alignment using feature detection and tracking. [Example](http://scikit-image.org/docs/dev/auto_examples/features_detection/plot_brief.html)


#### Milestones

##### GSOC 2018 Official Coding Start

* Have familiarised yourself with the algorithms and with Python packaging. Have worked with the mentors to get the package repository setup on GitHub and the CI and documentation running.

##### To be completed by the GSOC 2018 Phase 1 Evaluation Deadline

* Have implemented, tested and documented the NRGF code.
* Have implemented, tested and documented the MGN code.

##### To be completed by the GSOC 2018 Phase 2 Evaluation Deadline

* Have successfully merged the NRGF and MGN code.
* Have implemented OCCULT-2.

##### To be completed by the end of the GSOC 2018 Final Week 

* Have tested, documented and merged the OCCULT-2 code.
* Have developed an outline of the implementation of the image resampling code in the context of the Astropy reproject module.
