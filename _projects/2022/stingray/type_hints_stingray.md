---
name: Type hints in Stingray
desc: Using type hints throughout the Stingray library
# add a short one line description of your project
requirements:
# Student requirements:
 - Knowledge of Python
difficulty: easy
issues:
# Related issues (if any)  to this project.
 - https://github.com/StingraySoftware/stingray/issues/544
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - matteobachetti
 - dhuppenkothen
initiatives:
# The programme under this project wish to run.
 - GSOC
project_size:
 - 175 h
tags:
# Different technologies needed
 - python
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - stingray
---
Implementing type hints in the Stingray library

#### Description

Despite being and remaining a dynamically-typed language, Python has
now a [working infrastructure for type hints](https://www.python.org/dev/peps/pep-0484/).
For a data analysis library, type hinting can be very useful to avoid explicit testing
for data types and to facilitate debugging.


#### Milestones (if any)

##### Coding starts

* Take confidence with the Stingray infrastructure.
* Start implementing type hints in the core modules of Stingray

##### 1st evaluation

* Create tests to enforce type checking in selected methods
* Extend the type hints infrastructure to most of the code base

##### Final evaluation

* Finish up, polish, and document properly
