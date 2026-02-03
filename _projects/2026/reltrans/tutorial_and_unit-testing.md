---
name: Interactive Tutorials and Automated Testing for the Reltrans Code
desc: Create a series of tutorials on how to use the reltrans code and a suite of unit tests
# add a short one line description of your project
requirements:
# Student requirements:
 - Basic Fortran knowledge
 - Implementation of Python code
 - Use of python notebook
difficulty: medium
# How difficult would you consider the project to be: low, medium, high
issues:
# Related issues (if any) to this project.
# Ideally you want at least one that describes the problem it is trying to solve
- Reltrans testing [issue 59](https://github.com/reltrans/reltrans/issues/59)
- Reltrans tutorias [issue 60] (https://github.com/reltrans/reltrans/issues/60)
- The project might also contribute to the [reltrans issue 13](https://github.com/reltrans/reltrans/issues/13)
mentors:
# First person in contact; mentors may change before project starts.
# GitHub or GitLab handles
 - mgullik
 - fjebaker
initiatives:
# The programme under this project wish to run. At the moment only GSOC is available
 - GSOC
project_size:
 - 350 h (Large)
tags:
# Different technologies needed
 - python
 - fortran
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - reltrans
---
## Interactive Tutorials and Automated Testing for the Reltrans Code

### Description

Reltrans is a publicly available, semi-analytical model for X-ray reverberation mapping
of accreting black holes in both Active Galactic Nuclei (AGN) and X-ray binaries.
It can be used to compute both time-averaged spectra and energy-dependent,
Fourier-domain cross spectra, providing an essential tool for interpreting
X-ray timing and spectral observations in high-energy astrophysics.

The core of Reltrans is implemented in Fortran for performance and numerical accuracy.
To improve usability and broaden its user base, Python wrappers have been developed
that allow users to interact with the code through a Python interface.
While this greatly improves accessibility, two key challenges remain:
new users still face a steep learning curve due to the lack of hands-on,
example-driven documentation, and future development is made riskier
by the absence of a comprehensive automated test suite.

This project aims to address both issues by creating a structured series of
interactive tutorials and by developing a robust unit testing framework.
The tutorials will be written in a Python notebook style and will demonstrate
how to use the Python wrappers to access and control the underlying Fortran code.
They will guide users from installation and basic usage to more advanced scientific workflows,
emphasizing reproducibility and clarity.
At the same time, the project will introduce systematic unit tests
that validate the code outputs, making the codebase safer to modify and easier to maintain.

By improving documentation and testing simultaneously,
this project will significantly lower the barrier to entry for new users,
while also benefiting developers by enabling confident refactoring and extension of the code.
In the long term, these improvements will enhance the sustainability of
Reltrans as a community-driven scientific software package.

### Project Milestones

#### Coding starts

* Familiarization with the Reltrans codebase, including the Fortran core and existing Python wrappers
* Review of current documentation and identification of key user workflows
* Design of the tutorial structure and outline of individual Python notebooks
* Setup of the testing framework and definition of testing standards and conventions


#### 1st evaluation

* Delivery of initial Python notebook tutorials covering:
  - Installation and environment setup
  - Basic usage of the Python interface
  - Core functionality and typical analysis workflows
* Implementation of unit tests for the most critical components of the Python wrappers
* Initial integration of tests into the existing development workflow


#### Final evaluation

* Completion of the full tutorial series, including advanced usage examples and best practices
* Expanded unit test coverage, including edge cases and regression tests
* Documentation for contributors explaining how to extend both the tutorials and the test suite
* Final code cleanup and preparation for long-term maintenance
