---
name: Distortion coefficients in astrometry
desc: Thanks to GSoC 2021 linear parameters can be found, we now need distortion.
# add a short one line description of your project
requirements:
# Student requirements:
 - C programming language.
 - GNU Scientific Library and FITS World Coordinate System (WCS) standrads.
difficulty: medium
issues:
# Related issues (if any) to this project.
 - https://savannah.gnu.org/task/?15747
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - mohammad-akhlaghi
initiatives:
# The programme under this project wish to run.
 - GSOC
project_size:
 - 175 h
tags:
# Different technologies needed
 - C
 - Gnuastro
 - WCSLIB
 - GNU Scientific Library
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - Gnuastro
---


#### Description

Astrometry is a critical component in the processing of astronomical data.
In short, astrometry is the process of finding the transformation matrix (including distortions) to convert pixel coordinates in one image into sky coordinates (usually RA and Dec).
Gnuastro's astrometry library aims to be fully blind, needing no prior information on the input image's location in the sky, or the optical distortion of the camera that has taken the image.
Many of the low-level components of astrometry have already been added in Gnuastro's new implementation.
In particular, as part of GSoC 2021, we can now successfully find the linear parameters of Astrometry.
However, there are also non-linear (distortion) terms that need to be calculated.

To get started, check [our GSoC 2022 checklist](https://savannah.gnu.org/support/index.php?110613#comment0).

#### Milestones (if any)

 * Completing [our GSoC 2022 checklist](https://savannah.gnu.org/support/index.php?110613#comment0)

 * Learning basic concepts of Astrometry and existing functions.

 * Fixing bugs in existing components.

 * Adding the remaining high-level components to complete astrometry.

##### Coding starts

* Actively start fixing/adding some minor bugs/tasks in Gnuastro to get a good feeling of the coding style and logic within Gnuastro (this can be independent of astrometry).

* Study the basic concepts of Astrometry and learning/testing the existing low-level features that have already been written.

##### 1st evaluation

* Adding tests to existing steps and start working on finding distortions.

##### Final evaluation

* Library and program for writing the full WCS (including distortions) in the FITS format.
