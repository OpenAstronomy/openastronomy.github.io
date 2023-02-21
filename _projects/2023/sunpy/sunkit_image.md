---
name: sunkit-image and integration with sunpy
desc: Improve the integration of sunkit-image to work with SunPy data structures
requirements:
 - Experience with Python.
 - Experience with sunpy Map.
 - Experience with NDcube.
difficulty: medium to low
issues:
 - https://github.com/sunpy/sunpy-sphinx-theme/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc
mentors:
 - nabobalis
 - wtbarnes
initiatives:
 - GSOC
project_size:
 - 175 h
tags:
 - sunpy
 - Python
 - refactoring
collaborating_projects:
 - sunpy
---

#### Description

In a previous GSoC project, [sunkit-image](https://github.com/sunpy/sunkit-image); a image analysis Python library for solar physics was created.
Initially, functions were created to take a `numpy.array` and return a `numpy.array` and with hindsight, a mistake for the public API.
One core goal of the SunPy Project is to ensure interoperability between the packages and this entails being able to pass in a `sunpy.map.Map` into a function and getting a `sunpy.map.Map` out.

Therefore the aim of this GSoC project is:

1. Refactor specific functions to accept and return a `sunpy.map.Map` (or an `NDcube` instead, to be decided during the project) instead of a `numpy.array`.
   This would apply to functions that take a 2D data array and return one, functions like the `timelag` would not factor in to this.
2. Tackle some of the following issues:
   1. [Refactor the `coalignment` module](https://github.com/sunpy/sunkit-image/issues/83)
   2. [Add a coalignment example to the gallery](https://github.com/sunpy/sunkit-image/issues/103)
   3. [Add persistence transform example to the gallery](https://github.com/sunpy/sunkit-image/issues/76)
   4. [Inconsistent input types across functions](https://github.com/sunpy/sunkit-image/issues/69)

If there is some time left over:

1. Performance profiling of the current functions to find bottle necks and improve performance where possible.

#### Goals

##### Community Bonding Period

* Scope out what functions need changing and get familiar with the library.
* Setup a development environment.
##### Coding starts

* Start working on the first function.

##### 1st evaluation

* Have around ~50% of the functions taken care of.

##### Final evaluation

* Finish updating each function in sunkit-image.
