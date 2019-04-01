---
name: Regression
desc: Implement regression for energy estimation and angular reconstruction
# add a short one line description of your project
requirements:
# Student requirements:
 - Python
 - Basic familiarity with neural networks
difficulty: medium
issues:
# Related issues (if any)  to this project.
 - https://github.com/ctlearn-project/ctlearn/issues/67
 - https://github.com/ctlearn-project/ctlearn/issues/82
mentors:
# First person in contact; mentors may change before project starts.
 - aribrill
 - bryankim96
 - TjarkMiener
initiatives:
 - GSOC
tags:
# Different technologies needed
 - python
 - tensorflow
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - ctlearn
---

#### Description

CTLearn is a Python package for using deep learning to perform analysis tasks on data from imaging atmospheric Cherenkov telescopes (IACTs). These tasks may be either classification or regression problems. CTLearn can already perform classification tasks, such as distingiuishing between signal gamma ray and background cosmic ray images. This project would extend to regression tasks as well.

There are two main analysis tasks for which regression would be used: estimating the energy of the orginating particle from a gamma ray image or set of images, and reconstructing the arrival direction on the sky of that particle. These tasks are critical for maximizing the energy resolution, angular resolution, and sensitivity of gamma-ray telescopes.

In this project, the student will first implement the ability to load continuous variables in CTLearn using the data loading library [Dl1DataHandler](https://github.com/cta-observatory/dl1-data-handler). Then, they will create and train a neural network to predict the particle energy corresponding to a simulated CTA gamma ray image, and add it to the CTLearn default models. Finally, they will extend this network to accept as input multiple gamma-ray images corresponding to the same event as seen from different angles, and to predict the particle arrival direction as well.

#### Milestones

##### GSOC CODING STARTS

* Install CTLearn and train a pre-existing benchmark model to verify that it runs correctly.
* Understand the technical and scientific goals of the project.

##### GSOC MIDTERM

* Implement loading continuous variables in CTLearn.
* Make a neural network for energy estimation based on the single telescope model in CTLearn and begin training it.
* Have all code and documentation in GitHub.

##### GSOC FINAL

* Complete the training and optimize the performance of the neural network for energy estimation.
* Add the capability for angular reconstruction to the neural network (time permitting).
* Create and train a neural network for energy estimation using multiple images based on the CNN-RNN model in CTLearn (time permitting).
* Make configuration files and plots demonstrating the performance of the neural network(s).
* Evaluating the energy bias and point spread function with the regression network. 
* Have all code, documentation, and final configuration files and plots in GitHub.
