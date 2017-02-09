---
name: Pedal to the metal for astroplan
desc: Profiling and speeding up observation scheduling with astroplan and astropy
requirements:
 - Python
 - Observational astronomy experience may be helpful, but not required
difficulty: Intermediate
mentors: 
 - bmorris3
 - stuartlittlefair
 - eteq
initiatives:
 - GSOC
tags:
 - python
 - astroplan
collaborating_projects:
 - astropy
 - astroplan
---

#### Description

You want to schedule observations of one thousand targets over the next month. You are given one hour. Can you help us make astroplan the tool that's up to the task?

Last summer's astroplan GSoC student began implementing a module for [scheduling astronomical observations](http://astroplan.readthedocs.io/en/latest/tutorials/scheduling.html). These scheduling operations require many calls to basic coordinate calculations – e.g. when does this target rise/set? – which can be optimized at several places within astropy core in the [`SkyCoord`](http://docs.astropy.org/en/stable/api/astropy.coordinates.SkyCoord.html) object and within the astroplan package to speed up astroplan's schedulers. Some goals of this project are to: 

1. Profile astroplan's rise/set functions and identify inefficiencies in the `SkyCoord` object
2. Make efficiency improvements wherever possible with the findings of Step 1
3. Design/implement an API for accessing simple trigonometric rise/set calculations within astroplan's schedulers (this is where some observational astronomy experience would be handy)
4. Test improved astroplan against some target use cases. We'd like to generate schedules for thousands of targets in a reasonable amounts of time, like those required by the [LCOGT](https://lco.global) operators. 
