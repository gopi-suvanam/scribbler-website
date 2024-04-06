---
title: Elevating Data Visualization using Plotly.js
description: Plotly.js emerges as a powerful tool for creating compelling data visualizations on the web. We explore creating bar chart, line chart, scatter plot, and heatmap using Plotly.js in html.
layout: post
start_link: https://app.scribbler.live/?jsnb=./examples/Plotly-Example.jsnb
---

## Introducing Plotly.js

Plotly.js emerges as an open-source JavaScript library, tailored to simplify the creation of expressive and interactive data visualizations. With Plotly.js, developers can effortlessly create a diverse range of charts, from simple line charts to intricate heatmaps, all while ensuring fluid interactivity and aesthetic appeal.

Plotly.js stands as a dynamic JavaScript library, empowering developers to craft stunning, interactive data visualizations for the web. In this article, we'll explore the essence of Plotly.js, showcasing its versatility through various chart types like line charts, bar charts, scatter plots, and heatmaps. Moreover, we'll incorporate the dynamic import statement to load Plotly.js, enhancing the flexibility of our visualization projects.



## Getting Started with Plotly.js

To embark on your journey with Plotly.js, let's leverage the dynamic import statement to load the library asynchronously:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Plotly.js Visualization</title>
</head>
<body>
    <div id="chart"></div>
    <script type="module">
        import("https://cdn.plot.ly/plotly-latest.min.js")
            .then(() => console.log("Plotly loaded"))
            .catch(err => console.error("Failed to load Plotly.js library:", err));
    </script>
</body>
</html>
```

In this setup, we utilize the dynamic import statement to load Plotly.js asynchronously. Any errors will be caught and logged to the console. You can also use the static load like this:

```javascript
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
```

## Exploring Plotly.js Capabilities

Plotly.js offers an extensive array of chart types and customization options. You can explore some of these charts in the notebook: [Plotly Example Notebook](https://app.scribbler.live/?jsnb=./examples/Plotly-Example.jsnb). Note that Scribbler comes pre-loaded with Plotly, so you don't have to load it separately.

Let's explore a few examples:

### Example: Creating a Line Chart
```javascript
// Sample data
const xValues = [0, 1, 2, 3, 4];
const yValues = [0, 1, 4, 9, 16];

// Define trace
const trace = {
    x: xValues,
    y: yValues,
    type: 'scatter',
    mode: 'lines+markers',
    marker: {color: 'blue'}
};

// Define layout
const layout = {
    title: 'Sample Line Chart',
    xaxis: {title: 'X-axis'},
    yaxis: {title: 'Y-axis'}
};

// Plot the chart
Plotly.newPlot('chart', [trace], layout);
```

### Example: Creating a Scatter Plot

```javascript
// Sample data
const xValues = [1, 2, 3, 4, 5];
const yValues = [1, 4, 9, 16, 25];

// Define trace
const trace = {
    x: xValues,
    y: yValues,
    mode: 'markers',
    type: 'scatter'
};

// Define layout
const layout = {
    title: 'Sample Scatter Plot',
    xaxis: {title: 'X-axis'},
    yaxis: {title: 'Y-axis'}
};

// Plot the chart
Plotly.newPlot('chart', [trace], layout);
```

In this example, we create a scatter plot using Plotly.js. We define our data points (`xValues` and `yValues`) and create a trace object specifying the type of chart and its attributes. We then define the layout of the chart, including titles for the axes. Finally, we use `Plotly.newPlot()` to render the chart inside the `<div>` element with the id "chart".


### Example: Creating a Heatmap

```javascript
const zValues = [
    [1, 20, 30],
    [20, 1, 60],
    [30, 60, 1]
];

const trace = {
    z: zValues,
    type: 'heatmap'
};

const layout = {
    title: 'Sample Heatmap'
};

Plotly.newPlot('chart', [trace], layout);
```

### Example: Creating a Bar Chart

```javascript
const data = [{
    x: ['Apples', 'Bananas', 'Grapes'],
    y: [10, 15, 20],
    type: 'bar'
}];

const layout = {
    title: 'Sample Bar Chart',
    xaxis: {title: 'Fruit'},
    yaxis: {title: 'Quantity'}
};

Plotly.newPlot('chart', data, layout);
```

To play around with the charts use the notebook: [Plotly Example Notebook](https://app.scribbler.live/?jsnb=./examples/Plotly-Example.jsnb).
