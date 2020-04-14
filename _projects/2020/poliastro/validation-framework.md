---
name: Validation framework
desc: Create a validation framework that compares poliastro with other similar software
requirements:
 - Experience automating processes with Python
 - Basic notions of numerical analysis
difficulty: medium
issues:
 - https://github.com/poliastro/poliastro/issues/109
mentors:
 - astrojuanlu
 - jorgepiloto
initiatives:
 - GSOC
 - SOCIS
tags:
 - python
collaborating_projects:
 - poliastro
---

#### Description

_Validation is hard._ The current approach in poliastro is to add unit tests that check whether poliastro gives the same result as the solved examples of [popular Astrodynamics textbooks](http://docs.poliastro.space/en/latest/references.html#books-and-papers).

However, poliastro is now a mature project and validating against textbook examples is not enough anymore,
for several reasons:

* It is being used more and more in companies and professional settings, which cannot afford failure
* It has grown in feature set and can do more complicated things, which are out of the scope of undergraduate textbooks

One example of this is the tests covering perturbations and low-thrust guidance laws
(see [GSOC 2018 results](https://blog.poliastro.space/2018/08/05/2018-08-05-google-summer-of-code-2018/)
for a summary and a list of links). These tests use research papers to validate poliastro code,
but in some cases we were not able to reproduce the original results and conclusions,
resulting in half-baked validations and experimental features.

For all the reasons above, we need to validate poliastro against external software,
such as SPICE, GMAT, and STK. Our first target will be
planetary reference frame transformations, but there are many more things to validate.

We have already set up [a validation repository](https://github.com/poliastro/validation/)
with a basic structure and a simple test case, but we want to expand it much further.

#### Milestones

##### Coding starts

* Engaged with the community and understand the motivation and challenges of
  the project.
* Have set up a development environment and get familiar with either SPICE, GMAT, STK, or all of them

##### 1st evaluation

* Have settled on one of the tools for reference frame validation
* Have a basic understanding of reference frames
* Have converted the `Body` rotational elements to proper reference frames
* Have all code, tests and documentation in GitHub

##### 2nd evaluation

* Have produced a table similar to [astropy's](http://www.astropy.org/coordinates-benchmark/summary.html) for our planetary reference frames
* Have all code, tests and documentation in GitHub

##### Final

* Have used a second method to validate the reference frames
* Have started a conversation in Astropy to integrate our code upstream
* Have all code, tests and documentation in GitHub

#### Secondary goals

* Fix any bugs that might appear regarding visualization, hyperbolic orbits and so forth
* Review pull requests from other poliastro contributors, including the mentor
* Maintain [poliastro benchmarks](https://benchmarks.poliastro.space/)
* Give a talk about the work at some Python event

#### Additional resources

* [Wiki page on Validation](https://github.com/poliastro/poliastro/wiki/Validation)
* [SpiceyPy](http://spiceypy.readthedocs.io/) (Python wrappers for SPICE)
* [GMAT](http://www.gmatcentral.org/)
* [STK](https://agi.com/products/engineering-tools)
* [Discussion about ecliptic reference frames in Astropy](https://github.com/astropy/astropy/pull/6508)
