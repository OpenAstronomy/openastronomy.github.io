---
name: Modeling and Fitting with Glue
desc: Make it possible to fit 1D and 2D datasets in Glue through Sherpa and Astropy
requirements:
 - Proficiency in Python
 - GUI programming
 - Specific QT experience is a plus
 - Test Driven approach is also a plus
difficulty: intermediate
mentors:
 - olaurino
 - astrofrog
initiatives:
 - GSOC
tags:
 - python
 - GUI
collaborating_projects:
 - glue
 - astropy

---

#### Description

[Sherpa](https://github.com/sherpa/sherpa) is an open source Python Modeling and Fitting application. It has been integrated into
[Astropy](https://github.com/astropy/astropy) through the [Saba](https://github.com/astropy/saba) project, which provides Astropy users
with a seamless API for fitting with Sherpa, as part of the 2016 Google Summer of Code.

This project will make one big step further and
provide [Glue](https://github.com/glue-viz/glue) with a fitting plug-in based on such API. A successful project will result in a plug-in that allows users to fit data from
a scatter plot, selecting options like optimization methods and statistics. Additionally, GUI-specific features might be added, like
setting parameters and filters with point-and-click gestures. As Sherpa can fit both 1D and 2D datasets, images fitting could also be
supported. The milestones below are a draft. Student's suggestions are encouraged.

#### Milestones

##### Command Line 1D fitting

This milestone will ensure that there are no impediments to the successful completion of the projects, and that we can work around
issues if they do arise. It will also provide the basic implementation for the business logic that will be activated
by the GUI widgets, as well as a testing baseline. After this milestones a user would be able to load data, configure and perform a fit,
and display the model on the scatter plot, all from the IPython command line embedded in Glue.

##### 1D basic fitting widgets

This milestone enables a user to load data, set a model and its parameter values by hand, and display the evaluated model, all from the GUI.
It would then be trivial to just have Sherpa perform the fit, with the model updated and correctly displayed.

Tests exercise as much functionality as possible, including error handling.

A successful project may stop here. Additional potential milestones are listed below.

##### 1D advanced fitting

Users can set filters and set initial parameter values through the GUI, possibly pointing and clicking on
the plot itself. For instance, a user may select only a specific spectral range to be fitted. For a gaussian model the user
may click to select the rough spectral range for the profile, and the code would *guess* the other initial parameters, like mean and standard deviation.
The *guessing* procedures are implemented on a class-by-class basis in an Object Oriented fashion, so that similar functionality can be added
at a later time by implementing the relative methods in model classes, possibly in responde to the user's input.

Depending on the project's advancement, more functionality would be considered and added at this stage.

##### 2D fitting

Why stopping at 1D? Once the implementation can deal with 1D fitting it should not be hard to extend the functionality to
perform image fitting. Again, simple cases first, and then provide for more advanced use cases, e.g. filtering and guessing
initial parameters, as well as dealing with background emission, etc.

