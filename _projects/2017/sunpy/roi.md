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

This project aims to design and implement an object that could be used to define a
region of interest (ROI) in any physical dimension (such as spatial area,
temporal range or spectral window) and interact with the rest of data types used
in sunpy.

For example, a region of interest could be a particular area in the Sun 
at a particular moment in time. Therefore, that object should contain the extent
of such area, its contour and the time when it was observed.
It also needs other information, such as the coordinate system that it
uses, the image from which it was created and the wavelength
in which was observed.

That region of interest should interact with the data types available in sunpy
like [`sunpy.Map`](https://github.com/sunpy/sunpy/tree/master/sunpy/map) by
plotting the box containing such region and being aware of difference in time or
observational point. So, it needs to be spatial and temporal aware.

Additionally, the object needs to understand (be able to parse in) features and
events catalogued in the [HEK](http://www.lmsal.com/hek/hek_isolsearch.html) 
and [HELIO](http://hfc.helio-vo.eu/) databases.

