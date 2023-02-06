---
name: Searching for Quasi-Periodic Oscillations with Gaussian Processes
desc: This project implements a new submodule into the time series analysis package stingray to help us search astronomical data for periodic variations in brightness using Gaussian Process regression.
# add a short one line description of your project
requirements:
# Student requirements:
- experience with Python and the scientific stack
- experience with Gaussian Processes and/or JAX welcome
difficulty: high
issues:
# Related issues (if any)  to this project.
- https://github.com/StingraySoftware/stingray/issues/660
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - dhuppenkothen
initiatives:
# The programme under this project wish to run.
 - GSOC
project_size:
 - 350 h
tags:
# Different technologies needed
 - python
 - time series
 - stingray
 - Gaussian Processes
collaborating_projects:
# suborganisation(s) to which this project belongs.
- stingray
---

#### Description

Stingray provides methods for analysing astronomical time series, 
in particular data from space telescopes observing some of the most 
extreme sources in the universe: violent stellar explosions, matter 
falling into black holes, and rapidly spinning neutron stars. Among 
all the variations of brightness we can study in these sources, 
periodic and quasi-periodic oscillations are among the most interesting, 
because they can often be directly tied to astrophysical processes in 
the object. Finding them in practice can be difficult, and the methods 
currently implemented in stingray have serious limitations that are 
often not met by the data we observe. Recently, Huebner et al 
(2022, arXiv:2205.12716) proposed a new method for searching for 
quasi-periodic oscillations, including an associated software tool 
(https://github.com/MoritzThomasHuebner/QPOEstimation). While it 
works, it is somewhat unwieldy, not well documented, and not well 
integrated with existing functionality in stingray. In this project, 
we will simplify the existing code, port it to the tinygp library, 
integrate it with stingray in a new submodule, and release it together 
with a tutorial.


#### Milestones (if any)

#### Community Bonding Period
* Familiarize with the QPOEstimation code from Huebner et al (2022) and stingray
* Formulate design plan for the stingray submodule
* Set up development environment

##### Coding starts

* Start implementation of QPOEstimation using tinygp as a stingray submodule

##### 1st evaluation

* Basic functionality implemented, docstrings and tests exist

##### Final evaluation

* QPO search tool is fully functional, including a case study and a tutorial

