---
layout: default
title:  "Ideas for Astropy"
show_main: false
ideas_team: Astropy core package
---

### Implement Distribution Support for Quantity

*Suggested Mentor(s):* Erik Tollerud

*Difficulty:* Beginner to Intermediate

*Astronomy knowledge needed:* none, but statistics knowledge/background useful

*Programming skills:* Python

#### Description

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


### Implement image rasterization methods for models

*Suggested Mentor(s):* Christoph Deil

*Difficulty:* Intermediate

*Astronomy knowledge needed:* Basic

*Programming skills:* Python, Cython

#### Description

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

### Unify and improve file handling

*Suggested Mentor(s):* Michael Droettboom

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

### Implement missing astropy.modeling functionality

*Suggested Mentor(s):* Christoph Deil

*Difficulty:* Intermediate to expert

*Astronomy knowledge needed:* Basic

*Programming skills:* Python

#### Description

Implement some basic features are still missing in the astropy.modeling package:

* Fit parameter errors (symmetric and profile likelihood)
* Poisson fit statistic
* PSF-convolved models
* model parameter and fit result serialisation, e.g. to YAML or JSON or XML (e.g. some astronomers use [XML](http://fermi.gsfc.nasa.gov/ssc/data/analysis/scitools/source_models.html))

For the parameter error and Poisson fit statistic part some statistics background is needed, as well as interest in discussing and finding a good API for these things.

An optional fun application at the end of this project (if model and fit result serialisation is implemented) could be to develop an interactive image fitting GUI (e.g. with IPython widgets in the web browser) for common 2D Astropy models, showing data, model and residual images and letting the user adjust model parameters and display fit statistics and results interactively.

### Implement framework for handling velocities and velocity transforms in astropy.coordinates

*Suggested Mentor(s):* Adrian Price-Whelan & Erik Tollerud

*Difficulty:* Intermediate to Expert

*Astronomy knowledge needed:* understanding of coordinate transformations, some knowledge of astronomical coordinate systems would be useful

*Programming skills:* Python

#### Description

The coordinates subpackage currently only supports transforming positional
coordinates, but it would be useful to develop a consistent framework for also
transforming velocities (e.g., proper motion to proper motion, or proper motion
to cartesian) with full support for barycentric, galactocentric, and LSR
motion. This project could be:

1. working with us to develop a consistent API for handling velocities within coordinates,
2. developing a trial implementation of an API,
3. actually doing core development to implement the new features, or 
4. some combination of all of the above. 
