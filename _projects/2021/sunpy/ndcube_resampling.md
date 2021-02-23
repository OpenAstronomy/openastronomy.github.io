---
name: Resample NDCube
desc: Enable users to resample their data using NDCube.
# add a short one line description of your project
requirements:
# Student requirements:
 - Knowledge on python
difficulty: hard
issues:
# Related issues (if any) to this project.
 - https://github.com/sunpy/sunraster/issues/155
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - DanRyanIrish
 - Cadair
initiatives:
 - GSOC
tags:
# Different technologies needed
 - python
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - sunpy
---


#### Description

This project will provide a new functionality to the ndcube package,
namely resampling data using the NDCube data class. The NDCube class 
enables users to manipulate and visualize n-dimensional astronomical data.
NDCube's big advantage over arrays and other high-level data containers
is its support for functional coordinate transformations 
(World Coordinate System, or WCS) that enable users to easily track
what real world coordinates their data values correspond to.
For example, what point on the sky a pixel is pointing at.
NDCube has made coupling astronomical data and coordinate systems far more
user-friendly.  However the greatest outstanding functionality is
NDCube's inability to resample its data onto a different pixel grid.
This would have many potenital benefits to users.
It would enable them to align data from different imagers onto the same
pixel grid, average their data over an axis, or sum their data onto
a coarser pixel grid to increase the signal-to-noise ratio and hence
better identify features in their data.
One of the things that makes this functionality non-trivial is
the requirement of altering the WCS transformations.
However, if users are able to resample their data with a single command
and have their coordinate transformations automatically update accordingly,
it would greatly speed up data analysis workflows and make such
analysis less prone to errors. 
Therefore this project will be of great benefit to the wider astronomical
community.

#### Milestones (if any)

##### Coding starts

* Become familiar with ndcube and astropy WCS codebase.
* Begin work on a resampling framework

##### 1st evaluation

* Complete working draft prototype of resampling framework.
* Seek feedback from the ndcube-using community.

##### Final

* Release new version of ndcube including resampling capability

