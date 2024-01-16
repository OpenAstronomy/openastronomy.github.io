---
name: Improve sunkit-image
desc: Improve the features of sunkit-image
requirements:
 - Experience with Python
difficulty: low to medium
issues:
 - https://github.com/sunpy/sunkit-image/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc
mentors:
 - nabobalis
 - wtbarnes
initiatives:
 - GSOC
project_size:
 - 175 h / medium
tags:
 - sunpy
 - Python
collaborating_projects:
 - sunpy
---

# Description

In a previous GSoC project, [sunkit-image](https://github.com/sunpy/sunkit-image); a image analysis Python library for solar physics was created.
Over time, it has grown but lacks refinement and lots of issues have piled up and need addressing.

Therefore the aim of this GSoC project is to tackle as many of the following issues:

1. [Declass ASDA #42](https://github.com/sunpy/sunkit-image/issues/42)
2. [Clean up sunkit_image.trace API #134](https://github.com/sunpy/sunkit-image/issues/134)
3. [ASDA has no gallery example #45](https://github.com/sunpy/sunkit-image/issues/45)
4. [Refactor the `coalignment` module](https://github.com/sunpy/sunkit-image/issues/83)
5. [Add a coalignment example to the gallery #103](https://github.com/sunpy/sunkit-image/issues/103)
6. [Add persistence transform example to the gallery](https://github.com/sunpy/sunkit-image/issues/76)
7. [Failing test test_multiscale_gaussian #96](https://github.com/sunpy/sunkit-image/issues/96)
8. [Figure out what from SunPy core can be moved here #5](https://github.com/sunpy/sunkit-image/issues/5)

We appreciate that this not the interesting project as it will mostly fixing up issues and open pull requests.

If there is some time left over:

1. Performance profiling of the current functions to find bottle necks and improve performance where possible.

## Goals

### Community Bonding Period

* Get familiar with the library.
* Setup a development environment.

### Coding starts

* Start working on the first issue.

#### 1st evaluation

* Have around ~50% of the issues taken care of.

#### Final evaluation

* Ideally have 100% of the issues finished.
