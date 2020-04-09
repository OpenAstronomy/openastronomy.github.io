---
name: Add Time-dependent Instrument Response Function to IRISpy
desc: Enable IRISpy users to derive the relationship between instrument and physical intensity unitsbased in the time at which observations were taken.
# add a short one line description of your project
requirements:
# Student requirements:
 - Python
difficulty: beginner
issues:
# Related issues (if any)  to this project.
 - https://github.com/sunpy/irispy/issues/27
 - https://github.com/sunpy/irispy/pull/102
mentors:
# First person in contact; mentors may change before project starts.
 - DanRyanIrish
 - asainz-solarphysics
initiatives:
 - GSOC
tags:
# Different technologies needed
 - python
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - SunPy
---

#### Description

The Interface Region Imaging Spectrograph (IRIS) is a NASA Small Explorer satellite designed
to make spectroscopic and imaging observations of the solar chromosphere and transition region.
An important tool in interpreting these observations is the instrument response function which
expresses the relationship between the physical intensity of light entering the instrument and
the data number (DN) recorded by the CCD detectors.  The response function was carefully measured
by the IRIS team before launch and this is currently available to IRISpy users for their analysis.

However, due to time-dependent factors like degradation, it is known that the response function 
evolves with time in orbit.  For this reason the IRIS team has developed a fitting algorithm based on
calibration flights that predicts the response function as a function of time.  A direct translation
of this algorithm from its original language, IDL (Interactive Data Langauage), into Python has already
been performed but requires more work before it can be merged into IRISpy.

In this project, the following tasks must be performed:
* The time-dependent instrument function response code must be rewritten to be more efficient and Python-friendly;
* Formal benchmarking between the results it produces and those found using the original IDL code must be performed;
* Tests for the Python version must be written;
* This software must be incoporated into methods and functions in IRISpy that depend on the instrument response function.

These new feaures will give scientists far greater power and abilty to perform IRIS data analysis in Python
and make new discoveries regarding the energetics and dynamics of the solar chromosphere and transition region.

#### Expected Outcomes

* A function for deriving the time-dependent IRIS reponse function.
* Benchmarking and unit tests so this new software can be reliably maintained.
* Updated intensity conversion methods between intrument and physical units that correct for 
the time observations were taken.


#### Milestones (if any)

##### GSOC CODING STARTS

##### GSOC MIDTERM

##### GSOC FINAL
