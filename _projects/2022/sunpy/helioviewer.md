---
name: HelioViewer Python API Wrapper
desc: Creating a full Python wrapper for the Unirest Helioviewer API
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
 - nabobalis
 - Helioviewer-Kirill
initiatives:
 - GSOC
project_size:
 - medium
 - large
tags:
 - python
collaborating_projects:
 - sunpy
---

#### Description

This project aims to design and implement a low level Python wrapper around the unirest API provided by the HelioViewer Project.
This would create a new affiliated SunPy package (name up for suggestions).

Currently `sunpy` has a `HelioviewerClient` that implements only a handful of the available API.
They are `getClosestImage`, `getJP2Image`, `getJP2Header (in an open pull request as of writing)` and `takeScreenshot` from the Helioviewer API and you can see our code [here.](https://github.com/sunpy/sunpy/blob/master/sunpy/net/helioviewer.py)

What we want to do is to create a new Python package that will lightly wrap every aspect of the HelioViewer
API allowing anyone to create their own helioviewer.org like GUI in Python (this could be part of the project
but will depend on the progress).
To facilitate this, we will need to remove the current code from `sunpy` and move it to the new affiliated package.

Finally, we will then create a new client that interfaces with the `sunpy` downloader Fido.

#### Milestones

##### Coding starts

* Engaged with the community and understand the motivation and challenges of the project.
* Have set up a development environment.
* Helped to setup the new package.

##### 1st evaluation

* Have 45% of the API wrapped.
* Have all code, tests and documentation in GitHub.

##### Final evaluation

* All of the API is wrapped within the package.
* Fido Client created for Helioviewer.
* Have all code, tests and documentation in GitHub.
