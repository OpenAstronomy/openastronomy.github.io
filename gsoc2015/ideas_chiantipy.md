---
layout: default
title:  "Ideas for ChiantiPy"
show_main: false
ideas_team: ChiantiPy
---

## GUI Spectral Explorer

### Description

The goal of this project is to provide a graphical user interface to
enable a user to explore observed spectra and compare it with
theoretical spectra.  The basis for the theoretical spectra is the
CHIANTI atomic database for astrophysical spectroscopy that was
first released in 1997.  Programmatic access to the database, which
is freely available, is provided by the ChiantiPy package -- a pure
python package.  It is highly object oriented with each ion, such as
Fe XVII, being the basic object.  Higher level objects are often
assembled from a collection of ions, such as when calculating a
spectrum.  ChiantiPy uses the CHIANTI database to calculate line and
continuum intensities as a function of temperature, electron
density. This can be done for a set of elemental abundances in
CHIANTI or for a user provided set of elemental abundances.  At
present, if a user wants to compare CHIANTI theoretical spectra it
must be done on a case-by-case basis.  A GUI explorer, written in
Python and preferably PyQt or Wx based, will provide an integrated
tool to import observed spectra and plot them alongside theoretical
spectra.  It will further allow the user to understand what spectra
lines contribute to various spectral line profile, how the predicted
spectra vary as a function of temperature and density.

It will be necessary to develop techniques to import observed
spectra from a variety sources.  Typical sources are in FITS files,
HDF5 files, or csv files.  It will also be important to allow users
import their data through modules of their own.

**Requirements:**  Python, a basic understand of astrophysical spectroscopy

**Mentors:**  Ken Dere
