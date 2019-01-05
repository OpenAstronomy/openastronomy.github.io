---
name: Incorporate Powerful New WCS API into ndcube
desc: Incorporating the AstroPy APE 14 API into ndcube.
# add a short one line description of your project
requirements:
# Student requirements:
 - Python
difficulty: intermediate
issues:
# Related issues (if any)  to this project.
 - https://github.com/sunpy/ndcube/projects/1
 - https://zenodo.org/record/1188875#.XBE3S1JRcWo
mentors:
# First person in contact; mentors may change before project starts.
 - DanRyanIrish
initiatives:
 - GSOC
 - SOCIS
tags:
# Different technologies needed
 - python
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - SunPy
---

#### Description

ndcube is a SunPy-affiliated package for generalized handling,
manipulating and visualizing N-dimensional astronomical data.  The
translations between the array indices and the real world coordinates
is described by the FITS-standard World Coordinate System (FITS-WCS).
However, other WCS frameworks exist such as generalized WCS (gWCS)
developed by astropy which will be used by missions like DKIST and
JWST.

In order to support both FITS-WCS and gWCS and hence support more
future and current missions, this project aims to convert the ndcube
package to a common WCS API.  The new API has already been outlined by
astropy's [APE 14](https://zenodo.org/record/1188875#.XBE3S1JRcWo). Implementing support
for APE 14 will enable ndcube to use FITS-WCS and gWCS agnostically
and hence increase the power and scope of the ndcube package.  With
this new feature ndcube will become better placed to serve a wider
array of n-dimensional data analysis needs from multiple astronomical
communities.

#### Expected Outcomes

* Replace usage in NDCube of `.wcs`, `.pixel_to_world` and `.world_to_pixel`
methods with APE 14 API.
* Replace implementation `NDCube.world_axis_physical_types` with that
of APE 14
* Generalize slicing of the `NDCube.wcs` attribute so that it works
for both FITS-WCS and gWCS.
* Reimplement the ndcube visualization mixins to use APE 14.


#### Milestones (if any)

##### GSOC CODING STARTS

##### GSOC MIDTERM

##### GSOC FINAL
