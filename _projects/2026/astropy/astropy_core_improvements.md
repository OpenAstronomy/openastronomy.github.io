---
name: Hardening astropy's core stability
# Add a short one line description of your project
desc: Improvements to astropy low level extension modules (C/C++/Cython)
# Student requirements:
requirements:
 - at least one low level language (C or C++ prefered)
 - testing in Python
# How difficult would you consider the project to be: low, medium, high
difficulty: medium to high, depending on candidate
# Related issues (if any) to this project.
# Ideally you want at least one that describes the problem it is trying to solve
issues:
 - https://github.com/neutrinoceros/astropy-APEs/pull/1
 - https://github.com/astropy/astropy/issues/17760
 - https://github.com/astropy/astropy/issues/19249

# First person in contact; mentors may change before project starts.
# GitHub or GitLab handles
mentors:
 - neutrinoceros
 - astrofrog
 - nstarkman
# The programme under this project wish to run. At the moment only GSOC is available
initiatives:
 - GSOC
project_size:
 - 175 h
# Different technologies needed
tags:
 - python
 - meson-python
 - C
 - C++
 - Cython
 - pytest
# suborganisation(s) to which this project belongs.
collaborating_projects:
 - astropy
---

# Hardening astropy's core stability

## Description

Astropy is a mixed-language code base. Most of it is pure Python, but many hotpaths are
written in lower level languages (Cython, C and C++). The former is where the vast
majority of past and current development is conducted, while the latter in much more
slowly paced. Meanwhile, the low-level layer overwhemingly dominates other important
aspects like complexity of *building* and distributing astropy releases, and takes an
estimated 20 to 50% share of astropy CI time for recompilation *of code that almost never changes*.

It would be possible to decouple the bulk of the code base from its low level layer,
for instance by splitting the latter into a separate package, but this new package would
be insufficiently tested on its own, as much of astropy's test suite currently only
checks the behavior of the public API, which doesn't intersect with the low level layer.

We want to build a more fundamental test suite for this low level layer, making it much
more independent from astropy's existing tests.

This project would be highly related to (although separable from) the [following draft
APE](https://github.com/neutrinoceros/astropy-APEs/pull/1), which also contains more details on why the separation is desirable

As such, it would also provide opportunities for exploratory works like
- migrating to a modern, externally maintained build system like Meson
- rewritting, or incorporating `rust`-based extensions
- exploring PEP 803/809 Limited API for Python 3.15

All of the above would be in scope for this project, depending on the candidate's own
interests and time allocated.

## Project Milestones

### Coding starts

* set up dev env and tooling
* define a subset of astropy's extension modules to test, and testing strategy(ies)

### 1st evaluation

* Write a test suite for a single subpackage's extensions
* Report on any difficulties met along the way, and identify (general ?) solutions

### Final evaluation

* Complete test coverage for as many subpackages as possible
* Report on what (if anything) is still missing and identify a path forward
