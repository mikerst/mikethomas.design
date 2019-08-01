---
title: 
intro: Multiple-hat-wearing designer based in London, with a love of old book smells, looking out for others, and posh coffee.
layout: default
layoutClass: home
theme: 
---

<h1 class="homepage-heading">Mike Thomas</h1>

<section class="cover">

Hey there, I'm [Mike](/about/), a big-hearted, multiple-hat-wearing designer based in London, with a love of old book smells, looking out for others, and posh coffee.

</section>

## Work

<section class="projects">
    {%- for page in collections.work -%}
        <div class="project">
            <a href="{{ page.url }}"><img src="/_assets/img/{{ page.data.hero }}" /></a>
            <h2><a href="{{ page.url }}">{{ page.data.title }}</a></h2>
        </div>
    {%- endfor -%}
</section>

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
  <li>Working on it!</li>
{% endif %}
</ul>
