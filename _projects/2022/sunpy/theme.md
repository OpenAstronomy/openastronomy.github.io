---
name: SunPy Website and Theme Rewrite
desc: Replace the sphinx base theme with a newer version.
requirements:
 - Experience with Sphinx and themes ideally.
 - Experience with Jinja templates ideally.
difficulty: high
issues:
 - https://github.com/sunpy/sunpy-sphinx-theme/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc
mentors:
 - Cadair
 - nabobalis
initiatives:
 - GSOC
project_size:
 - medium
 - large
tags:
 - sunpy
 - sphinx
 - web
collaborating_projects:
 - sunpy
---

#### Description

In a previous GSoC project, we replaced the theme used to build our website and documentation.
This lives in the theme repository: <https://github.com/sunpy/sunpy-sphinx-theme>.

The problem has become that the original base theme that we based this on, has not seen any updates.
We want to move to a new base theme: <https://pydata-sphinx-theme.readthedocs.io/en/latest/>

However, to do this, the pydata-sphinx-theme needs several additions:

1. A new way to create the header bar to match how we currently it, see sunpy.org for an example.
2. A way to fix the footer bar instead of having it scroll.

Ideally we want this added upstream to the pydata-sphinx-theme repository but we can start with it being in
our theme repository.

Finally if we have time:

3. Work through the remaining issues we have in our theme once the transplant has finished.

#### Milestones

##### Coding starts

* Already have a development environment setup
* Understand the project and sphinx build system.
* Tried to build and modify the pydata-sphinx-theme.

##### 1st evaluation

* Have a working header and footer bars.

##### Final evaluation

* Have finished updating the sphinx theme and finished any extensions to the base project.
