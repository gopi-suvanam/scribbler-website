---
layout: page
title: Articles on JavaScript and Scribbler
description: Explore various aspects of JavaScript like AI/ML, JavaScript features, Functional Programming, XR, Financial and Scientific calculations, Decentralization, and DataScience.
permalink: /categories/
---
<div id="archives">
{% for category in site.categories %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}

    <h3 ><a href="/categories/{{category_name}}">{{ category_name }}</a></h3>

    {% assign page1 = site.pages | where: "category",category_name| first %}

    
    <h4>{{ page1.description }}</h4>
    
  </div>
{% endfor %}
<h3 ><a href="/categories/Others">Miscellaneous</a></h3>
</div>

