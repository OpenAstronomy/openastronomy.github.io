---
layout: default
title:  "Ideas for yt"
show_main: false
ideas_team: yt
---

All projects in this section are for [yt](https://yt-project.org), an analysis
and visualization environment for particle and mesh-based volumetric data. It
has readers for most astrophysical simulation codes, as well as a few nuclear
engineering simulation codes. It can handle data produced by particle-based
codes, as well data produced by codes that use various types of mesh structures,
including uniform and adaptively refined meshes as well as unstructured and
semistructured meshes. yt is able to analyze and visualize these datasets with
substantially different on-disk and in memory formats using a common language.

To learn more about how to use yt to interact with simulation data, take a look
at the [quickstart guide](http://yt-project.org/doc/quickstart/index.html), as
well as the rest of [the yt documentation](http://yt-project.org/doc). We also
provide [a listing of sample test datasets](http://yt-project.org/data) that can
be loaded by yt. We use a variety of
[public communication channels](http://yt-project.org/community.html), including
mailing lists, IRC, and a slack channel that can be joined by anyone interested
in yt development.

For more information about contributing to yt, take a look at our
[developer guide](http://yt-project.org/docs/dev/developing/index.html). To see
discussions about past yt projects, take a look at the yt enhancement proposal
(YTEP) [listing](https://ytep.readthedocs.org).

### Integrate yt plots with interactive matplotlib backends

*Suggested Mentor(s):* [Nathan Goldbaum](https://bitbucket.org/ngoldbaum),
 [Matthew Turk](https://bitbucket.org/MatthewTurk/)

*Difficulty:* Intermediate

*Knowledge needed:* Familiarity with matplotlib. Knowledge of matplotlib's
 object oriented API a plus.

*Programming skills:* Python. GUI programming.

#### Description

Currently, all yt plotting objects have a `show()` method that
displays [a version of the plot in Jupyter notebooks](https://gist.github.com/f36b29c340e8516eeae2). This works for the most
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

*Deliverables:*

* A proof of concept demonstrating how to hook into matplotlib's interactive
  backends using the matplotlib object-oriented API, or a way to show how to
  gracefully fall back to using pyplot instead of the object oriented API.

* A [YTEP](https://ytep.readthedocs.org) describing the proposed approach for
  modifying yt's plotting infrastructure to support matplotlib's interactive
  plotting backends.

* The implementation for the YTEP submitted as a bitbucket pull request to the
  main yt repository.

### Improve test coverage and test performance

*Suggested Mentor(s):* [Kacper Kowalik](https://bitbucket.org/xarthisius),
 [Nathan Goldbaum](https://bitbucket.org/ngoldbaum)

*Difficulty:* Beginner to Advanced, depending on where the student takes the
 project

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
  with untested or undertested parts of the codebase and add new
  tests. Optimally the new tests will make use of new reusable infrastructure
  that will be helpful for tests across the yt codebase.

* Improve volume rendering and visualization unit tests. Right now visualization
  tests rely heavily on answer testing and image comparison. It would be more
  flexible and easier to understand when things go wrong if the tests instead
  compared with a predicted answer using some sort of simplified geometry or via
  introspection.

*Deliverables*:

* Develop a framework for measuring test covering in yt's python and cython
  components. Triage the reports to look for areas that are user facing and have
  poor test coverage.

* Make a number of pull requests adding tests across the yt codebase.

* Modify existing testing infrastructure or develop new test infrastructure to
  improve testing of yt functionality on different data types.

### Domain contexts and domain-specific fields

*Suggested Mentor(s):* [Britton Smith](https://bitbucket.org/brittonsmith),
 [Matthew Turk](https://bitbucket.org/matthewturk)

*Difficulty:* Beginner to Intermediate

*Knowledge needed*: Undergrad level Physics knowledge. More specific
 domain-specific knowledge of astronomy, hydrodynamics, finite-element methods,
 GIS, meteorology, geophysics, oceanography a plus

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

*Deliverables:*

* For each of the existing frontends, identify the relevant field
  plugins. Create a data structure to associate with each frontend that lists
  only the relevant plugins. Take the field plugin loading machinery, which
  currently just loops over all plugins, and have it only load plugins relevant
  to the loaded frontend.

* With the above as an example, identify and document all of the places in the
  code where the domain is assumed to be astronomy. Use this to come up with a
  set of attributes that minimally describe a scientific domain, i.e., list of
  field plugins, unit system, etc.

* Write up a [YTEP](https://ytep.readthedocs.org) describing the proposed design
  and ideas for implementation. Should identify an initial set of domain
  contexts, sort fields into domain contexts, and sketch how frontends should
  declare needed domain contexts.

* Create a domain context class with the identified attributes. Implement an
  Base, astronomy, and possibly a nuclear engineering domain context and
  associate it with the existing frontends.
