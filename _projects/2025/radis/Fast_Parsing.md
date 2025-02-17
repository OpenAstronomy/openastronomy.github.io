---
name: Fast parsing of large databases and execution bottlenecks
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
 - dcmvdbekerom
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

With more and more lines added to the databases, some files grew considerably in size. To be as fast as possible, RADIS convert compressed databases into the HDF5 format. This conversion also increases the size of the files which can take hours to be written in the hard drive (2-3 hours for HITEMP CO2 in its 2025 version). The objective of this project is to accelerate the parsing to hdf5 files.  

#### Milestones

##### Coding starts

* Engage with the community on [💬 RADIS Slack](https://github.com/radis/slack-invite)

* Have set up a development environment, be familiar with open-source tools (GitHub / Git / Tests) and [RADIS architecture](https://radis.readthedocs.io/en/latest/dev/developer.html#architecture)

##### 1st Evaluation

* Based on the demonstration of @dcmvdbekerom, implement a C++ new parsing algorithm in RADIS. The demonstration can be found [here](https://github.com/radis/radis/issues/510#issuecomment-2037688815), which includes a detailed explanation and code examples.

* Add documentation and example. Add tests against other spectral codes.

##### 2nd Evaluation

* Propose a solution to save several HDF5 files instead of a large one in .radisdb (For example, save 10 files of 7 GB each instead of a single 70-GB file for HITEMP CO2)

* Write a review of current bottleneck in 1/ the **parsing** and 2/ the **computation** of spectra. This bottleneck review should be uploaded on the documentation, with working examples for small (~1 cm-1) and large (~100 cm-1) spectra. See this example: https://github.com/radis/radis/issues/685

* Tackle some of the bottleneck by either modifying the code, leveraging numba, or writing a C++ code.   

##### Final evaluation

* Have all code, tests, and documentation in GitHub.

#### Secondary Goals

* Document architecture and developer guide when facing unclear points that may appear.

* Review pull requests from other RADIS contributors

* Although this project is devoted to CPU computation, the interested contributor can also contribute to the resolution of GPU bottlenecks. For instance: in a GPU computation, the database first needs to be copied to a host buffer (i.e. CPU side), a so called 'staging buffer'. After that, the database can be copied to the GPU. For integrated GPU's, i.e. when the GPU is part of the CPU chip (like most Intel and AMD processors), the CPU and GPU memory is shared. Ideally, the database would directly be loaded into the staging buffer to prevent copying the same database 3 times (1: regular load, 2: staging buffer, 3: GPU buffer). 
