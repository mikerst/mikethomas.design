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

<ul>
{% if collections.journal %}
{%- for page in collections.journal -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a><br/>
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time> 
  </li>
{%- endfor -%}
{% else %}
  <li>Working on it!</li>
{% endif %}
</ul>