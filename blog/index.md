---
layout: full
title: Articles on JavaScript and Scribbler
description: Explore various aspects of JavaScript like AI/ML, JavaScript features, Functional Programming, XR, Financial and Scientific calculations, Decentralization, and DataScience.
disable_anchors: true
---

## [List of all articles](list) • [Latest Articles](https://scribbler.live/blog/latest)

## Browse Categories
<div class="container">
  <div class="row">
    {% for category in site.categories %}
    <div class="col-md-4">
      <div class="card mb-4"  style="background-color:#fede02">
        <div class="card-body">
            {% capture category_name %}{{ category | first }}{% endcapture %}
          <h5 class="card-title"><a href="/categories/{{category_name}}" style="color:#555">{{ category_name }}</a></h5>
          {% assign page1 = site.pages | where: "category",category_name| first %}

            <p class="card-text"><a href="/categories/{{category_name}}" style="color:#555">{{ page1.description }}</a></p>
        </div>
      </div>
    </div>
    {% endfor %}

    <div class="col-md-4">
      <div class="card mb-4"  style="background-color:#fede02">
        <div class="card-body">
            <h5 class="card-title"><a href="/categories/Others" style="color:#555">Miscellaneous</a></h5>
            <p class="card-text"><a href="/categories/Others" style="color:#555">Uncategorized articles on Scribbler</a></p>
        </div>
      </div>
    </div>
    
  </div>
</div>




     

