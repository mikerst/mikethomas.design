---
title:
intro: Multiple-hat-wearing design-lead based in London, with a love of old book smells, looking out for others, and great coffee.
layout: default
layoutClass: mtgrid
theme:
---

<section class="intro">

<div class="octagon octagon-1"></div>
<div class="octagon octagon-2"></div>

# _Hands-on_ design leadership for start-ups and scale-ups.

I’m a _full-spectrum_ design lead with over 15 years of experience working across logistics, education, finance and energy sectors, with a blend of both IC and management experience.

I believe design is team sport, and successful teams win by _raising each other up_. 

Good design aligns _intent with action_, great design does so with _joy_.

Learn more about me [here](/about)

</section>


<section class="role">

LOGO

## ~~Product Designer~~  Lead Designer
### 2020–2024

- Successfully grew the design team at Piclo from 2 to 7, including designing the hiring process to align with company values.
- Co-lead the creation of two new innovative B2B products from early research through to first launch, amongst other things.
- Established working practices and set the baseline for achieving AA accessibility across design and engineering disciplines.
- Established foundational design system including UI library.
- Introduced regular design team ceremonies and quarterly reviews.
- Helped to standardise product thinking across the business.
- Re-designed and built the company website including establishing content management practices and training the team.
-Co-engineered novel UI solutions to enable product teams to do more.


</section>





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






