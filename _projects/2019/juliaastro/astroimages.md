---
name: Visualization of astronomical images in Julia
desc: Expand the capabilities of the AstroImages.jl package
requirements:
 - Familiarity with FITS files
 - Julia
difficulty: medium
issues:
 - https://github.com/JuliaAstro/AstroImages.jl/issues/1
 - https://github.com/JuliaAstro/AstroImages.jl/issues/2
 - https://github.com/JuliaAstro/FITSIO.jl/issues/90
mentors:
 - giordano
 - dpshelio
initiatives:
 - GSOC
tags:
 - julia
collaborating_projects:
 - JuliaAstro
---

#### Description

[Julia](http://julialang.org/) is a programming language designed for technical
computing that combines ease-of-use of dynamical languages, like Python, and
high-performance of statically-compiled languages, like C.  Its most notable
feature is [multiple dispatch](https://en.wikipedia.org/wiki/Multiple_dispatch),
which greatly simplifies the definition of complex functions whose behavior
depends on the type of the arguments.

The [JuliaAstro](https://juliaastro.github.io/) organization aims at providing
to astronomers the tools to work with the Julia language: there are libraries
for manipulation of FITS files, transformation of coordinates, cosmological
calculations, time system conversions, and computation of dust extinction laws.

One of the latest packages is
[`AstroImages.jl`](https://github.com/JuliaAstro/AstroImages.jl), which will
allow researchers to visualize astronomical images coming from [FITS
files](https://en.wikipedia.org/wiki/FITS).  This package is now in its infancy
and has very basic features, the goal of this project is to expand it and make
it more useful.  `AstroImages.jl` has not been officially registered yet, thus
you will be able to freely make any breaking change.

#### Expected Outcomes

* Design and implement the user interface
* Support visualization of multiple extensions (e.g., three extensions combined
  with RGB)
* Integrate with WCS info (accessible via
  [`WCS.jl`](https://github.com/JuliaAstro/WCS.jl))
* Integrate with common visualization and plotting frameworks in Julia, like
  [`Images.jl`](https://github.com/JuliaImages/Images.jl),
  [`Plots.jl`](https://github.com/JuliaPlots/Plots.jl), and optionally
  [`Makie.jl`](https://github.com/JuliaPlots/Makie.jl)
* Ensure smooth integration with Jupyter notebooks (basic integration is already
  in place)
* Write documentation and tests

#### Additional resources

* [Presentation of
  `AstroImages.jl`](https://giordano.github.io/blog/2018-03-22-astroimages/)
* [Preparing Red‐Green‐Blue Images from CCD
  Data](http://dx.doi.org/10.1086/382245)
* [Making plots with world coordinates in
  Astropy](http://docs.astropy.org/en/stable/visualization/wcsaxes/)
* [Image reprojection (resampling) in
  Python](https://reproject.readthedocs.io/en/stable/)
