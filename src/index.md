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

<hr/>

<h2>How I work</h2>

<section class="values">
    <div class="value stagger">
        <img class="value-icon" src="/_assets/img/icon--impact.svg" />
        <h3>1: Start with impact</h3>
        <p>Whatever the initiative, large or small, I start by focussing on identifying and articulating what impact the work needs to have to be considered a success.</p>
    </div>
    <div class="value stagger">
        <img class="value-icon" src="/_assets/img/icon--altitude.svg" />
        <h3>2: Work the altitudes</h3>
        <p>I ensure initiatives are understood from high-altitude right down to ground-level details, from strategic business value down to micro interactions, and to wider systemic impact.</p>
    </div>
    <div class="value stagger">
        <img class="value-icon" src="/_assets/img/icon--empathy.svg" />
        <h3>3: Let empathy inform action</h3>
        <p>I ground key decision-making moments in a clear understanding of end-user needs, discovered via a mix of qual and quant research methods.</p>
    </div>
    <div class="value stagger">
        <img class="value-icon" src="/_assets/img/icon--team.svg" />
        <h3>4: Put the team first</h3>
        <p>Designing great products is a team sport. I ensuring everyone on the team is on the same page at all times, included from the start, and empowered to contribute.</p>
    </div>
    <div class="value stagger">
        <img class="value-icon" src="/_assets/img/icon--adapt.svg" />
        <h3>5: Remain adaptable</h3>
        <p>I purposefully maintain a flexible mindset to be able to leverage new ideas, insight, tools or processes as they come to light. </p>
    </div>
    <div class="value stagger">
        <img class="value-icon" src="/_assets/img/icon--release.svg" />
        <h3>6: Bias towards shipping</h3>
        <p>I balance idealism and pragmatism by helping teams trend towards shipping something of value as early as possible, with one eye on further compounding value down the line.</p>
    </div>
</section>

<hr/>

<h2>Let's make the world better, <span class="emphasis-text">together</span></h2>

Get in touch with me on <a title="Contact me via LinkedIn" href="https://www.linkedin.com/in/mikerst/" target="_blank">LinkedIn</a>, or email me at <a href="mailto:mikerst@gmail.com">mikerst@gmail.com</a>.






