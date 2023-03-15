---
name: Out-of-core calculations to reduce memory usage
desc: The project aims at reducing RADIS memory usage, and make it possible to compute very-large spectral databases of tens of gigabytes that do not fit in RAM memory.

# add a short one line description of your project
requirements:
# Student requirements:
 - Knowledge of Pandas or other DataFrame libraries
 - Prior working knowledge with big data handling databases like Vaex 
difficulty: medium
issues:

mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - minouHub
 - anandxkumar
 - erwanp
initiatives:
 - GSOC
project_size:
 - 350 h
tags:
# Different technologies needed
 - Python
 - Vaex
 - Pandas
 - Git
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - radis
---


#### Description

The RADIS code was developed for the characterization of plasmas, flames and atmospheres. High-temperature spectral calculations require to resolve the shape of tens of millions of lines, which is the usual performance bottleneck. RADIS implements a new algorithm to compute these lineshapes, and is already one of the fastest line-by-line spectral codes available. It can also compute many different types of spectra (absorption / emission / equilibrium / nonequilibrium). 

However, although the algorithm is very CPU/GPU efficient, the RADIS code is still memory-hungry. Databases are currently loaded in RADIS using the VAEX package, but the operations to calculate the spectra are performed using the PANDAS library.  VAEX is a similar table management tool than PANDAS but uses memory mapping, a zero memory copy policy, and lazy computations for the best performance. **The main goal of the current project is to refactor RADIS so that dataframes are only manipulated via the VAEX format**. Potentially, this work would make it possible to compute spectral databases of up to billions of lines (hundred of GB or terabyte-scale databases). 


#### Milestones

##### Coding starts

* Engage with the community on [💬 RADIS Slack](https://github.com/radis/slack-invite)

* Training on emission & absorption spectroscopy

* Have set up a development environment, be familiar with open-source tools (GitHub / Git / Tests) and [RADIS architecture](https://radis.readthedocs.io/en/latest/dev/developer.html#architecture)

* Get familiar with RADIS architecture

##### 1st Evaluation

* Create a standalone spectroscopy code working with Out-of-core Vaex calculations (with minimum features: absorption code under equilibrium)

##### 2nd Evaluation

* Create a standalone spectroscopy code working with Out-of-core Vaex calculations (with minimum features: absorption code under equilibrium)

* Implement VAEX out-of-core calculations directly in a single RADIS calculation path (e.g. equilibrium, one lineshape calculation routine), replacing PANDAS  

* Implement tests to verify that the implementation of VAEX will not have different output than the current PANDAS implementation 

##### Final evaluation

* Implement VAEX out-of-core calculations directly in all othe other RADIS calculation paths (nonequilibrium, all lineshape calculations routine), replacing PANDAS  

* Have all code, tests, and documentation in GitHub.


#### Secondary Goals

* Document architecture and developer guide when facing unclear points that may appear.

* Review pull requests from other RADIS contributors, especially parallel GSoC mentee

* List and explore consequences for GPU calculations already implemented in RADIS


