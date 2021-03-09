---
name: NOVAS
desc: Implement a Julia vectorized version of the NOVAS library
# add a short one line description of your project
requirements: 
# Student requirements:
 - Familiarity with the Julia programming language.
 - Familiarity with linear algebra/numerical methods.
 - Familiarity with astronomy/astrometry.
difficulty: medium
issues:
# Related issues (if any)  to this project.
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - barrettp
 - giordano
initiatives:
 - GSOC
tags:
# Different technologies needed
 - Julia
 - linear algebra
 - astronomy/astrometry
 - JPL ephemeris library
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - juliaAstro
---
Implement a Julia version of the U.S. Naval Observatory Vector Astrometry 
Software (NOVAS) library and vectorize it to improve performance.

#### Description

The U.S. Naval Observatory Vector Astrometry Software (NOVAS) library
is used to accurately calculate the positions of celestial objects,
such as stars and planets. The software is used in the calculations of
the annual Astronomical Almanac, which is published by the U.S. Naval
Observatory and Her Majesty's Nautical Almanac Office. These
algorithms are used by astronomers for precision astrometry. In this
project, the student will implement a Julia version of the software
with modifications for ease of use and improved performance. A key
improvement with be to vectorize many of the algorithms so that they
can be used to quickly calculate the positions of tens of millions of
stars. The current C and FORTRAN versions do not have this feature.

#### Milestones (if any)

* Initial implementation of the basic algorithms/functions.

* Vectorize the basic algorithms/functions

* Modifications to the design to improve ease-of-use.

##### Coding starts

* Understand the astrometrc algorithms and the related functions.

##### 1st evaluation

* Initial implementation of basic algorithms/functions 

##### 2nd evaluation

* Vectorize the basis algorithms/functions.

##### Final

* Submit final implementation with improvements for ease-of-use.
