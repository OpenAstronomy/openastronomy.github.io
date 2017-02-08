---
name: Glue notebook viewers
desc: Develop Jupyter notebook viewers for glue
# add a description of your project
requirements:
 - Proficiency in Python
 - Familiarity with the Jupyter notebook
difficulty: high
issues:
 - https://github.com/glue-viz/glue/issues/1226
mentors:
 - astrofrog
 - eteq
initiatives:
 - GSOC
tags:
 - python
collaborating_projects:
 - glue
---
#### Description

At the moment, the main way users use glue is via the Qt-based application.
However, much of glue is in fact GUI-agnostic and can in principle be re-used
for different environments such as Jupyter notebooks. At the moment glue can be
used in command-line mode in the Jupyter notebook, and the only way to get
interactive viewers is to launch the Qt glue application via the qglue function.
This project is to create new viewers for glue that instead of being Qt-based
are rendered in the Jupyter notebook itself as interactive visualizations. The
main challenge here is not simply showing the data, but also dealing properly
with interactions and selections, and making sure a selection results in a
subset being created in glue. This could potentially be done for instance using
the Matplotlib interactive notebook backend, or Bokeh.
