---
name: 3D plotting
desc: Provide 3D plotting capabilities to SunPy
# add a short one line description of your project
requirements:
# Student requirements:
 - Familiarity with Python
difficulty: medium
issues:
# Related issues (if any)  to this project.
 - https://github.com/sunpy/sunpy/pull/4591
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - dstansby
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

#### Milestones (if any)

- Create a new package for 3D plotting of sunpy maps
- Add 3D plotting of PFSS solutions and field lines from pfsspy
- If time permits, add extra 3D plotting functionality (there's plenty of data types we could tackle!)

##### Coding starts

- Installed a development environment
- Understood the pull request process, and submitted first pull request

##### 1st evaluation

- Created infrastructure for plotting sunpy maps in 3D

##### Final

- Added infrastructure for plotting arbitrary astropy coordiantes in 3D
- Made first pre-release of the new package
