---
name: Benchmark several propagators
desc: Implement other orbit propagation algorithms to improve current error rates and performance
requirements:
 - Familiar with numerical analysis
difficulty: medium
issues:
 - https://github.com/poliastro/poliastro/issues/253
 - https://github.com/poliastro/poliastro/issues/265
 - https://github.com/poliastro/poliastro/issues/285
 - https://github.com/poliastro/poliastro/issues/286
 - https://github.com/poliastro/poliastro/issues/294
mentors:
 - juanlu001
initiatives:
 - GSOC
 - SOCIS
tags:
 - python
 - scipy
 - numba
collaborating_projects:
 - poliastro
---

#### Description

The problem of propagation, finding the position and velocity of an orbiting
object after some amount of time, is fundamental to any orbit analysis.
It is a difficult problem, since the Kepler equation is transcendental and
does not have a closed-form solution, and therefore numerical solutions
have to be developed. The process has to be both fast (since a program
might need to propagate thousands of orbits) and robust (converge in as
many cases as possible).

In poliastro we already have a propagator that has served us well for years,
but it has some convergence problems:

https://github.com/poliastro/poliastro/issues/265

On the other hand, among the many propagation algorithms that exist,
we haven't benchmarked our propagator against others, so we might be missing
out performance gains. This project aims to fix the current propagation
issues, as well as adding other propagators to poliastro to let users
choose the best that suits their needs.

#### Milestones

##### Coding starts

* Engaged with the community and understand the motivation and challenges of
  the project.
* Have set up a development environment and reproduced the existing propagation
  issues.

##### Midterm

* Fix https://github.com/poliastro/poliastro/issues/265, either with a new
  propagator or fixing the current one
* Have all code, tests and documentation in GitHub

##### Final

* Have at least two new propagators
* Add time and accuracy benchmarks for all the propagators that can be easily
  reproducible
* Have all code, tests and documentation in GitHub

#### Secondary goals

* Fix any bugs that might appear regarding propagation, hyperbolic orbits and so forth
* Review pull requests from other poliastro contributors, including the mentor
* Give a talk about the work at some Python event
