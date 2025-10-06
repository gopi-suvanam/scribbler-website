---
title: Getting Started with Chart.js - A Complete Guide
description: Chart.js is perfect for adding **interactive charts** to web pages without a heavy framework. By separating HTML and JS and using functions, you get **clean, reusable, and dynamic charts**.
layout: post
categories: [Libraries,DataScience]
start_link: https://app.scribbler.live/?jsnb=https://examples.scribbler.live/Libraries-APIs/Chart-js.jsnb
---

Chart.js is one of the most popular JavaScript libraries for creating **interactive and responsive charts** in web applications. It is simple to use, lightweight, and supports various chart types including line, bar, pie, radar, and more.

In this guide, we will learn how to set up Chart.js using a CDN, and create a basic **line chart** by separating HTML and JavaScript into clean sections.

---

## Why Chart.js?

* **Simple and lightweight** – No heavy dependencies, just a small JS library.
* **Responsive charts** – Charts automatically resize to fit the container.
* **Animated and interactive** – Supports tooltips, hover effects, and animations.
* **Flexible configuration** – Customize datasets, axes, colors, and more.

---

## Setting Up Chart.js

To get started, we’ll use the **UMD version of Chart.js via CDN**. This ensures it works in any browser without build tools.

```html
<!-- Include Chart.js via CDN in your HTML head -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
```

---

## HTML Part: Canvas Element

All charts in Chart.js are rendered inside a `<canvas>` element. You can place this anywhere in your HTML body.

```html
<!-- Chart container -->
<canvas id="salesChart" width="600" height="400"></canvas>
```

> Note: You don’t need to wrap your JS in `onload` or `DOMContentLoaded`. We’ll create functions that can be called after the canvas is available in the DOM.

---

## JavaScript Part: Creating the Chart

Now let’s write a function that creates a **line chart** for monthly sales. You can call this function whenever you want to render or update the chart.

```javascript
// Function to create a line chart
function createSalesChart() {
  const ctx = document.getElementById('salesChart').getContext('2d');

  return new Chart(ctx, {
    type: 'line', // Chart type
    data: {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        label: 'Monthly Sales',
        data: [10, 20, 15, 25, 30],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        fill: true,
        tension: 0.3 // Smooth curves
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Monthly Sales Overview'
        },
        tooltip: {
          enabled: true
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
```

### Example: Updating the Chart

You can also create another function to update the chart data dynamically:

```javascript
function updateSalesChart(chart, newData, newLabels) {
  chart.data.datasets[0].data = newData;
  chart.data.labels = newLabels;
  chart.update();
}
```

Usage:

```javascript
const myChart = createSalesChart();

// Later, update the chart with new data
updateSalesChart(myChart, [12, 18, 22, 28, 35], ['Jan', 'Feb', 'Mar', 'Apr', 'May']);
```

---

## Different Chart Types

Chart.js supports many chart types. Here’s how you can quickly switch:

```javascript
// Bar chart example
function createBarChart() {
  const ctx = document.getElementById('salesChart').getContext('2d');

  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'Sales',
        data: [10, 20, 15, 25, 30],
        backgroundColor: 'orange'
      }]
    },
    options: {
      responsive: true
    }
  });
}
```

Other types include: `pie`, `doughnut`, `radar`, `polarArea`, `scatter`, and `bubble`.

---

## Exporting the Chart as an Image

Since Chart.js uses `<canvas>`, you can export the chart as an image for reports or sharing:

```javascript
function exportChartAsImage(chart) {
  const link = document.createElement('a');
  link.href = chart.toBase64Image();
  link.download = 'chart.png';
  link.click();
}
```

Usage:

```javascript
exportChartAsImage(myChart);
```

---

## Key Tips

1. **Separate HTML and JS**: Keep `<canvas>` in HTML and chart logic in JS for better maintainability.
2. **Use functions**: Wrapping chart creation in functions allows dynamic updates and reuse.
3. **Responsive charts**: Chart.js automatically resizes charts, but you can also control width/height in `<canvas>`.
4. **Interactive features**: Tooltips, legends, and animations make charts more user-friendly.



With these basics, you can explore advanced features like multiple datasets, stacked charts, real-time updates, and custom plugins.

