---
name: Fast parsing of large databases
desc: The conversion of large files from a compressed format to hdf5 should be accelerated.


# add a short one line description of your project
requirements:
# Student requirements:
 - Knowledge of Pandas or other DataFrame libraries
difficulty: medium
issues:
- https://github.com/radis/radis/issues/510
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - minouHub
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

The RADIS code was developed for the characterization of plasmas, flames and atmospheres. High-temperature spectral calculations require to resolve the shape of tens of millions of lines, which is the usual performance bottleneck. RADIS implements a new algorithm to compute these lineshapes, and is already one of the fastest line-by-line spectral codes available. It can also compute many different types of spectra (absorption / emission / equilibrium / nonequilibrium). In a typical calculation, a database of coefficients is loaded and these coefficients are multiplied according to physics laws to generate a set of linestrength in a spectrum. RADIS can handle different molecular databases such as HITRAN, HITEMP, EXOMOL, and GEISA. 

With more and more lines added to the databases, some files grew considerably in size. To be as fast as possible, RADIS convert compressed databases into the HDF5 format. This conversion also increases the size of the files which can take hours to be written in the hard drive (2-3 jours for HITEMP CO2 in its 2025 version). The objective of this project is to accelerate the parsing to hdf5 files.  

#### Milestones

##### Coding starts

* Engage with the community on [💬 RADIS Slack](https://github.com/radis/slack-invite)

* Have set up a development environment, be familiar with open-source tools (GitHub / Git / Tests) and [RADIS architecture](https://radis.readthedocs.io/en/latest/dev/developer.html#architecture)

##### 1st Evaluation

* Based on the demonstration of @dcmvdbekerom, implement a C++ new parsing algorithm in RADIS https://github.com/radis/radis/issues/510#issuecomment-2037688815

* Add documentation and example. Add tests against other spectral codes.

##### 2nd Evaluation

* Propose a solution to save several HDF5 files instead of a large one in .radisdb (e.g. 10 files of 7 GB instead of a single 70-GB file for HITEMP CO2)

##### Final evaluation

* Have all code, tests, and documentation in GitHub.

#### Secondary Goals

* Document architecture and developer guide when facing unclear points that may appear.

* Review pull requests from other RADIS contributors
