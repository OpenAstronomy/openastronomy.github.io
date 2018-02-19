---
name: Reduction framework
desc: Reduction pipeline capable to store the calibration steps and propagate the error.
# add a short one line description of your project
requirements:
# Student requirements:
 - Some Experience with astronomical data reduction.
 - Expericence with python scientific programing.
difficulty: intermediate.
issues:
# Related issues (if any)  to this project.
mentors:
# First person in contact; mentors may change before project starts.
initiatives:
tags:
# Different technologies needed
 - python
 - pandas
 - numpy
 - matplotlib
 - astropy
 - pyraf
collaborating_projects:
# suborganisation(s) to which this project belongs.
---
This project proposes the design of a reduction pipeline for astronomical data capable to store the calibration steps configuration. This scheme would make possible an error propagation along the calibration process. Finally, this reduction pipeline would encourage sharing methodologies between users. 


#### Description

Unlike other scientific disciplines, astrophysical theories and models depend exclusively on observational data. The
diverse instruments on terrestrial or spatial telescopes convert the electromagnetic spectrum from into a signal,
whose strength depends on the number of incoming photons. These scientific observations, however, only pro-
vide a qualitative measurement on their own. Additional, non-scientific observations are required to calibrate the
astronomical signal into physical units. This calibration process is commonly known as data reduction.
Most telescope archives and virtual observatories provide access to their raw scientific observations, as well as,
their corresponding calibration files. The data reduction, however, must be accomplished by each user. For the
past 30 years, IRAF [1] has been the main tool available to the community for this purpose. Furthermore, thanks
to the available documentation and argument-based functions, it provides enough flexibility to treat data from any
instrument. Despite these unmatched features, this library application remains very challenging for both novice
and experienced users. In “The Zen of IRAF” guide by A Charles Pullen we can read in the introduction: “The user
who doesn’t [see every error message, as a worthy challenge] will likely be found naked, screaming, in the rain, on
a dark night, in their local city park prior to being institutionalized”. Given the current situation, those seeking to
use the available astronomical data have two options: Develop their own solutions via image processing algorithms
or relaying on the patronage of a previous user pipeline (either in IRAF [2] or, if available, the tools provided by
the telescope instrument [3]). Both of these scenarios contribute to a segmentation on the development, due to
different scientific objectives, instead of encouraging a convergence based on the algorithm purpose.
The python community has attempted to provide a more universal solution to the astronomical data calibration.
The STScI (Space Telescope Science Institute, an american university association working for NASA) developed
PyRaf . This library gives the ability to run IRAF functions in an environment that has all the power and flexibility
of Python. Despite this significant upgrade, its complexity has limited its support: The STScI has constrained the
installation to its legacy coanda package, which only supports python2.7. Another “pythonic” approach can be
found within the [Astropy](http://www.astropy.org/) project. The “ccdproc” package provides basic astronomical calibration treatments, which make use of python numerical libraries, while also including third party algorithms, such as the “lacosmic” task by [4].

#### Milestones

##### Data calibration framework:

* Be awesome

##### User feedback framework:

* Have done awesome stuff.

##### GUI:

#### References





* Finished the awesome stuff.
