---
name: sunkit-image and integration with sunpy
desc: Replace the sphinx base theme with a newer version.
requirements:
 - Experience with Python.
 - Experience with sunpy Map.
difficulty: medium to low
issues:
 - https://github.com/sunpy/sunpy-sphinx-theme/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc
mentors:
 - nabobalis
 - YOUR NAME HERE
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

1. Refactor each function to accept and return a sunpy.map.Map instead of a numpy array.

If time permits, I would like to do the following:

1. ASDA is a function within sunkit-image which has not been updated to the latest version.
2. Performance profiling of the current functions to find bottle necks and improve performance where possible.

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
