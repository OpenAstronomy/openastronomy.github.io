---
layout: default
title:  "Ideas page for Google Summer of Code 2015"
show_main: false
---

#Ideas page for GSoC 2015



{% for member in site.members %}
[{{ member }}](#{{ member }})
{% endfor %}

{% for page in site.pages %}
{% if page.ideas_team %} 


# <a name="{{ page.ideas_team }}"></a>{{ page.ideas_team }}

{{ page.content }}  

{% endif %}
{% endfor %}