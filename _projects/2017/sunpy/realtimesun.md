---
name: Sun, Right now!
desc: How does the sun looks in real-time? Build a website to show it.
# add a description of your project
requirements:
 - Familiarity with Python
 - Understanding of databases
 - Basic web development
 - Familiarity with Flask
difficulty: Medium
issues:
 - https://github.com/sunpy/sunpy/issues/1442
 - https://github.com/sunpy/sunpy/pull/1852
mentors: 
 - Cadair
 - dpshelio
initiatives:
 - GSOC
tags:
 - sunpy
collaborating_projects:
 - sunpy
---

#### Description

The project requires the combination of multiple parts of the sunpy 
library to combine them all and together with a flask (or similar) application
to visualise real time and past images of the sun on a website.

The project should have three parts: 

- Add missing data sources like [DISCOVR](http://www.swpc.noaa.gov/products/real-time-solar-wind)
- Download, visualise (and probably annotate) and save real time data.
- Save the result product into a database containing metadata of these images.
- Create a web application that shows latest images and allows browsing and
  querying the database for old images.
