---
title: Miscellaneous Scribbler Articles
layout: page
---
<div class="container">
    <div class="row">
        <main class="col-md-9 layout-page__main">
            
            <h1>Uncategorized Posts</h1>
            <ul>
                {% for post in site.posts %}
                    {% if post.categories == empty %}
                        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
                    {% endif %}
                {% endfor %}
            </ul>
        </main>
    </div>
</div>
