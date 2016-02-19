---
layout: default
title:  "Ideas for Julia Astro"
show_main: false
ideas_team: JuliaAstro
---

### Image compression and efficient table reading in FITSIO.jl

*Suggested Mentor(s):* [Kyle Barbary](http://github.com/kbarbary), [Ryan Giordan](https://github.com/rgiordan)

*Difficulty:* Intermediate to Expert

*Astronomy knowledge needed:* none

*Programming skills:* Julia, some C

#### Description

FITS (Flexible Image Transport System) format files are the standard
containers for imaging and tabular data in astronomy. The
[FITSIO.jl](https://github.com/JuliaAstro/FITSIO.jl) package provides
support for reading and writing these files in Julia. It is
implemented as a high-level, yet efficent, wrapper for the C library
cfitsio. This project would involve improving the available
functionality and performance of FITSIO.jl. Some desired features,
such as I/O of compressed images, reading and writing subsets of
tables and appending to existing tables already have implementations
in cfitsio. Implementing these would involve understanding the cfitsio
API and writing wrappers in Julia using `ccall`. A more advanced
feature is fast I/O of large tables with multiple columns. No C API
exists for this -- it would involve understanding memory layout of
FITS tables, pointer arithmetic and byteswapping. It will be
interesting to see whether this can be done efficiently in Julia or if
a C shim is required. Finally, benchmarks should be implemented to
ensure that FITSIO.jl performance is as good as possible.

For a more detailed list of features, see [this
issue](https://github.com/JuliaAstro/FITSIO.jl/issues/37).
