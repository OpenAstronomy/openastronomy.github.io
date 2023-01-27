---
name: Improved solar feature and event representation
desc: Improve the current representation of solar features and events
requirements:
 - Familiarity with Python
difficulty: medium to high
issues:
 - https://github.com/sunpy/sunpy/issues?q=is%3Aissue+is%3Aopen+HEK
mentors:
 - wafels
 - nabobalis
initiatives:
 - GSOC
project_size:
 - 175 h
 - 350 h
tags:
 - python
collaborating_projects:
 - sunpy
---

#### Description

`sunpy` provides access to solar feature and event data held by the [Heliophysics Event Knowledgebase](https://www.lmsal.com/hek/).
Descriptions of the properties of each feature and event are given [here](https://www.lmsal.com/hek/VOEvent_Spec.html).

Feature and event properties include their type, physical extent, location, lifetime, and other feature/event properties that are specific to a given feature/event.
For example, the time at which the energy flux of a solar flare is at a maximum is relevant for flares, but is not relevant to the description of a coronal hole.

The current representation of HEK features/events in `sunpy` does not make full use of the capabilities of `sunpy`.
For example, many feature/event properties are not expressed using Astropy units or `sunpy` coordinates, even although there is sufficient information in the HEK description that can be used to do this.

The goal of this project is to create classes to represent HEK solar feature/events that function well within the SunPy ecosystem.
The design of the feature/event classes should be sufficiently general so as not to exclude their application to feature/event descriptions held by other catalogs.

More information is found on the linked issues.

#### Milestones

1. Consultation with community on use cases and possible implementations.
2. Design of HEK feature/event object completed.
3. Functional HEK feature/event object completed that implements HEK-required attributes.
4. Final HEK feature/event object completed that implements HEK-required and optional attributes.

##### Community Bonding Period

* Understand the project and the API design.
* Setup a development environment.

##### Coding starts

* Experimenting with the current representation of HEK feature and event data.

##### 1st evaluation

* Partial skeleton of the new HEK feature/event object written.

##### Final evaluation

* Functional replacement ready for review and merging into `sunpy`.
