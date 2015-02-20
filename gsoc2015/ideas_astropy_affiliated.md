---
layout: default
title:  "Ideas for Astropy-affiliated packages"
show_main: false
ideas_team: Packages affiliated with Astropy
---

### Develop an affiliated package for observation planning / scheduling

*Suggested Mentor(s):* Christoph Deil

*Difficulty:* Beginner

*Astronomy knowledge needed:* Intermediate

*Programming skills:* Python

#### Description

Now that Astropy can transform from horizontal (altitude/azimuth) to sky
coordinates it’s possible to develop tools for observation planning /
scheduling (see
[here](http://docs.astropy.org/en/stable/coordinates/observing-example.html)
for an example). It would be nice to start developing an affiliated package
that can be used by observers and observatories to plan and schedule
observations. This project could go in a few different directions, including:

* creating typical tables and plots for observation planning
* optimising scheduling of observations for given target lists and telescope slew speed / exposure lengths for a given night or even month / year
* contribute sun / moon rise / set functionality to astropy coordinates
* a desktop or web GUI

The project could start with a look at the functionality of existing tools
and then gather some input on the astropy mailing list what the community
wants. The student should have an interest in coordinates, observations
planning / scheduling and plotting / GUIs.


### Astropy Acknowledgement/Citation Generator

*Suggested Mentor(s):* Erik Tollerud

*Difficulty:* Beginner to Intermediate

*Astronomy knowledge needed:* none, although some experience with astronomy citation practices might be useful

*Programming skills:* Python and LaTeX/BibTeX

#### Description

Some parts of Astropy and affiliated packages use algorithms or tools that have
been published in the scientific literature (this includes Astropy itself). To
encourage citing these works, it would be useful if Astropy had a feature to
allow attaching citations to methods, functions, or packages. This would then
allow a user to simply run a function along the lines of “write_citations” and
have it print or write a file that tells them what papers to cite. Bonus points
if this actually can show BibTeX or LaTeX bibliography entries that can be just
dropped into papers with minimal effort on the part of the user.

### Improve pyregion and pyds9

*Suggested Mentor(s):* Christoph Deil

*Difficulty:* Intermediate

*Astronomy knowledge needed:* Basic

*Programming skills:* Python

#### Description

The pyregion package is very useful to work with ds9 and CIAO region files. It
is now at
[https://github.com/astropy/pyregion](https://github.com/astropy/pyregion) but
it is unfinished … someone has to improve and polish it. In particular the
region file parser is very slow (see
[pyregion#48](https://github.com/astropy/pyregion/issues/48) and someone
interested in parsing should find out why and make it fast. There are several
other things to do, e.g. using astropy coordinates everywhere and implementing
tests so that it is compatible with ds9 to a very high accuracy. The package
could also be extended with Python functions to read / write / visualise [MOC
files](http://www.ivoa.net/documents/MOC/) or to unify and [improve the
existing Python interfaces to
[ds9](https://github.com/ericmandel/pyds9/issues/2). The student should be
interested in sky coordinates and regions, parsing, visualisation, writing
tests and docs, and for the ds9 interfaces some Cython coding is probably
needed.

### Revamp astropython.org web site

*Suggested Mentor(s):* Tom Aldcroft

*Difficulty:* Intermediate

*Astronomy knowledge needed:* Basic / none

*Programming skills:* Python, web development (javascript etc)

#### Description

The [http://www.astropython.org](http://www.astropython.org) site is one of the
top two generic informational / resource sites about Python in astronomy. This
site uses Google App Engine and is basically all custom code built around the
bloggart engine. Currently it is getting a bit stale for a few reasons:

* There is no good mechanism for guest posting to expand the community of people contributing.
* It is painful to add content because of the antiquated entry interface which now seems to work only on firefox.
* The comment system is lacking (no feedback to comment authors etc).
* The website code itself is convoluted and difficult to maintain / improve

The proposal is to start over with all modern tools to bring fresh energy and involvement into this project.  All details of how to do this to be determined, but one requirement is to migrate all the current content.  Part of this would be re-evaluating current resources as well as digging around to freshen up the resource list.

