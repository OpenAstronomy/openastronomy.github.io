---
name: Galaxy Cluster Visualization
desc: This is a GUI that will interest extra-galactic astronomers.
# add a short one line description of your project
requirements:
# Requirements:
 - Basic knowledge of cosmology (calculation of constants) 
 - Familiarity with statistical methods of fitting
 - Strong understanding of GUI development and object oriented programming
difficulty: intermediate to expert
issues:
 - No issues thus far.
mentors:
# First person in contact; mentors may change before project starts.
initiatives:
 - GSOC
tags:
# Different technologies needed
 - Python
 - GUI (tkInter)
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - None; this is a new idea
 - Could interest Astropy or Glue
---
This GUI is intended for extra-galactical astronomers interested in a user friendly tool that allows for flexible viewing, model fitting, and mining of galaxy cluster data. Using a myriad of widgets and functions, the astronomer will be able to make sense of a particular galaxy cluster's dynamics by using interactive plots, numerous widgets, a fitting tool, as well as a cosmology calculator.

#### Description
Galaxy clusters grow to become the largest gravitationally bound systems in nature (Sarazin, 1988). The idea for a GUI that aids in galaxy cluster data visualization was conceived after countless hours were spent mining SDSS servers for data and hardcoding plotting and fitting functions that were specific to each galaxy cluster. Initially written as a headless program that can plot and fit any function to galaxy cluster redshift data using least squares, the latest version has become a much more visual, versatile, and interactive tool for exploring cluster dynamics.

Cluster visualization is currently done through an interface of two plots in the GUI: a scatter-plot of cluster coordinates along with a histogram of recessional/peculiar velocities. The user can modify which points in a particular cluster data set to view by interacting with the histogram and/or scatter-plot. The user can also utilize a cosmology calculator to calculate "cluster centric" coordinates based the mean redshift of the cluster.

The GUI will include a tool for mining cluster data from various SDSS websites using JSON as well as identifying subclusters in the main cluster system utilizing a fitting tool. Ultimately, the user will simply input the name of a galaxy cluster, along with a "mining radius" from the center of the cluster. Paired with the interactive plots, the user can get a better understanding of a galaxy cluster's dynamics.

#### Milestones
  - Finalized a general graphing page for viewing galaxy cluster members as well as x-ray surface brightness
  - Created an interface of two linked plots: scatter-plot of cluster coordinates and histrogram of cluster member velocities
    - The user can choose to view the galaxy cluster members in a number of slices on a 2-D scatterplot using a combo-box.
    - Setting bounds on the distribution of member velocities updates the scatterplot (linked).
    - There are additional widgets that aid in the identifying of subclusters through the distrubtion member galaxy velocities. 

##### GSOC CODING STARTS
* Create a fully functioning, independent cosmology calculator that is responsible to the calcuation of cluster centric coordinates.
* Make plots even more interactive by allowing the user to click on points on the scatter-plot and getting displayed in the histogram.
  * Display the velocity distribution of those points clicked/circles on the main histogram for comparsion to global distibution
* Create a function that crops out unwanted cluster members (their velocities vary greatly from the norm) and saves the new data as .csv   file.

##### GSOC MIDTERM
* Utilize JSON to allow the user to mine SDSS servers with ease (enter cluster name and mining radius from center of cluster)
* Implement the already present fitting class into a user friendly window to allow the user to fit the distribution of redshift data.
  * Create a specific tool for fitting galaxy cluster surface brightness and returning their respective electron density profiles based     on the fitted parameters (Sarazin, 2016). 

##### GSOC FINAL
* Finalize the artistic design of the GUI to make it visually appealing and friendly.
* Have extra-galactic astronomers test the GUI for bugs and/or new ideas.
  * Fix any bugs and implement new ideas.

###### References
Sarazin, C. L. 1988, X-ray emission from clusters of galaxies
Sarazin, C. L. et al 2016, DEEP XMM-NEWTON OBSERVATIONS OF THE NW RADIO RELIC REGION OF ABELL 3667
