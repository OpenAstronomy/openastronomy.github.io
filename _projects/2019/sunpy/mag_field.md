---
name: Expand the scope of solarbextrapolation.
desc: Add more numerical models and generalize magnetic field extrapolation to spherical coordinates.
requirements:
 - Knowledge of vector calculus and differential equations
 - Familiar with numerical methods
 - Some familiarity with electromagnetism, MHD, potential/force-free magnetic fields (optional)
difficulty: intermediate
issues:
 - https://groups.google.com/forum/#!topic/sunpy/ZLu_HoX_lbc
 - https://github.com/sunpy/solarbextrapolation/issues/12
mentors:
 - Alex-Ian-Hamilton
 - Cadair
initiatives:
 - GSOC
 - SOCIS
tags:
 - python
 - cython
 - numpy
collaborating_projects:
 - sunpy
---

#### Description

This project aims to improve the `solarbextrapolation` (maybe renamed in the future) package by relaxing the small-angle approximation and allowing for extrapolation of global magnetic fields, i.e. 3D vector fields on a scale larger than an active region.
Furthermore, we want to add support for other numerical models with the first one being Potential Field Source Surface ([PFSS](https://github.com/antyeates1983/pfss)).

This will involve extensive modifications to the numerical method used to perform the field extrapolation as well as developing methods for coordinate transformations between the magnetogram coordinate system and the spherical coordinate system of the derived vector field.

The main challenge of this project will be creating a general 3D Map class similar to [`Map`](http://docs.sunpy.org/en/stable/code_ref/map.html) in SunPy.
Currently, the `solarbextrapolation` package uses a Map3D class that is limited to Cartesian coordinates and has no support for coordinate transformations. This new Map3D class will have support for 3D coordinates through the use of the [SunPy coordinates module](http://docs.sunpy.org/en/stable/guide/units-coordinates.html#physical-coordinates-in-sunpy)
It is expected that this new object will serve as a prototype for a first-class data type in the core SunPy package.

More information may be added to the [wiki page](https://github.com/sunpy/sunpy/wiki/SOCIS-2019-Ideas-Information#expand-the-scope-of-solarbextrapolation).
Though this idea is for SOCIS, [same GSOC rules apply](https://github.com/sunpy/sunpy/wiki/SOCIS-2019).

#### Milestones

##### Coding starts

* Engaged with the community and understand the motivation and challenges of the project.
* Have set up a development environment.
* Some understanding of what `solarbextrapolation` does and how.

##### To be completed by the Phase 1 Evaluation Deadline

* Add PFSS modelling to the package.
* Have all code, tests and documentation in GitHub.

##### To be completed by the Phase 2 Evaluation Deadline

* Develop a coordinate-aware 3D Map class
* Have all code, tests and documentation in GitHub.

##### To be completed by the end of GSoC

* Use 3D Map class for global field extrapolations
* Have all code, tests and documentation in GitHub.
* Improvements to the documentation and examples

##### Additional Aims (time permitting)

* Performance improvements
* Better visualization methods
* Addition of more advanced extrapolators, e.g. non-linear force-free field
