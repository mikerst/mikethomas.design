---
layout: layouts/base.njk
layoutClass: basic
templateEngineOverride: njk, md
---

<h1>{{ title }}</h1>

<span>— <em><time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time></em> <spanp>

{{ content | safe }}



