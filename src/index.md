---
title: Hey 👋
layout: default
layoutClass: basic
theme: dark
---

I'm [Mike](/about/), a sparkly-eyed, multiple-hat-wearing designer based in London, with a love of old book smells, looking out for others, and posh coffee.

<section class="projects">
    {%- for page in collections.work -%}
        <div class="project">
            <a href="{{ page.url }}"><img src="/_assets/img/{{ page.data.hero }}" /></a>
            <h2><a href="{{ page.url }}">{{ page.data.title }}</a></h2>
        </div>
    {%- endfor -%}
</section>


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
