---
layout: page
title: Members
permalink: /members/
---

## Who is part of OpenAstronomy?

<div class="row-fluid">
{% for member in site.members %}
  <div class="span6" style="padding-bottom:15px">{% include members/{{member}}.html %}</div>
  {% cycle '', '</div>' %}
  {% cycle '', '<div class="row-fluid">' %}
{% endfor %}
</div>
  
