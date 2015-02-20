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
