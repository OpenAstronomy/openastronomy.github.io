---
name: Fido
desc: Towards metadata only searches with Fido
requirements:
 - Quite familiar with Python.
difficulty: Medium
issues:
- https://github.com/sunpy/sunpy/pulls?q=is%3Apr+label%3A%22Needs+Adoption%22+is%3Aclosed+label%3Aunidown
- https://github.com/sunpy/sunpy/issues/3336
- https://github.com/sunpy/sunpy/issues/3735
- https://github.com/sunpy/sunpy/issues/3733
- https://github.com/sunpy/sunpy/issues/3734
- https://github.com/sunpy/sunpy/issues/2744
- https://github.com/sunpy/sunpy/issues/2631
mentors:
 - Cadair
 - nabobalis
initiatives:
 - GSOC
tags:
 - python
collaborating_projects:
 - SunPy
---

#### Description


SunPy provides a Python interface to many different sources of solar data.
These data are generally of two forms, file based downloads where observations are downloaded as FITS files or other files, and metadata only searches such as event lists or spatial location of features.
Currently in sunpy the file based downloads are all accessible in one single search interface called "Fido", this project would provide the foundations needed to extend Fido to include metadata only searches.
[An overview of fido is located in our documentation.](https://docs.sunpy.org/en/latest/guide/acquiring_data/fido.html)

Fido is backed by many different client classes, all which implement an interface to different webservices to search for and retrieve data.
The search flow is that the user specifies a search to `Fido.search`, which dispatches to the correct client, which returns a response object, which is combined into a `UnifiedResponse` object with any other results from other clients, this is then returned to the user.
The fetch flow is the `UnifiedResponse` object is parsed by `Fido.fetch` and the `.fetch()` methods of the appropriate clients is called and paths to the files are returned to the user.

The first goal of this project is to standardize the response object returned from all the clients `search()` method.
This would involve implement an [Abstract Base Class](https://docs.python.org/3/library/abc.html) and transitioning all the current response implementations to it.
Having done this, the next objective would be to extend the ability for `dataretriever` clients (simple clients) to specify what metadata about the results should be displayed in their QueryResponse objects.
Finally, work should commence on extending the the ABC to allow the flexibility of returning and inspecting metadata only queries, from the JSOC client and then clients like the HEK and HELIO clients.

The Fido codebase is complex and not very well documented from a developer perspective.
Anyone taking on this project should be willing and able to learn the layout of the code, to spend a lot of time designing the future API, and to always consider the end user.
