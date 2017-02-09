---
name: Seamless Combination of SkyCoord, Table, WCS, and FITS
desc: 
requirements:
 - Python
 - Some familiarity with FITS files
difficulty: intermediate
issues:
 - https://github.com/astropy/astropy/issue/5626
mentors: 
 - ghost
initiatives:
 - GSOC
tags:
 - python
 - astropy core
collaborating_projects:
 - astropy
---

#### Description

Here is a common astronomical problem: I have a table with objects on the sky, each of which has a flux and an observation time. I match them with some other photometric  catalog and them compute certain values (e.g. the mass, the age and the accretion rate). I store all that in the table. Astropy offers a lot of classes to make this easier, for example coordinates that know how to transform between different coordinate systems.
Once I write my publication, I need to store that table as a fits file and print it out to LaTeX. This is where the problem comes: Each of the special objects (coordinates, times, units) has metadata that does not easily fit into the data column.

Astropy grew out of several independent pacakges (pyfits, asciitable) that each did one thing well, but were not very easy to interoperate. Astropy has (mostly) unified the interface, but functionally components still work separately. In this project, you will makes things interoperable. For the example above, you need to develop a protocol that allows storage of coordinates and times in fits and ascii tables.
There is some discussion about this in [issue 5625](https://github.com/astropy/astropy/issues/5626).

This project the following stages:

- Find breaks in the workflow as described in the example above.
- Define protocols for meta data that make it work between different packages.
- Solicit feedback from the community on those protocols.
- Implement code and test cases. 
- Test and document the steps above.
- Add an [astropy tutorials](http://tutorials.astropy.org) and update Astropy core package documentation to show the new capabilities.
