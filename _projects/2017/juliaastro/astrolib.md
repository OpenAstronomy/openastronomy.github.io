---
name: Porting the IDL Astronomy User's Library to Julia
desc: Expand the ecosystem of astronomical routines in Julia language.
requirements:
 - Julia
 - IDL
 - Knowledge of astronomy is beneficial, but not required
difficulty: low to intermediate
mentors:
 - giordano
 - kbarbary
initiatives:
 - GSOC
tags:
 - julia
collaborating_projects:
 - JuliaAstro
---

#### Description

[Julia](http://julialang.org/) is a programming language designed for technical
computing that combines ease-of-use of dynamical languages and high-performance
of statically-compiled languages like C.  Its most notable feature
is [multiple dispatch](http://en.wikipedia.org/wiki/Multiple_dispatch), which
greatly simplifies the definition of complex functions whose behavior depends on
the type of the arguments.

The [JuliaAstro](https://juliaastro.github.io/) organization aims at providing
to astronomers the tools to work with Julia language: there are libraries for
manipulation of FITS files, transformation of coordinates, cosmological
calculations, time system conversions, and computation of dust extinction laws.

The goal of this project is to expand
the [AstroLib.jl](https://github.com/JuliaAstro/AstroLib.jl) package, which
bundles generic astronomical and astrophysical functions, mainly ported from
the [IDL Astronomy User's Library](https://idlastro.gsfc.nasa.gov/homepage.html)
(a.k.a. AstroLib).  You should focus on porting the astronomical utilities
first.  If you don't know where to start from, have a look at:

* the
  [AstroLib.jl manual](https://juliaastro.github.io/AstroLib.jl/latest/index.html)
* the [TODO list](https://github.com/JuliaAstro/AstroLib.jl/blob/master/TODO.md)
  of the project, with the list of *all* functions in IDL AstroLib not yet
  ported
* the list
  of [Astronomical Utilities](https://idlastro.gsfc.nasa.gov/contents.html) in
  IDL AstroLib

While an experience with programming in Julia would be helpful, this is not
necessary, but you should get acquainted with the language before the coding
period.  If you are a Julia newbie, check out
the [Manual](http://docs.julialang.org/en/latest/index.html), in particular
the
[performance tips](http://docs.julialang.org/en/latest/manual/performance-tips.html) and
the
[style guide](http://docs.julialang.org/en/latest/manual/style-guide.html).
[Here](http://julialang.org/learning/) you may find other useful resources.
