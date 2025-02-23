---
title: Mike Thomas
intro: Multiple-hat-wearing design lead mixing Product Design, Visual Design and front-end disciplines to create impactful experiences.
layout: default
layoutClass: home
---

<section>
<h1 class="salutation">
    I help teams create <br/><span class="emphasis-text">thoughtful</span> digital solutions<br/> to problems that matter.
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

## About

For nearly fifteen years, I’ve combined Product, Service and Visual Design disciplines—with a side-order of front-end—to help start-ups, scale-ups and enterprises grow, level-up, and move faster.

I am deeply purpose driven, and believe that good design should be an inclusive, multi-disciplinary team sport.

My design stack currently includes a lot of Figma, Miro, Obsidian for writing, and ChatGPT for moving faster, although I’ll never tire of getting messy with pens and paper.

Outside of work, I'm passionate about running, great coffee, and old book smells. I'm currently teaching myself how to play <a href="https://www.chess.com/member/multiplehatguy" target="_blank">chess properly</a>, targeting a half marathon pb, and am informally developing some coaching skills aimed at early-career designers and creatives.

Say hi via <a title="Email me mikerst@gmail.com" target="_blank" href="mailto: mikerst@gmail.com">email</a> or find me on <a title="My LinkedIn profile" target="_blank" href="https://www.linkedin.com/in/mikerst/">LinkedIn</a>. 




