---
layout: default
title:  "Ideas page for Google Summer of Code 2015"
show_main: false
---

#Ideas page for GSoC 2015

{% for mission in site.missions %}
 {% if mission.ideas_team %}
   <a href="#{{ mission.ideas_team }}">
    <img class="media-object pull-left"  height="80" width="80" src="{{page.root}}/img/members/{{ mission.ideas_team | slugify }}.png" alt="{{ mission.ideas_team }}" />
   </a>
 {% endif %}
{% endfor %}

<br><br><br><br>

{% for mission in site.missions %}
 {% if mission.ideas_team %}

# {{ mission.ideas_team }}

{{ mission.content }}   

{% endif %}
{% endfor %}
