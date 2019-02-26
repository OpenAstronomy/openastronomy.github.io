---
name: Optimization
# add a short one line description of your project
desc: Implement a framework for model optimization
requirements:
# Student requirements:
 - Python
 - Basic familiarity with neural networks
difficulty: medium
issues:
# Related issues (if any)  to this project.
 - https://github.com/ctlearn-project/ctlearn/issues/89
mentors:
# First person in contact; mentors may change before project starts.
 - nietootein
 - bryankim96
 - rlopezcoto
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

CTLearn is a Python package for using deep learning to perform
analysis tasks on data from imaging atmospheric Cherenkov telescopes
(IACTs). These tasks may be either classification or regression
problems. This project would enable automated model optimization in
CTLearn.

The sensitivity of IACTs is mostly driven by our capability of
distinguishing gamma-ray induced events from cosmic-ray induced
events. The better our deep learning models are in telling these two
populations apart the better our reach in the gamma-ray Universe will
be. Therefore, optimizing our deep learning models has the potential
to make a difference in our view of the Universe at these energies. 

In this project, the student will first learn how to use CTLearn to
train classification models that tell gamma-ray images from cosmic-ray
images apart and why this is important in the context of IACTs. Then,
the student will implement tools that will enable automated model
optimization in CTLearn, and will implement iterative grid and random
searches as a basic optimization procedure. Finally, the student will
run iterative, grid and random-search based optimizations for two of the
currently implemented models.

#### Milestones

##### GSOC CODING STARTS

* Install CTLearn and train a pre-existing benchmark model to verify that it runs correctly.
* Understand the technical and scientific goals of the project.

##### GSOC MIDTERM

* Implement the calculation of useful metrics from a prediction file.
* Implement iterative grid and random searches in (a)the hyperparameter (sub)space.  
* Have all code and documentation in GitHub.

##### GSOC FINAL

* Complete coarse iterative grid and random searches for the single_tel model.
* Complete coarse iterative grid and random searches for the cnn_rnn model.  
* Implement other optimization searches, e.g., random search, genetic algorithms, Bayesian optimization, etc. (time permitting).  
* Have all code, documentation, and plots in GitHub.
