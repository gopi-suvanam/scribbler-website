---
layout: page
title: Categories of Articles
description: Explore various aspects of JavaScript like AI/ML, JavaScript features, Functional Programming, XR, Financial and Scientific calculations, Decentralization, and DataScience.
permalink: /categories/
title: Categories
---
<div id="archives">
{% for category in site.categories %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}

    <h3 ><a href="/categories/{{category_name}}">{{ category_name }}</a></h3>
    <p>  {{ site.pages | where: "category",  category_name | first.description }}</p>
  </div>
{% endfor %}
<h3 ><a href="/categories/Others">Miscellaneous</a></h3>
</div>

