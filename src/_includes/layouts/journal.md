---
layout: layouts/base.njk
layoutClass: basic
templateEngineOverride: njk, md
---

<h1>{{ title }}</h1>

{{ intro }}

<p>— <em><time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time></em> </p>



{{ content | safe }}



