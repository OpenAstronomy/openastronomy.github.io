---
name: Velocities in Astropy coordinates
desc: Implement framework for handling velocities and velocity transforms in astropy.coordinates.
requirements:
 - Python
 - Some knowledge of coordinate transformations.
 - Background in astronomical velocity frames and how they are used (helpful but not necessarily a strict requirement).
difficulty: Expert
mentors: 
 - mhvk
 - eteq
initiatives:
 - GSOC
tags:
 - python
 - astropy core
collaborating_projects:
 - astropy
---

#### Description

The coordinates subpackage currently only supports transforming positional coordinates, but it would be useful to develop a consistent framework for also transforming velocities (e.g., proper motion to proper motion, or proper motion to cartesian) with full support for barycentric, galactocentric, and LSR motion. This project could be:

1. working with us to develop a consistent API for handling velocities within coordinates
2. developing a trial implementation of an API
3. actually doing core development to implement the new features
4. some combination of all of the above.
