---
name: Gnuastro library in Python
desc: Python wrappers over the Gnuastro C library.
requirements:
# Student requirements:
 - Low-level Python and Numpy (their C library).
difficulty: low
issues:
# Related issues (if any) to this project.
 - https://github.com/Jash-Shah/pyGnuastro
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - mohammad-akhlaghi
initiatives:
# The programme under this project wish to run.
 - GSOC
project_size:
 - 350 h
tags:
# Different technologies needed
 - python
 - C
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - Gnuastro
---


#### Description

Gnuastro is primarily written in C because astronomical datasets are large and thus need to be efficient with few dependencies.
Therefore, Gnuastro's most commonly used interface are Gnuastro's command-line programs (that are built on the Unix philosophy).
However, Gnuastro's also has an extensive set of installed, dynamic C/C++ libraries, which are actually the beating heart of all the programs (they do all the number crunching).
On the other hand, many projects today are done in Python, almost excuslively using Numpy for their numerical operations (like data arrays).
Python and Numpy are actually written in C, therefore they have very well-defined interfaces for communicating with installed C libraries.
For example see [the core C library of Numpy](https://numpy.org/doc/stable/reference/c-api/index.html).

As part of GSoC 2022, Jash Shah completed a first implementation of pyGnuastro, see https://github.com/Jash-Shah/pyGnuastro and https://test.pypi.org/project/pygnuastro.
This was mostly focused on the low-level build system (for example to be integrated nicely with PyPi).
With the inclusion of more libraries we discovered that Gnuastro's error reporting also [needs modification](https://savannah.gnu.org/task/?16263) for blending into Python.
Jash also progressed nicely on this front in GSoC 2022, but it is not yet finished.

This project therefore has two components: 1. completing the new error-reporting features of Gnuastro in its own Library. 2. Bringing the Gnuastro libraries into the pyGnuastro.
This will be a wonderful chance to master Python and Scipy/Numpy at a very fundamental level, giving you a great experience to expand what you have learnt afterwards into many other functionalities (far beyond astronomy!).
Of course, in the meantime you will also working on many real-world astronomical data and science scenarios, while collaborating with an international team using ground-based and space-based data.

To get started, check [our GSoC 2023 checklist](https://savannah.gnu.org/support/index.php?110827#comment0).

#### Milestones (if any)

 * Completing [our GSoC 2022 checklist](https://savannah.gnu.org/support/index.php?110827#comment0)

 * Completing the re-design of Gnuastro's error functionality.

 * Adding wrappers for Gnuastro library functions in pyGnuastro.

##### Coding starts

* Learning the new error reporting functionality.

* Implementing the error reporting function in some basic functions.

##### 1st evaluation

* Implementing some of Gnuastro's basic libraries in pyGnuastro (with new error reporting feature).

##### Final evaluation

* Implementing all the necessary library functions in pyGnuastro, and adding high-level functionality to pyGnuastro like Gnuastro's programs.
