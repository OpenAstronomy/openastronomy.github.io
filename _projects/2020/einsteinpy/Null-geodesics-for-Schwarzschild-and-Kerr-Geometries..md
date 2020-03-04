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
 - https://github.com/einsteinpy/einsteinpy/issues/105
 - https://github.com/einsteinpy/einsteinpy/issues/106
 - https://github.com/einsteinpy/einsteinpy/issues/275
 - https://github.com/einsteinpy/einsteinpy/issues/144
 - https://github.com/einsteinpy/einsteinpy/issues/145
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

The project has roughly the following objectives :
  - Calculating null trajectories around a rotating/non-rotating black hole.
  - Use those trajectories to raytrace a bundle of photon rays, to visualize how space-time gets distorted in presence of black holes.
  - Calculate redshifts in photon rays due to space-time curvature.
  - Visualization of Keplerian disc/shell in around it.
  - In short, we aim to replicate one of the few papers available with proper coding paradigms like OOPs, good documentation and unit tests.
  - If required due to performance issues, python wrappers over native C/C++ have to be written.

This project also aims at fixing the problem of natural units introduced due to the research papers and books and to give native support to MKS units.

##### Papers we intend to replicate :
  - Odyssey: https://arxiv.org/abs/1601.02063
  - YNOGK: https://arxiv.org/abs/1305.1250

##### Links to other relevant papers :
  - https://www.aanda.org/articles/aa/abs/2004/36/aa0814/aa0814.html
  - http://www.math.mcgill.ca/gantumur/math599w17/project-kerr.pdf
  - https://iopscience.iop.org/article/10.1088/0004-637X/696/2/1616

#### Milestones (if any)

##### Coding starts

* Engaged with the community and understand the motivation and challenges of
  the project.
* Have set up a development environment and get familiar with einsteinpy dependencies.
* Have read relevant literature/codes required for the project.


##### 1st evaluation

* Null geodesic in Kerr space-time
* Null geodesic in Schwarzschild space-time (It can be implemented by creating a class inheriting from Kerr null geodesics and setting a=0. However, it would lead to unnecessary calculation and therefore, seperate Schwarzschild-Null class is necessary.)
* If possible, basic raytracing using the newly created classes.
* Have all code, tests and documentation in GitHub.

##### 2nd evaluation

* Plotting class for both Kerr and Schwarzschild null geodesics.
* Improvement in raytracing, along with simulation of a photon sheet around a black hole.
* Calculation of redshifts along the null trajectory.
* Have all code, tests and documentation in GitHub.

##### Final

* Good-enough implementation of any of the relavent papers.
* Complete any chores left out during the 1st and 2nd phase.
* Fix the Natural Units Problem in Kerr-Newman time-like geodesics.
* Fix the Natural Units Problem in Hypersurface Module.
* Have all code, tests and documentation in GitHub.

#### Secondary goals

* Fix any bugs that might appear regarding visualization, symbolic module and so forth.
* Review pull requests from other einsteinpy contributors, including the mentor.
* Give a talk about the work at some Python event.
* EinsteinPy is nothing without its community. Therefore, getting integrated deeply within the community and oversee future development of EinsteinPy.
