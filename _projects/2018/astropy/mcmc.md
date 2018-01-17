---
name: A compatibility protocol for astropy models and emcee
desc: Implement a protocol to enable astropy models to be used in emcee
requirements:
 - Python
 - Solid understanding of probability (likelihood functions, Bayes' theorem, etc)
 - Working knowledge on Markov Chain Monte Carlo
difficulty: medium
issues:
 -
mentors:
 - mirca
 - karllark
initiatives:
 - GSOC
tags:
 - python
 - astropy
 - emcee
collaborating_projects:
 - astropy
---

#### Description

[emcee](https://github.com/dfm/emcee) is one of the most sucessfull
modern samplers extensively used by (but not limited to) the astronomical
community.
[astropy.modeling.models](http://docs.astropy.org/en/stable/modeling/#module-astropy.modeling.functional_models),
on the other hand, offers a myriad of easy-to-use models.
The goal of this project is to design and implement a protocol
that enables astropy models to be used in emcee.

A *potential* list of milestones might be:

1. Determine the best way to integrate an astropy model with
a posterior distribution.
2. Design and implement classes to represent Likelihood Functions and
Prior distributions.
3. Determine the best interface to be exposed to the user. For example,
```
g = Gaussian1D()
posterior = g.sample(likelihood='gaussian', prior='uniform', nwalkers=1000, kwargs)
```
or
```
sampler = Sampler()
posterior = sampler(model=Gaussian1D(), likelihood='gaussian', prior='uniform', nwalkers=1000, kwargs)
```
4. Write unit tests and documentation (using the astropy affiliated package template)
to ensure the implementations are operational.

*Notes: a potential good start for any candidates would be to take an
extensive look at*
[this](https://github.com/astropy/astropy-model-ideas/blob/master/MCMCWithAstropyModels.ipynb)
*IPython notebook.*

*Might be worth to look at* [oktopus](https://github.com/KeplerGO/oktopus)
*for inspiration on step 2.*
