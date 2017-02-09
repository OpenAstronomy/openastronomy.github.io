---
name: Field Extrapolation in Spherical Coordinates
desc: Generalize magnetic field extrapolation to spherical coordinates in `solarbextrapolation` package.
# add a short one line description of your project
requirements:
# Student requirements:
 - Knowledge of vector calculus and differential equations
 - Familiar with numerical methods
 - Some familiarity with electromagnetism, MHD, potential/force-free magnetic fields (optional)
difficulty: medium
issues:
# Related issues (if any)  to this project.
 - https://github.com/sunpy/solarbextrapolation/issues/12
mentors:
# First person in contact; mentors may change before project starts.
 - wtbarnes
 - Alex-Ian-Hamilton
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

Determining the 3D geometry of the tangled and dynamic coronal magnetic field is an open research problem in solar physics. A common technique for deriving the 3D vector field from a photospheric magnetogram is to assume a *potential* field such that it can be derived by solving Laplace's equation. The SunPy-affiliated [`solarbextrapolation`](https://github.com/sunpy/solarbextrapolation) package solves Laplace's equation using the method of [Sakurai (1982)](http://adsabs.harvard.edu/abs/1982SoPh...76..301S). However, when constructing the 3D field from the magnetogram, the "small-angle" approximation is used such that the curvature of the Sun is ignored, a valid approximation on the scale of an active region.

This project aims to improve the `solarbextrapolation` package by relaxing the small-angle approximation and allowing for extrapolation of global magnetic fields, i.e. 3D vector fields on a scale larger than an active region. This will involve extensive modifications to the numerical method used to perform the field extrapolation as well as developing methods for coordinate transformations between the magnetogram coordinate system and the spherical coordinate system of the derived vector field.

#### Primary Goals
* Extrapolation of global magnetic fields
* 3D Map class capable of transformation between heliographic coordinates and Sun-centered spherical coordinates.

#### Possible Secondary Goals
* Performance improvements
* Improvements to the documentation and examples
* Better visualization methods
* Addition of more advanced extrapolators, e.g. non-linear force-free field

#### Additional Resources
* [`solarbextrapolation` package ](https://github.com/sunpy/solarbextrapolation)
* [IDL package for global potential field extrapolations](http://www.lmsal.com/~derosa/pfsspack/)
* [Review of Magnetic Field Extrapolation Techniques -- T. Neukirch](http://adsabs.harvard.edu/abs/2005ESASP.596E..12N)
