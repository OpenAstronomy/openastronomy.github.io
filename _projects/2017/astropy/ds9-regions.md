---
name: Complete the ds9 region file reader/writer
desc: Implement a reader and writer for the ds9 regions file format.
# add a description of your project
requirements:
 - Python
difficulty: low to intermediate
mentors: 
 - keflavich
 - cdeil
initiatives:
 - GSOC
tags:
 - python
 - regions
collaborating_projects:
 - astropy
---

#### Description

ds9 region files are the de facto standard way to specify regions on the sky for
many astronomers. The [regions](https://github.com/astropy/regions) package has
been developed to replace the
dated [pyregion](https://github.com/astropy/pyregion) module. To complete the
transition, we need a fully operational ds9 reader/writer system, including
appropriate metadata. This project will largely entail writing and modifying a
parser and producing the appropriate associated tests. If there is time, a CASA
regions reader/writer will also be developed.
