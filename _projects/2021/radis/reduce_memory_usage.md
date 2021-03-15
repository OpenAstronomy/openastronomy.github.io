---
name: Memory Usage
desc: Reduce Memory usage in RADIS to be able to compute terabyte-scale databases
# add a short one line description of your project
requirements:
# Student requirements:
 - Knowledge of Pandas or other DataFrame libraries
difficulty: medium
issues:
# Related issues (if any) to this project.
 - https://github.com/radis/radis/issues/118
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - erwanp
 - dcmvdbekerom
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

The RADIS code was developed to characterize the radiation of plasmas, flames and atmospheres. It calculates high-temperature infrared spectra from databases of tens of millions of lines, with a new algorithm that already makes it one of the fastest line-by-line spectral codes available. 

However, although the algorithm is very CPU/GPU efficient, the RADIS code is still memory-hungry. The first goal of the current project is to reduce the memory usage of current calculations. Then, it is to replace the current core with libraries better suited to process larger-than-memory-data, which would make it possible to compute spectral databases of up to billions of lines (hundred of GB or terabyte-scale). 


#### Milestones

##### Coding starts

* Engage with the community on [💬 RADIS Slack](https://github.com/radis/slack-invite)

* Training on emission & absorption spectroscopy

* Have set up a development environment, be familiar with open-source tools (GitHub / Git / Tests) and [RADIS architecture](https://radis.readthedocs.io/en/latest/dev/developer.html#architecture)

##### 1st Evaluation

* Work on the current memory bottlenecks (#118)

* Setup [memory-performance benchmark](https://github.com/radis/radis-benchmark/tree/master/manual_benchmarks) to track the changes

* Merge the changes


##### Final

* Setup a proof-of-concept with Vaex / Dask or alternative libraries with lazy-loading features, to be able to compute larger-than-memory-databases  (> tens of GB - terabyte-scale )

* Based on results, decide whether to integrate Vaex, Dask or alternative library in the code.

* Have all code, tests and documentation in GitHub.
