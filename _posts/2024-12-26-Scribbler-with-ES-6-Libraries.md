---
title: Boosting Scribbler with External, CDN-Hosted,  ES-6  Libraries
description: This article provides a helpful starting point for your exploration of ES-6 libraries within the Scribbler environment using CDNs.
layout: post
categories: [Scribbler,JavaScript]
start_link: https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/JavaScript/ES-6-Libraries-in-Scribbler.jsnb
---

Scribbler, with its interactive notebook-style environment, provides a fantastic platform for JavaScript development. By leveraging external libraries from Content Delivery Networks (CDNs), you can significantly enhance its capabilities and explore a wider range of functionalities within the Scribbler environment.

This article will guide you through a selection of popular non-Node ES6 modules that can be seamlessly integrated into your Scribbler projects, covering utility libraries, visualization tools, frameworks, UI components, and even machine learning libraries.

## What are E6-6 Libraries


ES6 modules are a cornerstone of modern JavaScript development, offering several key advantages:

* **Modularity and Reusability:**
    * **Breaking Down Complexity:** Modules allow you to break down large codebases into smaller, more manageable units. Each module focuses on a specific functionality, making the code easier to understand, maintain, and debug.
    * **Reusability:** Well-defined modules can be easily reused across different parts of your application or even in other projects, promoting code reusability and reducing redundancy.

* **Improved Code Organization and Maintainability:**
    * **Namespace Management:** Modules provide a clear separation of concerns, preventing naming conflicts and making it easier to manage dependencies. 
    * **Enhanced Readability:** By organizing code into well-defined modules, you improve code readability and maintainability, making it easier for other developers (and your future self) to understand and work with the code.

* **Improved Performance:**
    * **Tree Shaking:** Modern bundlers (like Webpack or Rollup) can perform "tree shaking," which removes unused code from your application, resulting in smaller bundle sizes and faster loading times. This optimization is possible because modules explicitly declare their dependencies.

* **Enhanced Collaboration:**
    * **Clearer Dependencies:** Modules clearly define their dependencies, making it easier for teams to understand how different parts of the application interact. This facilitates collaboration and reduces integration issues.

* **Standard Approach:**
    * **Industry Standard:** ES6 modules are the official standard for JavaScript modules, adopted by major browsers and supported by popular JavaScript frameworks and libraries. This ensures compatibility and interoperability across different projects and environments.

**In essence, ES6 modules provide a robust and efficient way to structure and organize your JavaScript code, leading to better code quality, improved maintainability, and enhanced performance.** 

By embracing ES6 modules, you can write more modular, scalable, and maintainable JavaScript applications, which is crucial for modern web development.

## How to use ES-6 Libraries in Scribbler

**1. Using `scrib.loadScript()`**

* **Basic Usage:**

```javascript
await scrib.loadScript('https://cdn.jsdelivr.net/npm/your-library@latest/dist/your-library.min.js');
YourLibrary.someFunction(); 

```

* **Explanation:**
    * `scrib.loadScript()` is a Scribbler-specific function that loads an external script into the current environment.
    * It is an asynchronous function so the library can be used only after completion of the loading.
    * Scribbler allows top  level await in its cells.

**2. Using `dynamic import()`**

* **Basic Usage:**

```javascript
  const YourLibrary = await import('https://cdn.jsdelivr.net/npm/your-library@latest/dist/your-library.min.js');
  // Use the imported library
  YourLibrary.someFunction();
```

* **Explanation:**
    * `dynamic import()` is a JavaScript language feature that allows you to import modules asynchronously.
    * It returns a Promise that resolves with the imported module.
    * Since Scribbler supports `dynamic import()` and top-level await, you can use it to load ES6 modules directly.

**Key Considerations:**

* **Error Handling:** Implement proper error handling in both methods to gracefully handle situations where the script fails to load.
* **Module Structure:** Ensure that the ES6 module you're loading is correctly structured and exported the functions or objects you intend to use.
* **CDN Choice:** Choose a reliable and fast CDN like jsDelivr, unpkg, or Cloudflare for optimal performance.
* **Library Compatibility:** Check the library's documentation for compatibility with Scribbler's environment and any specific requirements for loading and using it.

**Example with a specific library (Lodash):**

**Using `scrib.loadScript()`:**

```javascript
await scrib.loadScript('https://cdn.jsdelivr.net/npm/lodash@latest/lodash.min.js');, 
  const result = _.sum([1, 2, 3]); 
  scrib.show(result); // Output: 6
```

**Using `dynamic import()`:**

```javascript
  const { default: _ } = await import('https://cdn.jsdelivr.net/npm/lodash@latest/lodash.min.js');
  const result = _.sum([1, 2, 3]); 
  scrib.show(result); // Output: 6

```

By using these methods, you can effectively load and utilize external ES6 modules in your Scribbler projects, expanding their functionality and creating more dynamic and interactive experiences.


## Some Popular ES-6 Libraries

### **1. Utility Libraries**

* **Lodash:** A versatile library offering a wide array of utility functions for array manipulation, object handling, string operations, and more. 
    * Example: `https://cdn.jsdelivr.net/npm/lodash@latest/lodash.min.js`
* **Moment.js:** A powerful library for working with dates and times, providing intuitive methods for formatting, manipulating, and displaying dates.
    * Example: `https://cdn.jsdelivr.net/npm/moment@latest/min/moment.min.js`
* **Ramda:** A functional programming library that emphasizes immutability and composition, offering a unique approach to data manipulation.
    * Example: `https://cdn.jsdelivr.net/npm/ramda@latest/dist/ramda.min.js`

### **2. Visualization Libraries**

* **Chart.js:** A user-friendly library for creating various chart types (line, bar, pie, doughnut, etc.) with ease.
    * Example: `https://cdn.jsdelivr.net/npm/chart.js@latest/dist/Chart.min.js`
* **D3.js:** A powerful and versatile library for manipulating documents based on data. It's ideal for creating custom and interactive visualizations.
    * Example: `https://cdn.jsdelivr.net/npm/d3@latest/dist/d3.min.js`
* **Plotly.js:** A high-level charting library built on top of D3.js, offering a wide range of interactive charts and plots with a focus on scientific and financial visualizations.
    * Example: `https://cdn.plot.ly/plotly-latest.min.js`

### **3. UI Tools**

* **Bootstrap:** A popular front-end framework for building responsive and mobile-first websites with a grid system, pre-styled components, and JavaScript plugins.
    * Example: `https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/js/bootstrap.bundle.min.js`
* **Materialize:** A framework that implements Google's Material Design principles, offering a visually appealing and user-friendly interface.
    * Example: `https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js`
* **Semantic UI:** A UI component library that emphasizes natural language principles, making it easier to understand and use.
    * Example: `https://cdn.jsdelivr.net/npm/semantic-ui@latest/dist/semantic.min.js`

### **4. ML and Scientific Libraries**

* **TensorFlow.js:** A JavaScript library for machine learning that brings the power of TensorFlow to the web, enabling you to train and deploy models in the browser.
    * Example: `https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tfjs.min.js`
* **Scikit-learn.js:** A JavaScript port of the popular Python machine learning library, Scikit-learn, offering a wide range of algorithms for classification, regression, and more.
    * Example: `https://cdn.jsdelivr.net/npm/@scikit-learn/sklearn@latest/dist/sklearn.min.js`
* **Math.js:** A comprehensive library for performing mathematical operations, including linear algebra, statistics, and more.
    * Example: `https://cdnjs.cloudflare.com/ajax/libs/mathjs/14.0.1/math.js`


By incorporating these external libraries into your Scribbler projects, you can significantly expand the capabilities of this interactive environment. Whether you're building data visualizations, developing complex web applications, or exploring machine learning concepts, these libraries provide valuable tools and functionalities that can enhance your development experience.

Remember to refer to the official documentation of each library for the latest CDN links, usage instructions, and API details. By effectively utilizing these resources, you can unlock the full potential of Scribbler and create even more impressive and interactive projects.


