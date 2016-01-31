---
layout: page
title: Google Summer of Code
permalink: /gsoc/
---

A major way OpenAstronomy aims to work together is through Google Summer of Code.

Student applications to OpenAstronomy projects will follow the same
rules as the [Python Software Foundation] and the [GSoC Student Guide].

We will also host blogs for OpenAstronomy GSoC students on this site.


## Ideas Pages

* [2016](/gsoc/gsoc2016/ideas.html)
* [2015](/gsoc/gsoc2015/ideas.html)


## Quick Links

* [OpenAstronomy Student Guide](/gsoc/student_guidelines.html)
* [GSoC Student Guide]


## Blog Entries 2016

{% for post in site.posts %}
{% if post.categories contains "gsoc2016" %}
[{{ post.date | date: "%F"}}: {{ post.categories[1] }}: {{ post.title }}]({{ post.url }})
{% endif %}
{% endfor %}


[Python Software Foundation]: https://wiki.python.org/moin/SummerOfCode/2016
[GSoC Student Guide]: http://en.flossmanuals.net/GSoCStudentGuide/
