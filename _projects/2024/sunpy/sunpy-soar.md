---
name: Querying SOAR Metdata
desc: Adding proper metadata handling to sunpy-soar
requirements:
 - Experience with Python
difficulty: medium to high
issues:
 - https://github.com/sunpy/sunpy-soar/issues/46
 - https://github.com/sunpy/sunpy-soar/issues/66
mentors:
 - hayesla
 - nabobalis
 - ebuchlin
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

[sunpy-soar](https://github.com/sunpy/sunpy-soar) is an plug-in to [sunpy's Fido](https://docs.sunpy.org/en/stable/tutorial/acquiring_data/index.html#sunpy-tutorial-acquiring-data-index) to download data from the [Solar Orbiter Archive (SOAR)](https://soar.esac.esa.int/soar/).

This data provider has an extensive API and rich metadata which currently is not fully supported by sunpy-soar.

The goal of this GSoC project, is to add support for a subset of the available metadata, the shear variety means that it is not practical or useful to add 100% coverage.
The API of of the SOAR uses a [TAP protocol](https://git.ias.u-psud.fr/spice/data-analysis-club/-/blob/main/20231205-soar-tap/tap-demo.ipynb) so it will be good for any student to get familiar with this protocol.
Further to this, there is a large range of [possible values and types of tables](https://www.cosmos.esa.int/web/soar/tables-views-and-columns) which are important to understand as they are different for different files.

On the sunpy side, understanding the [sunpy.net attribute system](https://docs.sunpy.org/en/stable/topic_guide/extending_fido.html) that Fido uses is also useful.
This translates Python code into the correct values required to do any query and then back into "normal" values after.
As we are not planning to add every metadata as a new attribute, we will make use of more generic ones to enable filtering, similar to how it is done for another data provider, the [JSOC](https://docs.sunpy.org/en/latest/generated/api/sunpy.net.jsoc.Keyword.html#sunpy.net.jsoc.Keyword).
If we do need to add new ones, they should have a very specific reason to exist, or we might need to add support for them within sunpy for other data

For example, there are existing attributes like that can be mapped like ``Wavelength`` which would take values from the following table ``v_<instrument>_<ll/sc>_fits`` with its column `wavelength`.
[More examples are here.](https://github.com/sunpy/sunpy-soar/issues/46#issuecomment-1557936562)

This will project will partly be working out all of the connections for each table to enable these "translations".
Thus the outcome would be:

1. Additional attributes with metadata from the SOAR are returned from a sunpy-soar query with Fido.
2. Support for searching/filters with these attributes.

We do have one stretch goal and that would be to look into using [astroquery TAP](https://astroquery.readthedocs.io/en/latest/utils/tap.html) instead of manually constructing the TAP queries in sunpy-soar.

## Goals

### Community Bonding Period

* Get familiar with the SOAR and TAP protocols.
* Setup a development environment.

### Coding starts

* Start working on adding support for additional attributes.

#### 1st evaluation

* Have the additional attributes implemented.

#### Final evaluation

* Enable filters on the additional attributes.
