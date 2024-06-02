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
      {% for post in category[1] %}
        <div class="col-md-4">
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title"><a href="{{ post.url }}">{{ post.title }}</a></h5>
              <a href="{{ post.url }}" >Read More</a>
              {% if post.start_link %}
                <a href="{{ post.start_link }}" class="btn btn-secondary">Jump to Code</a>
              {% endif %}
              <a href="https://github.com/gopi-suvanam/scribbler-website/edit/master/{{ post.path }}">&#9998; Edit</a>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  {% endfor %}

  <!-- Miscellaneous Section for Uncategorized Posts -->
  <h2>Miscellaneous</h2>
  <div class="row">
    {% assign uncategorized_posts = site.posts | where: "categories", empty %}
    {% for post in uncategorized_posts %}
      <div class="col-md-4">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title"><a href="{{ post.url }}">{{ post.title }}</a></h5>
            <a href="{{ post.url }}" >Read More</a>
            {% if post.start_link %}
              <a href="{{ post.start_link }}" class="btn btn-secondary">Jump to Code</a>
            {% endif %}
              <a href="https://github.com/gopi-suvanam/scribbler-website/edit/master/{{ post.path }}">&#9998; Edit</a>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
