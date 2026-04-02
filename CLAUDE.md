# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the marketing/documentation website for **Scribbler**, a browser-based JavaScript notebook tool. Built with Jekyll (Ruby static site generator), it compiles Markdown + Liquid templates into static HTML served at scribbler.live.

## Build Commands

```bash
bundle install                  # Install Ruby dependencies
bundle exec jekyll serve        # Local dev server at http://localhost:4000 (with hot-reload)
bundle exec jekyll build        # Production build → _site/ directory
```

No automated tests, linting, or CI/CD pipeline exists.

## Architecture

- **Jekyll static site** using `jekyll-docs-theme` with kramdown (GFM) markdown and rouge syntax highlighting
- **Config**: `_config.yml` controls site settings, navigation links, UI theming (auto/dark/light), pagination, and build exclusions
- **Layouts** (`_layouts/`): `default.html` → `page.html`, `post.html`, `landing.html`, `category.html`, `full.html`
- **Includes** (`_includes/`): Reusable Liquid partials (navigation, sidebar, head, footer, analytics, MathJax, Disqus)
- **Styling**: Bootstrap 4 + custom SCSS in `_sass/` (abstracts/base/components/utilities). No build pipeline for CSS/JS — assets served as-is from `assets/`
- **Blog posts**: `_posts/YYYY-MM-DD-{slug}.md` → URLs at `/:year/:month/:day/:title.html`
- **Categories**: 11 category pages in `categories/` (AI-ML, DataScience, Financial, JavaScript, Libraries, Scientific, Scribbler, etc.)
- **Learning content**: Interactive `.jsnb` notebook files in `learn/` (10 lessons) — these are JSON-based and served as static assets, not compiled by Jekyll

## Content Conventions

All Markdown pages require Jekyll front matter:
```yaml
---
title: Page Title
description: Short description for SEO
layout: page          # or post, landing, category, full
categories: Category-Name  # for blog posts
show_in_menu: false
---
```

Blog post filenames must follow `YYYY-MM-DD-{slug}.md` format in `_posts/`.

## Key Integrations

- **MathJax** for rendering mathematical equations in posts
- **Disqus** for blog comments
- **jekyll-sitemap** plugin for automatic sitemap generation
- **GitHub Pages** deployment (CNAME file configured)
