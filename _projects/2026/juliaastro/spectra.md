---
name: Spectra.jl across the electromagnetic spectrum
desc: "Help develop Spectra\.jl and friends with JuliaAstro!"
requirements:
 - Familiarity with Julia
difficulty: medium
# Related issues (if any) to this project.
# Ideally you want at least one that describes the problem it is trying to solve
issues:
 - https://github.com/JuliaAstro/Spectra.jl/issues/41
# First person in contact; mentors may change before project starts.
# GitHub or GitLab handles
mentors:
 - fjebaker
 - icweaver
 - cgarling
 - barrettp
initiatives:
 - GSOC
project_size:
 - 175 h (Medium)
# Different technologies needed
tags:
 - Julia
# suborganisation(s) to which this project belongs.
collaborating_projects:
 - juliaAstro
---

# Spectra.jl across the electromagnetic spectrum

## Description

When we observe a star, we can filter particular colours to learn about the
star at different wavelengths of the electromagnetic spectrum. We can also
[disperse](https://en.wikipedia.org/wiki/Diffraction) the light through a prism
or off a grating to obtain the intensity of radiation across a range of
wavelengths simultaneously. This _spectrum_ can teach us many things, including
about the chemical abundance and composition of stars, the temperatures and
velocities of gasses and other materials, the presence of organic molecules on
exoplanets, the spacetime curvature near black holes and neutron stars, the
cosmological redshift of galaxies -- and, of course, much much more.

Spectra are measured over many different frequency ranges (e.g. radio,
infrared, optical, ultraviolet, X-ray, gamma-ray) and come in many different
formats. Particular frequency ranges have their own instrument types and
exploit different physics to measure the spectra precisely. This means that the
data files we receive from various observatories must be handled differently
and carefully in order for us to be able to gain meaningful and accurate
scientific insights.

This project aims to rework existing functionality in
[Spectra.jl](https://github.com/JuliaAstro/Spectra.jl), a Julia package for
loading and transforming astrophysical spectra of various types. The project
will build on work in
[SpectralFitting.jl](https://github.com/JuliaAstro/SpectralFitting.jl) and
[FITSFiles.jl](https://github.com/JuliaAstro/FITSFiles.jl) to provide a
uniform interface in Spectra.jl for loading datasets and their associated
metadata, and for performing basic manipulations and first-look analyses.

For some further discussion, see:
- https://github.com/JuliaAstro/Spectra.jl/pull/24

## Project Milestones

### Coding starts

* Learn about the different spectral data types and what makes, e.g. radio or
  X-ray, spectra unusual.
* Learn about [FITS](https://en.wikipedia.org/wiki/FITS) tables and other common
  astronomical data formats for spectra.
* Learn about [Test Driven Development
  (TDD)](https://en.wikipedia.org/wiki/Test-driven_development), and techniques
  for writing robust and reliable software. We are curating a library of spectral
  data that Spectra.jl needs to be compatible with, and so TDD will be our guide
  in staying focused.
* Familiarise yourself with the existing routines in Spectra.jl, and the
  [OGIP](https://heasarc.gsfc.nasa.gov/docs/heasarc/ofwg/docs/spectra/ogip_92_007.pdf)
  parser in SpectralFitting.jl.

### 1st evaluation

* To have moved and integrated the OGIP parser from SpectralFitting.jl to
  Spectra.jl. This should be a relatively easy and informative way to start, as
  all the code and tests have been written, and you will learn about the
  internals of Spectra.jl in the process.
* To have implemented data loading for (at least) one spectral datatype of your
  choice. In choosing which to implement, you can pick the difficulty that you
  feel is appropriate.

### Final evaluation

* A revamped Spectra.jl; that is:
* To have implemented data loading for a significant portion of our library of
  example spectra (ideally, for at least three different file formats).
* To provide some common routines, such as rebinning according to different
  heuristics (e.g. minimum flux, signal to noise, count rates, ...), adjusting
  the wavelength or energy shifts, or converting between common units.
