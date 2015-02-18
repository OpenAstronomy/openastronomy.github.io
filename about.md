---
layout: page
title: About
permalink: /about/
---

This is where all the news about the efforts from the different groups as a single organisation is taking place.

Who is part of OpenAstronomy?

##Our Members

<div class="row-fluid">
{% for member in site.members %}
  <div class="span6" style="padding-bottom:15px">{% include {{member}} %}</div>
  {% cycle '', '</div>' %}
  {% cycle '', '<div class="row-fluid">' %}
  {% endfor %}
</div>
  
