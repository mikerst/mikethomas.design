---
title: Hello?
layout: default
layoutClass: basic
theme: 
---

Hi there, I'm [Mike](/about/), a multiple-hat-wearing designer based in London. I love of old book smells, looking out for others, great coffee, and perfect dropshots.

## Recent Work

<ul>
{%- for page in collections.work -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a>  
  </li>
{%- endfor -%}
</ul>

## Journal

<ul>
{% if collections.journal %}
{%- for page in collections.journal -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a><br/>
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time> 
  </li>
{%- endfor -%}
{% else %}
  <li>Content coming soon.</li>
{% endif %}
</ul>
