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

In a previous GSoC project, [sunkit-image](https://github.com/sunpy/sunkit-image), a image analysis Python library for solar physics was created.
Functions were created to take arrays and return arrays and this was a big big oversight at the time.
The goal of the SunPy Project is to ensure interoperability between the packages and this entails being able to pass in a sunpy.map.Map into a function and getting a sunpy.map.Map out.

Therefore the aim of this GSoC project is:

1. Refactor specific functions to accept and return a sunpy.map.Map (or an NDcube instead) instead of a numpy array.
   This would apply to functions that take a 2D data array, functions like the time lag would not factor in to this.
2. Performance profiling of the current functions to find bottle necks and improve performance where possible.
3. Removal of ASDA.

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
