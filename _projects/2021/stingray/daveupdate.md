---
name: Stingray GUI update
desc: Update Stingray's GUI, DAVE, to use the most recent Javascript dependencies and Stingray API (including faster pulsar searches, faster processing, large data handling) and infrastructure (e.g. the modifications introduced by [APE 17](https://docs.astropy.org/projects/package-template/en/latest/ape17.html))
requirements:
 - Good knowledge of Python and Javascript
 - Knowledge of signal processing and Fourier methods would be ideal
difficulty: medium
issues:
 - https://github.com/StingraySoftware/dave/pull/74
mentors:
 - matteobachetti
 - smigliari
initiatives:
 - GSOC
tags:
 - python
 - signal processing
 - time series analysis
 - Fourier analysis
 - astronomy
 - javascript
collaborating_projects:
 - stingray
---

#### Description
Generating periodograms for astronomical data is the core task of Stingray. Because periodograms are often noisy, several methods to denoise periodograms exist in the literature, among them the multi-taper periodogram
Stingray aims to provide a comprehensive library of reliable, well-tested implementations of common algorithms for time series analysis in Astronomy. 
DAVE is an elegant GUI to the library, developed during a previous GSoC. 
Due to the fast evolving Python and Javascript landscape, this GUI is not compatible with the current versions of the dependencies.
Also, Stingray has now new features that were not implemented in the original GUI.
In this project, the student will refresh the GUI dependencies, update the package building infrastructure, and add the new functionality introduced in recent versions of Stingray.


#### Milestones (if any)

1. Package build working again

2. New Stingray features introduced as proof-of-concept

2. Fully working interface


##### Coding starts

* Understand GUI functionality and have an overview of the individual components that need to be implemented.

##### 1st evaluation

* Proof-of-concept implementation is complete (M1 and M2).

##### Final

* Full implementation is complete (M3)
