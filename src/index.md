---
title: Mike Thomas
intro: Product design lead working across research, UX, visual design and front-end, helping teams build thoughtful solutions to problems that matter.
layout: default
layoutClass: home
---

<section class="intro">
    <h1 class="salutation">
        <span class="line">I help teams create </span>
        <span class="line"><span class="emphasis-text">thoughtful</span> digital solutions</span>
        <span class="line"> to problems that matter.</span>
    </h1>
</section>


<ul class="projects">

  {%- for page in collections.recent | reverse -%}
      <li class="project stagger">
        <div class="project-thumb">
          <a href="{{ page.url }}" tabindex="-1" aria-hidden="true"><img alt="" src="/_assets/img/{{page.data.hero}}" sizes="(min-width: 641px) 50vw, 100vw" /></a>
        </div>
        <div class="project-details">
          <span class="project-type">{{ page.data.type }}</span>
          <h2><a href="{{ page.url }}">{{ page.data.title }}</a></h2>
          <span class="read-time">{{page.data.rt}}</span>
        </div>
      </li>
  {%- endfor -%}
</ul>

<hr/>

<h2>Let's make the world better, <span class="emphasis-text">together</span></h2>

Get in touch with me on <a href="https://www.linkedin.com/in/mikerst/">LinkedIn</a>, or email me at <a href="mailto:mikerst@gmail.com">mikerst@gmail.com</a>.
