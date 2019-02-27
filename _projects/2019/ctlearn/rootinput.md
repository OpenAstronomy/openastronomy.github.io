---
name: ROOT input
desc: Enable input of data in ROOT format from current-generation imaging atmospheric Cherenkov telescopes 
# add a short one line description of your project
requirements:
# Student requirements:
 - Python
 - Basic familiarity with neural networks
difficulty: medium

mentors:
# First person in contact; mentors may change before project starts.
 - rlopezcoto
 - aribrill
 - qi-feng
initiatives:
 - GSOC
tags:
# Different technologies needed
 - python
 - tensorflow
 - uproot
 - dl1-data-handler
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - [ctlearn](https://github.com/ctlearn-project/ctlearn)
---

#### Description

CTLearn is a Python package for using deep learning to perform
analysis tasks on data from imaging atmospheric Cherenkov telescopes
(IACTs). These tasks may be either classification or regression
problems. This project would enable CTLearn to take IACT data in
[ROOT](https://root.cern.ch/) format as input.

The sensitivity of IACTs is mostly driven by our capability of
distinguishing gamma-ray induced events from cosmic-ray induced events
as well as determining the arrival direction of the incoming
particle. CTLearn aims at improving on the current methods for event
reconstruction. So far, CTLearn takes data in
[HDF5](https://www.hdfgroup.org/solutions/hdf5/) format as
input. However, most of the data from IACTs currently in operation
come in ROOT format. Enabling ROOT input in CTLearn will open its
doors to existing IACT facilities.

In this project, the student will first learn how to use CTLearn to
train classification models that tell gamma-ray images from cosmic-ray
images apart and why this is important in the context of IACTs. Then,
the student will enable the input of data in ROOT format and train
some of the already existing deep learning models in CTLearn with data
from current-generation IACTs.

#### Milestones

##### GSOC CODING STARTS

* Install CTLearn and train a pre-existing benchmark model to verify that it runs correctly.
* Understand the technical and scientific goals of the project.

##### GSOC MIDTERM

* Implement input of generic data in ROOT format using the packages uproot and Dl1-data-handler.
* Enable input of data in ROOT format from a specific IACT using the packages uproot and Dl1-data-handler.
* Have all code and documentation in GitHub.

##### GSOC FINAL

* Enable input of data in ROOT format from a given collection of IACTs.
* Train single_tel classification model on data from a specific IACT.
* Train cnn_rnn classification model on data from a specific IACT.
* Have all code, documentation, and plots in GitHub.
