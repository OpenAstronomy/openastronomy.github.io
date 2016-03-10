---
layout: default
title:  "Ideas for IMS - ERAS"
show_main: false
ideas_team: IMS
---

### 1 – SOLAR STORMS FORECASTING SERVER ###

*Suggested Mentors:* [Antonio del Mastro](https://bitbucket.org/aldebran/) , [Olena Persianova](https://bitbucket.org/OPersian/)

*Difficulty:* Intermediate to Hard

*Astronomy knowledge needed:* None beforehand, the student will be required to research relevant publications.

*Programming skills:* advanced Python; basic Theano or TensorFlow; basic Django or Flask; experience with some ANN library, such as Keras, theanets or Lasagne.

#### Description:

Solar storms are responsible for disruption of satellite communication, and damage to space electronical equipments. The storms have to be taken into account also for EVA and habitat maintenance activities, as the higher levels of radiation brought by them have a detrimental effect on the crew member's health.

Prediction of these storms are essential to prevent said damage. A lot of astronomical data is generated on a daily basis, and this could be used in conjunction with machine learning methods to predict solar storms.

In this project, the student will be required to:

* Using a machine learning approach, predict the *duration* and *intensity* solar storms:
  * The student should use preferably an artificial neural networks approach (although alternatives, such as random forests, SVM, bayesian models or HMMs, can be considered).
  * The predictions should be given with 24-48 hs in advance of a storm (depending on viability).
  * The student should evaluate training and test data provided by IMS, or find a suitable datasaet, if the data provided is unsuitable.
  * The student should evaluate an approach suggested by the IMS to test the model's performance, or propose a testing procedure of his/her own.
* Provide information on a dynamically updated web page, using preferably Django or Flask, which should at least include:
  * The real-time and historical sensor's values; as plots, when appropriate.
  * Useful statistics about the sensors (TBD).
  * The model's predictions.
  * Useful statistics about the predictions (e.g. RMSE)
* Incorporate the prediciton model and the web page into the [ERAS ecosystem](https://eras.readthedocs.org/en/latest/), which means building [Tango](http://www.tango-controls.org/) device servers (at least one for the predictor, more if necessary).

Currently, a few features are being used for the prediction of solar storms, among others:

1. [Radio flux](http://www.spaceweather.gc.ca/solarflux/sx-3-en.php)
1. [Sunspot area](http://solarscience.msfc.nasa.gov/greenwch.shtml)
1. [Sunspot Number](http://sidc.oma.be/silso/datafiles)
1. [X-ray Background Flux](http://www.swpc.noaa.gov/products/goes-x-ray-flux)

We recommend the student to research the viability of using more features in the model.

Some other resources to get started:

[NASA's Solar Storm and Space Weather FAQ](http://www.nasa.gov/mission_pages/sunearth/spaceweather/index.html)

[Space Weather Prediction Center's Historical SWPC Products and Data Displays](ftp://ftp.swpc.noaa.gov/pub/warehouse/)
