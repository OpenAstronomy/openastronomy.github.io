---
name: Remote Data in SunPy
desc: Implement support for versioned, validated remote data handling in SunPy.
requirements:
 - Familiar with HTTP client libraries.
 - Familiar with checksumming and caches.
difficulty: low
issues:
 - https://github.com/sunpy/sunpy/issues/1939
 - https://github.com/sunpy/sunpy/issues/1897
mentors:
 - Cadair
 - dpshelio
initiatives:
 - GSOC
tags:
 - Python
collaborating_projects:
 - SunPy
---

#### Description

Some functionality in SunPy or in affiliated packages is going to need access to
data files on remote (HTTP) servers. Examples of this include data provided by
instrument teams relating to the calibrations or performance of the instruments,
these kind of data are highly likely to change with time.

This project needs to be designed and implemented under the assumptions that
SunPy has no control over the data on these servers, and that files on the
servers may be replaced with different files with the same name. This
functionality will therefore have to validate the retrieved files have the
expected hashes, while providing ways for users to override this hash if they
are aware of changes on the remote server.

See [issue #1939](https://github.com/sunpy/sunpy/issues/1939) for more details.

#### Milestones

##### Coding Starts

* Engaged with the community and understand the motivation and challenges of the project.
* Have set up a development environment.

##### To be completed by the Phase 1 Evaluation Deadline

* Have evaluated and chosen the best approach for storing a local cache of data.
* Have implemented a basic cache and download system, including tests and documentation.

##### To be completed by the Phase 2 Evaluation Deadline

* Have worked with your mentors and the community to design a simple and functional API.
* Have a working prototype of this API, including tests.

##### To be completed by the end of GSoC

* Have finished implementation, testing and documentation.
* Have written examples for the gallery of how to use the functionality.
* Have written developer documentation.
* Have the Pull Request merged after review and feedback.
