---
name: Porting ERFA's Time Scale Conversion Functions to Julia
desc: Expand the ecosystem of astronomical routines in the Julia language.
requirements:
 - Julia
 - C
 - Knowledge of astronomical time systems is beneficial, but not required
difficulty: low to intermediate
mentors:
 - helgee
 - giordano
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
to astronomers the tools to work with the Julia language: there are libraries for
manipulation of FITS files, transformation of coordinates, cosmological
calculations, time system conversions, and computation of dust extinction laws.

The [AstroTime.jl](https://github.com/JuliaAstro/AstroTime.jl)
package provides a new `Epoch` data type that handles conversions between all
commonly used astronomical time scales. The code currently calls the tried and
tested C function for time scale conversions from
[ERFA](https://github.com/liberfa/erfa).
The goal of this project is to port these routines to Julia to improve the
packages's interoperability with the rest of the Julia ecosystem and validate
the new implementation against ERFA.
If you don't know where to start from, have a look at:

* the
  [AstroTime.jl manual](https://juliaastro.github.io/AstroTime.jl/latest/index.html),
* the [TODO list](https://github.com/JuliaAstro/AstroTime.jl/issues/1)
  of the project, with the list of *all* functions not yet ported,
* the [SOFA Time Scale and Calendar Tools](http://www.iausofa.org/2017_0420_C/sofa/sofa_ts_c.pdf)
  manual.

While experience with programming in Julia would be helpful, it is not
required. You should get acquainted with the language before the coding
period nevertheless. If you are a Julia newbie, check out
the [Manual](http://docs.julialang.org/en/latest/index.html), in particular
the
[performance tips](https://docs.julialang.org/en/latest/manual/performance-tips/) and
the
[style guide](https://docs.julialang.org/en/latest/manual/style-guide/).
You may also find [other useful resources](http://julialang.org/learning/).
