---
title: Journal
layout: layouts/base.njk
layoutClass: 
theme: 
tags:
  - nav
navtitle: Journal
---

<h1>{{ title }}</h1>

Words are the base material for so much of the web. Writing is a key part of my practice and it's my intention to begin recording my thoughts, experiments, losses and victories here. 


## Latest entries

<ul>
{% if collections.journal %}
{%- for page in collections.journal -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a><br/>
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time> 
  </li>
{%- endfor -%}
{% else %}
  <li>Nothing to show yet. Check back soon.</li>
{% endif %}
</ul>