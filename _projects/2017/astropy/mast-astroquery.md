---
name: Add MAST Functionality to astroquery
desc: Implement a module to access Space Telescope datasets from the MAST
requirements:
 - Python
 - Basic understanding of web queries and APIs
difficulty: low
issues:
 - https://github.com/astropy/astroquery/issues/226
mentors: 
 - keflavich
 - eteq
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

The Space Telescope Science Institute maintains a data archive called the
Mikulski Archive for Space Telescopes (MAST). This archive holds data from many
NASA astronomy missions, most notably images from the Hubble Space Telescope.
Currently the only way to access this archive is through
the [MAST web site](https://archive.stsci.edu/). In the coming months, however,
the MAST group intends to document the web APIs the MAST web site uses. With
those APIs in place, it will be possible to implement a Python module to access
MAST datasets. [astroquery](http://astroquery.readthedocs.io/), an astropy
affiliated package, is the ideal place to put such a module, as it already has a
lot of the frameworks and tools to make this sort of module possible and easy to
use. So the aim of this project will be to implement just such a module. A
*possible* set of milestones in this project might be:

1. Research/understand the MAST API sufficiently to determine who the following goal can be achieved.
2. Determine the best interface to download Hubble Space Telescope ACS imaging
3. Create an astroquery module to actually implement that interface
4. Add tests to ensure the module works correctly
5. Generalize that architecture to extend to other imaging data products
6. (Stretch goal) Add a module to do all the same as the above, but with *spectroscopic* data sets

Since this project relies on upstream API development for MAST, the alternative
project would be to create astroquery modules of other yet missing Archives. A
list of new services that have been suggested by our
users
[can be found here](https://github.com/astropy/astroquery/issues?q=is%3Aissue+is%3Aopen+label%3A%22New+Service%22) and
in [this summary issue](https://github.com/astropy/astroquery/issues/226).
