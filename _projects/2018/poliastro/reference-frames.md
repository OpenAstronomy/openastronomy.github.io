---
name: Add reference frames to Orbit objects
desc: Make Orbit objects completely defined by adding a reference frame as a property
requirements:
 - Knowledge on kinematics
 - A taste for API design
difficulty: medium
issues:
 - https://github.com/poliastro/poliastro/issues/109
 - https://github.com/poliastro/poliastro/issues/257
 - https://github.com/poliastro/poliastro/issues/288
mentors:
 - juanlu001
initiatives:
 - GSOC
 - SOCIS
tags:
 - python
 - astropy
collaborating_projects:
 - poliastro
---

#### Description

One of the focuses of poliastro is having an easy to use API. That's why,
for instance, when mixing quantities in meters and kilometers, poliastro
knows how to combine them in a proper way, thanks to astropy.units.
However, we haven't reached this level of easiness with reference frames
yet: the frame is not part of the `Orbit` object, and mixing two orbits
can therefore produce meaningless or absurd results, in the same way
that mixing quantities in meters and kilometers can produce incorrect
results if not done carefully.

This project aims to resolve this difficulty by incorporating reference
frames to poliastro `Orbit` objects. astropy already has `SkyCoord`
objects that contain all the necessary information, but it's not clear
how to leverage them from poliastro (see discussion in
https://github.com/poliastro/poliastro/issues/257).

On the other hand, validating all these algorithms cannot be done using
textbook examples anymore and more complex strategies have to be found,
for instance using the SPICE toolkit by NASA. Here is an example on
how to run it from Python using the third party library SpiceyPy:

https://gist.github.com/Juanlu001/3ba5f97928da923889b4201a94d1daa0

#### Milestones

##### Coding starts

* Engaged with the community and understand the motivation and challenges of
  the project.
* Have set up a development environment and run a basic example using SPICE
  kernels.

##### Midterm

* Have all the current reference frames conversion validated against SpiceyPy
* Have all code, tests and documentation in GitHub

##### Final

* Have finished the refactoring of `Orbit` objects to allow for reference frames,
  using a default one if appropriate
* Have all code, tests and documentation in GitHub

#### Secondary goals

* Fix any bugs that might appear regarding visualization, reference frames and so forth
* Review pull requests from other poliastro contributors, including the mentor
* Give a talk about the work at some Python event

#### Additional resources

* [USNO Circular 179](http://aa.usno.navy.mil/publications/docs/Circular_179.pdf)
