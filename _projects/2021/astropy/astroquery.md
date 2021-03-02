---
name: Add new services to astroquery
desc: Implement module(s) to access currently unsupported astronomical databases in astroquery.
requirements:
 - Python
 - Some experience with web interfaces, APIs, querying, SQL, or anything like that is preferred
difficulty: low
issues:
 - https://github.com/astropy/astroquery/issues/226
mentors:
 - hamogu
 - aaryapatil
initiatives:
 - GSOC
 - SOCIS
tags:
 - python
 - GUI
 - astroquery
collaborating_projects:
 - astropy
 - astroquery
---

#### Description

Astroquery is a python package that provides a common interface to query astronomical archives. Astronomers use astroquery to find
data from a variety of sources and services, from the largest space telescopes to databases with theoretical models. One benefit of
astroquery is that all the archives and data tables can be searched with an (almost) identical interface. That way, anyone can just learn
astroquery and then search for data from the Very Large Telescope in Chile or for the properties of exoplanets. This is a great way to
make use of new sources of data! In this project we want to add more databases to astroquery to make it more useful for everyone.
The mentors for this project are familiar with a number of databases (Chandra datasets, Chandra source catalog, AAVSo, ATOMDB database,
NOAO). We suggest that you pick two of those to add to astroquery, so that we can help with any problems.

#### Milestones (if any)

##### Coding starts

* query one service on command line or in notebook "by hand"

##### 1st evaluation

* Add one query service to astroquery (PR open and tests pass)

##### 2nd evaluation

* add a second query service (PR open and tests pass) or
* write notebook with tutorial for beginners on how to use the service implemented in step 1

##### Final

* Finished the awesome stuff.
