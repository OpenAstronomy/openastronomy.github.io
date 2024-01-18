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

[sunpy-soar](https://github.com/sunpy/sunpy-soar) is an extension to sunpy [Fido downloader](https://docs.sunpy.org/en/stable/tutorial/acquiring_data/index.html#sunpy-tutorial-acquiring-data-index) to download data from the Solar Orbiter Archive
(SOAR).

This data source has an extensive API and rich metadata which currently is unsupported by sunpy-soar.

The goal of this GSoC project, is to add support for the large range of available metadata.
The API of of the SOAR uses a [TAP protocol](https://git.ias.u-psud.fr/spice/data-analysis-club/-/blob/main/20231205-soar-tap/tap-demo.ipynb)  so it will be important for any student to get familiar with this protocol.
Further to this, there is a large range of [possible values and types of tables](https://www.cosmos.esa.int/web/soar/tables-views-and-columns) which are important to understand as they are different for different files one might want to download.

This involves understanding the [complicated attribute system](https://docs.sunpy.org/en/stable/topic_guide/extending_fido.html) that Fido uses.
We will need to add new ones to query new metadata fields that the SOAR uses but also to translate them from TAP queries back into "normal" values after.

For example, there are existing attributes like that can be mapped like ``Wavelength`` which would take values from the following table ``v_<instrument>_<ll/sc>_fits`` with its column `wavelength`.
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
