---
name: Null geodesics for Schwarzschild and Kerr Geometries
desc: The project aims at adding functionality of ray-tracing to EinsteinPy
# add a short one line description of your project
requirements:
# Student requirements:
 - Knowledge on ODEs, basic mathematics
 - Some Familiarity with General Relativity, or the will to read about it.
 - Basic knowledge of differential geometry
difficulty: medium
issues:
# Related issues (if any)  to this project.
 - https://github.com/einsteinpy/einsteinpy/issues/316
 - https://github.com/einsteinpy/einsteinpy/issues/233
 - https://github.com/einsteinpy/einsteinpy/issues/223
 - https://github.com/einsteinpy/einsteinpy/issues/164
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - ritzvik
 - OVSofia
 - rishi-s8
initiatives:
 - GSOC
 - SOCIS
tags:
# Different technologies needed
 - python
 - C++
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - einsteinpy
---

#### Description

Null-geodesics is the path traced by light rays in 4-D space-time. We aim to calculate null geodesics around non-rotating (Schwarzschild) and rotating (Kerr) massive bodies given the initial conditions.

Further, it would allow us to calculate the ergosphere around a Kerr black hole. As in the trajectory of photon through space-time, the proper time remains zero, we generally have to introduce an affine parameter for the geodesic equations. Equations are generally obtained from analysis of radial and axial momentums of photon as energy and angular momentum are constants of motion in Kerr space-time.

Raytracing can also be made possible after this is implemented.

This project also aims at fixing the problem of natural units introduced due to the research papers and books.

##### Some links to relevant papers :
  - https://arxiv.org/abs/1601.02063
  - https://www.aanda.org/articles/aa/abs/2004/36/aa0814/aa0814.html
  - http://www.math.mcgill.ca/gantumur/math599w17/project-kerr.pdf

#### Milestones (if any)

##### Coding starts

* Engaged with the community and understand the motivation and challenges of
  the project.
* Have set up a development environment and get familiar with einsteinpy dependencies.


##### 1st evaluation

* Null geodesic in Kerr space-time
* Null geodesic in Schwarzschild space-time (It can be implemented by creating a class inheriting from Kerr null geodesics and setting a=0. However, it would lead to unnecessary calculation and therefore, seperate Schwarzschild-Null class is necessary.)
* Have all code, tests and documentation in GitHub.

##### 2nd evaluation

* Plotting class for both Kerr and Schwarzschild null geodesics.
* Make the functions run on multiple cores
* Have all code, tests and documentation in GitHub.

##### Final

* Fix the Natural Units Problem in Kerr-Newman time-like geodesics.
* Fix the Natural Units Problem in Hypersurface Module.
* Have all code, tests and documentation in GitHub.

#### Secondary goals

* Fix any bugs that might appear regarding visualization, symbolic module and so forth
* Review pull requests from other einsteinpy contributors, including the mentor
* Give a talk about the work at some Python event.

