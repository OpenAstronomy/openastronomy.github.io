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
the data imported with HelioPy has units (e.g. meters, seconds, volts) attached
before it is output to the scientists using the data.
This will mean finding out ways of automatically detecting the correct units
from raw data, and then converting current code to using the astropy
units system.

Find more information about [HelioPy](http://docs.heliopy.org/en/stable/) and 
[astropy units](http://docs.astropy.org/en/stable/units/index.html)

#### Milestones (if any)

##### GSOC 2018 CODING STARTS

* Have installed HelioPy and used it to download and plot some data to get a
  feel of how it currently works.
* Have setup GitHub and are comfortable with submitting pull requests.

##### GSOC 2018 1ST EVALUATION

* Have investigated a way of automatically extracting the correct units from
  raw data files.

##### GSOC 2018 2ND EVALUATION

* Have written code to make at least one data import function return data
  with units attached.


##### GSOC 2018 FINAL EVALUATION

* Have expanded the new code to all of the data import functions, to make
  HelioPy fully compatible with the astropy units system.
