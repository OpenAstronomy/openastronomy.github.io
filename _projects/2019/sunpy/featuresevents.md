---
name: Feature and Event Objects in SunPy
desc: Implements a feature/event object in SunPy.
requirements:
 - Familiar with methods for creating classes, objects and subclasses. 
difficulty: medium
issues:
 - https://github.com/sunpy/sunpy/pull/2759
 - https://github.com/sunpy/sunpy/issues/1792
 - https://github.com/sunpy/sunpy/issues/1398
 - https://github.com/sunpy/sunpy/issues/164
mentors:
 - wafels
 - Cadair
 - dpshelio
initiatives:
 - GSOC
tags:
 - Python
collaborating_projects:
 - SunPy
---

#### Description

The Sun displays many different features and events (FEs).  These are
detected and described either automatically by algorithm, or by visual
inspection by human, or by a combination of both.  There are many
different repositories of these FEs online.  SunPy provides access to
two large FE repositories, the Heliophysics Event Knowledgebase (HEK) and
the Helio Event Catalogue (HEC).

The aim of this project is to create a SunPy object that normalizes
input from both the HEK and HEC and creates a SunPy FE object.  The
SunPy FE object should take advantage of existing SunPy capabilities
such as SunPy spatial co-ordinates and SunPy time.  This will make FE
data much more useful to SunPy users.

The SunPy FE object should interact intuitively with existing SunPy
objects such as the SunPy maps and timeseries.  For example, it should
be simple for a FE with a spatial extent property to be overplotted
on SunPy map; similarly, it should be simple for a FE with a temporal
duration to be overplotted on a SunPy timeseries.


#### Milestones

##### Coding Starts

* Engaged with the community and understand the motivation and
  challenges of the project.

##### Evaluation 1

* Have understood what a FE is in the context of solar physics
  research and why their interaction with existing SunPy objects is
  important. 
* Have evaluated and chosen an approach to the design of a SunPy FE
  object. 
* Have implemented a basic SunPy FE object.

##### Evaluation 2

* Have worked with your mentors and the community to design a simple
  and functional API. 
* Have a working prototype of the SunPy FE object that normalizes
input from both the HEK and HEC.
* Have tests for the working prototype.

##### Final

* Have finished implementation, testing and documentation.
* Have written examples for the gallery of how to use the functionality.
* Have written developer documentation.
* Have the Pull Request merged after review and feedback.
