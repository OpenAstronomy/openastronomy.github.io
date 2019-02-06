---
name: Jupyter widgets for Astropy
desc: Create "astrowidgets" - Jupyter widgets for Astropy.
requirements:
 - Python
 - Very basic knowledge of CSS.
 - Basic understanding of javascript.
 - Basic knowledge of astronomical images and photometry
difficulty: intermediate
mentors:
 - mwcraig
 - astrofrog
 - pllim
 - eteq
initiatives:
 - GSOC
tags:
 - python
 - javascript
collaborating_projects:
 - astropy
 - astrowidgets
---

#### Description

The goal of this project is to further develop a set of astronomical image [widgets](https://github.com/ipython/ipywidgets) allowing easy use of functionality from astropy and its affiliated packages in [Jupyter](http://jupyter.org/) notebooks. Preliminary work on this has begun in the [astrowidgets](https://github.com/astropy/astrowidgets) package.

The final deliverable for the project will be a version of the [astrowidgets](https://github.com/astropy/astrowidgets) package ready for release.

Some of the deliverables for this project would be:

+ Development of the remaining unimplemented features in the
  [target API](https://github.com/eteq/nb-astroimage-api) using ginga as the backend.
+ Develop an implementation using [bqplot](https://github.com/bloomberg/bqplot) and
  the [ipyastroimage](https://github.com/glue-viz/ipyastroimage) mark for
  [bqplot](https://github.com/bloomberg/bqplot) as the backend.
+ Explore development of a non-interactive version using matplotlib as the backend.
  The non-interactive version would implement as much of the API as possible in a
  non-interactive format.
+ Develop a method for identifying the nearest point source to a click on an image
  (very preliminary work on this is available) by combining the above with astropy
  and its affiliated packages (particularly photutils).
+ Documentation for the implemented backends.
+ More extensive test suite.

In addition, these Jupyter notebooks will be developed:

+ Sample notebooks demonstrating each of the back ends.

Preliminary development of this project is already underway, so some of the specific deliverables might have changed by the beginning of the summer of code.
