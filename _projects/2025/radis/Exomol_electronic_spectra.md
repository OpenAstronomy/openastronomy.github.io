---
name: Electronic spectra for RADIS
desc: The project aims at adding the possibility to calculated electronic spectra with RADIS, mainly using the newly available molecules in ExoMol

# add a short one line description of your project
requirements:
# Student requirements:
 - Knowledge of Pandas or other DataFrame libraries
difficulty: medium
issues:
- https://github.com/radis/radis/issues/724
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

  
The RADIS code was developed for the characterization of plasmas, flames and atmospheres. High-temperature spectral calculations require to resolve the shape of tens of millions of lines, which is the usual performance bottleneck. RADIS implements a new algorithm to compute these lineshapes, and is already one of the fastest line-by-line spectral codes available. It can also compute many different types of spectra (absorption / emission / equilibrium / nonequilibrium). In a typical calculation, a database of coefficients is loaded and these coefficients are multiplied according to physics laws to generate a set of linestrength in a spectrum. RADIS can handle different molecular databases such as HITRAN, HITEMP, EXOMOL, and GEISA. Currently, it supports the computation of rovibrational spectra, which correspond to transitions between rotational and vibrational energy levels. However, it lacks the capability to compute electronic spectra from databases like EXOMOL, which would complement its existing capabilities.

Other codes allow to compute electronic spectra of diatomic molecules and can be used as a reference or comparison point:
* Moose - https://github.com/AntoineTUE/Moose
* MassiveOES - https://bitbucket.org/OES_muni/massiveoes (with Radis/MassiveOES example in https://github.com/radis/massiveOES-examples)
* ExoMol list - https://www.exomol.com/software/
<!-- Another open-source code, called EXOJAX, exchanged portions of code with RADIS until some parts of both codes became very similar. Currently, a database API is written in the RADIS code. The main goal of the current project is to add the atomic Kurucz database to RADIS. The second objective is to improve the aformentioned common API to download and manage all databases. The mentee will not start from scratch because the community already worked on the problem and set up a frame for this big merge of code built around a [DatabaseManager](https://github.com/radis/radis/blob/develop/radis/api/dbmanager.py#L51) class. Previous work on the Kurucz database can be found in [this PR](https://github.com/radis/radis/pull/601). -->


#### Milestones

##### Coding starts

* Engage with the community on [💬 RADIS Slack](https://github.com/radis/slack-invite)

* Have set up a development environment, be familiar with open-source tools (GitHub / Git / Tests) and [RADIS architecture](https://radis.readthedocs.io/en/latest/dev/developer.html#architecture)

##### 1st Evaluation

* Adapt how the EXOMOL database is currently employed to allow the computation of electronic spectra at **thermal equilibrium** (single temperature)  

* Add documentation and example. Add tests against other spectral codes.

##### 2nd Evaluation

* Add the possibility to compute electronic spectra at **thermal non-equilibrium** (electronic temperature != translational temperature)

* Add documentation and example. Add tests against other spectral codes.

* For diatomic species, start a new database based on MassiveOES sources.

##### Final evaluation

* Have all code, tests, and documentation in GitHub.

#### Secondary Goals

* Document architecture and developer guide when facing unclear points that may appear.

* Review pull requests from other RADIS contributors
