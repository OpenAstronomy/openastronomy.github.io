---
name: Developing an n-way matcher for Astropy
desc: Develop an Astropy Table compatible n-way matcher of astronomical catalogues
requirements:
 - Python
difficulty: medium
issues:
 - https://groups.google.com/forum/#!topic/astropy-dev/Y8qHC9_I0VI
mentors:
 - manodeep
 - parejkoj
 - bsipocz
initiatives:
 - GSOC
tags:
 - python
 - astropy
collaborating_projects:
 - astropy
 - astronomy-commons

---

#### Description

Processing astronomical images results in large catalogs of sources on the
sky. These catalogs often come from repeated measurements of a patch of sky,
sometimes in different wavelength bands or under different conditions. In
order to compare measurements of the same object, these catalogs have to be
cross-matched by their sky positions, a non-trivial calculation involving
spherical geometry. Various codes currently exist to perform this
cross-matching, but they cannot be easily used to match catalogs stored as
Astropy Tables. The goal of this project is to build a user-friendly
interface on top of an existing n-way matching algorithm, to allow
cross-matching of millions of objects in a few seconds or less. Development
of the module is preferably done outside of the astropy core package to
allow a quick and flexible development cycle, however the API should be
suitable for integration into the core package.
