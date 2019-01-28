---
name: HelioViewer Python API Wrapper
desc: Creating a full Python wrapper for https://api.helioviewer.org/docs/v2/.
# add a description of your project
requirements:
 - Familiarity with Python
 - Some familiarity with Unirest/HTTP requests (ideally)
difficulty: medium
issues:
 - https://github.com/sunpy/sunpy/issues/2860
 - https://github.com/sunpy/sunpy/issues/2762
 - https://github.com/sunpy/sunpy/issues/2878
mentors:
 - wafels
 - cadair
 - TO BE FILLED
initiatives:
 - GSOC
 - SOCIS
tags:
 - python
collaborating_projects:
 - sunpy
---

#### Description

This project aims to design and implement a low level Python wrapper around the
unirest API provided by the HelioViewer Project. This would create a new affiliated SunPy package (name up for suggestions).

Currently SunPy has a `HelioviewerClient` that implements only a handful of the available API.
They are `getClosestImage`, `getJP2Image` and `takeScreenshot` from the Helioviewer API and you can see our code [here.](https://github.com/sunpy/sunpy/blob/master/sunpy/net/helioviewer.py)

What we want to do is to create a new Python package that will lightly wrap every aspect of the HelioViewer API allowing anyone to create their own helioviewer.org like GUI in Python (this could be part of the project but will depend on the progress).

To facilitate this, we will need to remove the current code from SunPy and move it to the new affiliated package.
#### Secondary goals

* Start on a GUI-like interface for the new package, if time permits.

#### Milestones

##### Coding starts

* Engaged with the community and understand the motivation and challenges of the project.
* Have set up a development environment.

##### To be completed by the Phase 1 Evaluation Deadline

* Have 33% of the API wrapped.
* Have all code, tests and documentation in GitHub.

##### To be completed by the Phase 2 Evaluation Deadline

* Have 66% of the API wrapped.
* Have all code, tests and documentation in GitHub.

##### To be completed by the end of GSoC

* All of the API is wrapped within the package.
* Have all code, tests and documentation in GitHub.
