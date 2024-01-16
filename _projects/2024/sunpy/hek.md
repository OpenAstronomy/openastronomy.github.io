---
name: Improved solar feature and event representation
desc: Improve the current representation of solar features and events
requirements:
 - Experience with Python
difficulty: low to medium
issues:
 - https://github.com/sunpy/sunpy/issues?q=is%3Aissue+is%3Aopen+HEK
mentors:
 - wafels
 - nabobalis
initiatives:
 - GSOC
project_size:
 - 90h / small
tags:
 - python
collaborating_projects:
 - sunpy
---

# Description

`sunpy` provides access to solar feature and event data held by the [Heliophysics Event Knowledgebase](https://www.lmsal.com/hek/).
Descriptions of the properties of each feature and event are given [here](https://www.lmsal.com/hek/VOEvent_Spec.html).

Feature and event properties include their type, physical extent, location, lifetime, and other feature/event properties that are specific to a given feature/event.
For example, the time at which the energy flux of a solar flare is at a maximum is relevant for flares, but is not relevant to the description of a coronal hole.

The current representation of HEK features/events in `sunpy` does not make full use of the capabilities of `sunpy` or the other libraries it uses.
For example, many feature/event properties are not expressed using Astropy units or `sunpy` coordinates, even although there is sufficient information in the HEK description that can be used to do this.

The goal of this project is to create classes to represent HEK solar feature/events that function well within the SunPy ecosystem.
The design of the feature/event classes should be sufficiently general so as not to exclude their application to feature/event descriptions held by other catalogs.

A previous GSoC Project [worked on this problem](https://github.com/sunpy/sunpy/pull/7059) and that will need to be used as the basis for this.
This should shorten the project lifecycle and is it why this is a small project.

For this project, being familiar with astropy regions and some solar coordinate items would be ideal but not necessary.

## Milestones

1. Consultation with community on use cases and possible implementations.
2. Design of HEK feature/event object completed.
3. Functional HEK feature/event object completed that implements HEK-required attributes.
4. Final HEK feature/event object completed that implements HEK-required and optional attributes.

### Community Bonding Period

* Understand the project and the API design.
* Setup a development environment.

### Coding starts

* Experimenting with the current representation of HEK feature and event data.
* Consider parsing the html page for the specification.

### 1st evaluation

* Partial skeleton of the new HEK feature/event object written.

### Final evaluation

* Functional replacement ready for review and merging into `sunpy`.
