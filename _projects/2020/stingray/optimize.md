---
name: A lightning-fast stingray.
desc: Improve how the X-ray spectral timing library Stingray deals with large input datasets
requirements:
 - Familiarity with code optimization
 - Proficiency in Python
difficulty: medium
issues:
 - https://github.com/StingraySoftware/stingray/issues/451
mentors:
 - matteobachetti
 - dhuppenkothen
initiatives:
 - GSOC
tags:
 - python
 - memory mapping
 - parallel processing
 - llvm (numba)
collaborating_projects:
 - stingray
---

#### Description
This project is about making the [Stingray spectral timing library](stingraysoftware.readthedocs.io) ready for the data coming from high-sensitivity X-ray detectors like NICER (and, in the future, eXTP and/or Strobe-X), or other kinds of high-throughput photon counters (i.e. in the optical).
The student will start by benchmarking the code through simulated data, address a few known bottlenecks of the code (for example, the need for loading full dataset into the RAM), and explore alternative technologies (memory mapping, parallel computing) to speed up the computation and the data retrieval for larger-than-memory datasets.

#### Milestones (if any)

1. Initial benchmark of the code

2. Memory mapped versions for the `EventList` and `Lightcurve` classes

3. Speed up of `AveragedCrossspectrum`

##### Coding starts

* Setup benchmarks to test the performance of different parts of the code with larger and larger simulated datasets.

##### 1st evaluation

* A thorough report on the scalability of the various parts of the library. Draft memory mapping to allow larger-than-memory datasets in the `EventList` and `Lightcurve` classes.

##### 2nd evaluation

* Memory mapping completed and tested. Speed up computation in `AveragedCrossspectrum`. 

##### Final

* Wrap up all optimizations, described in the `restructuredText` documentation and in Jupyter notebooks.
