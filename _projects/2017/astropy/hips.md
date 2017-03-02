---
name: Python HIPS client
desc: Write a Python client for Hierarchical Progressive Surveys (HIPS)
requirements:
 - Python
 - Observational astronomy experience may be helpful, but not required
difficulty: Intermediate to high
mentors: 
 - cdeil
 - needs second mentor at least!
initiatives:
 - GSOC
tags:
 - python
 - regions
 - web
 - math
collaborating_projects:
 - astropy
---

#### Description




[Hierarchical Progressive Surveys (HIPS)](http://aladin.u-strasbg.fr/hips/) has become a standard to share large survey data.
So far, a Java client (Aladin) and a JavaScript client ([AladinLite](http://aladin.u-strasbg.fr/AladinLite/) exists.

This GSoC project would be to develop a new Python package containing a HIPS client.
It would be implemented using Astropy coordinates and healpy (probably, or a new minimal HEALPIX Python package).

The main features / deliverable would be:
For a given WCS image geometry, query HIPS data and fill the image

If we want the license of this Python HIPS package to be BSD (like Astropy),
it can't be a translation of the existing Java / Javascript packages,
a cleanroom from scratch implementation is needed.
This is not very hard, the underlying algorithms about which HIPS tiles to fetch
and how to reproject / draw them aren't super complicated.
But not trivial either, this project requires some interest in spherical geometry,
pixelisation and image processing.
