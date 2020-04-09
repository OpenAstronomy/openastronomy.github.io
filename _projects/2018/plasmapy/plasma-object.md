---
name: Plasma class
desc: Devlop a new Plasma class for loading and storing multiple types of plasma physics data.
requirements:
 - Good knowledge of Python, including object-oriented programming
 - Some background of physics preferred, especially electromagnetism, flulid mechanics and/or plasma physics
 - Some experience with scientific data formats, especially plasma physics data formats, is preferred
difficulty: High
mentors:
 - SolarDrew
 - namurphy
 - StanczakDominik
initiatives:
 - GSOC
tags:
 - python
collaborating_projects:
 - PlasmaPy
---

#### Description

Plasma physics is an important and wide-ranging field of research with applications from astrophysics to fusion power, and PlasmaPy is a Python package which provides aims to provide tools for this research.
Currently PlasmaPy uses a single basic `Plasma` class to represent plasmas.
This class works well enough for the moment, but lacks a significant amount of flexibility that will be needed as PlasmaPy grows.
Given the broad purview of plasma physics, PlasmaPy will need to be able to handle observational data, simulation results and theoretical plasmas, but should ideally provide a single user experience for working with any of these.

The aim of this project would therefore be to implement a new `Plasma` metaclass and a number of subclasses, similar to SunPy's use of [`Map`s](http://docs.sunpy.org/en/stable/code_ref/map.html) for solar observations from different instruments.
These subclasses would handle respresenting and storing different kinds of plasmas using appropriate structures; for instance a `yt` data object would be ideal for 3D simulation data but not for a 1D observational timeseries.
The `Plasma` metaclass itself would create the appropriate subclass when instantiated, and provide a single data-agnostic user interface.

#### Milestones

##### To be completed by the GSOC 2018 Phase 1 Evaluation Deadline

- Write appropriate tests and basic documentation for the a new `Plasma` metaclass

##### To be completed by the GSOC 2018 Phase 2 Evaluation Deadline

- Implement the `Plasma` metaclass

##### To be completed by the GSOC 2018 Final Week

- Update tests and documentation as necessary
- Remove any bugs in `Plasma` implementation
- If the above are done ahead of schedule, also implement, test and document one or more subclasses to load and store plasma data in commonly used formats
