---
name: Using physical units with HelioPy
desc: Convert HelioPy's data import methods to return data that has units attached.
requirements:
 - Some experience using python
difficulty: low
issues:
 - https://github.com/heliopython/heliopy/issues/291
mentors:
 - dstansby
initiatives:
 - GSOC
 - SOCIS
tags:
 - python
 - heliopy
collaborating_projects:
 - heliopy
---
#### Description

HelioPy is a relatively new python package, whose aim is to automate the
downloading and import of data used for space physics.

Currently all the data imported is just returned as lists of numbers, with no
information about their units attached. We want to move to a system where all
the data imported with HelioPy has units attached before it is output to the
scientists using the data. This will mean finding out ways of automatically
detecting the correct units from raw data, and then converting current code
to using the astropy units system.

For more information on HelioPy see http://docs.heliopy.org/en/stable/
For more information on astropy units see http://docs.astropy.org/en/stable/units/index.html

#### Milestones (if any)

##### GSOC 2017 CODING STARTS

* Have installed HelioPy and used it to plot some data to get a feel of how it
  currently works.
* Have setup GitHub and are comfortable with submitting pull requests.

##### GSOC 2017 MIDTERM

* Have investigated a way of automatically extracting the correct units from
  raw data files.
* Have written code to return data with units attached.


##### GSOC 2017 FINAL

* Have had the new code to return data with units merged into HelioPy.
