---
name: Atmosphere Calculations
desc: Model atmospheres in the RADIS spectral code with a simplified frontend and more line databases
# add a short one line description of your project
requirements:
# Student requirements:
 - Ideally : familiar with radiative transfer equations.
difficulty: easy
issues:
# Related issues (if any) to this project.
 - https://github.com/radis/radis/issues/34
 - https://github.com/radis/radis/issues/189
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - erwanp
 - ulyssed
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

The RADIS code was developed to characterize the radiation of plasmas, flames and atmospheres. It calculates high-temperature infrared spectra from databases of tens of millions of lines, with a new algorithm that already makes it one of the fastest line-by-line spectral codes available. This performance makes it very suitable to compute high-temperature atmospheres.

The goal of this project is to simplify the user interface to compute atmospheres directly :

- set up a new, direct front-end interface.

- make RADIS compatible with more line databases (ExoMol, GEISA, etc.)

- if interested in the radiative transfer-physics, add a plane-parallel model for multiple-layers-atmospheres. 


#### Milestones


##### Coding starts

* Engage with the community on [💬 RADIS Slack](https://github.com/radis/slack-invite)

* Training on emission & absorption spectroscopy

* Have set up a development environment, be familiar with open-source tools (GitHub / Git / Tests)

* Get familiar with [RADIS architecture](https://radis.readthedocs.io/en/latest/dev/developer.html#architecture) : in particular, review the interface change to calculate multiple molecules at the same time ([#74](https://github.com/radis/radis/pull/74))

##### 1st evaluation

* Write interface to read standard atmosphere input files (mole fractions, temperature profile, pressure profile)

* Add a detailed Notebook example in the documentation


##### 2nd evaluation

* Add integration to more line databases, like ExoMol or GEISA ([#34](https://github.com/radis/radis/issues/34))

* Improve how these databases are downloaded automatically and converted to RADIS standard format (see [#210](https://github.com/radis/radis/issues/210))

* Add examples in the documentation 


##### Final

* Add a Gallery Example in RADIS documentation

* Have all code, tests and documentation in GitHub.


##### Secondary Goals

* If the student is interested in the radiative-transfer physics, set-up a plane-parallel model to compute multiple-layers atmospheres ([#189](https://github.com/radis/radis/issues/189))