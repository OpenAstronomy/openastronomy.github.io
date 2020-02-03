---
name: Fido
desc: Improving Fido's User Experience
requirements:
 - Quite familiar with Python.
difficulty: Medium
issues:
- https://github.com/sunpy/sunpy/pulls?q=is%3Apr+label%3A%22Needs+Adoption%22+is%3Aclosed+label%3Aunidown
- https://github.com/sunpy/sunpy/issues/3336
- https://github.com/sunpy/sunpy/issues/3735
- https://github.com/sunpy/sunpy/issues/3733
- https://github.com/sunpy/sunpy/issues/3734
- https://github.com/sunpy/sunpy/issues/2744
- https://github.com/sunpy/sunpy/issues/2631
mentors:
 - Cadair
 - nabobalis
initiatives:
 - GSOC
tags:
 - python
collaborating_projects:
 - SunPy
---

Improving Fido's User Experience

#### Description

The ability to download data via SunPy is provided by the Federated Internet Data Obtainer or more usually referred to as Fido.
This forms an unified client that abstracts out away the intricacies of who or where you area downloading data from as long as it is the correct request.

[An overview of fido is located in our documentation.](https://docs.sunpy.org/en/latest/guide/acquiring_data/fido.html)

While it is quite mature, it still has a range of features and clients missing as well bugs.
You can find a list of these in the issues section (to the left).
The biggest bugbears are how Fido deals with failed downloads, it is not integrated with two large metadata clients and the shear amount of old clients that were never migrated to Fido.

This project will also touching the library sunpy uses to do the file download known as [parfive](https://github.com/Cadair/parfive).
Some of the features we require for Fido would need to be added there and not in sunpy.
A minor roadblock if you are interested in this project is that parfive is asynchronous which means you will need to get familiar with that paradigm of python programming.
