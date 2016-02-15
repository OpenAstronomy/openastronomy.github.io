---
layout: default
title:  "Ideas for yt"
show_main: false
ideas_team: yt
---

### Integrate yt plots with interactive matplotlib backends

*Suggested Mentor(s):* Nathan Goldbaum

*Difficulty:* Intermediate

*Knowledge needed:* Familiarity with matplotlib. Knowledge of matplotlib internals a plus

*Programming skills:* Python. GUI programming.

#### Description

Currently, all yt plotting objects have a `show()` method that currently
displays a version of the plot in Jupyter notebooks. This works for the most
part and is relatively simple due to Jupyter's data model. However, this
reliance on the notebook fails for users who work primarily from the command
line, either in the vanilla python interpreter or the IPython command line
application. We receive many requests from confused users who do not understand
why `show()` errors out in the regular python interpreter or appears to do
nothing in `IPython`, when they expect a GUI window to pop up when they run
`show()`.

This project would have a student modify yt's plotting objects to hook into
matplotlib's interactive backends so that plots can be optionally displayed
using a GUI plotting window. Optimally, we would also enable callbacks so that
zooming and selecting does the "right thing", generating high resolution data
when it is available.

This is constrained by maintaining backward compatibility: by default yt should
not fail when generating plots on headless devices (e.g. when connecting over
SSH to a supercomputer).



### Testing improvements

*Suggested Mentor(s)"* Kacper Kowalik, Nathan Goldbaum

*Difficulty:* Beginner to Advanced, depending on where the student takes the project

*Knowledge needed*: Familiarity with the `nose` testing package.

*Programming skills:* Python, Cython

#### Description

Currently yt's test suite is split between unit tests (which take about 45
minutes to run) and answer tests, which are normally only run on a continuous
integration server. Altogether the tests only cover about a third of the yt
codebase, so much of the code in yt needs test coverage.  Additionally, the
tests take a long time to run, and we would like to reduce the test runtime
while simultaneously increasing code coverage.

This project could go in a number of directions:

* Implement a way to retrofit the current tests for different geometries
  (e.g. cartesian, cylindrical, and spherical coordinates) and data styles
  (e.g. particle data, as well as various kind of mesh data, including uniform
  resolution, octree, patch AMR, and unstructured meshes). Ideally this would
  allow us to test all functionality for all possible data styles. This will
  require learning and improving the "Stream" frontend, which allows the
  injestion of in-memory data into yt.

* Identify areas of the code that are not well tested and devise tests for
  them. This will require measuring the test coverage of yt's Python and
  Cython components. The student working on this will need to gain familiarity
  with untested or udnertested parts of the codebase and add new
  tests. Optimally the new tests will make use of new reusable infrastructure
  that will be helpful for tests across the yt codebase.

* Improve volume rendering and visualization unit tests. Right now visualization
  tests rely heavily on answer testing and image comparison. It would be more
  flexible and easier to understand when things go wrong if the tests instead
  compared with a predicted answer using some sort of simplified geometry or via
  introspection.

### Domain contexts and domain-specific fields

*Suggested Mentor(s)"* Britton Smith

*Difficulty:* Beginner to Intermediate

*Knowledge needed*: Undergrad level Physics knowledge. More specific domain-specific knowledge of astronomy, hydrodynamics, finite-element methods, GIS, meteorology, geophysics, oceanography a plus

*Programming skills:* Python

The original focus of yt was to analyze datasets from astrophysical
simulations.  However, use of yt has been expanding to other
scientific domains, such as nuclear physics, meteorology, and
geophysics.  Still, much of the infrastructure within yt is built upon
the assumption that the datasets being loaded are astrophysical and
hydrodynamic in nature.  This assumption informs the choice of derived
fields made available to the user as well as the default unit system.
For example, fields such as "Jeans mass" and "X-ray emissivity" in CGS
units are of little use to an earthquake simulation.

The goal of this project is to develop a system for domain contexts,
sets of fields and unit systems associated with specific scientific
domains.  Rather than having all fields be made available to all
datasets, each dataset is given a domain context, which specifies the
relevant fields and most meaningful unit system.  Domain contexts
could also be subclassed to provide further specificity, for example,
cosmology as a subclass of astrophysics.
