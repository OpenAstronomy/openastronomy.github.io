---
layout: default
title:  "Ideas page for Google Summer of Code 2016"
show_main: false
---

# Ideas page for GSoC 2016


Browse ideas for the following projects:

{% for page in site.pages %}
{% if page.ideas_team and page.path contains 'gsoc2016' %}
* [{{ page.ideas_team }}](#{{ page.ideas_team | slugify }})
{% endif %}
{% endfor %}

For each participating project, the ideas are organized from easiest to hardest.

{% for page in site.pages %}
{% if page.ideas_team and page.path contains 'gsoc2016' %} 


# {{ page.ideas_team }}

{{ page.content }}  

{% endif %}
{% endfor %}
