---
layout: default
title:  "Background on GSoC: start here!"
show_main: false
---

# Background: Start Here!

### What is GSoC?

Google Summer of Code is a remote summer coding program funded by
Google. Google distributes funds to open software development organizations to
recruit new developers and mentors for summer mentorships. You get paid to write
software at home (or wherever you like), with guidance from expert mentors
distributed around the globe.

To apply to be a GSoC student, you must write an application to [GSoC] for one or
more OpenAstronomy project ideas. Each summer, [several projects][oa projects] are offered by
[OpenAstronomy mentors][oa mentors], with well-defined scope and pre-requisite
experience. If you are selected by OpenAstronomy, you will be a GSoC student.

### What is OpenAstronomy?

OpenAstronomy is an umbrella organization which acts as an interface between
the Google Summer of Code and several open source, open development projects
in the astronomical community, including [astropy], [sunpy], and [several
other astronomy projects][oa members].  It coordinates mentors and projects
for Google Summer of Code mentorships related to astronomy.

### What is the application process?

You must submit your application to the [Google Summer of Code][GSoC], but
it's preferable that you also share it well before the deadline with your
potential project mentors or the rest of the community. Then they will be
able to give you feedback before officially submitting it.  Check the
[application template][application]. You can also find applications from
previous years in the GitHub wiki pages of some of the OpenAstronomy
members.

The complete details on applying are in the [GSoC Student Guide].

### Who is eligible to apply to GSoC?

OpenAstronomy is actively seeking applicants who are undergraduate or
graduate students with experience developing software for astronomy in
Python and other languages. We are especially (but not exclusively) looking
for students who have or are pursuing degrees in astronomy or physics, more
importantly who are interested in developing open source software. You don't
need to be a Python guru or an astronomical coordinate system expert to be
eligible -- projects are available that cover a range of previous experience
in Python and astronomy. Underrepresented students from anywhere around
the world are especially encouraged to apply.

### Testimonials

> In the summer after my second year of graudate school, I didn't have funding
> to work on any projects in my home department. I applied and was selected for
> GSoC 2015, and I worked with another student and several encouraging mentors on
> developing a new astropy affliated package, called
> [astroplan](http://astroplan.readthedocs.io/). The program greatly improved
> my coding style, taught me loads about managing large projects, version control,
> testing, and packaging. Do you have a summer without research funding? Apply!

[Brett Morris][bmorris3], GSoC student 2015

> After spending the summer of 2015 as an intern at NIST, I got really
> fascinated by how much Python aided scientists get the best out their data.
> Then, while looking for Python projects to perform data fitting and modeling,
> I found AstroPy. I got really surprised by how easy and intuitive data fitting
> can be done with the astropy API. That motivated me to start learning git and
> later contributing code and documentation for the project. Then in the summer
> of 2016 I applied to the GSoC to work on PSF photometry for
> [photutils](https://www.github.com/astropy/photutils) and got selected! :)
> One of the best parts of the GSoC was the amount of learning I got by being
> mentored by experts in software development and astronomy! If you want to know
> more about my journey during the GSoC 2016 see my
> [blog posts](https://mirca.github.io/posts). Also check out some
> [tips](https://mirca.github.io/gsoc-application/) before applying.

[Zé Vinícius][mirca], GSoC student 2016

### Apply!

Now that you know you're a good candidate, check out the [GSoC Student Guide]
to learn how to apply.

{% assign year = 2015 %}
{% for pro in site.projects %}
  {% assign path_project = pro.path | split: '/' %}
  {% assign year_project = path_project[1] | abs %}
  {% if  year_project > year %}
    {% assign year = year_project %}
  {% endif  %}
{% endfor %}

[GSoC]: https://summerofcode.withgoogle.com/
[oa projects]: /gsoc/gsoc{{ year }}/
[oa mentors]: /gsoc/gsoc{{ year }}/#/mentors
[astropy]: http://www.astropy.org
[sunpy]: http://sunpy.org
[oa members]: /members/
[application]: https://github.com/OpenAstronomy/GSoC/blob/master/application_students.md
[GSoC Student Guide]: https://google.github.io/gsocguides/student/
[bmorris3]: https://github.com/bmorris3
[mirca]: https://github.com/mirca
