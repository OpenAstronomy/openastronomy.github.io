---
name: Update sunraster to ndcube 2.0
desc: Updates the sunraster code-base to use the powerful new version of ndcube.
# add a short one line description of your project
requirements:
# Student requirements:
 - Knowledge of Python
 - Ideally some familiarity with ndcube 2.0 and sunraster.
difficulty: medium
issues:
# Related issues (if any) to this project.
 - https://github.com/sunpy/sunraster/issues/177
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - DanRyanIrish
 - cadair
 - nabobalis
initiatives:
 - GSOC
tags:
# Different technologies needed
 - python
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - sunpy
---

This project will update the sunraster package to use the ndcube 2.0, a much more powerful version and lead to the next release of the sunraster package.

#### Description

The sunraster package provides tools for reading and manipulating satellite-based
observations from solar slit spectrometers such as NASA's IRIS satellite
or SPICE onboard European Space Agency's Solar Orbiter satellite.
sunraster heavily leans on the ndcube package which provides powerful generic tools
for manipulating and inspecting n-dimensional astronomical data and
handling functional based coordinate transformations that describe the observations'
relationships to real world coordinates, e.g. which part of
the sky a camera pixel is pointing, or what time an image was taken.
These transformations are known as the World Coordinate System (WCS).

A new API-breaking version of ndcube (2.0) is imminent which supports a
more flexible generic API for WCS transformations.
This API is not backwards compatible and so requires upgrades to the sunraster
so users of solar spectrograph observations can more easily perform their
data analysis.


#### Milestones (if any)

* sunraster code has been updated.
* sunraster tests all pass.
* sunraster has been released.
##### Coding starts

* Become familiar with ndcube and sunraster codebases.
* Create a test environment for sunraster that uses ndcube 2.0.
* List out parts of sunraster API that need updating.

##### 1st evaluation

* Update sunraster code base to get all ndcube-2.0-base tests passing.

##### Final

* sunraster is ready to be released to users.
