---
name: Spectral timing in Julia
desc: Create a set of timing and spectral timing methods in Julia.
# add a short one line description of your project
requirements:
# Student requirements:
 - Understanding Python code
 - Julia knowledge
difficulty: medium
issues:
# Related issues (if any)  to this project.
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - matteobachetti
 - stefanocovino
initiatives:
# The programme under this project wish to run.
 - GSOC
project_size:
 - 350 h
tags:
# Different technologies needed
 - python
 - Julia
 - time series analysis
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - stingray
 - juliaAstro
---
## Spectral timing in Julia

#### Description
The analysis of time series from astronomical observations in the X-rays is an 
excellent tool to test advanced physical theories.
Of particular interest are the periodicities that are often observed in the 
X-ray signals coming from the surroundings of accreting black holes, and the
evolution of the rotation period of neutron stars.
The essential toolbox for X-ray timing analysis includes different kinds of 
periodograms, cross spectra, and a number of "variability vs energy spectra", that
allow to understand the variability at different energies.
This project is about the implementation of a basic set of X-ray timing analysis 
operations in Julia, continuing the porting of the core operations from the
`stingray` Python package [initiated during Google Summer of Code 2022]
(https://github.com/StingraySoftware/Stingray.jl)

#### Milestones

##### Coding starts

* Gain familiarity with the codebase
* Apply existing analysis to simulated datasets
* Implement I/O operation on FITS files

##### 1st evaluation

* Implement a series of tests in Julia that the new code will have to pass
* Extend basic operations (periodograms and cross spectra) to event lists and light curves
* Time lags and coherence spectra

##### Final evaluation

* A working framework for variability vs energy spectra (covariance spectra, time lags)
