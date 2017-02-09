---
name: Jupyter widgets for Astropy
desc: Create "astrowidgets": Jupyter widgets for Astropy.
requirements:
 - Python
 - Very basic knowledge of CSS.
 - Basic understanding of javascript.
difficulty: low to intermediate
mentors: 
 - mwcraig
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

The goal of this project is to develop a set of [widgets](https://github.com/ipython/ipywidgets) allowing easy use of functionality from astropy and its affiliated packages in [Jupyter](http://jupyter.org/) notebooks. While some work in this direction has been done in [reducer](https://github.com/mwcraig/reducer), a package that provides a widget-based interface to [ccdproc](https://github.com/astropy/ccdproc), the widgets in reducer are too tightly bound to the task of image reduction to be useful outside reducer.

The final deliverable for the project will be a new package ready for application to be an astropy affiliated package.

Some of the deliverables for this project would be widget interfaces for:

+ A FITS image viewer utilizing the affiliated package [ginga](https://github.com/ejeschke/ginga) to handle the image display. This widget should allow for overlays of sources from catalogs (using [astroquery](https://github.com/astropy/astroquery)), selection of sources in the image using a mouse, and user-configurable key bindings. 
+ Point source detection and photometry using either [photutils](https://github.com/astropy/photutils) or [sep](https://github.com/kbarbary/sep).
+ Observation planning using [astroplan](https://github.com/astropy/astroplan).

In addition, these Jupyter notebooks will be developed:

+ Sample notebooks demonstrating how to compose the widgets into applications.
+ An image reduction notebook, similar to [reducer](https://github.com/mwcraig/reducer).
+ A photometry notebook for source detection and photometry.
+ A notebook for performing differential photometry on a time series of measurements.

Preliminary development of this project is already underway, so some of the specific deliverables might have changed by the beginning of the summer of code.
