---
name: Modern Statistical Modeling in Stingray.
desc: Make the statistical modeling infrastructure in stingray more robust by using algorithms and implementations developed for machine learning, such as TensorFlow Probability, PyMC3 and JAX. 

requirements:
 - Proficiency in Python
 - Knowledge of automatic differentiation or probabilistic programming helpful, but not essential
difficulty: medium
issues:
 - https://github.com/StingraySoftware/stingray/issues/520
mentors:
 - dhuppenkothen
 - matteobachetti
initiatives:
 - GSOC
tags:
 - python
 - signal processing
 - time series analysis
 - statistics 
 - Bayesian inference
 - astronomy
collaborating_projects:
 - stingray
---

#### Description
Stingray aims to provide a comprehensive library of reliable, well-tested implementations of common algorithms for time series analysis in Astronomy. Often, the ultimate goal of a researcher is statistical inference of some properties of an astronomical object. While stingray currently has an infrastructure for parametric modelling of Fourier products and light curves (based primarily on numpy and scipy), the existing infrastructure and algorithms are relatively fragile and tend to fail often.

In this project, the student will add automatic differentiation and modern optimization algorithms to make the existing infrastructure more robust. In a second step, the student will extend the existing infrastructure to facilitate building fully probabilistic models in TensorFlow Probability or PyMC3.  


#### Milestones (if any)

1. Implementation of JAX-based automatic differentiation.
2. Implementation of a fully probabilistic program for modeling of periodograms.

##### Coding starts

* Understand basics of automatic differentiation and have an overview of the individual components that need to be implemented/modified.

##### 1st evaluation

* Implementation of automatic differentiation is complete..

##### Final

* Implementation of automatic differentiation in combination with a probabilistic model.
* Wrap up connecting the new implementation to existing Stingray classes, finish documentation and associated tutorial in a Jupyter notebook.
