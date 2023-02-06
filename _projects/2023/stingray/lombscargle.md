---
name: Astronomy with Unevenly Sampled Data
desc: Implementing time series analysis methods for unevenly sampled data for X-ray astronomy data 
requirements:
 - Python 
 - Experience with time series methods and/or Fourier analysis welcome
difficulty: medium
issues:
# Related issues (if any)  to this project.
- https://github.com/StingraySoftware/stingray/issues/689
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - dhuppenkothen
initiatives:
# The programme under this project wish to run.
 - GSOC
project_size:
 - 175 h

tags:
# Different technologies needed
 - python
 - 
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - stingray
---

#### Description

Stingray provides methods for analysing astronomical time series, in particular data from space telescopes observing some of the most extreme sources in the universe: violent stellar explosions, matter falling into black holes, and rapidly spinning neutron stars. So far, stingray has focused almost entirely on methods in the Fourier domain, which we understand well, but come with a significant drawback: they require data to be observed at evenly spaced intervals. However, for many reasons, our data might not be evenly sampled, for example, when the satellite is behind the earth. In this project, we will implement a range of time series methods and spectral-timing methods, starting with the Lomb-Scargle periodogram, to work in stingray, in order to enable a wider range of astronomical studies.

#### Milestones (if any)

##### Community Bonding
Community Bonding
* Scope out which spectral timing methods can be adapted to uneven sampling, and which functionality to adapt from astrapy 
* Set up development environment and become familiar with stingray core functionality

##### Coding starts

* Start working on implementation of Lomb-Scargle periodogram as a stingray class

##### 1st evaluation

* Lomb-Scargle periodogram class implemented

##### Final evaluation

* Implementation of unevenly sampled time lags, and potential other functionality
