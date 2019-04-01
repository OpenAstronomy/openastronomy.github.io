---
name: Transition to Astropy Time in SunPy
desc: Convert the whole SunPy module to using astropy.time to represent time.
requirements:
 - Good general Python skills.
 - Willingness to learn a little about a lot of SunPy.
difficulty: medium
issues:
 - https://github.com/sunpy/sunpy/issues/993
 - https://github.com/sunpy/sunpy/issues/994
 - https://github.com/sunpy/sunpy/issues/2383
 - https://github.com/sunpy/sunpy/issues/2155
 - https://github.com/sunpy/sunpy/pull/2260
mentors:
 - Cadair
 - nabobalis
 - Punyaslok
initiatives:
 - GSOC
 - SOCIS
tags:
 - Python
collaborating_projects:
 - sunpy
---

#### Description

SunPy currently uses `datetime.datetime` objects as it's internal representation
of time. The goal of this project is to transition every part of the SunPy
codebase to using `astropy.time.Time` instead. The main motivation for this is
that the `Time` object in Astropy supports much higher precision representations
of time as well as supporting time formats *e.g.* TAI time which are commonly
used by solar physicists.

This transition is a major component of the planned SunPy 1.0 release, and will
involve many changes to a lot of the SunPy library, and some design and user
experience work to plan the project and ensure its success.

As well as changing the internal representation of time in the SunPy library,
this project will involve rewriting the `sunpy.time.parse_time` function. This
function is used to convert any supported time input to `datetime.datetime`
objects, and is used in most SunPy functions that accept time-like inputs. This
function is also one of the oldest in SunPy, and in need of a redesign to go
with the transition to `astropy.time.Time`. A successful candidate for this
project will have done substantial research on the use of `parse_time` in the
SunPy code and will appreciate the requirements for changes to this part of
SunPy.


#### Milestones (if any)

##### Coding Starts

* Engaged with the community and understand the motivation and challenges of the project, especially the desired changes to `parse_time`.

##### Evaluation 1

* Have implemented a new version of `parse_time` including, tests and documentation.

##### Evaluation 2

* Have transitioned `sunpy.net` to use `astropy.time.Time`

##### Final

* Have finished transitioning to `Time`, including increasing test coverage where required.
* Have written some narrative documentation to assist users in making the transition.
