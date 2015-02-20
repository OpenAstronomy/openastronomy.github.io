---
layout: default
title:  "Ideas for Astropy and Astropy-affiliated packages"
show_main: false
ideas_team: Astropy
---

## Develop an affiliated package for observation planning / scheduling

*Suggested Mentor(s):* Christoph Deil

*Difficulty:* Beginner

*Astronomy knowledge needed:* Intermediate

*Programming skills:* Python

### Description

Now that Astropy can transform from horizontal (altitude/azimuth) to sky
coordinates it’s possible to develop tools for observation planning /
scheduling (see
[here](http://docs.astropy.org/en/stable/coordinates/observing-example.html)
for an example). It would be nice to start developing an affiliated package
that can be used by observers and observatories to plan and schedule
observations. This project could go in a few different directions, including:

* creating typical tables and plots for observation planning
* optimising scheduling of observations for given target lists and telescope slew speed / exposure lengths for a given night or even month / year
* contribute sun / moon rise / set functionality to astropy coordinates
* a desktop or web GUI

The project could start with a look at the functionality of existing tools
and then gather some input on the astropy mailing list what the community
wants. The student should have an interest in coordinates, observations
planning / scheduling and plotting / GUIs.

## Implement Distribution Support for Quantity

*Suggested Mentor(s):* Erik Tollerud

*Difficulty:* Beginner to Intermediate

*Astronomy knowledge needed:* none, but statistics knowledge/background useful

*Programming skills:* Python

### Description

The [Quantity](http://docs.astropy.org/en/stable/units/index.html) class is
powerful but doesn’t have particularly useful support for uncertainties on
quantities or other statistical approaches to thinking about numbers. A very
straightforward way to make progress on this would be to create a subclass of
Quantity called “Distribution” (or similar) that represents a probability
density function of a quantity as Monte-Carlo-sampled arrays. This project would
involve implementing this subclass, propagating operations while combining
distributions, as well as tools for extracting useful information from such
distributions. If there is time, this could also involve expanding this system
to support common analytically-representable distributions such as Gaussian and
Poisson distributions.

## Astropy Acknowledgement/Citation Generator

*Suggested Mentor(s):* Erik Tollerud

*Difficulty:* Beginner to Intermediate

*Astronomy knowledge needed:* none, although some experience with astronomy citation practices might be useful

*Programming skills:* Python and LaTeX/BibTeX

### Description

Some parts of Astropy and affiliated packages use algorithms or tools that have
been published in the scientific literature (this includes Astropy itself). To
encourage citing these works, it would be useful if Astropy had a feature to
allow attaching citations to methods, functions, or packages. This would then
allow a user to simply run a function along the lines of “write_citations” and
have it print or write a file that tells them what papers to cite. Bonus points
if this actually can show BibTeX or LaTeX bibliography entries that can be just
dropped into papers with minimal effort on the part of the user.

## Improve pyregion and pyds9

*Suggested Mentor(s):* Christoph Deil

*Difficulty:* Intermediate

*Astronomy knowledge needed:* Basic

*Programming skills:* Python

### Description

The pyregion package is very useful to work with ds9 and CIAO region files. It
is now at
[https://github.com/astropy/pyregion](https://github.com/astropy/pyregion) but
it is unfinished … someone has to improve and polish it. In particular the
region file parser is very slow (see
[pyregion#48](https://github.com/astropy/pyregion/issues/48) and someone
interested in parsing should find out why and make it fast. There are several
other things to do, e.g. using astropy coordinates everywhere and implementing
tests so that it is compatible with ds9 to a very high accuracy. The package
could also be extended with Python functions to read / write / visualise [MOC
files](http://www.ivoa.net/documents/MOC/) or to unify and [improve the
existing Python interfaces to
[ds9](https://github.com/ericmandel/pyds9/issues/2). The student should be
interested in sky coordinates and regions, parsing, visualisation, writing
tests and docs, and for the ds9 interfaces some Cython coding is probably
needed.

## Revamp astropython.org web site

*Suggested Mentor(s):* Tom Aldcroft

*Difficulty:* Intermediate

*Astronomy knowledge needed:* Basic / none

*Programming skills:* Python, web development (javascript etc)

### Description

The [http://www.astropython.org](http://www.astropython.org) site is one of the
top two generic informational / resource sites about Python in astronomy. This
site uses Google App Engine and is basically all custom code built around the
bloggart engine. Currently it is getting a bit stale for a few reasons:

* There is no good mechanism for guest posting to expand the community of people contributing.
* It is painful to add content because of the antiquated entry interface which now seems to work only on firefox.
* The comment system is lacking (no feedback to comment authors etc).
* The website code itself is convoluted and difficult to maintain / improve

The proposal is to start over with all modern tools to bring fresh energy and involvement into this project.  All details of how to do this to be determined, but one requirement is to migrate all the current content.  Part of this would be re-evaluating current resources as well as digging around to freshen up the resource list.

## Implement image rasterization methods for models

*Suggested Mentor(s):* Christoph Deil

*Difficulty:* Intermediate

*Astronomy knowledge needed:* Basic

*Programming skills:* Python, Cython

### Description

When fitting models to binned data, evaluating the model at the bin centers leads to incorrect results if the model changes significantly within a bin. E.g. think of an image where the point spread function (PSF) only has a width slightly above the pixel size and you want to distinguish small Galaxies from stars.

Currently Astropy models have an ``evaluate`` method that can be used to
evaluate them on a grid of pixel centers, there’s also an oversampling function
to get a better representation of the expected flux in pixels. It would be
useful to add methods that allow fast and precise rasterization of models,
similar to what graphics libraries do (sparse subsampling or resampling of
models evaluated on grids that are appropriate for each model, or
anti-aliasing).

There are different options for how to proceed with this project, e.g. possibly
add optional extension, sampling grid and bounding box information to the
Astropy model classes, or contribute rasterisation code to
[astropy.modeling](http://docs.astropy.org/en/stable/modeling/index.html) or
photutils, or expand the existing resampling code in the
[reproject](https://github.com/astrofrog/reproject/) package. The student
should be interested in model fitting and image rasterisation as well as
profiling and extensive testing of a given method to make it “just work” for
the end user.

## Unify and improve file handling

*Suggested Mentor(s):* Michael Droettboom

*Difficulty:* Intermediate to Expert

*Astronomy knowledge needed:* none

*Programming skills:* Python, Unix features

### Description

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

## Implement framework for handling velocities and velocity transforms in astropy.coordinates

*Suggested Mentor(s):* Adrian Price-Whelan & Erik Tollerud

*Difficulty:* Intermediate to Expert

*Astronomy knowledge needed:* understanding of coordinate transformations, some knowledge of astronomical coordinate systems would be useful

*Programming skills:* Python

### Description

The coordinates subpackage currently only supports transforming positional
coordinates, but it would be useful to develop a consistent framework for also
transforming velocities (e.g., proper motion to proper motion, or proper motion
to cartesian) with full support for barycentric, galactocentric, and LSR
motion. This project could be:

1. working with us to develop a consistent API for handling velocities within coordinates,
2. developing a trial implementation of an API,
3. actually doing core development to implement the new features, or 
4. some combination of all of the above. 



