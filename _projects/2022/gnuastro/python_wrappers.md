---
name: Gnuastro library in Python
desc: Wrappers over the Gnuastro C library to allow usage in Python.
# add a short one line description of your project
requirements:
# Student requirements:
 - Low-level Python and Numpy (their C library).
difficulty: low
issues:
# Related issues (if any)  to this project.
 - https://savannah.gnu.org/task/?13786
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - mohammad-akhlaghi
initiatives:
# The programme under this project wish to run.
 - GSOC
 - SOCIS
project_size:
 - large
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
Therefore, its most commonly used interface are Gnuastro's command-line programs (that are built on the Unix philosophy).
However, Gnuastro's also has an extensive set of installed, dynamic C/C++ libraries, which are the actually beating heart of the programs.
On the other hand, many projects today are done in Python, almost excuslively using Numpy for their numerical operations (like data arrays).
Python and Numpy are actually written in C, therefore they have very well-defined interfaces for communicating with installed C libraries.
Gnuastro therefore plans on adding a low-level wrapper infra-structure which will allow easy usage of Gnuastro's powerful libraries in Python.
Note that this won't involve intermediate wrapper languages SWIG, we will directly link with [the core C library of Numpy](https://docs.scipy.org/doc/numpy-1.10.0/reference/c-api.html).

This will be a wonderful chance to master Python and Scipy/Numpy at a very fundamental level, giving you a great experience to expand what you have learnt afterwards into many other functionalities.
Of course, in the meantime you will also working on many real-world astronomical data and science scenarios using ground-based and space-based data.

To get started, check [our GSoC 2022 checklist](https://savannah.gnu.org/support/index.php?110613#comment0).

#### Milestones (if any)

 * Completing [our GSoC 2022 checklist](https://savannah.gnu.org/support/index.php?110613#comment0)

 * Mastering the C interface of Python/Numpy and Gnuastro.

 * Writing functions to convert Numpy's core data structure to Gnuastro's core data structure and vice-versa.

 * Build and install the Python components as part of the Gnuastro's build.

##### Coding starts

* Learning the numpy C interface and writing small test usages on some basic operations (not necessarily involving Gnuastro).

* Fixing small bugs in Gnuastro's library (as an excuse to learn the programming style and usage of Gnuastro's libraries).

##### 1st evaluation

* Having a working converter between Numpy's data structure and Gnuastro's data structure.

##### Final evaluation

* Adding wrappers to the core lower-level Gnuastro libraries.

* Writing tests and build/install steps of the Python wrappers in Gnuastro's build system.
