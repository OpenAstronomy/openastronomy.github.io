---
name: Optimizing performance of ccdproc
desc: Optimize speed and memory use of the package ccdproc.
# add a short one line description of your project
requirements:
# Student requirements:
 - Familiar with the basics of astronomical image reduction
difficulty: medium
mentors:
# First person in contact; mentors may change before project starts.
 - mwcraig
 - crawfordsm
 - bsipocz
initiatives:
 - GSOC
tags:
# Different technologies needed
 - python
 - Cython (maybe)
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - astropy
 - ccdproc
---
Optimizing performance of ccdproc

#### Description

The [ccdproc](https://ccdproc.readthedocs.io) package contains functions for reducing and combining optical/IR image data and for managing collections of FITS files. The package API is mature and is close to feature-complete. Limited effort has been put into trying to optimize `ccdproc` for speed and memory use but users have reported that it runs slowly. One area to focus on is image combination. The first stage of this project is identifying which parts of the code are bottlenecks; the remainder of the project is fixing those bottlenecks and setting up regular monitoring using [asv](https://asv.readthedocs.io/).

#### Milestones (if any)

##### GSOC 2018 CODING STARTS

* Perform developer install of `ccdproc`
* Install Python profiling tools
* Install and run `asv`.

##### GSOC 2018 Milestones

* Profile code to identify targets for performance (speed) optimization.
* Set up regular performance testing of `ccdproc` on CI.
* Propose fixes for each of the problems identified in previous milestone.
* Identify memory bottlenecks.
* Fix memory bottlenecks.
