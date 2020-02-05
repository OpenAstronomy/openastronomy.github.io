---
name: glue-solar
desc: Making Glue work for Solar Physics datasets
requirements:
 - Quite familiar with Python.
 - Previous QT or GUI experience would be nice
difficulty: Medium to High
issues:
- None
mentors:
 - Cadair
 - nabobalis
 - astrofrog
initiatives:
 - GSOC
tags:
 - python
 - GUI (qtpy)
collaborating_projects:
 - SunPy
 - Glue
---

#### Description

The ability to interactively explore and quickly analyse large datasets is very important in solar physics.
As datasets become larger (100Gb or more) and multiple different observations overlap there is a need for a tool which enables multi-instrument interactive visualisation.
Currently, there are various tools which written in IDL and are dependent on the telescope, for example [IRIS tools](https://folk.uio.no/tiago/cassda/notes/data_tools.html) and [crispex](http://folk.uio.no/gregal/crispex/).

The objective of this project is to provide a foundation for these types of projects to be built in Python.
While a fully featured GUI toolkit for solar data can not be built in one summer, the goal is to provide the technical building blocks, but more importantly to demonstrate, and document, how this framework can be used by instrument teams to build custom solutions for their data.

The sort of features that exist in other interactive exploration tools are:
 - Able to open the files and understand the metadata.
 - Creating movies or PNGs of different frames and wavelengths.
 - Basic slit analysis of images through several dimensions.
 - Basic Doppler and magnetic field support.
 - Re-scaling images.
 - Line profile fitting.

This project will use [Glue](https://glueviz.org/) **"A python project to link visualizations of scientific datasets across many files."**
Glue is a very powerful and extensible tool which already has support for many solar physics data through use of the WCS and coordinate frames implemented in Astropy and SunPy.
In addition to this Glue has a plugin system that allows features to be added and functionality customized external to the main codebase.

Previous (and on-going) work for supporting astronomy and solar datasets is occurring in two plugin repositories:

- [glue-solar](https://github.com/glue-viz/glue-solar)
- [glue-astronomy](https://github.com/glue-viz/glue-astronomy)

The primary development and documentation effort for this project would take place in the glue-solar repository.


This project would be considered successful if many of the following goals were achieved (in descending order of priority):

* Glue-solar is an installable package, with a first official release.
* Glue-solar is well documented, both for users and future developers, with screenshots and screencasts as appropriate.
* Glue-solar can load many different complex datasets such as SST cubes, IRIS data, DKIST data as well as AIA, HMI etc.
* Glue-solar demonstrates how to implement custom data loaders (i.e. for IRIS data).
* Glue-solar demonstrates how to implement custom linked layouts (i.e. SJI + Raster iris data).
* Glue-solar includes a custom splash screen with the SunPy logo.
