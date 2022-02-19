---
name: Database as a data client
desc: Creating a new database module
requirements:
 - Familiarity with Python
 - Familiarity with SQLAlchemy
difficulty: high
issues:
- https://github.com/sunpy/sunpy/issues/5880
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

This project aims to design and implement a new database sub-package within `sunpy`.
Currently, there is a `sunpy.database` that was created to manage locally data files stored locally or on a remote server with direct access. This allows someone to manage the files, to add missing files, to remove them and to search based on specific metadata stored in the file.
Over the years, this module has seen little development and has not been linked to the new `sunpy` downloader, Fido. This have made it difficult to support.

For an overview of the current database, you can read [our user guide to acquire data](https://docs.sunpy.org/en/stable/guide/acquiring_data/database.html) and [our tour introduction to the database](https://docs.sunpy.org/en/stable/guide/tour.html#database-package).

The project has several aims:
- A creation of a new sub-package, `sunpy.net.database`.
- When a user does a data search and download, the search and file information will be saved to a local database.
- The user can then do the same search and will be informed that the files already exist locally avoiding doing the original download again.
- The ability for someone to pass a directory of data files and to create a new database with all the metadata information in those data files.

Overall, the code will new but we hope that parts of the original database module could be reused with some tidy up to the source code.

More technical details can be found on the linked issue.

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
