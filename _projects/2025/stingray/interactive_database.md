name: Interactive Database for X-ray observations 
# add a short one line description of your project
desc: Create an interactive database for analyzing, storing, and classifying X-ray observations of accreting black holes.
# Student requirements:
requirements:
 - Understanding Python code
 - Manages database
difficulty: medium
issues:
# Related issues (if any)  to this project.
# First person in contact; mentors may change before project starts.
# GitHub handles
mentors:
- mgullik 
- matteobachetti
# The programme under this project wish to run.
initiatives:
 - GSOC
project_size:
 - 350 h
# Different technologies needed
tags:
 - python
 - database 
 - time series analysis
 - machine learning
# suborganisation(s) to which this project belongs.
collaborating_projects:
 - stingray
---

#### Description

The increasing number of X-ray telescopes observing accreting black hole sources 
has led to an incredibly large amount of available observational data. 
To build a comprehensive understanding of stellar-mass black hole phenomenology, 
it is essential to access and analyze this information in an intuitive and structured manner.

This project aims at developing a tool that analyzes, stores, and organizes 
key data products of multiple observations in a database. Users will be able to interactively explore 
the database and classify individual observations based on data products 
retrieved with Stingray, potentially leveraging innovative machine learning techniques. 
Beyond enabling large-scale classification and the discovery of general trends 
in accreting black hole binaries, the tool will allow astronomers to identify 
peculiar features hidden within the vast dataset.

Challenges: Efficient storage and fast retrieval of data products, 
ensuring interactivity of the tool, and enabling comparisons across different X-ray instruments.

#### Milestones
  
##### Coding starts

- Gain familiarity with the observations (different type of X-ray telescopes) and with the products

##### 1st evaluation

- Create the database
- Graphic interface to interact with the database

##### Final evaluation

- Classification of the observations base on their products (possible use of ML techniques)

