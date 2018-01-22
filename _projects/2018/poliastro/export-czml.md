---
name: Export to CZML
desc: Implement export of Orbit objects to CZML to visualize in Cesium.js
requirements:
 - Familiar with the JSON format
 - Basic experience with JavaScript or TypeScript
difficulty: medium
issues:
 - https://github.com/poliastro/poliastro/issues/117
 - https://github.com/poliastro/poliastro/issues/287
mentors:
 - juanlu001
 - newlawrence
initiatives:
 - GSOC
 - SOCIS
tags:
 - python
 - javascript
collaborating_projects:
 - poliastro
---

#### Description

Since 2017 [poliastro features 3d plotting using Plotly](http://docs.poliastro.space/en/latest/examples/Plotting%20in%203D.html).
However, it would be nice to use other popular orbit visualization solutions
such as Cesium.js. Although it is meant to create visualizations for Earth
orbits, there are ways to extend it to visualize interplanetary maneuvers,
[as the developers explained](https://groups.google.com/d/msg/cesium-dev/_zKyk0fRd-g/oTpRyuo8BgAJ).

Cesium.js uses a JSON format called CZML, and this project aims to add
support for CZML export for poliastro `Orbit` objects. For that, the
sampling capabilities have to be improved and the tricks described above
have to be implemented, along with the creation of a Cesium app that can
understand our output.

#### Milestones

##### Coding starts

* Engaged with the community and understand the motivation and challenges of
  the project.
* Have set up a development environment and get familiar with the Cesium
  Sandcastle (see "Additional resources")

##### 1st evaluation

* Have basic export for an orbit around the Earth
* Have all code, tests and documentation in GitHub

##### 2nd evaluation

* Have complex export that includes attractors and target bodies, if any
* Have all code, tests and documentation in GitHub

##### Final

* Have created a Cesium application that understand the necessary metadata
* Have all code, tests and documentation in GitHub

#### Secondary goals

* Fix any bugs that might appear regarding visualization, hyperbolic orbits and so forth
* Review pull requests from other poliastro contributors, including the mentor
* Give a talk about the work at some Python event

#### Additional resources

* [Cesium Sandcastle](https://cesiumjs.org/Cesium/Build/Apps/Sandcastle/index.html?src=CZML.html&label=DataSources)
* [Sample data](https://github.com/AnalyticalGraphicsInc/cesium/blob/master/Apps/SampleData/simple.czml)
