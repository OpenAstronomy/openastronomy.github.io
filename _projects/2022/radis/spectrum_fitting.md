---
name: Spectrum Fitting
desc: Build a function to automatically fit an experimental spectrum with the output of RADIS, with the best performance possible
# add a short one line description of your project
requirements:
# Student requirements:
 - Familiar with python
difficulty: medium
issues:
# Related issues (if any) to this project.
 - https://github.com/radis/radis/issues/377
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - anandxkumar
 - gagan-aryan
 - erwanp
 - minouHub
initiatives:
 - GSOC
project_size:
 - 350 h
tags:
# Different technologies needed
 - Python
 - Git
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - radis
---


#### Description


The RADIS code was developed to characterize the radiation of plasmas, flames and atmospheres. It calculates high-temperature infrared spectra from databases of tens of millions of lines, with a new algorithm that already makes it one of the fastest line-by-line spectral codes available. 

An experimental spectrum is compared to calculated spectra until a good match is obtained : then, the experimental temperature is known. 
The efficiency of the fitting process depends on the RADIS calculation times as well as the fitting algorithm used. 

The goal of this project is to compare and improve fitting algorithms to reduce the fitting time.  


#### Milestones


##### Coding starts

* Engage with the community on [💬 RADIS Slack](https://github.com/radis/slack-invite)

* Training on emission & absorption spectroscopy

* Have set up a development environment, be familiar with open-source tools (GitHub / Git / Tests) and [RADIS architecture](https://radis.readthedocs.io/en/latest/dev/developer.html#architecture)

##### 1st evaluation

* Build many reference cases for fitting, under various conditions (narrow spectra, large spectra, one parameter, multiple parameters, etc.)

* Select the best fitting algorithm to improve performances

##### Final evaluation

* Use RADIS's special features (such as caching spectra & creating databases) to improve fitting times further

* Create a detailed documentation of architecture and workflow of the fitting process 

* Have all code, tests and documentation in GitHub 