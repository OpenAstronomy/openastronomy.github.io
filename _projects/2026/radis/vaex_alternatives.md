---
name: Integrate a modern lazy-loading alternative for large-scale spectroscopic database processing
# add a short one line description of your project
desc: Replace the unmaintained Vaex library with an actively-maintained alternative (Polars, DuckDB, or Dask) to efficiently handle large spectroscopic databases (50GB+) through lazy loading, memory mapping, and optimized I/O operations.
requirements:
# Student requirements:
 - Proficiency in Python and DataFrame libraries (Pandas, Polars, or similar)
 - Familiarity with benchmarking and performance profiling
 - Understanding of memory-efficient data processing techniques
 - Experience with HDF5 or Parquet file formats is a plus
difficulty: medium
mentors:
# First person in contact; mentors may change before project starts.
# GitHub handles
 - Prtm2110
 - minouHub
initiatives:
 - GSOC
project_size:
 - 350 h (Large)
tags:
# Different technologies needed
 - Python
 - Polars
 - DuckDB
 - Dask
 - Pandas
 - HDF5
 - Parquet
 - Benchmarking
 - Git
collaborating_projects:
# suborganisation(s) to which this project belongs.
 - radis
---

#### Description

The RADIS code was developed for the characterization of plasmas, flames, and atmospheres.
High-temperature spectral calculations require resolving the shape of tens of millions of lines, which is the usual performance bottleneck.
RADIS implements a new algorithm to compute these lineshapes and is already one of the fastest line-by-line spectral codes available.
It can also compute many different types of spectra (absorption/emission/equilibrium/nonequilibrium).
In a typical calculation, a database of coefficients is loaded and these coefficients are multiplied according to physics laws to generate a set of line strengths in a spectrum.
RADIS can also handle different molecular databases such as HITRAN, HITEMP, EXOMOL, and GEISA.

With more and more lines added to the databases, some files grew considerably in size.
To be as fast as possible, RADIS converts compressed databases into the HDF5 format. However, HITEMP parsing of CO2, which involves files combining to over 50GB, cannot be loaded completely into memory. Vaex was initially adopted for its memory-mapping and lazy-loading capabilities, but it is now unmaintained, creating sustainability concerns.

The selected solution should maintain or improve upon Vaex's memory efficiency while providing better long-term maintainability. The project will involve comprehensive benchmarking, refactoring the codebase to use the new library, and optimizing database I/O operations to reduce the current 3+ hour parsing time for large HITEMP files.

#### Milestones

##### Coding starts

* Engage with the community on [💬 RADIS Slack](https://github.com/radis/slack-invite)

* Set up a development environment, become familiar with open-source tools (GitHub/Git/Tests) and [RADIS architecture](https://radis.readthedocs.io/en/latest/dev/developer.html#architecture)

##### 1st Evaluation

* Research and benchmark alternatives: Conduct systematic performance evaluation comparing Polars, DuckDB, and Dask against current Vaex implementation

* Generate comprehensive benchmark report covering:
  - Memory usage patterns (peak memory, memory mapping efficiency)
  - Lazy evaluation capabilities 
  - Integration complexity with existing RADIS codebase

* Select the optimal alternative based on benchmarking results and present findings to mentors

##### 2nd Evaluation

* Implement the selected alternative in RADIS codebase:
  - Refactor database loading functions to use the new library
  - Ensure backward compatibility with existing HDF5 files
  - Implement lazy loading for HITEMP CO2 and H2O databases
  
* Develop comprehensive unit tests and integration tests

* Profile and optimize memory usage for 50GB+ files to ensure they remain under memory limits

* Document migration strategy and API changes

##### Final evaluation

* Complete integration with production-ready code:
  - Addition of a new package able to fully replace the Vaex dependencies. The choice of the package to use will be done by the user using parameters in `radis.json` via the parameter `DATAFRAME_ENGINE`
  - Performance validation showing maintained or improved speed
  
* Comprehensive documentation:
  - User guide for database operations with the new system
  - Performance comparison report (before/after metrics), see vaex_vs_pandas_performance.py

* Identify and document additional I/O bottlenecks discovered during implementation

* All code merged to main branch with passing CI/CD tests

#### Secondary Goals

* Explore file format alternatives to HDF5 (e.g., Parquet with better compression ratios and faster I/O)

* Profile GPU acceleration opportunities for data processing operations if time permits

* Document architecture and developer guide for future maintainers

* Review pull requests from other RADIS contributors


