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
    <div id="#{{ category_name | slugize }}"></div>
    <p></p>

    <h3 class="category-head">{{ category_name }}</h3>
    <a name="{{ category_name | slugize }}"></a>
    {% for post in site.categories[category_name] %}
    <article class="archive-item">
      <h4><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a>
      <a href="https://github.com/gopi-suvanam/scribbler-website/blob/master{{page.path}}">Edit</a>
      </h4>
      
    </article>
    {% endfor %}
  </div>
{% endfor %}
</div>

