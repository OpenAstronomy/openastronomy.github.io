---
name: Serialisation of NDCube classes to ASDF
desc: This project will add functionality to `ndcube` and other relevant packages to save all the ndcube classes to ASDF files.
requirements:
 - Experience with Python
difficulty: medium to high
issues:
 - https://github.com/sunpy/ndcube/issues/111
mentors:
 - Cadair
 - DanRyanIrish
 - braingram
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

The [`ndcube` package](https://docs.sunpy.org/projects/ndcube/) is a SunPy affiliated package which provides a collection of objects for representing and manipulating data and world coordinates (stored as [WCS objects](https://docs.astropy.org/en/stable/wcs/index.html)) simultaneously.
Currently, the `ndcube` package does not provide any built in support for reading or writing it's various objects to files.

This project will add support for the [ASDF](https://asdf-standard.readthedocs.io/) file format.
As ASDF is a very metadata-rich file format, the end goal of this project is that **almost any object** should be able to be saved and then loaded back (aka round tripped) through ASDF.

The [`asdf`](https://github.com/asdf-format/asdf) Python package implements (de)serialization of custom types by defining a `Converter` class and a schema for the new type, along with some other supporting infrastructure ([see here](https://asdf.readthedocs.io/en/latest/asdf/extending/use_cases.html#serialize-a-new-type) for more details).
Since `ndcube` currently does not support ASDF at all, the additional steps of adding an `asdf` extension will need to be completed.

The first phase of this project will be to enable serializing a `ndcube.NDCube` object when `.data` is a numpy array and `.wcs` is a [`gwcs.WCS`](https://gwcs.readthedocs.io/) object.
To do this the following classes will need to have `Converters` written for them in `ndcube`:

* `NDCube`
* `GlobalCoords`
* `ExtraCoords`

The next step will be to extend this basic support with support for `astropy.wcs.WCS` classes as the `NDCube.wcs` property.
To do this a `Converter` for `astropy.wcs.WCS` will need to be added to the [`asdf_astropy`](https://github.com/astropy/asdf-astropy/) package.
Then to add support for all the WCS wrapper classes implemented in [ndcube](https://github.com/sunpy/ndcube/tree/main/ndcube/wcs/wrappers) and [astropy](https://github.com/astropy/astropy/blob/main/astropy/wcs/wcsapi/wrappers/sliced_wcs.py#L105) so that `NDCube` object which have been manipulated can also be saved to ASDF.
So by the end of this step the following classes will have converters written:

* `astropy.wcs.WCS`
* `SlicedLowLevelWCS`
* `ResampledLowLevelWCS`
* `CompoundLowLevelWCS`
* `ReorderedLowLevelWCS`

The final stage for the `ndcube.NDCube` object will be to ensure that a `NDCube` object with all optional properties set, such as `mask`, `uncertainty` and `psf` is able to be saved to ASDF.
This will at minimum require writing a `Converter` and schema for the `astropy.nddata.NDUncertainty` class in `asdf_astropy`.

The next phase of the project will be to add support for the other `ndcube` data types:

* `NDCubeSequence`
* `NDCollection`

## Goals

### Community Bonding Period

* Setup a development environment.
* Familiarize yourself with `asdf` extensions, `Converters` and schemas.

### Before 1st Evaluation

* Add the `asdf` extension infrastructure to `ndcube`.
* Write Converters and schemas for `GlobalCoords` and `ExtraCoords` (with tests).
* Write Converter and schema for `NDCube` (with tests).
* Extend test suite with other examples of saving and loading `NDCube` objects backed by different `gwcs.WCS` objects etc which can be reused as test cases later.

#### Before Final evaluation

* Have opened PRs to `asdf_astropy` for `astropy.wcs.WCS` and `astropy.nddata.NDUncertainty` classes.
* Have written tests in `ndcube` of serializing `NDCube` objects of higher complexity (`.uncertainty`, `.mask` etc) and with `astropy.wcs.WCS` objects.
* Add `Converters` and schemas for `NDCubeSequence` and `NDCollection` classes to `ndcube`.
