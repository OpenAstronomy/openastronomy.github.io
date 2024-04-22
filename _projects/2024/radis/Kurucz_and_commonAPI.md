---
name: Common API for large molecular databases
desc: The project aims at improving a adding new databases, Kurucz atomic database, and eventually develop a common API currently used by RADIS and Exojax to retrieve large spectroscopy databases.


# add a short one line description of your project
requirements:
# Student requirements:
 - Knowledge of Pandas or other DataFrame libraries
difficulty: medium
issues:
- https://github.com/HajimeKawahara/exojax/discussions/257
- https://github.com/radis/radis/issues/474
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - minouHub
 - erwanp
initiatives:
 - GSOC
project_size:
 - 350 h
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

  
The RADIS code was developed for the characterization of plasmas, flames and atmospheres. High-temperature spectral calculations require to resolve the shape of tens of millions of lines, which is the usual performance bottleneck. RADIS implements a new algorithm to compute these lineshapes, and is already one of the fastest line-by-line spectral codes available. It can also compute many different types of spectra (absorption / emission / equilibrium / nonequilibrium). In a typical calculation, a database of coefficients is loaded and these coefficients are multiplied according to physics laws to generate a set of linestrength in a spectrum.

RADIS can handle different databases such as HITRAN, HITEMP, EXOMOL, GEISA, etc. Another open-source code, called EXOJAX, exchanged portions of code with RADIS until some parts of both codes became very similar. Currently, a database API is written in the RADIS code. The main goal of the current project is to add the atomic Kurucz database to RADIS. The second objective is to improve the aformentioned common API to download and manage all databases. The mentee will not start from scratch because the community already worked on the problem and set up a frame for this big merge of code built around a [DatabaseManager](https://github.com/radis/radis/blob/develop/radis/api/dbmanager.py#L51) class. Previous work on the Kurucz database can be found in [this PR](https://github.com/radis/radis/pull/601).


#### Milestones

##### Coding starts

* Engage with the community on [💬 RADIS Slack](https://github.com/radis/slack-invite)

* Have set up a development environment, be familiar with open-source tools (GitHub / Git / Tests) and [RADIS architecture](https://radis.readthedocs.io/en/latest/dev/developer.html#architecture)

* Get familiar with RADIS architecture, the [DatabaseManager](https://github.com/radis/radis/blob/develop/radis/api/dbmanager.py#L51) class, and what was already implemented.

##### 1st Evaluation

* Add new molecular databases: Kurucz

* Add documentation 

* Gather feedbacks from current users of ExoJax and RADIS 


##### 2nd Evaluation

* Add atomic database: NIST

* Based on the user feebacks and the hands-on experience acquired in the 1st round, refactor the Common API as required to make it more user-friendly. It might require major architectural changes.

* Set up documentation of a stand-alone version of the Database API

##### Final evaluation

* Have all code, tests, and documentation in GitHub.

* If ready and, make the Common API stand-alone.

#### Secondary Goals

* Add collisional-induced-absorption (CIA) databases which are a different type of databases than line databases 

* Document architecture and developer guide when facing unclear points that may appear.

* Review pull requests from other RADIS contributors
