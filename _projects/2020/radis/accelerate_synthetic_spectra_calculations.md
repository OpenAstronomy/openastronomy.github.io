---
name: Accelerate Synthetic Spectra Calculations
desc: Implement GPU acceleration and new state-of-the-art methods to compute synthetic emission and absorption spectra
requirements:
 - Basic notions of spectroscopy
 - Some experience with CUDA
difficulty: medium
mentors:
# GitHub handles
 - erwanp
 - dcmvdbekerom
 - minouHub 
initiatives:
 - GSOC
tags:
# Different technologies needed
 - python
 - CUDA
collaborating_projects:
 - radis
issues:
# Related issues (if any) to this project.
 - https://github.com/radis/radis/issues/46
---

#### Description

The presence and concentration of molecules in a gas can be measured by comparing absorption and emission experimental spectra to synthetic spectra. However, under high-temperature conditions, the synthetic spectra contain dozens of millions of lines, which require long computational times (up to several minutes).
 
The RADIS code was recently developed for the characterization of plasmas and flames. It uses a new approach to quickly calculate high-temperature infrared spectra. The latest developments already make it one the fastest spectral codes in the world. The goal of this project is to push further and implement two new techniques to gain another orders of magnitude, by two means:
- Implementing GPU acceleration (proof-of-concept example has shown we can compute 250 millions lines in 150 ms!)
- Implementing a new technique to compute line-of-sight spectra (i.e., a column of heterogeneous gas) 


This performance would be beneficial for new applications such as exoplanet characterization (see our other project on developing an interface to atmospheric calculations)

#### Milestones

##### Coding starts

* Engage with the community and understand the motivation of spectroscopy users
* Training on emission & absorption spectroscopy
* Have set up a development environment, be familiar with open-source tools (GitHub / Git / Tests)
* Get used with RADIS architecture: review the interface change to calculate multiple molecules at the same time ([#74](https://github.com/radis/radis/pull/74#issuecomment-585773087))
* Learn about the details of the new technique used for line-of-sight spectra


##### 1st evaluation

* Proof of concept example has been reproduced
* GPU acceleration is implemented and working on your own Fork

##### 2nd evaluation

* GPU acceleration is implemented in main project and tested on many architectures
* Have all code, tests and documentation in GitHub.
* Proof of concept of line-of-sight spectra technique is implemented

##### Final

* Direct line-of-sight spectra technique is implemented is main project
* Write an iPython notebook to document the performance benchmark on [radis-benchmark](https://github.com/radis/radis-benchmark)
* Have all code, tests and documentation in GitHub.

#### Secondary goals

* Document architecture and developer guide when facing unclear points that may appear.
* Review pull requests from other RADIS contributors
* Interface to atmosphere calculations (merge results with project [RADIS Atmosphere Calculation Interface](https://openastronomy.org/gsoc/gsoc2020/#/projects?project=radis_atmosphere_calculation_interface) )
 


