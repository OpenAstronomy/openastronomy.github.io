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

In a previous GSoC project, we replaced the way we build the sunpy.org website and the theme it used.
We now use sphinx to create both our website and documentation, using the following theme: https://github.com/sunpy/sunpy-sphinx-theme
This theme is based upon https://github.com/ryan-roemer/sphinx-bootstrap-theme and it has served us very well. The problem is that it has been updated to bootstrap 4 and we would like to use that to improve the way our website and documentation render on smaller screens.
The main aim is to move our theme to use a new base theme: https://pydata-sphinx-theme.readthedocs.io/en/latest/ This gives us a new layout and more modern bootstrap versions.

The issue is that the way we have been using our theme has a few incompatibilities that either need patching to the pydata theme or overridden in our version.
 
1.	A method to create the header bar to match how we currently it, see sunpy.org for an example.
a.	We really like our dropdowns
2.	A method to anchor the footer bar instead of having it scroll.
a.	Pydata will only show it when you scroll to the very bottom.

If there is time left over, we will then work through the remaining issues we have in our theme repository once the groundwork has been finished.

#### Milestones

##### Coding starts

* Already have a development environment setup
* Understand the project and sphinx build system.
* Tried to build and modify the pydata-sphinx-theme with our website/documentation

##### 1st evaluation

* Have a working header and footer bars.

##### Final evaluation

* Have finished updating the sphinx theme and finished any extensions to the base project.
