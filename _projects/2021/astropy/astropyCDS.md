---
name: Add a CDS-ASCII writer to astropy
desc: Allow writing an astropy Table to CDS format
requirements:
# Student requirements:
 - Python
 - Some familiarity with ASCII files is preferred
difficulty: low
issues:
# Related issues (if any) to this project.
 - https://github.com/astropy/astropy/issues/11257
 - https://github.com/astropy/astropy/issues/11239
 - https://github.com/astropy/astropy/issues/9291
mentors:
# GitHub handles
 - hamogu
 - aaryapatil
initiatives:
 - GSOC
tags:
# Different technologies needed
 - python
 - astropy core
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - astropy
---

#### Description

Astropy is a core python package for astronomy that provides several modules for the analysis of observational data. A common problem is storing and retrieving tabular data in standard formats which include metadata to fully describe the contents of a table. One such ASCII format is CDS (http://vizier.u-strasbg.fr/doc/catstd.htx) that is used for publishing catalogues accompanying papers to astronomical databases like Vizier. Astropy has the capability of reading a CDS file to an astropy Table but not writing a Table to CDS. In this project, the student will create a CDS writer in astropy.io.ascii. A python module from CDS (https://github.com/cds-astro/cds.pyreadme/) uses astropy to write CDS files, and the astropy writer can be based on that.

#### Milestones (if any)

##### Coding starts

* Understand the CDS format, and write an example astropy Table to this format using python
* Get familiar with the astropy.io.ascii framework

##### 1st evaluation

* Add the writer to astropy.io.ascii (PR open and tests pass)
* Add documentation for the writer

##### Final

* Finish testing and documentation
* Fix any bugs (if found or reported)
