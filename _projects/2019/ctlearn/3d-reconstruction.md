---
name: 3D Reconstruction/Convolutional Neural Networks
desc: Implement a pipeline for reconstructing 3D inputs from multiple telescope images and training a 3D CNN on them.
# add a short one line description of your project
requirements:
# Student requirements:
 - Python
 - Moderate familiarity with neural networks (specifically 3D CNNs)
 - Some familiarity with 3D geometry/linear algebra implementation in Python (optional)
difficulty: hard
issues:
# Related issues (if any)  to this project.
mentors:
# First person in contact; mentors may change before project starts.
 - aribrill
 - bryankim96
 - qi-feng
initiatives:
 - GSOC
tags:
# Different technologies needed
 - python
 - tensorflow
 - pyeuclid (optional)
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - ctlearn
---

#### Description

One of the main goals of CTLearn is developing and implementing methods to perform classification/regression on **multiple images simultaneously**. Most ground-based imaging air Cherenkov telescope (IACT) experiments use an array of multiple telescopes to image each shower stereoscopically. Stereo imaging is the main reason for the breakthrough of ground based gamma-ray astronomy a decade ago, making it possible to achieve a better shower reconstruction, in particular the reconstruction of arrival direction.

When it comes to event reconstruction with convolutional neural networks (CNNs), it likely that in order to improve noticeably on existing reconstruction methods, it will be necessary for CNN-based methods to make full use of this stereo information. The current methods implemented in CTLearn, like the convolutional recurrent neural network (CRNN) model do not take full advantage of this information, as they handle each input image of an event without any explicit reference to the geometrical relationship between all of the images.

The idea behind this project is to implement a pre-processing stage which does a preliminary geometric reconstruction before passing the data to a CNN. A purely geometric method, based on photon back-tracing coupled with information about the telescope positions and pointings, is used to reconstruct a 3D array input representing the shower. In this 3D array, unlike the original images (which is only a projection of the 3D shower onto the camera), locality is preserved, as information about the same part of the shower (in three dimensions) will be combined from all telescopes. Ideally, this should result in the locality and hierarchicality assumptions of CNNs being better satisfied, the CNN being better able to extract and use low-level shower information/features, and a more powerful classifier. 
 
#### Milestones

##### GSOC CODING STARTS

* Install CTLearn and DL1 Data Handler and verify that shower images can be loaded and manipulated as numpy arrays.
* Read and understand the 3D geometric reconstruction method laid out in the Event Reconstruction for VERITAS note. 
* Make a plan for implementation and a definition for the 3D input structure (how photon tracks will be converted into a voxel volume)

##### GSOC MIDTERM

* Implement the 3D reconstruction method and present example outputs (w/ visualization so they can be validated).
* Present a design for a minimal 3D convolutional neural network for classification (based on a review of the literature). 
* Have all code and documentation in GitHub.

##### GSOC FINAL

* Preprocess a small dataset using the 3D reconstruction code and write code in TensorFlow to train the 3D model on it (should be based on the existing CTLearn framework and only involve definining a new model + any modifications to data loading code required to load 3D data).
* Further optimize/improve implementation of 3D reconstruction method.
* Prepare a report on method feasibility: training time/speed, dataset size/reduction factors, dataset processing time, GPU memory limitations, preliminary performance/observations about training.
* Have all code, documentation, and final configuration files and plots in GitHub.
