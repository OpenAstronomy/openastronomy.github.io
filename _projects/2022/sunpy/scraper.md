---
name: Scraper rewrite
desc: Improve the current scraper to download data
requirements:
 - Familiarity with Python
 - Knowledge of Python regex
 - Familiar with web protocols
difficulty: medium
issues:
 - https://github.com/sunpy/sunpy/issues/4888
mentors:
 - nabobalis
 - samaloney
 - hayesla
 - dpshelio
initiatives:
 - GSOC
project_size:
 - medium
 - large
tags:
 - python
 - web
collaborating_projects:
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

#### Milestones

1. Partial scraper written
2. Figured out if we can use parse instead of python regex.
3. Functional scraper written
4. Finished scraper implementation.

##### Coding starts

* Already have a development environment setup
* Understand the project and the API design. Having asked questions if you do not.

##### 1st evaluation

* Partial skeleton of scraper written.

##### Final evaluation

* Functional replacement ready for review and merging into sunpy.
