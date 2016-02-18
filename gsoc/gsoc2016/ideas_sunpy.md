---
layout: default
title:  "Ideas for SunPy"
show_main: false
ideas_team: SunPy
---

### Lightcurve Refactor

*Suggested Mentor(s):* [Stuart Mumford](http://github.com/Cadair), [Dan Ryan](https://github.com/DanRyanIrish), [Andrew Inglis](https://github.com/aringlis), [Jack Ireland](https://github.com/wafels)

*Difficulty:* Beginner

*Astronomy knowledge needed:* None

*Programming skills:* Python

#### Description
The `Lightcurve` class is one of the three core datatypes in SunPy, along with Map and Spectra.
`Lightcurve` is designed to read in, process and store meta data related to solar physics time series data.
Currently, `Lightcurve` uses the pandas library as its underlying data structure, however, this is subject to change in the future.

Much like the `map` submodule, `lightcurve` needs to be able to read in various supported data formats (such as FITS, ascii and others in the future), store their meta data and give users unified access to this metadata independently of the original source of the data.

As currently implemented (as of 0.6) the `lightcurve` module performs three core tasks:

1. Download the raw data
1. Read this data into a pandas dataframe
1. store the meta data obtained with the data.

As of the SunPy 0.7 release the first stage will be moved out of `lightcurve` and into the `net` subpackage as part of the [`UnifiedDownloader`](https://github.com/sunpy/sunpy/pull/1300) Pull Request.
This leaves `lightcurve` in a similar position to `map` where the data acquisition is not part of the core data type and is managed separately.

The objective of this project is to re-implement the core of the lightcurve submodule, such that it no longer contains the code to download data from the internet. The lightcurve module should be able to open file from disk that have been downloaded using the new UnifiedDownloader submodule. The lightcurve factory must be able to read files from multiple sources some of which will be able to be auto-detcted and some which will not. The lightcurve module must also be able to combine multiple files into a single timeseries.

**Expected Outcomes**

Someone under taking this project will complete the following tasks:

1. Become familiar with the `UnifiedDownloader` code, if it has not been accepted into the SunPy codebase, complete the remaining tasks for this to be achieved.
1. Write a factory class for `lightcurve` similar to the `sunpy.map.Map` class. This class will be a generic constructor for `lightcurve` allowing the user to instantiate any one of the many subclasses of `GenericLightcurve` present in `sunpy.lightcurve.sources`. The API design for the factory class is in [SEP 7](https://github.com/sunpy/sunpy-SEP/blob/master/SEP-0007.md).
1. Design and develop a robust method of dealing with lightcurve meta data, which can handle joining different parts of timeseries from different files, each with their own meta data. (See [#1122](https://github.com/sunpy/sunpy/issues/1122))


A successful proposal for this project will demonstrate that the applicant has understood the mechanism behind the `Map` factory as already implemented in SunPy and presents a timeline of what things need to change in Lightcurve to mirror the design of `Map` and follow the design for Lightcurve in [SEP 7](https://github.com/sunpy/sunpy-SEP/blob/master/SEP-0007.md).


### Implementing AIA response functions in SunPy

*Suggested Mentor(s):* [Drew Leonard](https://github.com/drewleonard42), [Will Barnes](https://github.com/wtbarnes)

*Difficulty:* Beginner

*Astronomy knowledge needed:* Some knowledge of coronal emission processes would be beneficial.

*Programming skills:* Python.

####Description

The [CHIANTI](http://www.chiantidatabase.org/) atomic physics database is a valuable resource for solar physics.
The CHIANTI database holds a large amount of information on the physical properties of different elements in different ionisation states and enables the calculation of various parameters from this information.
Using CHIANTI it is possible to calculate the spectra of various types of solar plasma (e.g., flare, quiet sun, etc.) from the observed elemental abundances and ionisation states.
These synthetic spectra are essential for calculating reponse functions of various instruments.
An instrument's wavelength response function describes how much light emitted at a given wavelength is measured by the instrument.
Similarly, the temperature response function describes the instrument's sensitivity to light emitted by plasma at a particular temperature.
These response functions play a vital role in correctly interpreting observations, as does proper calculation of these functions.

Currently, SunPy has no implementation of instrument response functions.
This project would develop the routines necessary to calculate response functions using the Python interface to the CHIANTI database, [ChiantiPy](http://chiantipy.sourceforge.net/).
The primary implementation of this would be to produce default wavelength and temperature response functions for the [Atmospheric Imaging Assembly](http://aia.lmsal.com/) instrument.
A detailed discussion of the AIA response functions can be found in [Boerner et al 2012](http://adslabs.org/adsabs/abs/2012SoPh..275...41B/).

Other potential applications of ChiantiPy in SunPy include:

1. Generalisation of the code to produce response functions using arbitrary values of physical parameters (elemental abundances, etc.).
1. Calculation of reponse functions for other instruments.
1. Conversion of ChiantiPy spectra objects to SunPy Spectra objects.

**Expected Outcomes**: This project would facilitate SunPy becoming independent from Solar SoftWare (SSW) for analysing AIA data, particularly with respect to inferring plasma properties such as temperature and density.

A successful proposal will outline a schedule for implementing at least a single set of temperature and wavelength response functions for AIA, and the response functions for arbitrary plasma conditions would be a bonus.
Familiarity with CHIANTI, ChiantiPy and SSW's implementation of the response functions will help to properly assess how long will be required to recreate them in SunPy.


### Improvements to the SunPy Database

*Suggested Mentor(s):* [Stuart Mumford](http://github.com/Cadair), [Simon Liedtke](http://github.com/derdon), [Steven Christe](http://github.com/ehsteve)

*Difficulty:* Intermediate

*Astronomy knowledge needed:* None

*Programming skills:* Python, some database design knowledge would be helpful.

#### Description

The `database` module provides functionality to users to manage collections of files on disk in a way not reliant upon folder structure and file name.
The database allows users to find files on disk by either physical parameters, such as wavelength and time or properties of the instrument such as name and spacecraft.
It also allows more complex queries by enabling searches of the raw meta data associated with the files.

The SunPy database will also act as a proxy for some web services supported by SunPy. When used like this, the database module takes a user query, downloads the data from the web service and then stores it in the database, and then returns the query to the user. SunPy contains clients to various web services, the first and primary web service SunPy supported was the Virtual Solar Observatory (VSO), this is the web service the database was originally designed to support. Since the original development of the database module, the database has also been extended to support the HEK client.

The SunPy web clients, use a system named `attrs` (an abbreviation for attributes) to compose queries, this attrs system is also used by the database to perform queries on the database, with some of the attrs shared between the VSO client and the database.
Recently, a new downloader front end (originally named `UnifiedDownloader`, now affectionately known as `Fido`) has been developed, this provides a Factory Class, with which various download clients (such as the VSO) can register with, providing information about which attrs and attr values that client supports. Using this approach, the `Fido` downloader provides a single interface to the many different services SunPy supports.
The first part of this project will be to update the database module to support the new `Fido` interface, specifically by using `Fido` inside the database to retrieve data.

The second part of the project will be to update the caching mechanism implemented in the database module. The current caching system serialises the users VSO query and stores it as JSON, upon the user requesting another query, the query will be compared to the cache of serialised queries and if a match is found, the results from the cached query returned.
This mechanism is limiting in that if the user requests 100 records in query A and 100 records in query B, but 50 of the records requested in both queries are the same (i.e. two overlapping time windows) then the 50 records will be re-downloaded as the cache of query A will not match query B.
The updated caching system will store the records a query returns (before the data is downloaded) and then link the results of a query to the records in the database (once the data has been downloaded). Then when records are retrieved from a web service, any records that are stored in the cache table can be skipped for retrieval from the web service and returned from the records in the database.
This will allow the caching of partial queries rather than whole queries as is currently implemented.

This project aims to achieve the following things:

1. Update the current implementation of the database using the VSO attributes to use the slightly refactored `Fido` attributes and use `Fido` inside the database to download data from the VSO.
1. Implement a new caching mechanism bases of the results of Queries with `Fido` rather than the current caching which is based upon the VSO query.

A successful proposal will schedule updates to the database package in small sections, rather than in one large pull request. The work should be understood and broken down into individual sections.

There are various other maintenance tasks which need undertaking (https://github.com/sunpy/sunpy/labels/Database) which would be a good way for someone interested in this project to familiarise themselves with the codebase.



### Real time data access and visualisation tools

*Suggested Mentor(s):* [David Perez-Suarez](http://github.com/dpshelio), [Jack Ireland](https://github.com/wafels)

*Difficulty:* Beginner-Intermediate

*Astronomy knowledge needed:* none

*Programming skills:* Python

#### Description

Real time data is very useful for
[spaceweather operations](https://en.wikipedia.org/wiki/Space_weather), SunPy
provides access to data by different virtual observatories or services (like
`sunpy.net.vso` or `sunpy.net.hek`) or by accessing to direct data archives.
`Fido` (formerly called `UnifiedDownloader`) provides a single point of access
to them all. However, this needs to be extended to
[other data archives](https://drive.google.com/open?id=1JizSdVKzKu_yFHXg4Bad5xcFREedcw7MhWwVto7L9kw),
and a logic implemented so depending on the time range asked it downloads the
data from the realtime archives or from the full-archive.

Additionally, this project should produce some visualisation tools to combine
data from different sources. Some examples are overlay of active regions on top
of solar images (like in [SolarMonitor](http://www.solarmonitor.org)), GOES
X-ray flux with active regions number on the flares detected (like in
[Latest Events](http://www.lmsal.com/solarsoft/last_events/)), latest features
observed available from HEK on top of a map (e.g.
[isolsearh](http://www.lmsal.com/hek/hek_isolsearch.html)).

In summary, this project has two objectives:

1. Implementation of real time archives and logic on `Fido`.
2. Creation of visualisation tools to represent real-time data.

Familiarisation with the
[`unidown` branch](https://github.com/sunpy/sunpy/tree/unidown) and
[`matplotlib`](http://matplotlib.org/) library will help you to create a proper
timeline on how much time will take to implement, test and document each part of
the project.




### GUI to use LCT tools
*Suggested Mentor(s):* [Jose Iván Campos Rozo](https://github.com/Hypnus1803) (National Astronomical Observatory, National University of Colombia), Santiago Vargas Domínguez (National Astronomical Observatory, National University of Colombia), [David Pérez Suárez](https://github.com/dpshelio).

*Difficulty:* Intermediate

*Astronomy knowledge needed:* None

*Programming skills:* Python, basic knowledge of qt4, pyqt4, qt designer

#### Description:
The Local Correlation Tracking (LCT, November & Simon, 1988) technique is a robust method used to study the dynamics of structures in a time series of images. By tracking pixel displacements, using a correlation window, LCT can determine proper motions and generate flow maps of horizontal velocities. This procedure is used to study the dynamics of plasma in the solar photosphere at different spatial scales, e.g the analysis of granular and supergranular convective cells, meridional flows, etc. A widget implemented in Python was developed. It generates a user-friendly graphical user interface (GUI) to control various parameters for the process of calculating flow maps of proper motions for a series of filtergrams (data cube). Our purpose is to implement this tool in Sunpy using its structure and to improve it with some more options, i.e. masks, statistics, histograms, contours and multi-plots. Although an initial version is already developed, our proposal is to focus on the efficient integration of the code in the  SunPy libraries. The code (without widget files yet) is https://github.com/Hypnus1803/flow_maps

*Expected Outcomes:* To integate efficiently the code in SunPy libraries. 
