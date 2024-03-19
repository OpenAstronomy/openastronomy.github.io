---
name: OpenCL integration with Gnuastro
desc: GPU support inside Gnuastro C library.
requirements:
# Student requirements:
 - C
 - OpenCL
 - GNU Autotools (build system)
difficulty: medium
issues:
# Related issues (if any) to this project.
 - https://labeeb-7z.github.io/Blogs/2023/08/12/Integrating-OpenCL.html
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - labeeb-7z
 - mohammad-akhlaghi
initiatives:
# The programme under this project wish to run.
 - GSOC
project_size:
 - 350 h
tags:
# Different technologies needed
 - C
 - OpenCL
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - Gnuastro
---


#### Description

GNU Astronomy Utilities (Gnuastro) is an astronomical data processing package containing a dynamically linked library as well as command-line programs for high-level access. Astronomical data can be large and most operations highly parallelizable. Until now, only CPU parallelization has been implemented in Gnuastro, but not yet on GPUs. GPUs are special hardware which are specifically designed for such operations and can significantly reduce the overall execution time significantly for specific tasks.

In GSoC 2023, the idea of allowing Gnuastro to leverage GPUs for several parallel subroutines kicked off by integrating the Gnuastro C library with CUDA. However CUDA is a high-level interface, is not free software, and is limited to NVIDIA devices. Therefore it was decided to use the low-level and free standard OpenCL (Open Computing Language). OpenCL is an open, cross-platform framework for programming diverse accelerators at a very low level. Integration with OpenCL will allow users of Gnuastro to run parallel subroutines on specialised hardware (like GPU) regardless of its manufacturer.
At the conclusion of GSoC 2023, a first draft of OpenCL was integrated in Gnuastro. For more see the [report of GSoC 2023](https://labeeb-7z.github.io/Blogs/2023/08/22/Final-Report.html)

The goal for this summer is to solidify a mature and generic interface to that implementation, such that a Gnuastro user that has a GPU device can use that while a user without a GPU can do exactly the same operation on a CPU. This will be tested by gradually implementing the interface to parallelizable operations (that are currently only using the CPU). Finally, we need to perform extensive testing of the OpenCL-accelerated subroutines on various hardware configurations to ensure robustness and compatibility. 

To get started, check our [GSoC 2024 checklist](https://savannah.gnu.org/support/index.php?110827#comment0).


#### Milestones (if any)

 * Setting up the low-level wrapper infrastructure for calling OpenCL kernels from Gnuastro for parallel subroutines (with minimal requirements on the developer to know OpenCL; allowing them to focus on the algorithm and even test without having a GPU, not the OpenCL details).

 * Migrating the existing pthreads-based (CPU) wrappers in Gnuastro to the new wrappers.

 * Allowing users to choose GPU execution from the Command line interface and user documentation.

##### Coding starts

* Reviewing the work in GSoC 2023 and understand the work that was done before to understand all its details.

* Testing and debugging the work in various scenarios.

##### 1st evaluation

* A robust and smooth low level integration of OpenCL with Gnuastro which allows developers to write high level kernels easily compatible and usable inside Gnuastro.

* Have at least a few OpenCL optimised subroutines merged into the main branch of Gnuastro.

##### Final evaluation

* Completing all the required OpenCL kernels alongside their testing, merged with the main branch of Gnuastro.

* User documentation and Command line wrappers for using the newly available GPU functionality.
