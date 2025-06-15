---
title: Powering Up Scribbler Notebooks with ESM Module
layout: post
description: The //> module feature in Scribbler lets you import and run modern ESM libraries directly in notebook cells, unlocking powerful, modular, browser-native workflows.
categories: JavaScript
start_link: https://app.scribbler.live/#./examples/ES-Modules.jsnb
---

# 🔥 Powering Up Scribbler Notebooks with ESM Modules via `//> module`

Scribbler is already a flexible, code-first environment for writing interactive notebooks in JavaScript. But with the addition of the `//> module` directive, it's now possible to tap directly into the vast ecosystem of **ESM-compatible packages**—from libraries like `lodash` and `three.js`, to utility-first tools like `marked`, `chart.js`, or even entire UI frameworks.

This article explores how to use `//> module` in Scribbler to load and run ESM modules dynamically and effectively.

---

## 🧠 What is `//> module`?

The `//> module` directive tells Scribbler to treat the cell as an ECMAScript module (`<script type="module">` under the hood). This means you can use:

* `import` statements from CDNs like [esm.sh](https://esm.sh) or [skypack.dev](https://www.skypack.dev/)
* Top-level `await`
* Isolated module scopes
* Advanced ES6+ syntax natively

You can also expose things to the global `window` or Scribbler context (like `scrib`) for reuse across other cells.

---

## 📦 Example 1: Using `lodash` utilities

```js
//> module
  import _ from 'https://esm.sh/lodash';

  window._ = _; // Make lodash available globally
  scrib.show('✅ Lodash is now available as `_`');

  // Example usage
  const arr = [1, 2, 3, 4, 5];
  scrib.show(_.shuffle(arr));
```

Once this runs, `_` becomes available in any other cell—just like in a normal code environment.

---

## 📈 Example 2: Render charts with `Chart.js`

```js
//> module
  import Chart from 'https://esm.sh/chart.js/auto';

  window.Chart = Chart;
  scrib.show('📊 Chart.js loaded and ready');
```

Then in another cell:
```html
<canvas id="myChart"></canvas>
```
And finally plot the chart:
```js
const canvas = document.getElementById("myChart");


new Chart(canvas, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
      label: 'Colors',
      data: [12, 19, 3],
      backgroundColor: ['#f00', '#00f', '#ff0'],
    }]
  }
});
```

---

## 📜 Example 3: Convert Markdown to HTML with `marked`

```js
//> module
  import { marked } from 'https://esm.sh/marked';

  window.marked = marked;

  scrib.show('✅ Markdown renderer is ready');
```

And use it later:

```js
const markdown = `# Hello World\n- This is **Markdown**\n- Rendered with \`marked\``;
scrib.html(marked(markdown));
```

---

## 🌐 Example 4: Load and use a remote JSON API with top-level `await`

```js
//> module
  const res = await fetch('https://api.github.com/repos/scribbler-notebook/scribbler');
  const repo = await res.json();

  scrib.show(`🔗 <a href="${repo.html_url}" target="_blank">${repo.full_name}</a>`);
  scrib.show(`⭐ Stars: ${repo.stargazers_count}`);
```

No need to wrap this in `async` functions—thanks to module-level top-level `await`.

---

## 💡 Tips for Working with `//> module`

| Tip                   | Description                                                                                        |
| --------------------- | -------------------------------------------------------------------------------------------------- |
| 🧩 Modular Scope      | Each `//> module` cell is isolated—great for avoiding polluting global scope unless you choose to. |
| 🌐 Global Access      | Use `window.foo = bar` to share variables across cells.                                            |
| 🚀 CDN Best Practices | Use fast, ESM-compatible CDNs like `esm.sh`, `skypack.dev`, or `jsdelivr.net`.                     |
| 🔄 Reload Safely      | If re-importing, clear old references from `window` to avoid conflicts.                            |

---

## 🔮 Use Cases: What You Can Build

* **Data Dashboards** with real-time APIs and charts
* **Markdown or LaTeX Editors** powered by live rendering libraries
* **3D Visualizations** with `three.js`
* **Educational Notebooks** using `math.js`, `plotly`, or `d3.js`
* **Interactive Widgets** built from UI component libraries



---


## 📦 Popular ESM Modules with Descriptions and CDN Links

* **🔧 Lodash**
  A modern utility library for arrays, objects, strings, and more.
  👉 `https://esm.sh/lodash`


* **📊 Chart.js**
  Simple yet flexible charting library for visualizing data with responsive charts.
  👉 `https://esm.sh/chart.js/auto`

* **🧱 Three.js**
  A powerful 3D graphics engine for rendering 3D scenes in the browser using WebGL.
  👉 `https://esm.sh/three`

* **📝 Marked**
  A fast and flexible Markdown parser and compiler that turns Markdown into HTML.
  👉 `https://esm.sh/marked`

* **➗ Math.js**
  A comprehensive math library that supports complex numbers, algebra, matrices, and more.
  👉 `https://esm.sh/mathjs`

* **🕓 Day.js**
  A minimalist alternative to Moment.js for parsing, validating, manipulating, and formatting dates.
  👉 `https://esm.sh/dayjs`

* **🆔 UUID**
  A tiny library to generate RFC4122-compliant unique identifiers.
  👉 `https://esm.sh/uuid`

* **🧹 Prettier**
  An opinionated code formatter that enforces a consistent style.
  👉 `https://esm.sh/prettier`

* **🎵 Tone.js**
  A powerful Web Audio library for building interactive music and audio experiences.
  👉 `https://esm.sh/tone`

* **🔄 RxJS**
  A reactive programming library for working with asynchronous data streams using Observables.
  👉 `https://esm.sh/rxjs`

* **🖼️ Vue (3.x)**
  A progressive JavaScript framework for building user interfaces and single-page applications.
  👉 `https://esm.sh/vue@3`

* **⚛️ React**
  A declarative UI library for building reusable, component-based user interfaces.
  👉 `https://esm.sh/react`

* **📦 ReactDOM**
  React’s rendering library that lets you mount components to the DOM.
  👉 `https://esm.sh/react-dom`

* **🎞️ Anime.js**
  A lightweight animation library with a simple, flexible API.
  👉 `https://esm.sh/animejs`

* **📄 PapaParse**
  A fast CSV parser for the browser and Node.js with support for large files and streaming.
  👉 `https://esm.sh/papaparse`

* **🗜️ JSZip**
  A library for creating, reading, and editing ZIP archives in the browser.
  👉 `https://esm.sh/jszip`

* **💾 FileSaver.js**
  A simple solution to trigger file downloads (e.g., blobs) in the browser.
  👉 `https://esm.sh/file-saver`

The `//> module` feature transforms Scribbler from a JavaScript scratchpad into a powerful, modular, web-native notebook environment. With seamless ESM integration, you’re no longer limited by what’s built-in—you can bring in the full power of modern JavaScript tooling, directly from the browser.
