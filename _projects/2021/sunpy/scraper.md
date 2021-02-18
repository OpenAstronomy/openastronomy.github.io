---
name: Scraper rewrite
desc: Improve the current scraper to download data
# add a short one line description of your project
requirements:
# Student requirements:
 - Familiarity with Python 
 - Knowledge of Python regex 
 - Familiar with web protocols
difficulty: medium
issues:
# Related issues (if any)  to this project.
 - https://github.com/sunpy/sunpy/issues/4888
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - nabobalis
 - samaloney
 - hayesla
 - dpshelio
initiatives:
 - GSOC
tags:
# Different technologies needed
 - python
 - web
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - sunpy
---

This project will provide the ability to parse URL information in a programmatic way.

#### Description

sunpy provides a way for users to access data using Fido and its many internal clients.
Many of these simpler clients do URL scraping to return metadata and data files to a user. 

This scraping is done by the `scraper class <https://docs.sunpy.org/en/stable/api/sunpy.util.scraper.Scraper.html?highlight=scraper>`__.
Over the years, the scale of what this class has to do has expanded to a point where it has become unmaintainable.

The goal of this project is to create a new scraper with a predefined API and class structure. 
Please be aware that this project is not a design project, the API and the scope of scrapper has been (link to come) predetermined and laid out by the GSoC mentors.
So the primary focus of this project will be to write the class and its methods to follow this specification (obviously leaving the implementation details mainly up to you).


#### Milestones (if any)

1. Partial scraper written
2. Functional scraper written
3. Finished scraper implementation.

##### Coding starts

* Already have a development environment setup
* Understand the project and the API design. Having asked questions if you do not. 

##### 1st evaluation

* Partial skeleton of scraper written.

##### Final

* Functional replacement scraper. 
