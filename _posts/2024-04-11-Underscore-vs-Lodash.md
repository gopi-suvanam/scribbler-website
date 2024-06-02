---
title:  A Conparison of Underscore.js and Lodash, JavaScript Utility Libraries
description: In this article, we delve into the world of JavaScript utility libraries by comparing two popular choices- Underscore.js and Lodash. Through code examples and practical insights, this article aims to equip JavaScript developers with the knowledge to make informed decisions when choosing between Underscore.js and Lodash 
layout: post
start_link: https://app.scribbler.live/?jsnb=./examples/Lodash.jsnb
categories: Libraries
---

## Underscore.js and Lodash

Underscore.js and Lodash are both popular JavaScript utility libraries that provide a wide range of functions to simplify common programming tasks and enhance JavaScript's native capabilities. While they have similarities, they also have distinct differences in terms of features, performance, and usage. Let's compare Underscore.js and Lodash in various aspects:

### Similarities:

1. *Utility Functions*: Both Underscore.js and Lodash offer a comprehensive set of utility functions for array manipulation, object manipulation, iteration, function binding, and more.

2. *Functional Programming*: They promote functional programming paradigms by providing functions like `map`, `filter`, `reduce`, `forEach`, `groupBy`, and `sortBy` that operate on collections (arrays and objects).

3. *Chaining*: Both libraries support method chaining, allowing you to chain multiple operations together for concise and readable code.

4. *Backward Compatibility*: Lodash is backward-compatible with Underscore.js, meaning most code written for Underscore.js can work with Lodash without modification.

### Differences:

1. *Modularity*:
   - *Underscore.js*: Monolithic library with all functions included in a single file. You use the entire library even if you only need a subset of its features.
   - *Lodash*: Modular library where functions are organized into separate modules. This allows for more efficient bundling with tools like webpack or browserify.

2. *Performance*:
   - *Lodash*: Generally faster than Underscore.js due to various optimizations, including lazy evaluation in chaining, specialized implementations, and performance-focused code.
   - *Underscore.js*: While still performant for many use cases, it may not be as optimized as Lodash in certain scenarios.

3. *Additional Features*:
   - *Lodash*: Offers additional utility functions and features beyond Underscore.js, including utilities for working with strings (`startsWith`, `endsWith`, etc.), deep object cloning (`cloneDeep`), and utilities for functional programming (`flow`, `partial`, etc.).

4. *API Consistency*:
   - *Lodash*: Has a more consistent and intuitive API compared to Underscore.js, making it easier to remember and use function names and parameters.

### Which One to Use?

- *For New Projects*: Consider using Lodash for its modularity, improved performance, and richer feature set.
  
- *For Existing Projects*: If you're already using Underscore.js and it meets your needs, there may not be a compelling reason to switch to Lodash unless you require specific features or optimizations offered by Lodash.


## Loading Underscore.js in a Browser:

You can load Underscore.js directly from a CDN (Content Delivery Network) or include a local copy in your HTML file. You can experiment with Underscore in this notebook: [Underscore JS Notebook](https://app.scribbler.live/?jsnb=./examples/Underscore-JS.jsnb)

### Option 1: Loading from CDN (Content Delivery Network)

```html
<!-- Load Underscore.js from a CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.1/underscore-min.js"></script>

<script>
  // Now you can use Underscore.js functions in your JavaScript code
  const numbers = [1, 2, 3, 4, 5];
  const sum = _.reduce(numbers, (acc, num) => acc + num, 0);
  console.log("Sum of numbers:", sum);
</script>
```

### Option 2: Including a Local Copy of Underscore.js

Download Underscore.js from the official website (https://underscorejs.org/) and save it in your project directory. Then, reference it in your HTML file:

```html
<!-- Include Underscore.js from a local file -->
<script src="path/to/underscore.js"></script>

<script>
  // Now you can use Underscore.js functions in your JavaScript code
  const numbers = [1, 2, 3, 4, 5];
  const sum = _.reduce(numbers, (acc, num) => acc + num, 0);
  console.log("Sum of numbers:", sum);
</script>
```

## Loading Lodash in a Browser or Node.js:

Lodash can be loaded similarly to Underscore.js, either from a CDN or as a dependency in a Node.js project using npm.

### Option 1: Loading Lodash from CDN (Content Delivery Network)

```html
<!-- Load Lodash from a CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>

<script>
  // Now you can use Lodash functions in your JavaScript code
  const numbers = [1, 2, 3, 4, 5];
  const sum = _.sum(numbers);
  console.log("Sum of numbers:", sum);
</script>
```

### Option 2: Installing Lodash via npm (Node.js)

If you are working with Node.js, you can install Lodash as a dependency using npm:

```bash
npm install lodash
```

Then, you can import Lodash functions into your Node.js application:

```javascript
// Import Lodash functions in Node.js
const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5];
const sum = _.sum(numbers);
console.log("Sum of numbers:", sum);
```

### Notes:

- When using libraries like Underscore.js or Lodash in a browser environment, ensure that the `<script>` tag for loading the library appears before your custom JavaScript code that depends on the library functions.

- In a Node.js environment, you can use `require('lodash')` to import Lodash functions after installing it via npm.

## Code Examples

To use Underscore.js or Lodash in your JavaScript projects, you can include the library in your HTML file using a `<script>` tag or integrate it into your Node.js project using npm (Node Package Manager). Below are examples of how to load these libraries in different environments:


### 1. Using Underscore.js for Array Operations:
```javascript
// Example with Underscore.js: Map and Filter
const numbers = [1, 2, 3, 4, 5];

// Use _.map to square each number
const squaredNumbers = _.map(numbers, num => num * num);
console.log("Squared numbers:", squaredNumbers);

// Use _.filter to get even numbers
const evenNumbers = _.filter(numbers, num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);
```

### 2. Using Lodash for Object Manipulation:
```javascript
// Example with Lodash: Deep Clone and Merge
const obj1 = { a: 1, b: { c: 2 } };

// Use _.cloneDeep to create a deep copy of obj1
const obj2 = _.cloneDeep(obj1);
console.log("Deep copy:", obj2);

// Use _.merge to merge objects
const mergedObj = _.merge({}, obj1, { b: { d: 3 } });
console.log("Merged object:", mergedObj);
```

### 3. Performance Comparison: Iterating Over Arrays
```javascript
// Performance comparison: Iterating over arrays
const largeArray = Array.from({ length: 1000000 }, (_, index) => index + 1);

// Measure time taken to sum array using Underscore.js
console.time("Underscore.js sum");
const underscoreSum = _.reduce(largeArray, (acc, num) => acc + num, 0);
console.timeEnd("Underscore.js sum");

// Measure time taken to sum array using Lodash
console.time("Lodash sum");
const lodashSum = _.sum(largeArray);
console.timeEnd("Lodash sum");
```

### 4. Advanced Usage: Chaining Methods
```javascript
// Advanced usage: Method chaining with Lodash
const data = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 }
];

const result = _.chain(data)
    .filter(person => person.age > 30)
    .map(person => ({ ...person, senior: true }))
    .sortBy("name")
    .value();

console.log("Filtered, mapped, and sorted data:", result);
```

Through these comprehensive code examples, you'll gain practical insights into using Underscore.js and Lodash for common JavaScript programming tasks. Experiment with these libraries to leverage their powerful utility functions and optimize your JavaScript code for performance and readability. Whether you're a beginner or an experienced developer, mastering these utility libraries will enhance your productivity and proficiency in JavaScript development.
