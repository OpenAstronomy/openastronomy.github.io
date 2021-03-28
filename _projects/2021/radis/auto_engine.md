---
name: Automatic Lineshape Engine
desc: choose the optimal linehape engine for best CPU performances depending on a to-be-determined relevant number
# add a short one line description of your project
requirements:
# Student requirements:
difficulty: medium
issues:
# Related issues (if any) to this project.
 - https://github.com/radis/radis-benchmark/issues/5
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - erwanp
 - pankaj
initiatives:
 - GSOC
tags:
# Different technologies needed
 - Python
 - Git
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - radis
---


#### Description

The RADIS code was developed to characterize the radiation of plasmas, flames and atmospheres. It calculates high-temperature infrared spectra from databases of tens of millions of lines, with a new algorithm that already makes it one of the fastest line-by-line spectral codes available. 

The new algorithm is very efficient for large number of lines. However, for very widespread spectra with low number of lines, the legacy algorithm performs better. It was suggested that a scaling number would of the form : 

$$ Rc = broadening_cutoff  / wstep * N_lines / log(spectral range / wstep) $$ 

For low values of Rc, the legacy method would perform better. For large values of R, the new algorithm would perform better. 

The first goal of the project is to confirm or adjust this number, by setting up benchmark cases under various simulation conditions. 
The second goal of the project is to automatically switch the lineshape algorithm used at runtime based on the value of the number.


#### Milestones

##### Coding starts

* Engage with the community on [💬 RADIS Slack](https://github.com/radis/slack-invite)

* Training on emission & absorption spectroscopy

* Have set up a development environment, be familiar with open-source tools (GitHub / Git / Tests) and [RADIS architecture](https://radis.readthedocs.io/en/latest/dev/developer.html#architecture)

##### 1st Evaluation

The goal is to confirm or adjust the critical number above. We only use RADIS and do not edit the codebase yet : 

* Run at least 100 benchmark cases, for various HITRAN (see [HITRAN spectra](https://radis.readthedocs.io/en/latest/examples/hitran-spectra.html#) ) and larger databases (HITEMP, CDSD-4000).  

* Compare the results for the two lineshape engines of [calc_spectrum](https://radis.readthedocs.io/en/latest/source/radis.lbl.calc.html#radis.lbl.calc.calc_spectrum) (`optimization="None"` and `optimization="simple"`), and plot them against the R number. 

* Write a Jupyter Notebook to discuss the changes made to the R number formula, and the critical value obtained. 


##### Final

We now update the RADIS codebase to implement the automatic engine choice :

* Add some of the benchmarks above in the [cpu-performance benchmark](https://github.com/radis/radis-benchmark/tree/master/manual_benchmarks) to track the changes. 

* Compute the `Rc` number in [calc_spectrum](https://radis.readthedocs.io/en/latest/source/radis.lbl.calc.html#radis.lbl.calc.calc_spectrum) and automatically choose the optimization mode accordingly.

* Choose what lineshape-broadening-cutoff to use by default in the legacy algorithm. 

* Re-run the benchmarks and ensure the fastest option is always chosen.

* Have all code, tests and documentation in GitHub.

##### Secondary Goals 

* For the math/algorithm-oriented student : set-up the code architecture to deal with large spectra composed of multiple spectral regions, some of which would have different `Rc` numbers, and use the appropriate algorithm for each spectral region before merging the spectra. 