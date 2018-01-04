---
name: Add additional archives to astroquery
desc: Implement module(s) to access currently unsupported astronomical archives using astroquery.
requirements:
 - Python
 - Basic understanding of web queries and APIs
difficulty: low
issues:
 - https://github.com/astropy/astroquery/issues/226
mentors:
 - keflavich
 - bsipocz
 - pllim
initiatives:
 - GSOC
tags:
 - python
 - astropquery
collaborating_projects:
 - astropy
 - astroquery
---

#### Description

[astroquery](http://astroquery.readthedocs.io/), an astropy
affiliated package, is a package to place modules that access astronomical data
that is onlone. The aim of this project will be to implement just such modules,
for a variety of astronomical archives that are currently lacking astroquery modules.
A list of new services that have been suggested by our users
[can be found here](https://github.com/astropy/astroquery/issues?q=is%3Aissue+is%3Aopen+label%3A%22New+Service%22) and
in [this summary issue](https://github.com/astropy/astroquery/issues/226).


A *possible* set of milestones for any particular one of these modules  might be:

1. Research the web API for the archive sufficiently to determine what exactly astroquery should expose.
2. Determine the best interface to access the simplest subset of that archive that would be useful.
3. Create an astroquery module to actually implement that interface.
4. Add tests to ensure the module works correctly.
5. Generalize that architecture to extend to other data products from the archive - e.g. repeat 1-4 until all useful functionality in the module is complete.
