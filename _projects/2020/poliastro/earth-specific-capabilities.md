---
name: Earth-specific capabilities
desc: Add more Earth-specific capabilities to poliastro to make it more attractive for non-interplanetary use cases
requirements:
 - Basic notions of orbital mechanics
difficulty: medium
mentors:
 - juanlu001
 - jorgepiloto
initiatives:
 - GSOC
 - SOCIS
tags:
 - python
collaborating_projects:
 - poliastro
---

#### Description

poliastro has lots of interesting features for users analyzing interplanetary trajectories, some
of which are only present in commercial-off-the-shelf alternatives, such as
predefined low-thrust guidance laws, flybys analysis, and more. In fact, the scope of poliastro
explicitly mentions interplanetary applications, and we started there because

* It is fun
* There were scripts here and there, but some of them didn't work well for attractors other than the Earth
* We were too lazy to learn SPICE

However, most potential poliastro users (including commercial companies) are interested in
Earth-bound trajectory analysis. This includes:

* Launch windows and orbit injection
* Station-keeping and orbit correction maneuvers
* Precise propagation using high-order gravitational and atmospheric models
* Two-Line Element (TLE) usage
* Orbit determination
* Observation scheduling
* Groundtrack plotting
* And more!

The goal of the project is open-ended and involves improving poliastro for some or all of the above use cases.

#### Milestones

##### Coding starts

* Engaged with the community and understand the motivation and challenges of
  the project.
* Have set up a development environment

##### 1st evaluation

* TBD
* Have all code, tests and documentation in GitHub

##### 2nd evaluation

* TBD
* Have all code, tests and documentation in GitHub

##### Final

* TBD
* Have all code, tests and documentation in GitHub

#### Secondary goals

* Fix any bugs that might appear regarding visualization, hyperbolic orbits and so forth
* Review pull requests from other poliastro contributors, including the mentor
* Give a talk about the work at some Python event
