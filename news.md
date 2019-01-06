---
layout: page
title: News and Events
---
<div>
  {% for post in site.posts %}
      <h2><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
      {{ post.excerpt }}
  {% endfor %}
</div>
