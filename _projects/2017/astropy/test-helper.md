---
name: Astropy Test Helper as a Separate Package
desc: Re-implement Astropy Test Helper as Separate Installable Package
requirements:
 - Python packaging experience.
 - familiarity with pytest
difficulty: Intermediate to Advanced
issues:
 - https://github.com/astropy/astropy/pull/5770
mentors: 
 - pllim
 - bsipocz
 - Cadair
initiatives:
 - GSOC
tags:
 - python
 - astropy
 - pytest
collaborating_projects:
 - astropy
---

#### Description

Astropy's test helper (inside `astropy.tests`) is very useful. There are some
packages that do not want to use `astropy-helpers` submodule nor Astropy's
package template, but could use its test helper very much. It seems natural to
extract the test helper into a new package on its own, so any developer can take
advantage of its extra `pytest` features (e.g., remote data, doctest, etc).
Currently, the test helper uses other utility functions from `astropy.utils` and
Astropy logging. Ideally, this new package would be a complete standalone. This
project would be to explore ways to re-package Astropy test helper as a
standalone package that is not dependent on Astropy, and make it happen.
