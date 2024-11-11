---
layout: layouts/base.njk
layoutClass:
templateEngineOverride: njk, md
---



<h1>{{ title }}</h1>

{{ intro }}

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








