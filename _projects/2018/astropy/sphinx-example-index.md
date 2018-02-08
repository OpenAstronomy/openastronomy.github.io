---
name: Indexing examples in Astropy Sphinx documentation
desc: Write a Sphinx plugin to identify examples in the Astropy documentation, tag/index them, and build an example gallery from them
# add a short one line description of your project
requirements:
# Student requirements:
 - Knowledge of [sphinx](http://www.sphinx-doc.org/en/stable/)
 - Interest in user training
difficulty: moderate
issues:
# Related issues (if any) to this project.
 - https://github.com/astropy/astropy/issues/6589
 - https://github.com/astropy/astropy-helpers/issues/371
mentors:
# First person in contact; mentors may change before project starts.
 - eteq
 - adrn
 - bsipocz
initiatives:
 - GSOC
tags:
# Different technologies needed
 - python
 - sphinx
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - astropy
---
Write a Sphinx plugin to identify examples in the Astropy documentation, tag/index them, and build an example gallery from them

#### Description

The [current astropy example gallery](http://docs.astropy.org/en/stable/generated/examples/) is problematic because it duplicates content from the astropy documentation and it is not clear which examples are "worthy" of the example gallery. It also overlaps with the [astropy tutorials](http://tutorials.astropy.org).  Hence, this project is focused on developing the infrastructure to auto-generate the example gallery from examples *in* the documentation.  This will require building a Sphinx plugin to find tagged examples and generating links.  It will also require coordinating moving of existing gallery examples to the documentation and tagging them appropriately.

#### Milestones (if any)

##### GSOC 2018 CODING STARTS

* Identify what labeling technique is best for tagging the examples.
* Solicit authors of gallery examples to determine where they should be moved. Some may belong in the documentations, whil others might be better places as Astropy Tutorials.
* Determine where the plugin will go (either a standalone small package, in the astropy-helpers, or in astropy itself), in consultation with the Astropy documentation maintainers.

##### GSOC 2018 MIDTERM

* Have examples identified and ready to be moved out of the gallery and into their relevant locations in the astropy docs or tutorials.
* Have a first-draft working plugin ready for review by Astropy documentation maintainers.
* Determine how difficult it will be to have an example *gallery* (as opposed to simply an index/list of the examples).

##### GSOC 2018 FINAL

* Release the plugin, with minimum functionality of generating the example list (or have it merged if it ends up as part of another project).
* (Stretch Goal) have the plugin generate an example gallery instead of a list.
* Complete a Pull Request to activate the (finished) plugin in the Astropy repository.
* Have a Pull Request to tag all the relevant examples which sucessfully generates the example *list*.
