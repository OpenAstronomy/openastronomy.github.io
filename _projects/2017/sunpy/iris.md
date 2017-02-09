---
name: SunPy IRIS Data class
desc: Develop tools to read in and analyze IRIS image and spectral data using SunPy.
requirements:
 - Familiarity with Python class development.
 - (Optional) A knowledge of the Interactive Data Language (IDL) would be useful, but not requried.
difficulty: medium
issues:
mentors: 
 - ehsteve
 - DanRyanIrish
initiatives:
 - GSOC
 - SoCiS
tags:
- sunpy
- python
collaborating_projects:
 - sunpy
---

#### Description

The Interface Region Imaging Spectrograph (IRIS) is a UV spectrograph
that observes the chromosphere and transition region of the Sun with
high spatial and time resolution to help reveal how the solar
atmosphere is energized. IRIS produces data through two instruments: a
slit-jaw imager which can take images of the Sun in various wavelength
bands; and a slit spectrograph which disperses the light through the
slit to produce 2D spectra (position along slit vs. wavelength). The
slit can be used in sit-and-stare mode (slit remains over the same
place on the Sun) or raster mode (sequentially scan the slit
perpendicular to its axis across a region on the Sun). This project
aims to introduce the capability to read in and analyze IRIS data
using SunPy. This includes the following tasks:

1. Build upon pre-existing code in SunPy to develop an IRIS
   MapSequence class so that slit-jaw images can be read in, combined
   and analyzed in a convenient way.

2. Develop and test an IRISRaster class to read in, combine and
analyze IRIS spectra from different raster positions.

3. Using the two classes developed above, build an IRISObservation
   container class to allow users to easily associate co-temporal
   slit-jaw images and spectra.

*Optional:* Although the IRIS instrument team has calibrated the
 publicly available IRIS data, finer tuning of this calibration can be
 helpful for advanced data analysis.  Tools to do this have been
 developed by the IRIS team in the Interactive Data Language (IDL),
 but no such tools exist in Python.  Depending on the progress and
 preference of the student, these tools can be developed in Python as
 part of this project.  This would include the following tasks:

1. Develop and test a function for residual wavelength calibration.
This already exists in IDL.

2. Develop and test a function to calculate the IRIS response
function.  This already exists in IDL but not Python.

3. Using the IRIS response function code, develop a function to
   convert IRIS data into physical units.  This already exists in IDL
   but not Python.

A good proposal would demonstrate that the student is familiar with
the Xarray package.

#### Expected Outcomes
* IRIS MapSequence class
* IRISRaster class
* IRISObservation class

#### Milestones

##### GSOC 2017 CODING STARTS

* Have familiarised yourself with the basics of IRIS data through the
resources below and Python classes nd the Xarray package.
* Have worked with the mentors to get the package repository setup on
GitHub.

##### GSOC 2017 MIDTERM

* Have developed an IRISMapSequence object and submitted a PR.
* Have started work on an IRISRaster object.

##### GSOC 2017 FINAL 

* Have got IRISMapSequence PR accepted.
* Have completed development of an IRISRaster object and have a PR
ready submitted and ready to be accepted.
* Have completed development of an IRISObservation object and have
opened a PR.

##### Additional Resources

* IRIS website: http://iris.lmsal.com/
* IRIS instrument paper:
https://www.lmsal.com/iris_science/doc?cmd=dcur&proj_num=IS0196&file_type=pdf
* Guide to IRIS data analysis: http://iris.lmsal.com/itn26/itn26.pdf
