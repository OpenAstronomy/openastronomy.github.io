---
name: Solar Eclipse analysis with sunpy
desc: Process and analysis images taken of the total solar eclipse that crosses the US in 2024
requirements:
 - Experience with Python
difficulty: medium to high
issues:
 - https://github.com/sunpy/sunpy/issues/7387
mentors:
 - nabobalis
 - ehsteve
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

On April 8 2024, a total solar eclipse will will cross North America, passing over Mexico, the United States, and Canada.
It is expected that more than 20 million people will be able to witness it and we can expect a large number of amateur photographers to record the event.

Thus the purpose of this project is to develop tools to enable ground-based amateur photographs of the solar corona taken during the eclipse to be imported into ``sunpy`` and processed to enable comparison with space-based data sets already available in ``sunpy`` such as SDO/AIA.
Eclipse photographs also frequently require processing steps such as stacking and aligning of multiple exposures, sharpening, and flat-fielding.
This may require new algorithms to be developed or existing tools in SciPy or  other libraries to be identified and applied.

This project will need to create the components within ``sunpy`` but also other libraries such as ``sunkit-image``.

There are several steps:

1. [Recreate this image.](https://svs.gsfc.nasa.gov/5073)
2. [Take the notebook and code from this repository](https://github.com/sunpy/solar-eclipse) of a previous eclipse and update it work with the current version of sunpy.
3. [Add a new topic guide for the 2024 Eclipse](https://github.com/sunpy/sunpy/issues/7387)
   This one has several smaller steps to break up the work.
   1. A guide on how to import a photograph into a Map and determine its coordinates
   2. Example processing steps to be performed on an eclipse photograph like stacking, flat-fielding, and sharpening

Note this will be a tricky project as we are dealing with solar coordinates, and how to determine them from the Earth.
Ideally some familiarly with solar coordinates and how astropy.coordinates works would be ideal but we realize that this is not always possible.

## Goals

### Community Bonding Period

* Get familiar wih solar coordinates and solar eclipse data.
* Setup a development environment.

### Coding starts

* Start by recreating the eclipse path image.

#### 1st evaluation

* Have updated the old notebook code to work with newer data.

#### Final evaluation

* Ideally finished each bullet pointed task.
