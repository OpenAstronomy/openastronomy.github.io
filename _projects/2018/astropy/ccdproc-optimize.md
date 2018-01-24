---
name: Optimizing performance of `ccdproc`
desc: The package [ccdproc](https://ccdproc.readthedocs.io) has a stable API but little effort has been put in to optimizing its speed or memory use. The project is to do both optimizations.
# add a short one line description of your project
requirements:
# Student requirements:
 - Familiar with the basics of astronomical image reduction
difficulty: medium
issues:
# Related issues (if any)  to this project.
 - https://github.com/astropy/astropy/issue/4444
 - https://github.com/astropy/astropy/issue/5555
mentors:
# First person in contact; mentors may change before project starts.
 - mwcraig
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
Optimizing performance of `ccdproc`

#### Description

The `ccdproc` package contains functions for reducing and combining optical/IR image data and for managing collections of FITS files. The package API is mature and is close to feature-complete. Limited effort has been put into trying to optimize `ccdproc` for speed and memory use but users have reported that it runs slowly. The first stage of this project is identifying which parts of the code are bottlenecks; the remainder of the project is fixing those bottlenecks and setting up regular monitoring using `asv`.

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
