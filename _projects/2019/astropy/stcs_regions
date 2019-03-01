---
name: STC-S regions
desc: Implement the STC-S regions standard in astropy/regions
# add a short one line description of your project
requirements:
# Student requirements:
 - Python
difficulty: low
issues:
# Related issues (if any)  to this project.
 - https://github.com/astropy/regions/issues/21
mentors:
# First person in contact; mentors may change before project starts.
 - keflavich
initiatives:
 - GSOC
tags:
# Different technologies needed
 - python
 - regions
 - astropy
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - astropy
 - regions
---

#### Description

Astropy's [regions](https://github.com/astropy/regions/) affiliated package is being developed to handle description and manipulation of regions on the sky and in images.
STC-S "Space-Time Coordinate (STC) Metadata" is a specification for a string representation of regions on the sky.
It is similar to ds9 and CASA regions in that it has a well-defined standard.
The goal of this project is simply to implement this language into astropy-regions.
The complete project will involve writing input-output tools including a parser and a serializer.
It will include a suite of tests, including round-trip tests to and from the CRTF and ds9 region formats.
There is a good deal of code [already written](https://github.com/at88mph/opencadc_stc/tree/master/opencadc_stc) that may be portable into astropy-regions.

#### Milestones (if any)

1. Implementation of basic region reading
2. Implementation of a writer
3. Roundtrip testing with CRTF, DS9
4. Tests against existing implementations
5. Expansion of 3D support for STC-S and CRTF regions
