---
name: Use type hints in Stingray
desc: Introduce and enforce type hints throughout the Stingray library
requirements:
 - Basic knowledge of Python
 - Knowledge of signal processing and Fourier methods would be ideal
difficulty: easy
issues:
 - https://github.com/StingraySoftware/stingray/issues/544
mentors:
 - matteobachetti
 - dhuppenkothen
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
Stingray aims to provide a comprehensive library of reliable, well-tested implementations of common algorithms for time series analysis in Astronomy. 
In this project, the student will introduce type hints in the code, in order to make debugging easier and, possibly, use runtime checks to ensure the consistency of results.


#### Milestones (if any)

1. Introduction of type hints everywhere in the code

2. Thorough testing of the consistency of type hints in typical use cases


##### Coding starts

* Understand the general structure of Stingray, the testing environment, the notebooks used to document the library

##### 1st evaluation

* Type hints implementation is complete.

##### Final

* Through tests through external libraries such as https://pypi.org/project/enforce-typing/
