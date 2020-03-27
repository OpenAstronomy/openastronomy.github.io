---
name: poliastro-as-a-Service
desc: Deploy poliastro in one or more serverless cloud providers
requirements:
 - Basic experience with cloud, serverless
 - Basic experience with Docker
difficulty: medium
issues:
 - https://github.com/poliastro/poliastro/issues/168
 - https://github.com/poliastro/poliastro/issues/444
mentors:
 - astrojuanlu
 - AunSiro
initiatives:
 - GSOC
 - SOCIS
tags:
 - python
 - javascript
 - docker
collaborating_projects:
 - poliastro
---

#### Description

poliastro is already a useful tool for people with Python knowledge who know how to use a third party
library. However, to reach a wider range of users we should be able to create web applications
that use poliastro in the backend, and make this process as easy and cheap as possible.

There have been several ideas to create web applications using poliastro, but one potential
limitation has been the installation itself. poliastro dependencies are complex and somewhat
heavy, and there is also dependence on external data for things like planetary ephemerides.
This sole thing prevents the deployment of poliastro in services like Amazon Web Services Lambda,
as evidenced in [the issue #444](https://github.com/poliastro/poliastro/issues/444).

The goal of the project would be to make a slimmer or lighter version of poliastro by declaring
some dependencies optional, creating recipes to deploy poliastro in cloud services and PaaS
(Amazon, Google, Heroku) using open standards (Docker, Kubernetes), actually deploy it,
and if time permits create a demo REST API.

#### Milestones

##### Coding starts

* Engaged with the community and understand the motivation and challenges of
  the project.
* Have set up a development environment and get familiar with poliastro dependencies and usage of external data

##### 1st evaluation

* Identified poliastro heaviest dependencies (probably SciPy) and implemented proper alternatives, warnings and error messages when they are not installed
* Have all code, tests and documentation in GitHub

##### 2nd evaluation

* Created a Dockerfile for poliastro
* Deployed poliastro in Amazon Web Services Lambda
* Have all code, tests and documentation in GitHub

##### Final

* Deployed poliastro in a second cloud or PaaS
* Created a demo REST API covering some basic functionality
* Have all code, tests and documentation in GitHub

#### Secondary goals

* Fix any bugs that might appear regarding visualization, hyperbolic orbits and so forth
* Review pull requests from other poliastro contributors, including the mentor
* Give a talk about the work at some Python event

