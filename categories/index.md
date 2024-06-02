---
layout: page
title: Articles on JavaScript and Scribbler
description: Explore various aspects of JavaScript like AI/ML, JavaScript features, Functional Programming, XR, Financial and Scientific calculations, Decentralization, and DataScience.
permalink: /categories/
disable_anchors: true
---
<div id="archives">
{% for category in site.categories %}


      <div class="card" style="width: 18rem;">
          <div class="card-body">
            {% capture category_name %}{{ category | first }}{% endcapture %}
            <h5 class="card-title"><a href="/categories/{{category_name}}">{{ category_name }}</a></h5>
             {% assign page1 = site.pages | where: "category",category_name| first %}

            <p class="card-text">{{ page1.description }}</p>
            
          </div>
        </div>



    

 


{% endfor %}
<h3 ><a href="/categories/Others">Miscellaneous</a></h3>
</div>

