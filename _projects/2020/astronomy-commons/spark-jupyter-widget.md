---
name: Jupyter Widgets for Spark
desc: Create Jupyter notebook extensions and lab widgets to interface with Apache Spark clusters
requirements:
 - Python
 - JavaScript
difficulty: medium
mentors:
 - stevenstetzler
 - mjuric
initiatives:
 - GSOC
tags:
 - python
 - javascript
 - jupyter
 - spark
 - UI / UX
collaborating_projects:
 - astronomy-commons
---

#### Description

Within the Astronomy Data Commons group, we use Apache Spark for distributed computing on both local and cloud resources. Apache Spark allows one to create "clusters" of computers that work together to produce the results of computations. Within astronomy, one such computation we are focused on is the crossmatch between two very large (billion object) catalogs. Apache Spark has many APIs and interfaces for managing the life cycle of a Spark cluster, however none of them are user-friendly to the astronomy community which is used to working with Python in a Jupyter environment. The aim of this project is to create a set of Jupyter notebook extensions and Jupyter lab widgets that enable fluid interfacing between the user and Spark clusters that execute their code. This project includes building a user interface in the web browser with JavaScript and connecting them to a back-end API written in Python that interfaces with Apache Spark.

#### Milestones

##### GSOC CODING STARTS

* Work with users in the Astronomy Commons community to understand User Interface and User Experience constraints for this project
* Investigate how Jupyter notebooks and the Jupyter lab system work, if required
* Obtain access to local and remote computing resources and development environments as needed

##### GSOC MIDTERM

* A sketch interface is made of the final product that incorporates feedback from community and guidance from mentors
* Progress has been made toward a working prototype
* The working prototype interface contains several browser element and the layout resembles the final interface
* The working prototype back-end links at least one interaction with a browser element to the Spark API

##### GSOC FINAL

* A user is able to launch and connect to a local Spark cluster using just browser interactions
* A user is able to launch and connect to a remote Spark cluster using just browser interactions
* Code is documented and exists on a GitHub repository under the Astronomy Data Commons organization
