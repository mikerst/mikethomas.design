---
title: Journal
layout: layouts/base.njk
layoutClass: basic
theme: 
tags:
  - nav
navtitle: Journal
---

<h1>{{ title }}</h1>

Words are _the_ raw material for so much of what we create as designers.

## Latest entries

<ul>
{% if collections.journal %}
{%- for page in collections.journal | reverse -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a><br/>
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time> 
  </li>
{%- endfor -%}
{% else %}
  <li>Nothing to show yet. Check back soon. I promise you shan't be disappointed.</li>
{% endif %}
</ul>