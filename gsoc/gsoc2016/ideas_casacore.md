---
layout: default
title:  "Ideas for CasaCore"
show_main: false
ideas_team: CasaCore
---

### Improve Python bindings to CasaCore measures

*Suggested Mentor(s):* [Ger van Diepen](http://github.com/gervandiepen), [Tammo Jan Dijkema](https://github.com/tammojan)

*Difficulty:* Intermediate

*Astronomy knowledge needed:* Some understanding of astronomical coordinate systems and transformations

*Programming skills:* Python, some C++

#### Description

CasaCore contains many features to perform astronomical coordinate transformations, for example from B1950 to J2000, or from J2000 to Azimuth-Elevation. Moreover, it can compute ephemerides, which may make it useful for many other projects. See http://casacore.github.io/casacore-notes/233
The current python binding [python-casacore](http://casacore.github.io/python-casacore/) contains a python binding to the measures library, but this is not a very programmer friendly binding, and thus not much used.
An interface to measures exists within CasaCore that makes converting coordinates much easier. This interface was written with TaQL in mind.
This project concerns modifying the TaQL measures interface to a python measures interface, thus making casacore measures easily accessible from Python


### Frequency conversions for TaQL / python-casacore

*Suggested Mentor(s):* [Ger van Diepen](http://github.com/gervandiepen), [Tammo Jan Dijkema](http://github.com/tammojan)

*Difficulty:* Beginner / Intermediate

*Astronomy knowledge needed:* Some understanding of use of astronomical frequencies (regarding Doppler shifts etc.)

*Programming skills:* C++

#### Description

The casacore measures module contains code for converting frequencies between various reference frames (e.g. Rest frequency, Geocentric, Topocentric, Galacto centric). Having this module available in TaQL would make it much more convenient to perform these kind of conversions. Example code exists for other conversions, see e.g. http://casacore.github.io/casacore/group__MeasUDF__module.html

This project concerns writing such a converter for the Doppler and Frequency conversions. It will require tweaking in boost-python, but since the example code is available for other measures, it should not be too hard.

### General python-casacore cleanup

*Suggested Mentor(s):* [Gijs Molenaar](http://github.com/gijzelaerr), [Ger van Diepen](http://github.com/gervandiepen)

*Difficulty:* Intermediate

*Astronomy knowledge needed:* none

*Programming skills:* python

#### Description

The current [python-casacore](http://github.com/casacore/python-casacore) code is already much improved over the previous "pyrap" implementaion. This python binding to casacore is now python 3 compatible, contains some unit tests, etc. But some work remains to be done:
 * Remove all compile warnings
 * Modernise code, add missing features, maybe more 'pythonic'.
 * Improve test coverage (24% at the moment)

This is a typical project to learn making good code.

### Table plotting for python-casacore

*Suggested Mentor(s):* [Ger van Diepen](http://github.com/gervandiepen), [Tammo Jan Dijkema](https://github.com/tammojan)

*Difficulty:* Beginner

*Astronomy knowledge needed:* Some idea about astronomical units

*Programming skills:* Python

Radio interferometric data sets are almost always stored in casacore "Measurement Sets". These can be queried through TaQL, see e.g. http://casacore.github.io/casacore-notes/199 
It would be nice to have a plotting routine in [python-casacore](http://github.com/casacore/python-casacore) to easily plot two columns against each other, which nicely formatted axes etc (possibly using wcsaxes).

This would, at the very least, make a nice extension to the taql jupyter kernel underneath http://taql.astron.nl
