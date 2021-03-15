---
name: Non-air diluent
desc: Add non-air diluent and custom collisional broadening in RADIS spectra
# add a short one line description of your project
requirements:
# Student requirements:
 - familiar with pandas
difficulty: hard
issues:
# Related issues (if any) to this project.
 - https://github.com/radis/radis/issues/213
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - erwanp
 - minouHub
initiatives:
 - GSOC
tags:
# Different technologies needed
 - Python
 - Git
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - radis
---


#### Description

The RADIS code was developed to characterize the radiation of plasmas, flames and atmospheres. It calculates high-temperature infrared spectra from databases of tens of millions of lines, with a new algorithm that makes it one of the fastest line-by-line spectral codes available. 

Currently RADIS supports calculation of about every possible molecule, but assumes that it is diluted in air by default. It is possible to manually adjust it to replace air by one other diulter (for instance : compute CO diluted in CO2). The goal of the current project is to make it automatic, and extend it to multiple diluents (for instance: CO diluted in CO2 and H2O).

No background in spectroscopy and collisional broadening is required, but the student is expected to want to learn about this topic ! First evaluation will focus on the physics, 2nd and Final will focus on implementation.

#### Milestones


##### Coding starts

* Engage with the community on [💬 RADIS Slack](https://github.com/radis/slack-invite)

* Training on emission & absorption spectroscopy, with a focus on collisional broadening. 

* Have set up a development environment, be familiar with open-source tools (GitHub / Git / Tests) and get familiar with [RADIS architecture](https://radis.readthedocs.io/en/latest/dev/developer.html#architecture)

##### 1st evaluation

Learn the physics : 

* With the help of the mentors, write a Tutorial notebook about collisional broadening and the effect of diluent (for instance using the existing implementation in the very good [HAPI](https://github.com/hitranonline/hapi) code)

* Add tutorial to show how to manually replace the broadening coefficients in RADIS (with Pandas).

Implement : 

* write a method in [SpectrumFactory](https://github.com/radis/radis/blob/develop/radis/lbl/factory.py#L109) to set-up the dilution gas, and read the corresponding coefficients from the loaded database.

* Update the [pressure_broadening_HWMH](https://github.com/radis/radis/blob/develop/radis/lbl/broadening.py#L249) function to compute more than one diluent.

##### Final

Make it user friendly : 

* Add a `diluent` parameter in the high-level [calc_spectrum](https://github.com/radis/radis/blob/develop/radis/lbl/calc.py#L29) function

* automatically retrieve non-air broadening coefficients from the HITRAN database and convert it to the RADIS database format (see [#213](https://github.com/radis/radis/issues/213) ).

* Add a Gallery Example

* Have all code, tests and documentation in GitHub.


##### Secondary goals

* allow user to specify their own collisional broadening formula. 
