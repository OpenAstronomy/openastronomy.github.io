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
 - https://github.com/sunpy/sunkit-image/issues/2
mentors:
 - FIND SOMEONE MAYBE
initiatives:
 - GSOC
 - SOCIS
tags:
 - python
collaborating_projects:
 - sunpy
---

#### Description

This project aims to design and implement an object that could be used to define a Region Of Interest (ROI) in any physical dimension (such as spatial area, temporal range or spectral window) and interact with the rest of data types used in SunPy.

For example, a region of interest could be a particular area in the Sun at a particular moment in time.
Therefore, that object should contain the extent of such area, its contour and the time when it was observed.
It also needs other information, such as the coordinate system that it uses, the image from which it was created and the wavelength
in which was observed.

That region of interest should interact with the data types available in sunpy like [`sunpy.Map`](https://github.com/sunpy/sunpy/tree/master/sunpy/map) by plotting the box containing such region and being aware of difference in time or observational point.
So, it needs to be spatial and temporal aware.

Additionally, the object needs to understand (be able to parse in) features and events catalogued in the [HEK](http://www.lmsal.com/hek/hek_isolsearch.html) and [HELIO](http://hfc.helio-vo.eu/) databases.

It is often useful to interactively select a region on an image using a mouse.
For example, a user might want to outline a particular region in an image, extract that region only, or integrate the emission in that region.
It would be interesting if we could supply the capability to interactively select a region and return the co-ordinates of the selected region.
This might be extra work at the end, if time permits.

#### Milestones

##### Coding starts

* Engaged with the community and understand the motivation and challenges of the project.
* Have set up a development environment.

##### To be completed by the Phase 1 Evaluation Deadline

* Fill in.
* Have all code, tests and documentation in GitHub.

##### To be completed by the Phase 2 Evaluation Deadline

* Fill in.
* Have all code, tests and documentation in GitHub.

##### To be completed by the end of GSoC

* Fill in.
* Have all code, tests and documentation in GitHub.
