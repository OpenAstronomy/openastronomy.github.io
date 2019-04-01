---
name: Casacore testing
desc: Improve the test coverage of the python wrappers around casacore, and possibly add some python functionality
# add a description of your project
requirements:
 - Proficiency in Python
difficulty: intermediate
issues:
 - https://github.com/casacore/python-casacore/issues/6
 - https://github.com/casacore/python-casacore/issues/60
mentors:
 - tammojan
 - gijzelaerr
initiatives:
 - GSOC
tags:
 - python casacore testing
collaborating_projects:
 - casacore
---
#### Description

Python-casacore is a set of Python bindings for [casacore] (https://github.com/casacore/casacore), a c++ library used in radio astronomy. This python binding to casacore is now python 3 compatible, contains some unit tests, etc. But some work remains to be done:

 - Remove all compile warnings
 - Modernise code, add missing features, maybe more ‘pythonic’.
 - Improve test coverage (24% at the moment)

This is a typical project to learn making good code.

