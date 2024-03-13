---
name: Enable Dask execution of NASA time-domain analysis
desc: Improve scalability of time-domain analysis
requirements:
 - Experience with Python
 - Experience with Dask
 - Background with astronomy is desired but not required.
difficulty: high
issues:
 - https://github.com/fornax-navo/fornax-demo-notebooks/issues/240
mentors:
 - jkrick
 - troyraen
initiatives:
 - GSOC
project_size:
 - 350 h / large
tags:
 - irsa
 - fornax
 - python
collaborating_projects:
 - irsa-fornax
---

# Description

NASA is building a science console that runs on cloud compute and supports astrophysicists to access the literally
astronomically large datasets produced by space telescopes past and future. Our team is directing the science
development of that console by trying out novel, big-data science projects and turning them into code and tutorials
for use by the astrophysical community. We seek a contributor who can enable our code to be executed efficiently at
scale on a Dask cluster provided by the science console.


This project will focus on a science use case that is based on the idea of collecting data from all of NASA's
archival time domain datasets for a user-defined set of targets. This produces "light curves" -- roughly,
brightness as a function of time -- in multiple wavelengths for each target. The science that can result from
these multi-wavelength light curves includes classification of AGN (black holes), young stellar objects, and many
other astronomically variable targets. Collecting these light curves is difficult to do, especially at the scale
of millions of targets. Our team has written code that does this work, and an accompanying tutorial that
demonstrates how to run the code in parallel using python's `multiprocessing` library.

The main task of this project is to determine and implement a solution that efficiently executes the light
curve collection code on a Dask cluster. This will involve writing new python code to manage Dask, and may or
may not require altering the existing code to work more efficiently with Dask. Time permitting, the contributor
may work with additional codes that we are developing for related use cases, each of which is likely to present
different challenges to running at scale on a Dask cluster.

## Goals

### Community Bonding Period

* Familiarize yourself with the current code and the challenges to running at scale.
* Setup a development environment.

### Coding starts

#### 1st evaluation

* Have written new code that executes the light curve collection code on a Dask cluster.

#### Final evaluation

* Have implemented a solution that runs smoothly on a Dask cluster and finishes in less time than the current
code takes.
