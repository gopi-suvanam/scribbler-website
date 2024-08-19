---
title: Data Science in JavaScript Using Scribbler
description: Scribbler can combine the power of open source libraries, user interfaces, and inbuilt function to provide a seamless environment for Data Science.
categories: Scribbler
start_link: https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Data-Science.jsnb
layout: post
---

Data science has traditionally been associated with languages like Python and R, but JavaScript is quickly becoming a powerful tool for data analysis and visualization, thanks to its flexibility and the growing ecosystem of libraries. Scribbler, a browser-based JavaScript notebook tool, enhances this potential by providing a seamless environment for data science tasks. In this article, we'll explore how Scribbler can be used for data science, focusing on its ability to fetch live data, handle file uploads, integrate with visualization libraries, and more.

## 1. Live Fetching of Data through APIs

APIs are a cornerstone of modern data science, enabling the retrieval of live data from various sources, such as financial markets, social media, and weather services. Scribbler makes it easy to fetch and manipulate live data using JavaScript's built-in `fetch` API.

**Example: Fetching and Analyzing Live Weather Data**
```javascript
const apiKey = 'your_api_key';
const city = 'Hyderabad';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        scrib.show(`Current temperature in ${city}:`, data.main.temp);
    })
    .catch(error => console.error('Error fetching data:', error));
```

With this code, you can fetch the current weather data for any city and perform real-time analysis or visualizations.

## 2. Ability to Upload Data in CSV or Excel

Scribbler allows users to upload data files in formats like CSV or Excel, making it easy to work with existing datasets. This is especially useful for those who need to analyze data stored locally or obtained from external sources.

**Example: Uploading and Processing a CSV File**
```javascript
let csvData = await scrib.uploadFile();
let df=[].fromCSV(csvData);
```

This simple example demonstrates how you can upload a CSV file and process its contents using JavaScript with a few lines of code in Scribbler.

## 3. Integration with Plotly for Visualization

Data visualization is crucial in data science, and Scribbler's integration with Plotly makes it easy to create interactive, high-quality visualizations directly in your browser.

**Example: Plotting Data Using Plotly**
```javascript

const x= [1, 2, 3, 4, 5];
const y= [10, 15, 13, 17, 12];
[x,y].plot("scatter")

```

In this example, we create a simple scatter plot using Plotly in a single line, showcasing how easy it is to visualize data in Scribbler.

## 4. Loading Dynamic ES6 Modules for Statistical and Machine Learning Libraries

JavaScript has a growing ecosystem of libraries for statistical analysis and machine learning. Scribbler's ability to load dynamic ES6 modules allows you to leverage these libraries, bringing powerful tools directly into your notebooks.

**Example: Loading and Using a Statistical Library**
```javascript
var  stats=await import('https://cdn.skypack.dev/simple-statistics');

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
scrib.show('Mean of the data:', stats.mean(data));
scrib.show('Stdev of the data:', stats.standardDeviation(data));
```

Here, we use the `simple-statistics` library to calculate the mean of a dataset, demonstrating how external modules can be easily integrated into your workflow. Below are a list of libraries. These and other libraries can be easily loaded into scribbler either using dynamic `import` or as a script using `scrib.loadScript`.

1. **Brain.js**
   - **Description:** A neural network library for machine learning tasks in JavaScript, suitable for both browser and Node.js environments.
   - **CDN:** [https://cdn.jsdelivr.net/npm/brain.js](https://cdn.jsdelivr.net/npm/brain.js)
   - **GitHub:** [Brain.js on GitHub](https://github.com/BrainJS/brain.js)

2. **Simple-statistics**
   - **Description:** A lightweight library for statistical calculations, including mean, median, standard deviation, and more.
   - **CDN:** [https://cdn.jsdelivr.net/npm/simple-statistics](https://cdn.jsdelivr.net/npm/simple-statistics)
   - **GitHub:** [Simple-statistics on GitHub](https://github.com/simple-statistics/simple-statistics)

3. **TensorFlow.js**
   - **Description:** A powerful library for machine learning in JavaScript, allowing you to train and deploy models in the browser or on Node.js.
   - **CDN:** [https://cdn.jsdelivr.net/npm/@tensorflow/tfjs](https://cdn.jsdelivr.net/npm/@tensorflow/tfjs)
   - **GitHub:** [TensorFlow.js on GitHub](https://github.com/tensorflow/tfjs)

4. **PapaParse**
   - **Description:** A fast and powerful CSV parser that works in the browser and Node.js, allowing you to read and manipulate CSV files with ease.
   - **CDN:** [https://cdn.jsdelivr.net/npm/papaparse](https://cdn.jsdelivr.net/npm/papaparse)
   - **GitHub:** [PapaParse on GitHub](https://github.com/mholt/PapaParse)

These libraries cover a wide range of data science tasks, from machine learning and statistical analysis to data visualization and file parsing.



## 5. Experimentation Capabilities of Scribbler

Scribbler’s interactive environment is ideal for experimentation. You can quickly modify code, run different scenarios, and see results instantly. This capability is essential for data scientists who need to iterate on models, tweak parameters, or explore different datasets.

**Example: Experimenting with Data Transformations**
```javascript
const data = [1, 2, 3, 4, 5];
const transformedData = data.map(x => x * 2);
scrib.show('Transformed Data:', transformedData);
```

With this snippet, you can quickly experiment with data transformations, enabling rapid iteration and discovery. 

Scribbler enables experimentation by allowing users to edit and run individual cells within a notebook, providing immediate feedback. This interactive environment fosters an iterative approach, where users can tweak code, adjust parameters, or test new ideas on the fly. Cells can be executed in any order, enabling focused experimentation on specific parts of the code without rerunning the entire notebook. This flexibility is crucial for data science, machine learning, and rapid prototyping, as it allows users to isolate and refine different components of their projects, leading to more efficient and creative problem-solving.


## 6. Scribbler's Capability to Take User Inputs

Interactivity is a key feature of Scribbler, allowing you to take user inputs directly within your notebooks. This is particularly useful for creating dynamic visualizations or interactive data analysis tools.

**Example: Taking User Input for Data Filtering**
```html
<input type="number" id="threshold" placeholder="Enter threshold">
<button onclick="filterData()">Filter Data</button>
<p>Mean of filtered data: </p><span id="mean-filtered"></span>
```


```javascript
const data = [10, 20, 30, 40, 50];

const data = random.oned.uniform(1000,0,100);

function filterData() {
    const threshold = document.getElementById('threshold').value;
    const filteredData = data.filter(x => x > threshold);
    document.getElementById('mean-filtered').innerHTML= filteredData.mean();
}

</script>
```

In this example, users can input a threshold value, and the script filters the dataset based on that input, demonstrating how Scribbler can create interactive data tools. 

Scribbler makes it easy to incorporate various user inputs directly within a notebook, enhancing interactivity and customization. Users can seamlessly add text fields, number inputs, file uploads, dropdown selections, radio buttons, and checkboxes to their notebooks. This flexibility allows for dynamic data handling, where inputs can be used to adjust visualizations, filter data, or alter computations in real-time. Whether it's uploading a CSV file for analysis, selecting options from a dropdown, or toggling settings with checkboxes, Scribbler's ability to handle diverse inputs makes it an ideal tool for building interactive data science applications and prototypes.



## 7. Machine Learning in the Browser Using Scribbler


Scribbler allows you to harness the power of TensorFlow.js and other libraries directly in the browser, making it possible to build, train, and deploy machine learning models without leaving your notebook. This combination enables interactive and real-time experimentation, perfect for rapid prototyping and educational purposes.

Here’s how you can use TensorFlow.js within Scribbler to perform machine learning:

### Step 1: Import TensorFlow.js in Scribbler
Since Scribbler is a JavaScript environment, you can import TensorFlow.js just like in any other web project.

```javascript
let src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs";
await import(src);

```

### Step 2: Create Simulated Data
Let’s create some linear data that we can use to train a model.

```javascript
const xs = tf.tensor2d([0, 1, 2, 3, 4], [5, 1]);
const ys = tf.tensor2d([1, 3, 5, 7, 9], [5, 1]);
```

### Step 3: Build and Compile the Model
In Scribbler, you can build a neural network model directly in a cell.

```javascript
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
```

### Step 4: Train the Model
Now, train the model using the simulated data. Scribbler allows you to execute this training within a cell and observe the results immediately.

```javascript
model.fit(xs, ys, {epochs: 500}).then(() => {
    // Predict a new value
    model.predict(tf.tensor2d([5], [1, 1])).print();
});
```

### Explanation
- **Scribbler Integration:** The notebook interface of Scribbler makes it easy to organize and execute each step of the machine learning workflow, from data creation to model training and prediction.
- **Interactive Learning:** Because Scribbler allows you to run individual cells, you can experiment with different models, hyperparameters, and datasets interactively, seeing the results in real-time.
- **Browser-Based Execution:** Everything is run in the browser, eliminating the need for external servers or installations. This makes it ideal for experimenting with machine learning on any device with a browser.

### Benefits of Using TensorFlow.js with Scribbler
- **Real-Time Experimentation:** Modify code and rerun cells to instantly see how changes affect model performance.
- **Educational Tool:** Scribbler is perfect for learning and teaching machine learning concepts, as it combines the interactive nature of notebooks with the flexibility of JavaScript.
- **Seamless Prototyping:** Quickly prototype machine learning models and deploy them directly within a web environment, all from your browser.

This example demonstrates how Scribbler, combined with TensorFlow.js, can make machine learning in the browser accessible, interactive, and efficient, providing a robust platform for experimentation and learning.


