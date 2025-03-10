---
name: Electronic spectra for RADIS
# add a short one line description of your project
desc: The project aims at adding the possibility to calculated electronic spectra with RADIS, mainly using the newly available molecules in ExoMol
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

  
The RADIS code was developed for the characterization of plasmas, flames and atmospheres.
High-temperature spectral calculations require to resolve the shape of tens of millions of lines, which is the usual performance bottleneck.
RADIS implements a new algorithm to compute these lineshapes, and is already one of the fastest line-by-line spectral codes available.
It can also compute many different types of spectra (absorption / emission / equilibrium / nonequilibrium).
In a typical calculation, a database of coefficients is loaded and these coefficients are multiplied according to physics laws to generate a set of line strengths in a spectrum.

RADIS can handle different molecular databases such as HITRAN, HITEMP, EXOMOL, and GEISA.
Currently, it supports the computation of rovibrational spectra, which correspond to transitions between rotational and vibrational energy levels.
**However, it lacks the capability to compute electronic spectra from databases like EXOMOL, which would complement its existing capabilities.**

Other codes allow to compute electronic spectra of diatomic molecules and can be used as a reference or comparison point:

* Moose - https://github.com/AntoineTUE/Moose
* MassiveOES - https://bitbucket.org/OES_muni/massiveoes (with Radis/MassiveOES example in https://github.com/radis/massiveOES-examples)
* ExoMol list - https://www.exomol.com/software/

#### Milestones

##### Coding starts

* Engage with the community on [💬 RADIS Slack](https://github.com/radis/slack-invite)

* Have set up a development environment, be familiar with open-source tools (GitHub / Git / Tests) and [RADIS architecture](https://radis.readthedocs.io/en/latest/dev/developer.html#architecture)

##### 1st Evaluation

* Adapt how the EXOMOL database is currently employed to allow the computation of electronic spectra at **thermal equilibrium** (single temperature)  

* Add documentation and example. Add tests against other spectral codes.

* To ease the understand of the physics behind the code, the contributor could start with non-equilibrium spectra of atomic species (see Secondary goals). This is entirely optional and up to the contributor. 

##### 2nd Evaluation

* Add the possibility to compute electronic spectra at **thermal non-equilibrium** (electronic temperature != translational temperature)

* Add documentation and example. Add tests against other spectral codes.

* For diatomic species, start a new database based on MassiveOES sources.

##### Final evaluation

* Have all code, tests, and documentation in GitHub.

#### Secondary Goals

* RADIS can compute atomic spectra thanks to the hard work of GSOC 2023 and 2024 contributors, see https://github.com/radis/radis/pull/689. An interesting approach would be to start with non-equilibrium spectra of atomic species as the physics is slighly easier than for molecule.  

* Document architecture and developer guide when facing unclear points that may appear.

* Review pull requests from other RADIS contributors
