---
name: Region of Interest
desc: Meta-Object creation for holding temporal and spatial features.
# add a description of your project
requirements:
 - Familiarity with Python
 - Understanding of design patterns
difficulty: High
issues:
 - https://github.com/sunpy/sunpy/issues/164
mentors: 
 - dpshelio
 - wafels
initiatives:
 - GSOC
tags:
 - sunpy
collaborating_projects:
 - sunpy
---

#### Description

This project aims to plan and implement a object that could be used to
define a region of interest and interact with the rest of data types used
in sunpy.

For example, a region of interest could be a particular are in the sun 
on a particular moment in time. Therefore, that object should contain the limits
of such area, its contour and the time when it was observed.
It also needs other information, such as the coordinate system that it
uses (notice that chaincode needs of a image pixel size too) and the wavelength
in which was observed.

That region of interest should interact with the data types available in sunpy
like `sunpy.Map` by plotting the box containing such region and being aware of
difference in time or observational point. So, it needs to be spatial and temporal
aware.

Additionally, the object needs to understand (be able to parse in) features and
events catalogued in the [HEK](http://www.lmsal.com/hek/hek_isolsearch.html) 
and [HELIO](http://hfc.helio-vo.eu/) databases.

