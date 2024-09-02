---
title:
intro: Multiple-hat-wearing design-lead based in London, with a love of old book smells, looking out for others, and great coffee.
layout: default
layoutClass: mtgrid
theme:
---

<div class="svg-container">

  <svg class="svg-octagon oct1" width="600" height="auto" viewBox="0 0 241 241" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M204.941 36.059L239.918 120.5L204.941 204.941L120.5 239.918L36.059 204.941L1.08238 120.5L36.059 36.059L120.5 1.08239L204.941 36.059Z" />
  </svg>

  <svg class="svg-octagon oct2" width="600" height="auto" viewBox="0 0 241 241" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M204.941 36.059L239.918 120.5L204.941 204.941L120.5 239.918L36.059 204.941L1.08238 120.5L36.059 36.059L120.5 1.08239L204.941 36.059Z" />
  </svg>

</div>

<section class="intro">

<div style="width:1rem;height:1rem;background:red;"></div>

# _Hands-on_ design leadership for start-ups and scale-ups.

I’m a _full-spectrum_ design lead with over 15 years of experience working across logistics, education, finance and energy sectors, with a blend of both IC and management experience.

I believe design is team sport, and successful teams win by _raising each other up_. 

Good design aligns _intent with action_, great design does so with _joy_.

Learn more about me [here](/about)

</section>



<section class="role">

<img src="/_assets/img/logo--piclo.svg" style="width:180px;height:auto;margin-top:var(--spacer);" />

Piclo is a pioneering EnTech working to decarbonise the world’s electricity grids through innovative SaaS solutions.

I joined Piclo in February 2020 in a Product Design capacity when the business was less than 15 people, and contributed in both an IC and management capacity, including implementing a baseline design culture and helping to grow the function from 2 to 7, around 9% of the total headcount.

During my time at Piclo, I was heavily involved in the development of two key new products, as well as steward for the team’s efforts to grow and formalise our fledgling design system ‘Spark’, including setting the team on the path to achieving and maintaining AA accessibility standards.



</section>

<section class="projects">

  {%- for page in collections.piclo | reverse -%}
      <div class="project">
          <a href="{{ page.url }}"><img src="/_assets/img/{{ page.data.thumb }}" /></a>
          <h2><a href="{{ page.url }}">{{ page.data.title }}</a></h2>
          <span class="project__type">{{ page.data.worktype }}</span>
      </div>
  {%- endfor -%}
  
</section>

<section class="role">

<img src="/_assets/img/logo--tm.svg" style="width:180px;height:auto;margin-top:var(--spacer);" />

TotallyMoney is a high-growth FinTech on a mission to help people improve their credit score.

I spent 6 fruitful years working in-house at TotallyMoney (née Media Ingenuity) and held positions in two-year blocks across Brand, Marketing, then Product teams. 

I was involved in a successful rebrand project, the launch of a new product that went from zero to over 1 million customers in 12 months, and also re-architected how we produced performance marketing emails.

</section>



<section class="projects">
 
  {%- for page in collections.tm | reverse -%}
      <div class="project">
          <a href="{{ page.url }}"><img src="/_assets/img/{{ page.data.thumb }}" /></a>
          <h2><a href="{{ page.url }}">{{ page.data.title }}</a></h2>
          <span class="project__type">{{ page.data.worktype }}</span>
      </div>
  {%- endfor -%}
  
</section>


<section class="intro">


# _Let’s make the world better, together._

Get in touch via <a title="Email me mikerst@gmail.com" target="_blank" href="mailto: mikerst@gmail.com">Email</a>, otherwise find me on <a title="My LinkedIn profile" target="_blank" href="https://www.linkedin.com/in/mikerst/">LinkedIn</a>, <a title="My Github prilfe" target="_blank" href="https://github.com/mikerst">Github</a>, <a title="My Pinterest profile" target="_blank" href="https://www.pinterest.co.uk/mikerst/">Pinterest</a>.<br/><br/>This site was made using <a title="Figma" target="_blank" href="https://www.figma.com/">Figma</a> and <a title="11ty" target="_blank" href="https://www.11ty.dev/">11ty</a>, with <a title="Github" target="_blank" href="https://www.github.com/">Github</a> for source control and <a title="Netlify" target="_blank" href="https://www.netlify.com/">Netlify</a> for deployment.</p>



</section>


<!--

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

-->




