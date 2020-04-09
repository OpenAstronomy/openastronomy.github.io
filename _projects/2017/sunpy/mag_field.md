---
name: 3D Map Class for Field Extrapolations in Spherical Coordinates
desc: Generalize magnetic field extrapolation to spherical coordinates in `solarbextrapolation` package with a "coordinate-aware" 3D Map-like object.
# add a short one line description of your project
requirements:
# Student requirements:
 - Knowledge of vector calculus and differential equations
 - Familiar with numerical methods
 - Some familiarity with electromagnetism, MHD, potential/force-free magnetic fields (optional)
difficulty: intermediate
issues:
# Related issues (if any)  to this project.
 - https://github.com/sunpy/solarbextrapolation/issues/12
mentors:
# First person in contact; mentors may change before project starts.
 - Alex-Ian-Hamilton
 - wtbarnes
initiatives:
 - GSOC
 - SOCIS
tags:
 - python
 - numba
 - numpy
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - sunpy
---
#### Description

Determining the 3D geometry of the tangled and dynamic coronal magnetic field is an open research problem in solar physics.
A common technique for deriving the 3D vector field from a photospheric magnetogram is to assume a *potential* field such that it can be derived by solving Laplace's equation.
The SunPy-affiliated [`solarbextrapolation`](https://github.com/sunpy/solarbextrapolation) package solves Laplace's equation using the method of [Sakurai (1982)](http://adsabs.harvard.edu/abs/1982SoPh...76..301S).
However, when constructing the 3D field from the magnetogram, the "small-angle" approximation is used such that the curvature of the Sun is ignored, a valid approximation on the scale of an active region.

This project aims to improve the `solarbextrapolation` package by relaxing the small-angle approximation and allowing for extrapolation of global magnetic fields, i.e. 3D vector fields on a scale larger than an active region.
This will involve extensive modifications to the numerical method used to perform the field extrapolation as well as developing methods for coordinate transformations between the magnetogram coordinate system and the spherical coordinate system of the derived vector field.

The main challenge of this project will be creating a general 3D Map class similar to [`Map`](http://docs.sunpy.org/en/stable/code_ref/map.html) in SunPy.
Currently, the `solarbextrapolation` package uses a Map3D class that is limited to Cartesian coordinates and has no support for coordinate transformations. This new Map3D class will have support for 3D coordinates through the use of the [SunPy coordinates module](http://docs.sunpy.org/en/stable/guide/units-coordinates.html#physical-coordinates-in-sunpy)
It is expected that this new object will serve as a prototype for a first-class data type in the core SunPy package.

#### Primary Goals
* Develop a coordinate-aware 3D Map class
* Use 3D Map class for global field extrapolations

#### Possible Secondary Goals
* Performance improvements
* Improvements to the documentation and examples
* Better visualization methods
* Addition of more advanced extrapolators, e.g. non-linear force-free field

#### Additional Resources
* [`solarbextrapolation` package ](https://github.com/sunpy/solarbextrapolation)
* [Maps in SunPy](http://docs.sunpy.org/en/stable/code_ref/map.html)
* [Coordinates in SunPy](http://docs.sunpy.org/en/stable/code_ref/coordinates.html)
* [Coordinates for Solar Image Data -- Thompson (2006)](http://adsabs.harvard.edu/abs/2006A%26A...449..791T)
* [IDL package for global potential field extrapolations](http://www.lmsal.com/~derosa/pfsspack/)
* [Review of Magnetic Field Extrapolation Techniques -- T. Neukirch](http://adsabs.harvard.edu/abs/2005ESASP.596E..12N)
