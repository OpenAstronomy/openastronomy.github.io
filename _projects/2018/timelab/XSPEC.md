---
name: Python API for XSPEC
desc: Develop a modular python API to use XSPEC (a popular X-ray astronomy tool) in python workflows
requirements:
- Familiar with Fortran and/or C++
difficulty: hard
issues:
- https://github.com/StingraySoftware/stingray/issues/294
mentors:
 - dhuppenkothen
 - abigailStev
initiatives:
 - GSOC
tags:
 - python
 - scipy
collaborating_projects:
 - timelab
---

#### Description

X-ray spectroscopy (measuring and understanding how the brightness of a black 
hole source varies with wavelength of the light) is one of the most important 
ways we learn about the physics of black holes and their companion stars. For 
the past twenty years ago, the main package for X-ray spectroscopy has been 
[XSPEC](https://heasarc.gsfc.nasa.gov/docs/xanadu/xspec/manual/XspecManual.html). 
While other options exist (e.g., [Sherpa](https://github.com/sherpa/sherpa)), 
all of them have one thing in common: 
they provide a convenient, but very rigid user interface. This makes them hard 
to modify or extend without having to change a large amount of the underlying 
source code, something that few scientists are able or willing to do (especially 
since XSPEC is mostly written in C++). However, astronomy is changing, and the 
requirements we have for our software are changing, too! The current software 
environment makes it extremely difficult to build new models and test new ideas, 
and it is very hard to install XSPEC in a shared cluster environment due to a 
legacy of complex software dependencies. This is especially important in the 
context of [Stingray](https://github.com/StingraySoftware): while we have so 
far focused on methods that help us 
explore how the brightness of black hole sources changes with time, we would 
ideally also want to connect this to how the brightness of black hole sources 
changes with energy, and model both at the same time. At the same time, as our 
data sets grow, it is becoming increasingly unrealistic that we will be able to 
analyse our data on conventional desktop computers. None of the current software 
packages allow the user to step outside the few, well-defined commands the user 
interface allows, and installing these packages on large computer clusters is 
exceptionally difficult. This means that successful completion of this project 
would be a big step forward for the entire field of X-ray astrophysics.

For a test of this project by one of our Stingray leads, see
[(dhuppenkothen/clarsach)](https://github.com/dhuppenkothen/clarsach).

#### Deliverables
Deliverables for this project will be:

##### To complete each milestone

+ Working unit tests for each piece of code

+ Documentation for each class, method and function implemented

##### Milestone 1

+ Python bindings to the XSPEC models and an API for access

##### Milestone 2

+ Installation files for the XSPEC models (fortran/C++) and the Python library

##### Final

+ [Example/tutorial notebooks](https://github.com/StingraySoftware/notebooks) 
connecting the models to the 
[Stingray modeling API](https://github.com/StingraySoftware/stingray/tree/master/stingray/modeling)
(in progress)
