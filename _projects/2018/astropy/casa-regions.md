---
name: CASA CRTF region file handling
desc: Implement a parser for CASA CRTF region files
requirements:
 - Python
difficulty: low
issues:
 - https://github.com/astropy/regions/issues/119
mentors:
 - keflavich
 - migueldvb
initiatives:
 - GSOC
tags:
 - python
 - regions
 - astropy
collaborating_projects:
 - astropy
 - regions
---

#### Description

Astropy's [regions](https://github.com/astropy/regions/) affiliated package is being developed to handle description and manipulation of regions on the sky and in images.
The current regions package has support for the most commonly used region specification, ds9 regions, but does not yet support the CASA CRTF format.
CASA is the main package for radio interferometry data reduction and processing.
CASA regions are mostly compatible with and translatable to ds9 regions and other formats, but the only parser that presently exists lives within CASA.
Details about the CASA region parser are linked from the [associated issue](https://github.com/astropy/regions/issues/119).


Some milestones for this project will be:

1. Implementation of basic region reading without metadata
2. Implementation of metadata reading
3. Creation of a test suite that tests against CASA's internal region parser
4. Implementation of a CRTF writer
5. Implementation of cube regions, which are supported by CRTF but presently not incorporated into astropy-regions.
