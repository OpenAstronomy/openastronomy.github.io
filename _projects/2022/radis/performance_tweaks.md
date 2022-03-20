---
name: Performance Tweaks for RADIS
desc: Reduce Memory usage and improve performance in RADIS to be able to compute terabyte-scale databases
# add a short one line description of your project
requirements:
# Student requirements:
 - Knowledge of Pandas or other DataFrame libraries
 - Prior working knowledge with big data handling databases like Vaex 
difficulty: medium
issues:
# Related issues (if any) to this project.
 - https://github.com/radis/radis/issues/118
 - https://github.com/radis/radis/issues/176
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - gagan-aryan
 - anandxkumar
 - erwanp
initiatives:
 - GSOC
project_size:
 - 175 h
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

The RADIS code was developed to characterize the radiation of plasmas, flames and atmospheres. It calculates high-temperature infrared spectra from databases of tens of millions of lines, with a new algorithm that already makes it one of the fastest line-by-line spectral codes available. 

However, although the algorithm is very CPU/GPU efficient, the RADIS code is still memory-hungry. The first goal of the current project is to reduce the memory usage of current calculations. Then, it is to replace the current core with libraries better suited to process larger-than-memory-data, which would make it possible to compute spectral databases of up to billions of lines (hundred of GB or terabyte-scale). 


#### Milestones

##### Coding starts

* Engage with the community on [💬 RADIS Slack](https://github.com/radis/slack-invite)

* Training on emission & absorption spectroscopy

* Have set up a development environment, be familiar with open-source tools (GitHub / Git / Tests) and [RADIS architecture](https://radis.readthedocs.io/en/latest/dev/developer.html#architecture)

##### 1st Evaluation

* Work on the existing [memory bottlenecks](https://github.com/radis/radis/issues/118) 

* Work on [crunching datatypes](https://github.com/radis/radis-benchmark/pull/11) of various columns to optimise dataframe memory usage

* Setup [memory-performance benchmark](https://github.com/radis/radis-benchmark/tree/master/manual_benchmarks) to track the changes

* Automatically [cache non equilibrium parameters](https://github.com/radis/radis/issues/176) to line database cache

* Merge the changes


##### Final

* Write the Proof-Of-Concept to do out of the core calculations i.e., use Vaex for computations instead of pandas. 

* Merge the idea of the Proof-Of-Concept to the codebase. 

* Add [automatic linestrength cutoff](https://github.com/radis/radis/issues/268)

* Add [.h5 loading benchmark](https://github.com/radis/radis-benchmark/issues/4)

* Have all code, tests and documentation in GitHub
