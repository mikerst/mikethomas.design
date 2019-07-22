---
layout: layouts/base.njk
layoutClass: case-study
templateEngineOverride: njk, md
---

{{ intro }}

{% if hero %}
<figure>
  <img src="/_assets/img/{{ hero }}" />
</figure>
{% endif %}

{{ content | safe }}



