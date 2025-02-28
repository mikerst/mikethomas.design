---
title: Mike Thomas
intro: Multiple-hat-wearing design lead mixing Product Design, Visual Design and front-end disciplines to create impactful experiences.
layout: default
layoutClass: home
---

<section class="intro">
    <h1 class="salutation">
        <div>I help teams create </div>
        <div><span class="emphasis-text">thoughtful</span> digital solutions</div>
        <div> to problems that matter.</div>
    </h1>
</section>

<section class="projects">
  {%- for page in collections.work | reverse  | filterByTag("recent") -%}
      <div class="project stagger">
        <div class="project-thumb">
          <a title="{{ page.data.title }}" href="{{ page.url }}"><img alt="{{ page.data.title }}" src="/_assets/img/{{page.data.hero}}"/></a>
        </div>
        <div class="project-details">
          <span class="project-type">{{ page.data.type }}</span>
          <h3><a href="{{ page.url }}">{{ page.data.title }}</a></h3>
          <span class="read-time">{{page.data.rt}}</span>
        </div>
      </div>
  {%- endfor -%}
</section>











