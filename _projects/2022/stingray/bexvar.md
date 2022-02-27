---
name: Bexvar in Stingray
desc: Implement the Bayesian Excess variance in Stingray
# add a short one line description of your project
requirements:
# Contributor requirements:
 - Knowledge of Python
 - Familiar with time series methods
difficulty: medium
issues:
# Related issues (if any)  to this project.
 - https://github.com/StingraySoftware/stingray/issues/582
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - matteobachetti
 - dhuppenkothen
initiatives:
# The programme under this project wish to run.
 - GSOC
project_size:
 - 350 h
tags:
# Different technologies needed
 - python
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - stingray
---
Bayesian Excess Variance (bexvar) in Stingray

#### Description

The Bayesian Excess Variance is a statistical measurement of variability 
in Poisson-distributed (e.g. X-ray or gamma-ray) data.
The time series from most astronomical facilities, and in particular from 
low-Earth orbit satellites, can only be recorded when the source is visible, 
most of all when it is not below the horizon (or in "Earth occultation" in the 
case of satellites).
The missing data from the occultation periods can result in spurious variability
if not properly accounted for.
Another possible source of spurious variability is the presence of variable 
background signals.
The Bayesian Excess Variance method is suitable for finding variability in 
gappy X-ray light curves with variable background.
The contributor will work to implement this method in Stingray, a Python library
for the analysis of astronomical time series.
See [Buchner et al. 2021](https://arxiv.org/abs/2106.14529)

#### Milestones (if any)

##### Coding starts

* Take confidence with the Stingray infrastructure.
* Creation of test cases for the Bexvar method, based on real observations.

##### 1st evaluation

* Draft implementation of bexvar

##### Final evaluation

* Polished implementation, working tests, documentation
