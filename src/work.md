---
title: Work
layout: layouts/base.njk
layoutClass: basic
theme: 
tags:
  - nav
navtitle: Work
---

Below you can find a modest selection of projects I've worked on over the last few years.

<section class="projects">
    {%- for page in collections.work -%}
        <div class="project">
            <a href="{{ page.url }}"><img src="/_assets/img/{{ page.data.hero }}" /></a>
            <h2><a href="{{ page.url }}">{{ page.data.title }}</a></h2>
        </div>
    {%- endfor -%}
</section>




