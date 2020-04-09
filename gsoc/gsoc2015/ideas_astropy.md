---
layout: default
title:  "Ideas for Astropy"
show_main: false
ideas_team: Astropy core package
---

### Implement Distribution Support for Quantity

*Suggested Mentor(s):* [Erik Tollerud](http://github.com/eteq)

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

*Suggested Mentor(s):* [Christoph Deil](http://github.com/cdeil)

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
[reproject](https://github.com/astropy/reproject/) package. The student
should be interested in model fitting and image rasterisation as well as
profiling and extensive testing of a given method to make it “just work” for
the end user.

### Add indexing capability to Table object

*Suggested Mentor(s):* Tom Aldcroft (Astropy), Stuart Mumford (SunPy)

*Difficulty:* Intermediate

*Astronomy knowledge needed:* none

*Programming skills:* Python, Cython, familiarity with database algorithms

#### Description

The [Table](http://docs.astropy.org/en/stable/table/index.html) class is the
core astropy class for storing and manipulating tabular data.  Currently it
supports a limited set of database-like capabilities including table joins and
grouping.  A natural extension of this is to provide the ability to create and
maintain an index on one or more columns as well as a table primary key.  With
these indexed columns available then certain selection and query operations
could be highly optimized.  The challenge is to maintain the integrity of the
indexes as column or table properties change, using state of the art algorithms
for high performance.

There are various uses of this functionality, such as supporting
time series data, where the index column would allow you to sort the
Table correctly as well as performing operations such as truncations
and merges while maintaining the integrity of the time series.
Other uses include catalogs of positions in the night sky where an
index column of astropy coordinate objects would maintain the
uniqueness of every position.

To summarize:

- Add method to create an index for a specified column
- Add code to maintain these indexes when the table is modified
- Add method to designate a column as a primary key (possibly maintaining
  table in sort order for that key)
- Optimize existing table operations to use indexes where possible
- Add new methods to select table rows based on column values

### Unify and improve file handling

*Suggested Mentor(s):* [Michael Droettboom](http://github.com/mdboom)

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

*Suggested Mentor(s):* [Christoph Deil](http://github.com/cdeil)

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

*Suggested Mentor(s):* [Adrian Price-Whelan](http://github.com/adrn) & [Erik Tollerud](http://github.com/eteq)

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

### Implement Public API for ERFA

*Suggested Mentor(s):* [Erik Tollerud](http://github.com/eteq)

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

