---
name: Performance Improvements in EinsteinPy
desc: The project aims at making EinsteinPy high-performace computation ready.
# add a short one line description of your project
requirements:
# Student requirements:
 - Knowledge on ODEs, basic mathematics
 - Familiarity with multithreading, Rust or C++
 - Some experience with CUDA
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
 - shreyasbapat
 - shilpi1958
 - spino17
initiatives:
 - GSOC
 - SOCIS
tags:
# Different technologies needed
 - python
 - CUDA
 - Rust
 - C++
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - einsteinpy
---

#### Description

The EinsteinPy Codebase is currently in a beta state, where it can be used to play around with the data but, lacks the possibility of serious computations due to bad performance. We recently made some performance enhancements to accelerate the code upto 10-15X the current speed. But it is still not enough. Serious computations and research requires a very good performance along with ability to scale on multiple CPUs, GPUs. This can further facilitate the adoption of EinsteinPy in general relativity community. Moreover, the overall code structure, including coordinate conversions are little bit tricky as well as adding a new frame/coordinate system is a tiresome process in current model.

There are multiple ways of accelerating the codebase. We would like to slowly try each and every one of them. First step in determining the performance will be profiling the complete codebase using any open source tool.

After profiling is done, we can have two backend type model (like tensorflow). For the low performance codebase too, we will need to replace certain Python snippets with either less complex pyton code snippets (accelerated with numba) wherever possible, or with some sort of compiled fast language (C++ / Rust).

However the GPU backend is not a hard and fast requirement from this project as per the current state of the codebase. The coordinate conversions in EinsteinPy are not the best in the industry right now. We aim to fix the problem of coordinate conversion. This fix can give a significance boost to the computation speed. 

Some modules like, shadow do not scale well. Also there are some theoretical issues which make the whole module slow. We would like to simulate black hole shadows of real sized black holes rather than M=1 Black holes which have no practical significance.

#### Milestones (if any)

##### Coding starts

* Engaged with the community and understand the motivation and challenges of
  the project.
* Have set up a development environment and get familiar with einsteinpy dependencies.


##### 1st evaluation

* Have done the profiling of the codebase, found the bottlenecks.
* Fixed the ODE Solver as it is too slow. 
* Fixed the coordinate conversions.
* Have all code, tests and documentation in GitHub.

##### 2nd evaluation

* Work on shadow and hypersurface modules, find the reason why they do not scale well (possibly because of the integrator)
* Publish the performance comparisons.
* Have all code, tests and documentation in GitHub.

##### Final

* Complete the Rust/C++ backend for the project and publish it on GitHub.
* Complete the coordinate conversion issue and add an easy way to introduce new coordinate systems.
* Have all code, tests and documentation in GitHub.

#### Secondary goals

* Fix any bugs that might appear regarding visualization, symbolic module and so forth
* Make the code work on GPU too.
* Review pull requests from other einsteinpy contributors, including the mentor
* Give a talk about the work at some Python event.

