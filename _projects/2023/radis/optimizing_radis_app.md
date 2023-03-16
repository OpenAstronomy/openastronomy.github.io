---
name: Optimizing Radis app
desc: Our project is all about enhancing user experience to the next level! We're committed to bringing you cutting-edge features and  fine-tuning these features for maximum performance and efficiency, and rigorous testing to ensure they meet the needs of our highly valued end users.

# add a short one line description of your project
requirements:
# Student requirements
 - TypeScript
 - React
 - FastApi
 - Testing (pytest && vitest)

difficulty: medium
issues:
 - <https://github.com/suzil/radis-app/issues/669>
 - <https://github.com/suzil/radis-app/issues/85>
 - <https://github.com/suzil/radis-app/issues/674>

mentors:
# First person in contact; mentors may change before project starts
# GitHub handles
 - erwanp
 - arunavabasu-03

initiatives:
 - GSOC

project_size:
 - 350 h
 
tags:
# Different technologies needed
 - Python
 - TypeScript
 - JavaScript
 - React
 - Fastapi
 - Pandas
 - Git

collaborating_projects:
# suborganisation(s) to which this project belongs
 - radis

---

#### Description

RADIS app is a web application for Radis high-resolution infrared molecular spectra. Instead of writing code, this project aims to create an intuitive user interface (UI).It use radis internally to produce spectrum, and the updated version and radis algorithm make it incredibly efficient to compute the millions of lines in only a few minutes.Radis app leverages React 18 to offer the user interface, and FastApi on the backend. We are using react-hook-form for the fastest user experience and to maintain performance on the client slide. In the backend, we use FastApi to offer the fastest response.We created this app with the intention of giving both researchers and non-researchers access to the most valuable elements of Radis via a straightforward online application. Our team and contributors are always trying to make the app better. The app has additional features and capabilities in newer versions.

Our project is all about enhancing user experience to the next level! We're committed to bringing you cutting-edge features and  fine-tuning these features for maximum performance and efficiency, and rigorous testing to ensure they meet the needs of our highly valued end users.

#### Milestones

##### Coding starts

- Engage with the community on [💬 RADIS Slack](https://github.com/radis/slack-invite)

- Have set up a development environment, be familiar with open-source tools (GitHub / Git / Tests) and [RADIS App](https://github.com/suzil/radis-app)

- Get familiar with RADIS App's Frontend (how radis app interface  works and simulates spectrum )and Backend System (how the app integrated with radis to produce spectrum)

##### 1st Evaluation

- Implement exomol database  in radis app api

- Fitting feature (user imports its experimental spectrum)

- Ui improvements (you need the improve the ui in modern standards)

##### 2nd Evaluation

- Implementation of caching is api side for more faster response time using in memory caching system .

- Implement StoryBook for the app

##### Final evaluation

- Improving code coverage and test all the basic features using vitetest && migrating old test too.

- Fix the  feedback  loop for user side(user can submit feedbacks in app !)

- Have all code, tests, and documentation in GitHub.

#### Secondary Goals

- Review pull requests from other RADIS contributors, especially parallel GSoC mentee
