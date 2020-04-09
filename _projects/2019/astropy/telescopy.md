---
name: telescopy
desc: A generic API for telescope S/N calculations. 
requirements:
# Student requirements:
 - Observational astronomy
difficulty: medium
mentors:
# First person in contact; mentors may change before project starts.
 - bmorris3
 - eteq
initiatives:
 - GSOC
tags:
# Different technologies needed
 - python
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - astropy
---

Specify some telescope, filter, imager, and target properties, and estimate the photons or counts you’d measure

#### Description

The goal of this project is to create a simple API for performing signal-to-noise calculations 
for telescopic observations using astropy. Users will specify an input source spectrum (e.g. a blackbody),
properties of the source (e.g. magnitude in one band, or a distance), properties of the telescope 
(e.g. aperture, throughput), and properties of the imager (e.g. quantum efficiency, gain) in order to calculate 
the expected photon flux and count rate. If time allows, the applicant will also develop a submodule for
signal-to-noise calculations of spectroscopic observations.

#### Milestones (if any)

##### GSOC CODING STARTS

* Get to know the existing API, design strawman API 
* Generalize the input spectrum object for objects other than blackbodies
* Work out scaling of magnitudes from one band to another

##### GSOC MIDTERM

* Write tests which will validate predictions against real data
* Write documentation which explains how to construct your own S/N calculations

##### GSOC FINAL

* Have _passing_ tests which validate the API for real observations
* Handle spectroscopic observations at arbitrary spectral resolution
* Write extensive documentation with examples for widely-used telescopes
