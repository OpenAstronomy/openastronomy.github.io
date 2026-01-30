---
name: PyArrow improvements for astronomy
# Add a short one line description of your project
desc: Implement missing functionality and improve PyArrow performance for nested arrays, to enable on-scale time-domain and spectral analysis in astronomy.
# Student requirements:
requirements:
 - Be familiar with C++
 - Basic Python
 - Basic Git
# How difficult would you consider the project to be: low, medium, high
difficulty: medium
# Related issues (if any) to this project.
# Ideally you want at least one that describes the problem it is trying to solve
issues:
 - https://github.com/apache/arrow/issues/48636
 - https://github.com/apache/arrow/issues/44544
 - https://github.com/apache/arrow/issues/46329
 - https://github.com/apache/arrow/issues/29558
 - https://github.com/lincc-frameworks/nested-pandas/issues/52
 - https://github.com/lincc-frameworks/nested-pandas/issues/421
 - https://github.com/pandas-dev/pandas/issues/60073
# First person in contact; mentors may change before project starts.
# GitHub or GitLab handles
mentors:
 - hombit
 - delucchi-cmu
 - nevencaplar
# The programme under this project wish to run. At the moment only GSOC is available
initiatives:
 - GSOC
project_size:
 - 175 h (Medium)
# Different technologies needed
tags:
 - c++
 - python
# suborganisation(s) to which this project belongs.
collaborating_projects:
 - apache
 - lincc-frameworks
---

# pyarrow Improvements for Astronomy

## Description

Modern astronomical surveys produce catalogs containing billions of objects, each with associated time-series (light curves) and spectral measurements. Tools like [HATS (Hierarchical Adaptive Tiling Scheme)](https://hats.readthedocs.io/en/latest/), [LSDB](https://lsdb.io), and [nested-pandas](https://github.com/lincc-frameworks/nested-pandas) enable scalable analysis of these catalogs by storing variable-length nested data (light curves, spectra) directly in Parquet files using [pyarrow](https://github.com/apache/arrow)'s nested array types.

However, pyarrow currently lacks some functionality critical for astronomical workflows:

- **Sub-column selection for nested types**: When reading Parquet files with list-struct columns (e.g., a list of observations with time, flux, and band fields), it is not possible to select only specific sub-columns. This forces reading entire nested structures even when only one field is needed, increasing I/O and memory usage.
- **Multi-threaded reads for struct-list data**: pyarrow's multi-threaded Parquet reader does not parallelize reads of struct-list columns, resulting in slower performance compared to top-level list columns.
- **Missing compute kernels for nested types**: Several compute kernels like `replace_with_mask` and numpy-style broadcasting are not implemented for list and struct arrays. The lack of broadcasting support also affects pandas, which relies on pyarrow for its `ArrowDtype` backend, making the behavior inconsistent with other pandas operations.

This project will contribute improvements directly to Apache Arrow, benefiting both the astronomy community and the broader data science ecosystem.

### Expected Outcomes

- Implement missing compute kernels for nested array types
- Enable sub-column selection for list-struct types in Parquet reader
- Improve multi-threaded read performance for nested structures
- Add comprehensive tests and documentation
- Contribute upstream to Apache Arrow

## Project Milestones

### Coding starts

* Set up Arrow development environment and build from source
* Familiarize with Arrow's C++ codebase, compute kernel architecture, and Parquet reader
* Review linked issues and create detailed implementation plan

### 1st evaluation

* Implement at least one new compute kernel or Parquet reader improvement
* Write unit tests and benchmarks for new functionality
* Submit initial PR to Apache Arrow

### Final evaluation

* Complete implementation of planned improvements
* Address code review feedback and get PRs merged
* Document new functionality with examples relevant to astronomy use cases
