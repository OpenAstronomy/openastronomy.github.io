---
name: Web app to visualize asteroid trajectories
desc: Create a web application so users can easily visualize Near Earth Object trajectories
requirements:
 - Experience in web or interface design
difficulty: medium
mentors:
 - astrojuanlu
 - anhiga
initiatives:
 - GSOC
tags:
 - python
 - plotly
 - dash
collaborating_projects:
 - poliastro
---

#### Description

Since 2017 poliastro features Near Earth Objects (NEOs) data
retrieval and 3D plotting, as can be seen in these notebooks:

- [Using the NEOs package](http://docs.poliastro.space/en/latest/examples/Using%20NEOS%20package.html)
- [Plotting in 3D](http://docs.poliastro.space/en/latest/examples/Plotting%20in%203D.html)

With the increasing interest in NEOs it would be
interesting to offer the casual user a web application to visualize
the orbits of such objects to have a better idea on the magnitude of the
distances, the shape of the orbits and so on.

This project aims to provide such a web application so the user doesn't
have to set up a Python development environment, install poliastro,
launch a notebook, retrieve the data and visualize the orbits. Therefore,
the app should have an attractive user interface that lets the user
select NEOs from a list, possibly offering a list of famous examples
or recent approaches, move backwards and forwards in time, let them share
the configuration via copy-pasting URLs and exporting the results as
static plots or Python scripts.

Due to the fact that poliastro already uses Plotly to display 3D orbits,
the most natural choice for a web app would be [Dash](https://plot.ly/dash/),
which recently became a NumFOCUS affiliated project.

#### Milestones

##### Coding starts

* Engaged with the community and understand the motivation and challenges of
  the project.
* Have set up a development environment and tried to build some basic Dash
  application

##### 1st evaluation

* Have a basic web application to display the 3D trajectory of one NEO of choice
* Have all code, tests and documentation in GitHub

##### 2nd evaluation

* Allow the user to change the epoch and/or select a time period
* Add examples of popular NEOs and showcase some approaches from the news
* Have all code, tests and documentation in GitHub

##### Final

* Allow the user to display more than one NEO in the application
* Allow the user to export the result as a Python script
* Have all code, tests and documentation in GitHub

#### Secondary goals

* Fix any bugs that might appear regarding visualization, hyperbolic orbits and so forth
* Review pull requests from other poliastro contributors, including the mentor
* Give a talk about the work at some Python event
