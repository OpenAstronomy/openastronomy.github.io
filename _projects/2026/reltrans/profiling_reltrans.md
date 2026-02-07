---
name: Profiling and Performance Optimization of Reltrans
desc: Code profiling to identify performance bottlenecks and implement targeted optimizations
# add a short one line description of your project
requirements:
# Student requirements:
 - Fortran knowledge
 - Use of code profiling tools
difficulty: medium
# How difficult would you consider the project to be: low, medium, high
issues:
# Related issues (if any) to this project.
# Ideally you want at least one that describes the problem it is trying to solve
- https://github.com/reltrans/reltrans/issues/61
mentors:
# First person in contact; mentors may change before project starts.
# GitHub or GitLab handles
 - mgullik
 - matteolucchini1
initiatives:
# The programme under this project wish to run. At the moment only GSOC is available
 - GSOC
project_size:
 - 175 h (Medium)
tags:
# Different technologies needed
 - fortran
 - code profiling tools
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - reltrans
---
## Profiling and Performance Optimization of Reltrans

#### Description

Reltrans is a publicly available, semi-analytical model for X-ray reverberation mapping
of accreting black holes in both Active Galactic Nuclei (AGN) and X-ray binaries.
It can be used to compute both time-averaged spectra and energy-dependent,
Fourier-domain cross spectra, providing an essential tool for interpreting
X-ray timing and spectral observations in high-energy astrophysics.

The core of Reltrans is implemented in Fortran for performance,
with Python wrappers providing a high-level user interface.
As the code has grown in complexity, certain scientific use cases—such as
large parameter scans or repeated model evaluations—have become computationally expensive.

This Google Summer of Code project focuses on profiling-driven performance optimization of RelTrans.
Using established profiling tools, the project will identify computational bottlenecks in the Fortran core.
Based on these results, targeted refactoring and structural improvements
will be implemented to reduce runtime while preserving numerical accuracy and scientific reliability.
The outcome will be faster model evaluations, improved scalability,
and a more sustainable codebase for future development.


#### Project Milestones

##### Coding starts

* Familiarization with the code
* Setup of profiling tools and baseline performance measurements

##### 1st evaluation

* Identification of main performance bottlenecks
* Initial optimization and benchmarking of the most critical portion of the code

##### Final evaluation

* Implementation of further targeted optimizations
* Documentation of profiling methods and optimization results