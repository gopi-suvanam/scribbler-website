---
layout: default
title: Blog Posts by Category
description: Articles on JavaScript and Scribbler across various sub-topics incliding AI/ML, XR, Scientific Computing, and Financial Computing.
---


<div class="container">

  {% assign categories = site.categories | sort %}
  {% for category in categories %}
    <h2>{{ category[0] }}</h2>
    <div class="row">
       <ul>
      {% for post in category[1] %}
            <li>
              <h5 class="card-title"><a href="{{ post.url }}">{{ post.title }}</a></h5><br>
              <a href="{{ post.url }}" >Read More</a>
              {% if post.start_link %}
                &nbsp;•&nbsp;<a href="{{ post.start_link }}" >Jump to Code</a>
              {% endif %}
              &nbsp;•&nbsp;<a href="https://github.com/gopi-suvanam/scribbler-website/edit/master/{{ post.path }}">&#9998;</a><br>
            </li>
      {% endfor %}
      </ul>
    </div>
  {% endfor %}

  <!-- Miscellaneous Section for Uncategorized Posts -->
  <h2>Miscellaneous</h2>
  <div class="row">
    {% assign uncategorized_posts = site.posts | where: "categories", empty %}
    {% for post in uncategorized_posts %}
       <ul>
           <li>
            <h5 class="card-title"><a href="{{ post.url }}">{{ post.title }}</a></h5><br>
            <a href="{{ post.url }}" >Read More</a>
            {% if post.start_link %}
              &nbsp;•&nbsp;<a href="{{ post.start_link }}" >Jump to Code</a>
            {% endif %}
              &nbsp;•&nbsp;<a href="https://github.com/gopi-suvanam/scribbler-website/edit/master/{{ post.path }}">&#9998;</a><br>
            </li>
      {% endfor %}
      </ul>
  </div>
</div>
