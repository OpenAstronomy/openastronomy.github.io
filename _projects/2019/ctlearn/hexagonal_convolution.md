---
name: Hexagonal convolution
desc: Implement hexagonal convolution and pooling methods
# add a short one line description of your project
requirements:
# Student requirements:
- Python
- Basic familiarity with neural networks
difficulty: medium
issues:
# Related issues (if any)  to this project.
- https://github.com/ctlearn-project/ctlearn/issues/88
- https://github.com/ctlearn-project/ctlearn/issues/56
mentors:
# First person in contact; mentors may change before project starts.
- aribrill
- nietootein 
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

CTLearn is a Python package for using deep learning to perform analysis tasks on data from imaging atmospheric Cherenkov telescopes (IACTs). One of the most pressing challenges is processing raw IACT images captured by cameras made of hexagonal lattices of photo-multipliers. In order to feed the current deep convolutional neural network models, a transformation from hexagonal camera pixels to square image pixels has to be performed.

A different, more promising, approach is to implement hexagonal convolutional kernels. There are several packages (implemented in PyTorch) avaiable, which have been shown an improvement in performance. The goal of this project is to implement hexagonal convolution and pooling methods in CTLearn using Tensorflow.

In this project, the student will first study the different packages like [IndexedConv](https://github.com/IndexedConv/IndexedConv) and [HexagDLy](https://github.com/ai4iacts/hexagdly). The require transformations to create the input images for these packages are already implemented. Then, they will transfer the PyTorch code to Tensorflow and make it compatible with CTLearn. Finally, the CTLearn default models will be tested on the new method and compared with the conventional conversion methods.

#### Milestones

##### GSOC CODING STARTS

* Install CTLearn and train a pre-existing benchmark model to verify that it runs correctly.
* Understand the technical and scientific goals of the project.

##### GSOC MIDTERM

* Implement hexagonal convolution and pooling methods in CTLearn.
* Test/Train CTLearn default models using the new method.
* Have all code and documentation in GitHub.

##### GSOC FINAL

* Complete the training and optimize the performance of the neural network for hexagonal convolution.
* Compare performance with previous benchmarks.
* Make/Edit configuration files and plots demonstrating the performance of hexagonal convolution.
* Have all code, documentation, and final configuration files and plots in GitHub.
