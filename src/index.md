---
title: 
intro: Multiple-hat-wearing designer based in London, with a love of old book smells, looking out for others, and posh coffee.
layout: default
layoutClass: home
theme:
---

<h1 class="homepage-heading">Mike Thomas</h1>

<section class="cover">

Hey there, I'm [Mike](/about/), an experienced, multiple-hat-wearing designer with a love of old book smells, looking out for others, and great coffee. To me, design is more than a nine-to-five, it’s a vocation.

</section>

<h2>Selected works</h2>

<section class="projects">
 
  {%- for page in collections.work | reverse -%}
      <div class="project">
          <a href="{{ page.url }}"><img src="/_assets/img/{{ page.data.thumb }}" /></a>
          <h2><a href="{{ page.url }}">{{ page.data.title }}</a></h2>
          <span class="project__type">{{ page.data.worktype }}</span>
      </div>
  {%- endfor -%}
  
</section>

{% if collections.journal %}

<h2>Latest journal entries</h2>

<ul>
{%- for page in collections.journal | reverse -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a><br/>
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time> 
  </li>
{%- endfor -%}
</ul>
{% else %}

{% endif %}






