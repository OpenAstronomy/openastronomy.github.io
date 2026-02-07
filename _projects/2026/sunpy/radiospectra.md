---
name: Improving radiospectra’s Functionality and Interoperability
# Add a short one line description of your project
desc: Improving radiospectra’s interoperability by redesining the spectral data container and adding commonly requested usability features
# Student requirements:
requirements:
 - python
# How difficult would you consider the project to be: low, medium, high
difficulty: high
# Related issues (if any) to this project.
# Ideally you want at least one that describes the problem it is trying to solve
issues:
- https://github.com/sunpy/radiospectra/issues/82
- https://github.com/sunpy/radiospectra/issues/85
- https://github.com/sunpy/radiospectra/issues/129
- https://github.com/sunpy/radiospectra/issues/53

# First person in contact; mentors may change before project starts.
# GitHub or GitLab handles
mentors:
 - samaloney
 - hayesla
# The programme under this project wish to run. At the moment only GSOC is available
initiatives:
 - GSOC
project_size:
 - 350 h (Large)
# Different technologies needed
tags:
 - python

# suborganisation(s) to which this project belongs.
collaborating_projects:
 - sunpy
---

## Improving radiospectra's functionality and interoperability

#### Description

Solar radio spectrograms are a fundamental data product for studying energetic and transient processes in the solar atmosphere. The `sunpy/radiospectra` package provides foundational support for working with such data, but its current capabilities are limited and not well aligned with modern SunPy and scientific Python data models.

This project aims to **significantly improve radiospectra’s functionality and interoperability** by redesigning its core data structures, enhancing data analysis capabilities, and improving visualization and documentation. The focus is on enabling robust, coordinate-aware operations on radio spectra, providing common background subtraction tools, improving visualization for real-world data with gaps, and showcasing these capabilities through a rich example gallery.

The result will be a modern, extensible, and user-friendly foundation for radio spectral analysis within the SunPy ecosystem.

##### Expected Outcomes

By the end of the project the contributor will deliver:
- A redesigned, coordinate-aware Spectra object with a clear external API that:
  - Provides a WCS-like mapping from physical coordinates (time, frequency) to array indices
  - Supports axis-aware operations (e.g., slicing, scaling, statistics) by index or coordinate
- Integrates cleanly with SunPy, Astropy, xarray, or NDCube data structures
- Built-in background subtraction methods commonly used in solar radio analysis
  - A clear interface that allows users to supply additional custom methods
- Improved visualisation tools that handle real observational features such as data gaps or missing channels
- Sensible defaults with options for customizing visual output
- An example gallery (e.g., notebooks or scripts) demonstrating:
  - Coordinate slicing and analysis workflows
  - Background subtraction use cases
  - Improved plotting of gappy spectral data
 - Updated documentation and test coverage to support new functionality

#### Project Milestones

##### Coding starts

- Get familiar with the SunPy organisation and the radiospectra codebase
- Review existing radiospectra functionality and open issues
- Discuss and refine design choices for the Spectra data model with mentors
- Survey existing approaches (NDCube, xarray, Astropy WCS) and agree on an implementation plan

##### 1st evaluation

- Implement the initial version of a coordinate-aware Spectra object
  - Provide a WCS-like interface mapping physical coordinates (time, frequency) to array indices
  - Support slicing and basic operations using both indices and coordinates
- Establish core test infrastructure for the new data model
- Add initial background subtraction functionality
  - Implement at least one commonly used background subtraction method
  - Define a public interface for user-supplied background subtraction functions
- Begin improving visualisation support for irregular or gapped data

##### Final evaluation

- Implement operations (e.g., scaling, reductions, rebinning) on Spectra
- Complete the background subtraction framework with additional built-in methods
- Finalise visualisation improvements for data with gaps, masked values, or irregular sampling
- Create an example gallery demonstrating:
  - Coordinate-based slicing and analysis
  - Background subtraction workflows
  - Update and expand documentation and API references
- Improve test coverage, address outstanding issues, and complete final refactoring
- Merge all completed work upstream and prepare final project reports
