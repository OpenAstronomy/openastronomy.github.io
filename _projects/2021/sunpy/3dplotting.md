---
name: 3D plotting
desc: Provide 3D plotting capabilities to SunPy
# add a short one line description of your project
requirements:
# Student requirements:
 - Familiarity with Python
 - Familiarity with some plotting tools (e.g. Matplotlib)
difficulty: medium
issues:
# Related issues (if any)  to this project.
 - https://github.com/sunpy/sunpy/pull/4591
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - dstansby
 - Cadair
 - nabobalis
initiatives:
 - GSOC
tags:
# Different technologies needed
 - python
 - plotting
 - 3D
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - sunpy
---
The SunPy ecosystem currently has well developed support for making 2D plots (primarily with Matplotlib), but currently no interface for making 3D plots.

#### Description

In this project the student will code new tools for taking common datasets used in the SunPy ecosystem (e.g. images of the Sun, maps of the Sun, magnetic field lines from models of the Sun), and plotting them in 3D. This will initially be done using the pyvista plotting toolkit, but we would like to make the tools general enough that other plotting toolkits (e.g. plotly) can be used too.

We have already trialled this, with some demo code at https://github.com/sunpy/sunpy/pull/4591. The goal of this project is to take this demo code, and put it in a new Python package to allow rapid development, independent of the sunpy core package. The work will be evenly split between writing new code, and learning how to write documentation and tests for the code within a package.

#### Milestones (if any)

- Put code for plotting 3D maps into a new Python package
- Add documentation and tests
- Add code for plotting astropy coordinate objects
- If time permits, add extra 3D plotting functionality (there's plenty of data types we could tackle!)

##### Coding starts

- Installed a development environment
- Understood the goals of the project

##### 1st evaluation

- Created an API and code for plotting sunpy maps in 3D
- Added documentation and tests

##### Final

- Added infrastructure for plotting astropy coordinates in 3D
- Made first pre-release of the new package
