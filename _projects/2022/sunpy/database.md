---
name: Database as a data client
desc: Creating a new database module
requirements:
 - Familiarity with Python
 - Familiarity with SQLAlchemy
difficulty: high
issues:
- https://github.com/sunpy/sunpy/issues?q=is%3Aissue+is%3Aopen+database
mentors:
 - cadair
 - wtbarnes
 - nabobalis
initiatives:
 - GSOC
project_size:
 - large
tags:
 - python
collaborating_projects:
 - sunpy
 - parfive
---

#### Description

This project aims to design and implement a new database module within `sunpy`.
Currently the database module was created to manage data files that are stored locally or on a remote server
you have access/control to.

You are be able to add/remove files, fetch missing files from various data sources.
Within the the `sunpy` documentation we have overviews of database: <https://docs.sunpy.org/en/stable/guide/acquiring_data/database.html> and <https://docs.sunpy.org/en/stable/guide/tour.html#database-package>

However time, the code has been left to "rot" and it has no real integration with the new `sunpy` downloader,
Fido.
These problems have made its original use case difficult to support anymore.

The goal of this project is to create a "database2" module that will take the idea (and most of the code)
behind the original database that integrates with Fido in a manner that allows you to search your data archive as if
it was a data provider.
This will be called a "database client".

In addition, we will want to replace parts of the original database functionally with more maintainable and testable code.

#### Milestones

##### Coding starts

* Engaged with the community and understand the motivation and challenges of the project.
* Have set up a development environment.
* Familiar with the database module

##### 1st evaluation

* Working prototype of a database "client"
* Have all code, tests and documentation in GitHub.

##### Final evaluation

* Finished database "client"
* Have all code, tests and documentation in GitHub.
