---
name: Space Weather forecasting using linear algebra
desc: Create a model to forecast solar flare events of new solar active regions images.
requirements:
 - Familiar with methods for creating classes, objects and subclasses.
 - Confident with linear algebra methods.
difficulty: medium
issues:
mentors:
 - dpshelio
 - drsophiemurray
 - samaloney
 - mbobra
initiatives:
 - SOCIS
 - GSOC
tags:
 - Python
collaborating_projects:
 - SunPy
---

#### Description

Space weather studies Sun-Earth interaction events. One of these, is the effect
of solar flares have on our civilisation. The forecast of solar flares is not a
solved problem, and many approaches have been tried.
[Sunspotter](https://www.sunspotter.org/) is a citizen science project that
asked volunteers to classify solar active regions by their complexity - as it’s
believed complexity has a direct relationship with their activity. With more
than 25,000 volunteers and millions of classifications produced, we’ve got a
[very nice dataset](https://zenodo.org/record/1478972#.XI4YPqHgqr8) that can be
used to train a neural network. The images used come from the [MDI
instrument](http://soi.stanford.edu/science/obs_prog.html), which is onboard of
[SoHO](https://en.wikipedia.org/wiki/Solar_and_Heliospheric_Observatory) - the
NASA-ESA mission that’s been observing the sun for more than two decades.

This project will need to create components within SunPy that will interact with
other libraries ([scikit-image](https://scikit-image.org/),
[scikit-learn](https://scikit-learn.org), etc.) to create such model.

Read more information at the [wiki page](https://github.com/sunpy/sunpy/wiki/SOCIS-2019-Ideas-Information#space-weather-forecasting-using-machine-learning).
Though this idea is for SOCIS, [same GSOC rules apply](https://github.com/sunpy/sunpy/wiki/SOCIS-2019).

#### Milestones

##### 1st Month

* Familiarisation with the dataset. Read and visualise the different type of
  data (images, classifications, …)
* Have evaluated and chosen an approach to the design of a SunPy search events
  object based on the images using [HEK or
  HELIO](https://docs.sunpy.org/en/latest/guide/acquiring_data/hek.html).
* Implementation of a basic linear algebra model to understand the steps
  needed for this problem
* Write up notebook for the sunpy gallery that exemplifies an analysis of this
  dataset

##### 2nd Month

* Experiment with different linear algebra methods to find the best model.
* Write up as blog posts the different attempts tried.

##### 3rd Month

* Check the accuracy of the model with SDO/HMI images from HEK
* Create notebook for the sunpy gallery explaining how to use the model

#### Resources

* [Predicting Coronal Mass Ejections Using Machine Learning Methods](
https://doi.org/10.3847/0004-637X/821/2/127)
* [Sunspotter: Using Citizen Science to Determine the Complexity of
  Sunspots](https://doi.org/10.6084/m9.figshare.1050569.v1)
* [Machine Learning, Statistics, and Data Mining for
  Heliophysics](https://helioml.github.io/HelioML/title.html)
* [A Comparison of Flare Forecasting Methods. I. Results from the "All-Clear"
  Workshop](https://doi.org/10.3847/0004-637X/829/2/89)
