---
name: HIPS to Py
desc: Write a Python client for Hierarchical Progressive Surveys (HIPS)
requirements:
 - Have Python / Numpy / Astropy skills
 - Know how to write tests with pytest and docs with Sphinx
 - Some open source experience
 - Some image processing experience
 - Interest in spherical geometry and HEALPIX / HIPS
difficulty: Intermediate to high
mentors: 
 - cdeil
 - tboch
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

The goal of the [HIPS to Py](https://www.youtube.com/watch?v=DUT5rEU6pqM) GSoC project is to create a
new Python package to work with [Hierarchical Progressive Surveys (HIPS)](http://aladin.u-strasbg.fr/hips/).

HIPS has become a standard to share large astronomical survey images, using multi-resolution image tiles
that can be fetched by a client, similar to Google maps.
So far, a Java client (Aladin) and a JavaScript client ([AladinLite](http://aladin.u-strasbg.fr/AladinLite/) exist,
but there's no easy way to fetch HIPS data and make images from Python.

This project would build on [Astropy coordinates](http://docs.astropy.org/en/stable/coordinates/index.html),
and probably on [healpy](https://healpy.readthedocs.io/)
and [reproject](https://reproject.readthedocs.io/en/stable/healpix.html),
and maybe on [regions](http://astropy-regions.readthedocs.io),
i.e. we would use the functionionality implemented there to implement a HIPS client.

The main feature / deliverable would be a way to take an arbitrary sky image geometry, given by a
[astropy.wcs.WCS](http://docs.astropy.org/en/stable/wcs/index.html), and to compute a 2-dim numpy array
where the pixel values are filled from HIPS data. In the background, there should be lower-level functionality
(also exposed by the package) to fetch and manage HIPS tiles, and to reproject and stitch them together into an image.
Then one could analyse the data from Python, or save it locally to a FITS or PNG image file.

If you're interested in this project, please have a look at the
[HIPS paper](http://cdsads.u-strasbg.fr/abs/2015A%26A...578A.114F)
and the packages mentioned above (they have tutorial docs pages),
and then contact Christoph if you have any questions or would be interested
to start working on an application for this project.
