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
initiatives:
 - GSOC
tags:
 - python
 - GUI (qtpy)
collaborating_projects:
 - SunPy
---

Making Glue work for Solar Physics datasets (SDO, IRIS, Hindoe and more)

#### Description

The ability to explore and quickly analysis larges datasets is very important in solar physics.
As datasets have become incredibly large (100Gb or more) and quite numerous (365 days of the year), there is a need to be able to sample/preview datasets quickly for interesting features.
This is generally undertaken before before more serious data analysis.

These tools are written in IDL and are dependent on the telescope, for example [IRIS tools](https://folk.uio.no/tiago/cassda/notes/data_tools.html) and [crispex](http://folk.uio.no/gregal/crispex/).

Features of these two tools include (not all are listed here):
 - Able to open the files and understand the metadata.
 - Creating movies or PNGs of different frames and wavelengths.
 - Basic slit analysis of images through several dimensions.
 - Basic Doppler and magnetic field support.
 - Re-scaling images.
 - Line profile fitting.

Implementing a GUI in Python with these kind of features is the primary goal of this project.
However, we will not be coding a GUI from scratch, but using [Glue](https://glueviz.org/).

> Glue is a python project to link visualizations of scientific datasets across many files.

This is a fully functioning and incredibly useful GUI program that we will use as a base.
Glue has a plugin system that allows features to be added to it in a discreet manner.

Previous (and on-going) work for supporting astronomy and solar datasets is occurring in two repositories:

- [glue-solar](https://github.com/glue-viz/glue-solar)
- [glue-astronomy](https://github.com/glue-viz/glue-astronomy)

We would use these stepping stones to achieve the project goals.

One sought out feature is to be able to align datasets from several multiple telescopes that have overlapping metadata (temporal and spatial).
