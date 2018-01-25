---
name: Improving astropy Table performance
desc: Improve the speed of common Table operations like slicing
# add a short one line description of your project
requirements:
# Student requirements:
 - Familiar with Cython and Python code profiling
 - Familiar with Python speed optimization strategies
difficulty: medium
issues:
# Related issues (if any)  to this project.
mentors:
# First person in contact; mentors may change before project starts.
 - taldcroft
initiatives:
 - GSOC
tags:
# Different technologies needed
 - python
 - Cython
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - astropy
---

Improving astropy Table performance

#### Description

The astropy table sub-package defines a core Table class that is
used to store and manipulate tabular data within astropy.  This class
was written with an emphasis on functionality, convenience for astronomers,
and code clarity.  With the astropy table package now fairly mature
and with a strong set of regression tests in place, it is time to focus
on performance for basic operations like table creation and slicing.
For a simple operation like slicing, astropy Table is currently about
a factor of 10 slower than Pandas.  This project will focus on identifying
performance bottlenecks, writing performance tests for astropy-benchmarks,
and then developing code to improve the performance.  It is possible that
some fixes

#### Milestones (if any)

##### GSOC 2018 CODING STARTS

* Perform developer install of `astropy`.
* Install Python profiling tools.
* Study astropy and the table package capabilities.

##### GSOC 2017 MIDTERM

* Install and run `asv`.
* Examine existing `asv` benchmarks and identify areas for improved benchmarking.
* Profile key parts of table code and identify performance bottlenecks.
* Identify strategies for improved speed performance.
* Implement initial performance improvements.

##### GSOC 2017 FINAL

* Continue and finalize implementation of performance improvements.
* Contine and finalize additional `asv` benchmark tests.
