---
name: Optimize Stingray for Large Datasets
desc: Optimize tools in the Stingray library for use on large datasets from new X-ray space missions.
requirements:
- Familiar with python optimization tools
difficulty: medium
issues:
- https://github.com/StingraySoftware/stingray/issues/164
mentors:
 - matteobachetti
 - paulbalm
 - abigailStev
initiatives:
 - GSOC
tags:
 - python
 - scipy
 - numba
 - dask
 - memmap
collaborating_projects:
 - timelab
---

#### Description

This is a code performance project for 
[Stingray](https://github.com/StingraySoftware/stingray) with the aim of 
handling large datasets (more than 1 million photons) that do not fit into 
memory (such as from [AstroSat](http://astrosat.iucaa.in/?q=node/12) and 
[NICER](https://heasarc.gsfc.nasa.gov/docs/nicer/)). The student will 
go through GitHub issues to see where Stingray workflows are breaking down in 
practical use cases, make a thorough profiling of the code, single out 
bottlenecks, and find solutions. 

#### Deliverables
Deliverables for this project will be profiling and developing solutions for 
code bottlenecks and other hindrances to using Stingray library tools on large 
datasets.

##### To complete each milestone

+ Working unit tests for each piece of code

+ Documentation for each class, method and function implemented