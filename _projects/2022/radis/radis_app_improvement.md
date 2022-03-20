---
name: Radis App Improvement
desc: Improve the current Radis Web App involving various features enhancement and bugs fixes
# add a short one line description of your project
requirements:
# Student requirements:
 - Ideally : familiar with typescript and python.
difficulty: medium
issues:
# Related issues (if any) to this project.
 - https://github.com/suzil/radis-app/issues/147
 - https://github.com/suzil/radis-app/issues/527
 - https://github.com/suzil/radis-app/issues/211
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - anandxkumar
 - gagan-aryan
 - erwanp
 - suzil
initiatives:
 - GSOC
project_size:
 - 350 h
tags:
# Different technologies needed
 - TypeScript
 - Python
 - HTML/CSS
 - Git
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - radis
---


#### Description

RADIS app is a web app for high-resolution infrared molecular spectra using RADIS. The goal of this project is to provide an easy-to-use UI instead of writing code. Currently, the [RADIS app](https://www.radis.app/) has a simple interface with basic functionalities that helps create a nice spectral graph using certain parameters but there is a lot of scope for improvements. 

The goal of this project is to create a more responsive app while improving and implementing new features and fixing various issues. 


#### Milestones


##### Coding starts

* Engage with the community on [💬 RADIS Slack](https://github.com/radis/slack-invite)

* Training on emission & absorption spectroscopy

* Have set up a development environment for both [RADIS app](https://github.com/suzil/radis-app) and [RADIS](https://github.com/radis/radis), be familiar with open-source tools (GitHub / Git / Tests)

* Get familiar with [RADIS architecture](https://radis.readthedocs.io/en/latest/dev/developer.html#architecture) and [RADIS app Architecture](https://github.com/suzil/radis-app#architecture) 

##### 1st evaluation

* Add an option to change the units of [spectral range](https://github.com/suzil/radis-app/issues/147) on the go, and generate an output similar to [Link](https://github.com/suzil/radis-app/issues/147#issuecomment-1072872386)

* Add an advance tab option to add more parameters like `medium`, `wstep`, `optimization`, `truncation`, `broadening_method`, etc to add more command to the users and make the calculations more transparent by displaying important parameters using [hover tooltips](https://github.com/suzil/radis-app/issues/184)

* Migrate from native React to [react-hook-form](https://github.com/suzil/radis-app/issues/347) or any other library to simplify the codebase


##### Final evaluation

* [Cache Hitran dataset](https://github.com/suzil/radis-app/issues/527) to remove download time to generate spectrum of any new molecule and possibly add Hitemp dataset also (molecules can be hardcoded). Data may be to attach to a persistent network file system like Amazon EFS or on a more available database like DynamoDB

* Add ability to download `.spec` file for the spectrum generated and add an option to upload `.spec` file to the load spectrum

* Create a detailed documentation of architecture and workflow of RADIS app

* Have all code, tests and documentation in GitHub
