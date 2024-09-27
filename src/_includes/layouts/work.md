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





