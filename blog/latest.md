---
layout: default
title: Latest Posts from Scribbler
description: Latest articles on JavaScript and Scribbler across various sub-topics incliding AI/ML, XR, Scientific Computing, and Financial Computing.
---


<div class="container">

  

  <h2>Latest Articles</h2>
  <div class="row">
    

    <ul>
    {% assign post_count = 0 %}
    {% for post in  site.posts %}
      {% if post_count < 20 %}
           <li>
            <b><a href="{{ post.url }}">{{ post.title }}</a></b>&nbsp;•&nbsp;

            {% if post.start_link %}
              <a href="{{ post.start_link }}" >Jump to Code</a>&nbsp;•&nbsp;
            {% endif %}
              <a href="https://github.com/gopi-suvanam/scribbler-website/edit/master/{{ post.path }}">&#9998;</a>
            </li>
            </b>
      {% assign post_count = post_count | plus: 1 %}
      {% else %}
        {% break %}
      {% endif %}
      
      {% endfor %}
    </ul>
  </div>
</div>
