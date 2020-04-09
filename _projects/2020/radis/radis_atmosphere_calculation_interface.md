---
name: RADIS Atmosphere Calculation Interface
desc: Adapt a spectroscopy open-source code to characterize exoplanet atmospheres.
requirements:
 - Basic notions of spectroscopy
difficulty: easy
mentors:
# GitHub handles
 - erwanp
 - minouHub 
 - dcmvdbekerom
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
 - https://github.com/radis/radis/issues/74
---

#### Description

The presence and concentration of molecules in exoplanet atmospheres are measured by comparing absorption and emission spectra to synthetic spectra. However, under high-temperature conditions, the synthetic spectra contain dozens of millions of lines, which require long computational times .
 
The RADIS code was recently developed for the characterization of plasmas and flames. It uses a new approach to quickly calculate high-temperature infrared spectra. New developments are in progress (see our [other project](https://openastronomy.org/gsoc/gsoc2020/#/projects?project=accelerate_synthetic_spectra_calculations)  on further accelerating the code), but it is already one of the fastest spectral codes in the world. This performance would be beneficial for exoplanet characterization, and this is the goal of this project: adapt the RADIS code to the calculation of exoplanet atmospheres!


#### Milestones

##### Coding starts

* Engage with the community and understand the motivation of spectroscopy users
* Training on emission & absorption spectroscopy
* Have set up a development environment, be familiar with open-source tools (GitHub / Git / Tests)
* Get used with RADIS architecture: review the interface change to calculate multiple molecules at the same time ([#74](https://github.com/radis/radis/pull/74#issuecomment-585773087))


##### 1st evaluation

* Indirect integration of databases from the Exoplanet atmosphere community  (ExoMol), using a converter to the HITRAN format supported by RADIS
* 1st calculation of an atmosphere line-of-sight spectrum with Python hardcoded inputs

##### 2nd evaluation

* Direct integration of ExoMol, and memory optimization
* Calculation of atmosphere with standard atmosphere input files (mole fractions, temperature profile, pressure profile)

##### Final

* Write an iPython notebook to document the atmosphere module on [radis-examples](https://github.com/radis/radis-examples)
* Have all code, tests and documentation in GitHub.

#### Secondary goals

* Document architecture and developer guide when facing unclear points that may appear.
* Review pull requests from other RADIS contributors
* Optimized calculation of atmospheres in optically thin configurations (merge results with project [Accelerate Synthetic Spectra Calculations](https://openastronomy.org/gsoc/gsoc2020/#/projects?project=accelerate_synthetic_spectra_calculations) )
 )