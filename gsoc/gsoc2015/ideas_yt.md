---
layout: default
title:  "Ideas for yt"
show_main: false
ideas_team: yt
---

### Enable volume rendering of octree datasets

*Suggested Mentor(s):* Matthew Turk, Sam Skillman

*Difficulty:* Intermediate

*Astronomy knowledge needed:* None

*Programming skills:* Familiarity with Python and Cython, and a familiarity with data structures such as octrees and B-trees.

#### Description

At present, volume rendering in yt works best with patch-based AMR datasets.  Extending this to support octree datasets will enable a much greater diversity of data types and formats to be visualized in this way.

This would include several specific, concrete actions:

1. Development of viewpoint traversal-ordering for Octree datasets
1. Refactoring grid traversal methods to travel along the octree data structure without explicit parentage links (i.e., using built-in neighbor-finding functions)
1. Optimizing for parallel decomposition of octrees in this way

### Implementation of deep image format

*Suggested Mentor(s):* Matthew Turk, Kacper Kowalik

*Difficulty:* Advanced

*Astronomy knowledge needed:* None

*Programming skills:* Familiarity with Python and Cython, and a familiarity with z-buffering.

#### Description

Deep image compositing can be used to create a notion of depth. This could be utilized for multi-level rendering, rendering of semi-transparent streamlines inside volumes.

This would require:

1. Developing a sparse image format data container
1. Utilizing aforementioned container for multi-level rendering

### Volume Traversal

*Suggested Mentor(s):* Matthew Turk, Sam Skillman

*Difficulty:* Advanced

*Astronomy knowledge needed:* None

*Programming skills:* Familiarity with Python and Cython, and a familiarity with data structures such as octrees and B-trees.

#### Description

Currently yt uses several objects that utilize brick decomposition, i.e. a process by which overlapping grids are broken apart until a full tessellation of the domain (or data source) is created with no overlaps. This is done by the kD-tree decomposition. This project aims to enhance current capabilities by providing easy mechanisms for creating volume traversal mechanisms. There are two components to this: handling tiles of data, and creating fast methods for passing through the data and moving between tiles.

This would require:

1. Creating flexible (in terms of ordering) iterator over the "tiles" that compose a given data object
1. Designing and implementing object for storing values returned by aforementioned iterator, that would:
  * Cache a slice of the grid or data object that it operates on
  * Filter particles from the data object it operates on
  * Provide a mechanism for identifying neighbor objects from a given face index. 
  * Provide mechanisms for generating vertex-centered data or cell-centered data quickly
1. Implement a mechanism for integrating paths through tiles, that would:
  * define a method for determining when a ray has left an object
  * define a method for selecting the next brick to traverse or connect to
  * update the value of a ray's direction
