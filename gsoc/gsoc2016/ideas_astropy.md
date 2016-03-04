---
layout: default
title:  "Ideas for Astropy"
show_main: false
ideas_team: Astropy
---

If you are interested in one of the following Astropy Project ideas please see
the [Astropy GSoC 2016 Guidelines](https://github.com/astropy/astropy/wiki/GSoC-2016-Guidelines)
for additional information that is specific to Astropy.

### Implement Scheduling capabilities for Astroplan

*Suggested Mentor(s):* [Erik Tollerud](http://github.com/eteq), [Eric Jeschke](https://github.com/ejeschke), [Josh Walawender](https://github.com/joshwalawender)

*Difficulty:* Beginner to Intermediate

*Astronomy knowledge needed:* Basic understanding of how astronomy observations work, practical experience a plus

*Programming skills:* Python

#### Description

The [astroplan](http://astroplan.readthedocs.org/en/latest/) affiliated package is an Astropy affiliated package that provides tools for planning observations.
One valuable feature that astroplan could provide is basic scheduling capabilities for an observing run.
Many large observatories have their own schedulers, but this package would be targeted at the needs of the typical individual or small-collaboration observing run.
While some initial efforts have occurred, this project would involve expanding those efforts into a full-fledged API and implementing both the interface and the actual scheduler(s).


### Ephemerides for Solar System objects in Astropy

*Suggested Mentor(s):* [Marten van Kerkwijk](mhvk), [Erik Tollerud](http://github.com/eteq)

*Difficulty:* Beginner to Intermediate

*Astronomy knowledge needed:* Some understanding of astronomical coordinate systems, basic knowledge of solar system dynamics (or ability to learn as-needed to implement the specific algorithms required)

*Programming skills:* Python, some knowledge of C might be helpful

#### Description

An often-requested missing feature in Astropy is the ability to compute ephemerides: the on-sky location of Solar System objects like the planets, asteroids, or artificial satellites.  This project would involve implementing just this feature. This will likely *start* with implementing a `get_moon` function similar to the existing `get_sun` to familiarize the student with the important concepts in the `astropy.coordinates` subpackage.  The larger part of the project will likely involve using the orbital elements that the JPL Solar System dynamics group has already complied (there is already a package to read these files: [JPLEphem](https://pypi.python.org/pypi/jplephem)), and translate those into  the Astropy coordinates framework.  The student will implement these algorithms and also collaborate with the mentors and Astropy community to develop an API to access this machinery.


### Unify and improve file handling

*Suggested Mentor(s):* [Tom Aldcroft](http://github.com/taldcroft), [Thomas Robitaille](http://github.com/astrofrog)

*Difficulty:* Intermediate to Expert

*Astronomy knowledge needed:* none

*Programming skills:* Python, Unix features

#### Description

We have a number of packages that read and write data to files and file-like
objects. While there was some initial effort to unify this code in
[get_readable_fileobj](http://docs.astropy.org/en/stable/api/astropy.utils.data.get_readable_fileobj.html#astropy.utils.data.get_readable_fileobj) and others, in general each package
is handling its own file I/O. This sort of code is notoriously difficult to get
right across versions of Python and the different platforms we support, so it
would be beneficial to remove this duplication. This also means that some
features, such as gzip handling or URL handling, are not universally available
or inconsistent across packages. Once this is unified, we can move on to some
more advanced features that don’t exist anywhere in astropy, such as HTTP Range
fetching (see [astropy/#3446](https://github.com/astropy/astropy/issues/3446),
and OS-level file locking to make multiprocessing applications that write to
files more robust.


### Implement Public API for ERFA

*Suggested Mentor(s):* [Erik Tollerud](http://github.com/eteq), [Tom Aldcroft](http://github.com/taldcroft)

*Difficulty:* Intermediate to Expert

*Astronomy knowledge needed:* None required, but may be helpful for understanding ERFA functionality

*Programming skills:* Python, Cython, C

#### Description

Some of the major functionality for Astropy uses the ERFA C library (adapted from the IAU SOFA library) as the back-end for
computational "heavy-lifting".  Members of the community have expressed a desire to use this lower-level python wrapper
around ERFA for other purposes that may not be directly relevant for Astropy.  So this project would involve making the
necessary changes to make the ERFA python API public.  This includes:

* Getting the documentation up to the astropy standard (currently it is mostly auto-generated verbatim from the C comments).
* Implementing a more complete test suite for the python side of the code.
* Possibly moving it to a separate package as part of the liberfa GitHub organization.  This would also include making the necessary
  changes to ensure everything continues to work in Astropy.
* Any other steps necessary to ensure the resulting package (or sub-package of Astropy) is stable and relatively easy to use.


### Web development for Gammapy

*Suggested Mentor(s):* [Christoph Deil](https://github.com/cdeil), [Johannes King](https://github.com/joleroi)

*Difficulty:* Intermediate to Expert

*Astronomy knowledge needed:* None.

*Programming skills:* Scientific python (Numpy, Scipy, Astropy), Web development (Python backend, Javascript frontend)

#### Description

[Gammapy](https://gammapy.readthedocs.org/en/latest/) is a Python package for
professional gamma-ray astronomers. We are looking for a web developer with good
Python, HTML and Javascript skills that is interested in building web pages and
apps to display and browse gamma-ray data and maybe even launch Gammapy
analyses. There's a few different projects we'd like to see realised, depending
on your interests and skills. One option is to build a much-improved version of
[TeVCat](http://tevcat.uchicago.edu/) (a TeV catalog browse web page), that
includes more image and catalog data and interactivity (maps that pan & zoom,
search field for source name) with the general public as well as professional
gamma-ray astronomers as the target. This project would mostly be front-end
development, plus Python scripts to prepare the images and catalogs in suitable
formats. Another option is to write several small static site generator scripts
or Python web apps that let us browse the gamma-ray data and analysis results,
basically a web GUI for Gammapy. That project would mostly be Python web app
development, and you have to learn a bit more about Gammapy before GSoC starts.


### Data analysis for Gammapy

*Suggested Mentor(s):* [Christoph Deil](https://github.com/cdeil), [Johannes King](https://github.com/joleroi)

*Difficulty:* Intermediate to Expert

*Astronomy knowledge needed:* Some, e.g. sky coordinates and projections.
Experience with X-ray or gamma-ray data analysis (e.g. Fermi-LAT) is a plus, but not a requirement.

*Method knowledge needed:* Some experience in data analysis (e.g. images, regions) and statistics (e.g. Poisson noise).

*Programming skills:* Python (including pytest and Sphinx) and scientific python (Numpy, Scipy, Astropy)

#### Description

[Gammapy](https://gammapy.readthedocs.org/en/latest/) is a Python package for
professional gamma-ray astronomers. We are looking for someone that's interested
towork on a few distinct data analysis tasks, each taking a few weeks of the
GSoC total time. Gammapy is a very young project, and there's a lot to do.
Examples of what needs to be done include implementing new algorithms (e.g.
image reprojection, source detection, region-based analysis), bringing existing
prototype algorithms to production (improve API and implementation, add tests
and docs) as well as grunt work that's needed to go towards production quality
and a Gammapy 1.0 release this fall (e.g. set up continuous integration for
example IPython notebooks or adding more tests). To get an idea of what is going
on in Gammapy and what still needs to be done, please check out the project on
Github (https://github.com/gammapy/gammapy) and browse the documentation a bit
(or try out the examples) and if this looks interesting to you, send us an email
and let us know what your skills and interests are.

### Implement PSF photometry for fitting several overlapping objects at once

*Suggested Mentor(s):* [Moritz Guenther](https://github.com/hamogu), [Brigitta Sipocz](https://github.com/bsipocz)

*Difficulty:* Intermediate to Expert

*Astronomy knowledge needed:* basic understanding of what photometry is

*Programming skills:* Python

#### Description

The [photutils](http://photutils.readthedocs.org/en/latest/) package is an Astropy affiliated package that provides tools for photometry (measuring how bright a source is).

There are several ways to do photometry and the package currently implements aperture photometry (just add up all the flux in an image in some some area) and single source point-spread-function (PSF) fitting (fit a function such as a Gaussian to the image). In many situations, sources may overlap in the image, e.g. when observing a dense star cluster, so that we need to fit many functions at once. However, the simple brute-force approach "just fit a model with hundreds of parameters" if there are hundreds of stars usually fails.

This project includes looking at other astronomy codes to see how they tackle the problem; select, modify and improve an algorithm that fits into the astropy modelling framework; implement this in python; and, if it turns out that speed is a problem, move speed-critical parts to Cython. To verify that the new code works, we will compare it to the solutions of established PSF photometry codes.

See https://github.com/OpenAstronomy/openastronomy.github.io/pull/27 for a discussion of some problems and possible solutions that will be addressed in this project.


### Bridge sherpa and astropy fitting

*Suggested Mentor(s):* D. Burke, T. Aldcroft, H. M. Guenther

*Difficulty:* Expert or better

*Astronomy knowledge needed:* fitting functions and statistics

*Programming skills:* Python, C, Cython

#### Description


Both astropy and Sherpa (https://github.com/sherpa/sherpa/) provide modelling and fitting capabilities; however, Sherpa's features are way
more advanced. Sherpa provides far more build-in models, a larger choice of optimizers and a real variety
of fit statistics.
Unfortunately Sherpa is less well known and for historical reasons the object-oriented user interface is less polished than the functional state-based interface.
The main goal is the bring Sherpa's optimizers and fit statistic functions to astropy; the stretch goal is
to develop a bridge between both packages such that a user can use a astropy models completely
interchangably with Sherpa models and fitters. Sherpa models should look like astropy models to astropy
to enable situations where the model can be made out of three components (a user defined model, an astropy model
and a Sherpa model) and this is then fitted to astropy data using the Sherpa fitters.

This project requires the student to get proficient in two major packages (Not an easy task!), but with code written in
just a few weeks of GSoC it will give astropy users access to fitting capabilites that required many years of developer time
and that are unfeasable redevelop from scratch.


### Enhancements to Ginga, a Toolkit for Building Scientific Image Viewers

*Suggested Mentor(s):* [Eric Jeschke](https://github.com/ejeschke), [Pey-Lian Lim](https://github.com/pllim), [Nabil Freij](https://github.com/nabobalis)

*Difficulty:* Beginning to Advanced, depending on project choices

*Astronomy knowledge needed:* Some, depending on project choices

*Programming skills:* Python and scientific python (Numpy, Scipy, Astropy), git version control

*Desirable:* OpenCL, Javascript/web sockets, C/C++ programming, experience in image or array processing, concurrent programming, experience in using GUI toolkits, github-based workflow

#### Description

[Ginga](https://ejeschke.github.io/ginga/) is a toolkit for constructing scientific image viewers in Python, with an emphasis toward astronomy. Ginga is being used at a number of observatories and institutes for observation and instrument control, quick look, custom data reduction and analysis tasks. The general aim is to build upon this toolkit improving its current features and to expand this toolkit in order for scientists to be able to easily accomplish preliminary data analysis.

We are looking for an individual to work on a few select project areas, depending on skill level and interest. Each project area itself would form a small part of the overall GSOC project. Essentially it would be a large pick and mix but do not let this put you off. This method would allow a range of different contributions to be made the Ginga toolkit that are for your choosing.

Beginning-level:
* Improve and expand Ginga's unit test suite and coverage
* Improve documentation and tutorials, including via Jupyter notebooks and video voice-overs
* Improve our "native app" packaging for Mac, Unix and Windows
* Improving LineProfile and Slit plugins
* Enhance existing plugins by adding GUIs for some common tasks like configuring catalog sources, which are currently done by editing config files
* Add support for loading broken FITS files by ["fingerprinting" them] (https://github.com/ejeschke/ginga/issues/205)

Intermediate-level:
* Improve Ginga backends for web browsers (native javascript/web sockets and/or Jupyter notebooks and/or Bokeh server)
* Enhancements to "traditional" GUI backends (e.g. add support for gtk3, AGG support for python 3, improvements to Qt-based widgets)
* Graft the astropy-helpers package into Ginga
* Adding support for calculating approximate line-of-sight velocities
* Enhance existing plugins for data analysis tasks, usually featuring astropy or affiliated packages

Advanced-level:
* Implement an OpenCL module that leverages CPU and GPU resources for accelerating some common image processing operations (scaling, transformations, rotations) on numpy image arrays. Benchmark against current CPU based solutions.
* Improving IO speeds by optimizing use of astropy.fits.io/cfitsio/numpy, lazy reads, file caching hints, optimizing concurrency, etc.
* Adding support for a binary file format used by a very popular ground-based solar telescope and extending it to support Stokes data products

If you are interested in working on any of these aspects, or want to propose some other work on Ginga, please sign in to Github and comment on [Assist the Ginga Project](https://github.com/ejeschke/ginga/issues/287).
