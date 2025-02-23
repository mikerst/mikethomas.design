---
layout: layouts/base.njk
layoutClass: work
templateEngineOverride: njk, md
---

<section class="intro">
  <p class="project-type">{{type}} </p>
  <h1>{{ title }}</h1>
  <span class="read-time">{{rt}} </span>
  
</section>



 {% if hero %}
  <figure>
    <img src="/_assets/img/{{ hero }}" />
  </figure>
  {% endif %}

{{ content | safe }}

{% if company %}
<div class="notice">
    Please note that all product screenshots and images of Figma, Miro, or other cloud-based work spaces are © {{company}}.
</div>
{% endif %}








