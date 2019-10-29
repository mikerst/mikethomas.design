---
layout: layouts/base.njk
layoutClass: basic
templateEngineOverride: njk, md
---

<h1>{{ title }}</h1>

<div>— Published on <em><time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time></em> </div>

{{ content | safe }}



