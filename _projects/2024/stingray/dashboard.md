---
name: A quicklook dashboard for X-ray astronomy with Stingray
desc: Create a dashboard that displays some quicklook analysis of astronomical X-ray observations.
requirements:
 - Experience with Python
difficulty: medium
issues:
 - https://github.com/StingraySoftware/stingray/issues/794
mentors:
 - matteobachetti
initiatives:
 - GSOC
project_size:
 - 350 h / large
tags:
 - python
collaborating_projects:
 - stingray
---

# Description

Stingray is a Python library designed to perform times series analysis and 
related tasks on astronomical light curves. It supports a range of commonly-used 
Fourier analysis techniques, as well as extensions for analyzing pulsar data, 
simulating data sets, and statistical modelling. Stingray is designed to be easy 
to extend, and easy to incorporate into data analysis workflows and pipelines.

When analyzing a new astronomical dataset, it is often convenient to have some quicklook 
visualization with basic information. For X-ray astronomy, the usual information is a
light curve (a time series showing the flux of the source), a periodogram, spectral 
colors (the ratio of fluxes in different energy bands of the X-rays). 

This project leverages Stingray's flexibility to create a quicklook dashboard with basic
interactivity. The principle is simple: given an event list, one calculates a light curve, 
a power spectrum with default options, maybe a Lomb-Scargle periodogram, color-color or 
HID diagrams, maybe power-color and color hue-rms diagrams. It should be somewhat 
configurable, so that one can apply a set of custom options to a series of observations with ease.

Each plot kind should be a separate plugin, with configurable options. The dashboard should
display the plugins that the user requests with a custom JSON configuration file.

The dashboard could work as an interactive visualization web page (just for zooming in and out), 
or just make a PDF or image with the plots.

A bonus could be making it the start for an interactive *analysis* interface (not just 
plotting, but also recalculate the quantities with different parameters and refresh the plots)

## Milestones

1. Consultation with community on use cases and possible implementations.
2. Design of dashboard completed.
3. Functional dashboard completed.
4. Dashboard documented and possibly displayed in the Stingray website.

### Community Bonding Period

* Understand Stingray scientific case.
* Setup a development environment.

### Coding starts

* Design the general structure of the dashboard and the plugins.
* Use Stingray's tutorials to set up the basic plugins for quicklook

### 1st evaluation

* Partial skeleton of the dashboard complete.

### Final evaluation

* Dashboard ready for deployment and properly documented.
