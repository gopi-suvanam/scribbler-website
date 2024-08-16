---
title: Dashboarding Using Scribbler - A Powerful Tool for Interactive Data Visualization
start_link: https://app.scribbler.live/?jsnb=./examples/Crypto-Currency-TimeSeries.jsnb
description: Start using Scribbler today and discover how it can transform your approach to dashboarding, making it simpler, faster, and more interactive than ever before.
layout: post
categories: Scribbler
---

Dashboarding has become an essential aspect of modern data analytics, allowing organizations to monitor key metrics, track performance, and make data-driven decisions in real-time. Traditionally, dashboarding has been the domain of specialized tools, but with the rise of JavaScript-based notebooks like Scribbler, creating interactive, web-based dashboards has never been easier. In this article, we’ll explore how Scribbler enables developers and data scientists to build dynamic dashboards with ease, focusing on its integration with Plotly, loading external libraries, embeddability, interactivity, and API data loading.

## Why Use Scribbler for Dashboarding?

Scribbler is a JavaScript notebook tool that runs entirely in the browser, offering a flexible and interactive environment for writing and executing JavaScript code. It’s designed to make web-based development more accessible, allowing users to build everything from simple scripts to complex, data-driven applications without needing an external runtime. Scribbler is particularly powerful for dashboarding, thanks to its seamless integration with popular visualization libraries, ability to load external data, and features that enhance interactivity and embeddability.


**1. Seamless Integration with Plotly by Default:**
   - Plotly is a popular JavaScript graphing library that allows users to create high-quality, interactive visualizations. Scribbler integrates with Plotly by default, enabling users to quickly build and customize dashboards with a wide range of charts, graphs, and plots.
   - **Benefits:**
     - **Ease of Use:** With Plotly available out of the box, you can start creating visualizations immediately without worrying about library setup.
     - **Customization:** Plotly’s extensive API allows you to fine-tune every aspect of your visualizations, from layout to interaction modes.
     - **Interactivity:** Plotly charts are highly interactive, enabling users to zoom, pan, and hover over data points to gain deeper insights.

**2. Loading External Libraries:**
   - Scribbler allows you to easily load external JavaScript libraries, giving you access to a vast ecosystem of tools and utilities for enhancing your dashboards.
   - **Benefits:**
     - **Flexibility:** You’re not limited to the default libraries. Whether you need to add a new chart type or a specific data manipulation tool, you can simply import the library you need.
     - **Scalability:** As your dashboard grows in complexity, you can bring in additional libraries to handle more sophisticated tasks, such as data transformations, advanced visualizations, or machine learning models.

   Example of loading an external library:
   ```javascript
  
   let src = "https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.4/d3.min.js";
   await scrib.loadScript(src); //Scribbler provides top-level await and loadScript function to load external scripts.
   ```

**3. Embeddability of Notebooks in Other Applications:**
   - One of Scribbler’s standout features is its ability to embed notebooks directly into other web applications or websites. This makes it easy to share your dashboards with others, whether within a corporate intranet or on a public-facing website.
   - **Benefits:**
     - **Shareability:** Embed your dashboards in blogs, reports, or applications, making it easy to distribute your insights.
     - **Interactivity:** Embedded notebooks retain all interactive features, allowing users to engage with the data directly.
     - **Integration:** Embed dashboards within existing applications, enhancing their functionality with minimal overhead.

   Example of embedding a Scribbler notebook:
   ```html
   <iframe id="sandbox" style="width:100%;height:100%" src ="https://app.scribbler.live/sandbox.html?jsnb=./examples/Crypto-Currency-TimeSeries.jsnb"></iframe>
   ```

**4. Interactivity:**
   - Scribbler supports full HTML and JavaScript, allowing you to create interactive dashboards that respond to user input. This can include everything from simple form inputs to more complex interactions like sliders, dropdowns, or even drawing tools.
   - **Benefits:**
     - **User Engagement:** Interactive elements make your dashboards more engaging, enabling users to explore data in a hands-on way.
     - **Dynamic Updates:** User inputs can trigger real-time updates to the dashboard, allowing for dynamic data exploration.
     - **Customization:** Build dashboards that cater to specific user needs, allowing them to filter, sort, or manipulate data on the fly.

   Example of adding interactivity:
   ```html
   <input type="range" id="rangeInput" min="1" max="100" value="50">
   <p>Value: <span id="rangeValue">50</span></p>

   <script>
       document.getElementById('rangeInput').oninput = function() {
           document.getElementById('rangeValue').textContent = this.value;
           // Update your dashboard based on this.value
       };
   </script>
   ```

**5. Loading External Data Through APIs:**
   - In today’s data-driven world, dashboards often need to pull in data from various external sources. Scribbler makes it easy to fetch and display external data via APIs, enabling real-time data monitoring and analysis.
   - **Benefits:**
     - **Real-Time Data:** Fetch data on-demand or at regular intervals, keeping your dashboard up-to-date with the latest information.
     - **Diverse Data Sources:** Pull in data from multiple APIs, allowing you to combine datasets from different sources into a single, cohesive dashboard.
     - **Customizable:** Use JavaScript to process and transform the data as needed before displaying it in your dashboard.

   Example of loading external data from an API:
   ```javascript
   fetch('https://api.example.com/data')
       .then(response => response.json())
       .then(data => {
           // Process and display data in your dashboard
           console.log(data);
       })
       .catch(error => console.error('Error fetching data:', error));
   ```

#### Practical Example: Building a Dashboard with Scribbler

Let’s walk through a simple example of creating a dashboard in Scribbler that visualizes sales data using Plotly, includes a date range filter, and pulls data from an external API.

1. **Initialize Plotly and Fetch Data:**
   ```javascript
   
   fetch('https://api.example.com/sales')
       .then(response => response.json())
       .then(data => {
           // Process data for Plotly
           data.plot() //A single line code to plot data using Plotly. The code might have to modified depending on data format and layout requirements.
       });
   ```

2. **Add a Date Range Filter:**
   html/doc cell:
   ```html
   <input type="date" id="startDate">
   <input type="date" id="endDate">
   <button onclick="updateChart()">Update</button>
   ```
   javascript cell:
   ```javascript
       function updateChart() {
           const startDate = document.getElementById('startDate').value;
           const endDate = document.getElementById('endDate').value;
           // Fetch and update the chart based on selected dates
       }
   ```
3. **Save**
Export to github repo using: _File->Github_. You will need to input the username, repo, file path and Github access token.

4. **Embed the Dashboard:**
   ```html
	<iframe id="sandbox" style="width:100%;height:100%" src ="https://app.scribbler.live/sandbox.html?jsnb=github:username/repo/path_to_file"></iframe>
   ```

This example demonstrates how easy it is to combine data visualization, interactivity, and external data loading into a cohesive dashboard using Scribbler. With seamless Plotly integration, the ability to load external libraries, and the ease of embedding notebooks into other applications, Scribbler stands out as an excellent choice for anyone looking to build cutting-edge dashboards.

