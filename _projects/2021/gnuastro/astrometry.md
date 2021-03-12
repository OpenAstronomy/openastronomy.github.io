---
name: Astrometry
desc: Astrometry library in Gnuastro
# add a short one line description of your project
requirements:
# Student requirements:
 - Knoweledge of C programming language.
difficulty: medium
issues:
# Related issues (if any) to this project.
 - https://savannah.gnu.org/task/?15747
 - https://savannah.gnu.org/task/?15636
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - mohammad-akhlaghi
 - sachinkumarsingh092
initiatives:
 - GSOC
 - SOCIS
tags:
# Different technologies needed
 - C
 - Git
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - Gnuastro
---


#### Description

Astrometry is a critical component in the processing of astronomical data.
In short, astrometry is the process of finding the transformation matrix (including distortions) to convert pixel coordinates in one image into sky coordinates (usually RA and Dec).
Gnuastro's astrometry library aims to be fully blind, needing no prior information on the input image's location in the sky, or the optical distortion of the camera that has taken the image.
Many of the low-level components of astrometry have already been added in Gnuastro's new implementation.
However some work still remains on stitching them together into a simple-to-use, high-level C library function that can later be used in several Gnuastro programs, as well as other programs and languages.

#### Milestones (if any)

 * Learning basic concepts of Astrometry and existing functions.

 * Fixing bugs in existing components (for example bugs #59324, #58773).

 * Adding the remaining high-level components to complete astrometry.

##### Coding starts

* Actively start fixing/adding some minor bugs/tasks in Gnuastro to get a good feeling of the coding style and logic within Gnuastro (this can be independent of astrometry).

* Study the basic concepts of Astrometry and learning/testing the existing low-level features that have already been written.

##### 1st evaluation

* Fixing bugs in existing components.

##### 2nd evaluation

* Adding the remaining higher-level functions.

##### Final

* Writing robust tests for the library, using data from several space-based and ground-based imaging surveys.
