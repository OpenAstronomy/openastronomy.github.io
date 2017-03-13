---
name: DRMS Module for JSOC Downloads
desc: Improve the drms package and the SunPy JSOC client,
requirements:
 - Familiarity with Python class development.
difficulty: medium
issues:
 - https://github.com/kbg/drms/issues/3
 - https://github.com/sunpy/sunpy/issues/1909
mentors: 
 - Cadair
 - kbg
 - mbobra
initiatives:
 - GSOC
 - SoCiS
tags:
- sunpy
- python
collaborating_projects:
 - sunpy
 - drms
---

#### Description

The SunPy JSOC client is a very rudimentary client to the
JSOC's [export data CGI](http://jsoc.stanford.edu/ajax/exportdata.html).
The [drms](https://github.com/kbg/drms) Python module is a more complete
implementation of the DRMS protocol. This project will involve contributions to
both drms and SunPy, to improve the drms library and integrate it into SunPy.

The drms module needs testing, and some other packaging improvements to
automatically run the tests. This might involve adoption of some of the Astropy
packaging code such as astropy_helpers, as agreed by the drms authors.

Once the drms package has been well tested, CI added and a conda package
created, the SunPy JSOC client could be improved and extended to enable use of
the majority of the drms functionality through the unified search API of SunPy.
While the SunPy implementation would not need to provide all the features of the
drms library, it would strive to provide a simple API for most queries supported
by drms. One high-priority feature that should be availble in SunPy is the
ability to query drms series for which the prime key is not ``T_REC``, also it
should be possible to download only the metadata from drms without downloading
the associated image data.

Finally, documentation in SunPy should be improved to detail much more of the
JSOC functionality. This should include API documentation, narrative
documentation in the guide and examples in the gallery.


#### Milestones

##### GSOC 2017 CODING STARTS

* Have familiarised yourself with the drms module, the `sunpy.net.jsoc` and `sunpy.net.Fido` submodules.
* Become comfortable with writing tests in pytest, and using mock.

##### GSOC 2017 MIDTERM

* Have developed a test suite for drms.
* Have worked with the mentors to enable CI testing and build a conda package for the drms library.

##### GSOC 2017 FINAL 

* Have completed a rework of the `sunpy.net.jsoc` module to use the features of drms.


##### Additional Resources

* [drms Tutorial](https://drms.readthedocs.io/en/stable/tutorial.html)
* [SHARP Example](https://nbviewer.jupyter.org/github/kbg/ipynbs/blob/master/hminuggets/sharp_imgdata.ipynb)
* [Metadata example](https://nbviewer.jupyter.org/github/mbobra/calculating-spaceweather-keywords/blob/master/plot_swx_d3.ipynb)
