---
name: Phase-resolved spectroscopy
desc: Implement method to calculate the phase of oscillatory phenomena with non-constant frequency, and calculate phase-resolved spectra.
requirements:
 - Familiar with numerical analysis
difficulty: medium
issues:
 - https://github.com/StingraySoftware/stingray/issues/293
mentors:
 - abigailStev
 - matteobachetti
initiatives:
 - GSOC
tags:
 - python
 - scipy
 - numba
collaborating_projects:
 - timelab
---

#### Description

Quasi-periodic oscillations are the "heart-beat" of black holes and neutron stars: 
oscillations with changing phase and frequency, probably due to the complicated motion of matter around these objects. 
Besides characterizing how these frequencies evolve in time (accelerate, decelerate, for example, when the luminosity increases), 
it is important to understand their exact physical meaning. A few examples in the literature use different approaches 
to the problem, and calculate the different spectrum of the light emitted at different phases of these oscillations. 
This is highly non-trivial: one cannot follow easily the single "heartbeat", but needs to apply a strong de-noising to 
the signal first, and then calculate the average spectrum during the oscillation. 
The reward for this scientific approach can be very high, and people have implemented a few different approaches to the problem, e.g.:

+ Ingram et al. 2016](http://adsabs.harvard.edu/cgi-bin/nph-data_query?bibcode=2016MNRAS.461.1967I&link_type=EJOURNAL) [open-access preprint](http://adsabs.harvard.edu/cgi-bin/nph-data_query?bibcode=2016MNRAS.461.1967I&link_type=PREPRINT)

+ [Stevens & Uttley 2016](http://adsabs.harvard.edu/cgi-bin/nph-data_query?bibcode=2016MNRAS.460.2796S&link_type=ARTICLE) [open-access preprint](http://adsabs.harvard.edu/cgi-bin/nph-data_query?bibcode=2016MNRAS.460.2796S&link_type=PREPRINT)

In this Project, the student will work with the mentor to implement the full chain of denoising and 
phase-resolved spectroscopy of quasi-periodic oscillations, in such a way that

+ Any user with proper data sets can easily get a result

+ If datasets do not allow a solution (e.g. the modulation is not strong enough) warnings have to be sent.

+ Both methods can actually be used for pulsars too (it is the trivial case!).

#### Deliverables
Deliverables for this project will be

##### To complete each milestone

+ working unit tests for each piece of code

+ documentation for each class, method and function implemented

##### Milestone 1

+ a semi-automated procedure to follow the frequency of oscillations as they vary

##### Milestone 2

+ the de-noising function that leads to the oscillation average profile ("heartbeat" shape) at different energies

##### Final

+ a suite of scripts outlining workflows useful to scientists in practice
