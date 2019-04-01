---
name: Improve astropy performance in a sustainable way
desc: Increase the air speed velocity of Astropy core.
requirements:
 - Python
 - Cython
 - C
 - web
difficulty: Intermediate
mentors: 
 - taldcroft
initiatives:
 - GSOC
tags:
 - python
 - astropy core
collaborating_projects:
 - astropy
---
#### Description

The Astropy core package was designed and implemented with priority placed on
good code structure, long-term maintainability, and code correctness.  Currently
the package is nearly six years old and this strategy has proved its merit.
Nevertheless, development decisions along the way often sacrificed performance
in favor of clean or simple implementation.  At this point as a relatively
mature project with wide community adoption it makes sense to profile
both the astronomical user community and the code to find areas where
performance issues need to be addressed.  In many cases there is "low-hanging
fruit" where simple solutions like caching or initialization fixes can
yield factors-of-many improvement.  In other areas there may be need for
more substantial changes and even reimplementation using Cython or C.

One of the key available technologies for performance evaluation is the asv (Air
Speed Velocity) package which provides the infrastructure to do performance
regression testing across a wide swath of a large project like astropy.
Unfortunately its use in the normal development workflow is rather cumbersome.
Improving this interface would make it much easier to both improve speed and to
prevent performance regressions from getting into the code base.

This GSoC project thus has the following high-level steps:

- Poll the astropy user community for their perspectives on performance
  bottlenecks in astropy.  Engage in discussion and develop a prioritized
  list of areas to improve.  A minimal list of known issues right now
  includes coordinate initialization, iteration, and table / column
  creation.
- Work on asv (performance testing suite) to make it easy to run relevant tests
  for a development branch and compare to master.
- Get asv up and running regularly in a sustainable way with a maintenance model
  that allows for shared responsibility.
- Address astropy performance issues based on the prioritized list and asv results.
