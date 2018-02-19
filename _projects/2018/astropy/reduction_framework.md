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

![alt text](https://github.com/Vital-Fernandez/openastronomy.github.io/blob/master/_projects/2018/astropy/Diagram1.png
 "Project workflow")

This project seeks to follow these previous works lead, while also introducing a new layer of features to improve
the astronomical data calibration by making it easier to share and also by improving its scientific value. The diagram
on Fig.1 displays a basic workflow structure for this calibration framework. At the heart of this design we find a
data container, which stores the order of the calibration procedures, as well as, their configuration. This container
guarantees the main two advantages from this project: Firstly, since all the user inputs are saved, any user can
repeat the calibration treatment, as long as, there is access to the raw observations and this file. Secondly, since all
the steps are preserved, this set-up can accomplish an error propagation from the original data to the final calibrated output. Even though, the pixel noise can be easily calculated from the instrument manufacturer documentation,
most published research does not include the uncertainty source due to the complexity of the calibration process,
even though the mathematical foundation is well establish [5]. Instead, researchers commonly take a 5% on the
pixel value which is the upper limit in high quality observations of the standard flux calibration stars. Nevertheless,
once all the calibration steps are properly stored a reduction pipeline such as this one, could automatically repeat
the calibration steps on the error frames. This approach would address this issue while reducing the calibration
complexity.

#### Milestones

##### Data calibration framework:

The main class functions enable the user to link the image processing algorithms,
which may be imported from PyRaf, ccdproc or third party libraries, with the desired configuration. This algorithms
sequence and their configuration is stored into data container, for which we can use a pandas dataframe. Once the
current algorithm is executed the output data is also stored within the calibration data container. Finally, using
this information the same algorithm is executed on the uncertainty frame to propagate the error.
Within this milestone work, no feedback is provided to the user. However, using tools such as pylatex, it is
possible to generate a log to print the output, and hence, check the output quality. For example, in the case of
the lacosmic task, an algorithm developed to remove cosmic rays, we may include a frame before and after the
treatment, as well as, the cosmic rays mask. This is displayed in Fig.2.



##### User feedback framework:

* Have done awesome stuff.

##### GUI:

#### References





* Finished the awesome stuff.
