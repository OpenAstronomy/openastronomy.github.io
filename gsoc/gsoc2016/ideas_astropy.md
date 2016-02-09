---
layout: default
title:  "Ideas for Astropy"
show_main: false
ideas_team: Astropy
---

### Implement Scheduling capabilities for Astroplan

*Suggested Mentor(s):* Brett Morris, Eric Jeshke, Christoph Deil, Erik Tollerud

*Difficulty:* Beginner to Intermediate

*Astronomy knowledge needed:* Basic understanding of how astronomy observations work, practical experience a plus

*Programming skills:* Python

#### Description

The [astroplan](http://astroplan.readthedocs.org/en/latest/) affiliated package is an Astropy affiliated package that provides tools for planning observations.
One valuable feature that astroplan could provide is basic scheduling capabilities for an observing run.
Many large observatories have their own schedulers, but this package would be targeted at the needs of the typical individual or small-collaboration observing run.
While some initial efforts have occurred, this project would involve expanding those efforts into a full-fledged API and implementing both the interface and the actual scheduler(s).




### Unify and improve file handling

*Suggested Mentor(s):* TBD

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

