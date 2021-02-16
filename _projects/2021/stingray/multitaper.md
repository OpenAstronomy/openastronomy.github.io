---
name: Multitaper-Periodograms in Stingray.
desc: Add a new algorithm for building periodograms to Stingray. The multitaper periodogram is a method that's fairly well-known in signal processing, but virtually unknown in (X-ray) astronomy.
requirements:
 - Proficiency in Python
 - Knowledge of signal processing and Fourier methods would be ideal
difficulty: medium
issues:
 - https://github.com/StingraySoftware/stingray/issues/361
mentors:
 - dhuppenkothen
 - matteobachetti
initiatives:
 - GSOC
tags:
 - python
 - signal processing
 - time series analysis
 - Fourier analysis
 - astronomy
collaborating_projects:
 - stingray
---

#### Description
Generating periodograms for astronomical data is the core task of Stingray. Because periodograms are often noisy, several methods to denoise periodograms exist in the literature, among them the multi-taper periodogram
Stingray aims to provide a comprehensive library of reliable, well-tested implementations of common algorithms for time series analysis in Astronomy. In this project, the student will add the multi-taper periodogram to the existing code base in order to allow astronomers build periodograms with better noise properties.


#### Milestones (if any)

1. Proof-of-concept implementation of the multi-taper algorithm

2. Full implementation of the algorithm in the Stingray framework, including tests and relevant documentation


##### Coding starts

* Understand algorithm and have an overview of the individual components that need to be implemented.

##### 1st evaluation

* Proof-of-concept implementation is complete.

##### Final

* Full implementation is complete
* Wrap up connecting the new implementation to existing Stingray classes, finish documentation and associated tutorial in a Jupyter notebook.
