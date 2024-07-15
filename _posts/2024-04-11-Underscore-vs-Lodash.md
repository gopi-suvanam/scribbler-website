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

## Underscore.js vs Lodash: A Comprehensive Comparison

While they offer similar functionalities, they differ in various aspects such as performance, features, and development activity. Here’s a detailed comparison of the pros and cons of each library, point by point.

#### 1. Size and Lightweight Nature

**Underscore.js Pros:**
- **Lightweight:** Smaller in size compared to Lodash, making it a good choice for projects where minimizing file size is crucial.

**Lodash Pros:**
- **Optimized Builds:** Lodash offers modular builds, allowing developers to include only the functions they need, potentially reducing the overall size.

**Underscore.js Cons:**
- **Limited Scope:** The smaller size comes at the cost of fewer features and utility functions.

**Lodash Cons:**
- **Larger Default Build:** The full Lodash library is larger compared to Underscore.js, which can be a drawback if not using optimized builds.

#### 2. Performance

**Underscore.js Pros:**
- **Simplicity:** Despite being slower, its simpler implementation can sometimes make it easier to understand and debug.

**Lodash Pros:**
- **High Performance:** Lodash generally performs better in benchmarks, especially for functions that handle large datasets.

**Underscore.js Cons:**
- **Slower Execution:** Generally slower in performance compared to Lodash, particularly with large datasets or complex operations.

**Lodash Cons:**
- **Complexity:** The optimizations and additional features can sometimes make the code more complex and harder to debug.

#### 3. Feature Set

**Underscore.js Pros:**
- **Core Functionality:** Offers a straightforward, easy-to-use API with a clear and concise set of functions.

**Lodash Pros:**
- **Comprehensive Features:** Provides a wider range of utility functions and additional features not available in Underscore.js.

**Underscore.js Cons:**
- **Fewer Features:** Lacks some of the advanced utility functions and features that Lodash offers.

**Lodash Cons:**
- **Overhead:** The extensive feature set can introduce unnecessary overhead if not all features are needed.

#### 4. Development Activity

**Underscore.js Pros:**
- **Mature Library:** Being one of the first utility libraries, it has a stable API and a large user base.

**Lodash Pros:**
- **Active Development:** Continues to receive updates, new features, and performance improvements regularly.

**Underscore.js Cons:**
- **Less Active Development:** Development has slowed compared to Lodash, leading to fewer updates and new features.

**Lodash Cons:**
- **Rapid Changes:** The frequent updates and changes can sometimes lead to compatibility issues or require frequent codebase updates.

#### 5. Integration and Compatibility

**Underscore.js Pros:**
- **Backbone.js Integration:** Designed to work seamlessly with Backbone.js, which also uses Underscore.js as a dependency.

**Lodash Pros:**
- **Broad Compatibility:** Works well with a wide range of frameworks and libraries, and is often preferred in modern JavaScript development.

**Underscore.js Cons:**
- **Limited Ecosystem:** Integration options are fewer compared to Lodash, which has broader compatibility with various tools and frameworks.

**Lodash Cons:**
- **Potential Redundancy:** In some cases, using Lodash can lead to redundancy if the frameworks or libraries already include similar utilities.

## Popular Sites Built with Underscore.js and Lodash

### Popular Sites Using Underscore.js

1. **LinkedIn**
   - **Description:** A leading professional networking platform that connects professionals from various industries worldwide.
   - **Usage:** Underscore.js is utilized in various parts of LinkedIn's frontend to handle array and object manipulations, functional programming helpers, and more.

2. **Airbnb**
   - **Description:** A popular online marketplace for arranging or offering lodging, primarily homestays, or tourism experiences.
   - **Usage:** Airbnb uses Underscore.js for its data manipulation needs, taking advantage of its concise and easy-to-use API.

3. **Trello**
   - **Description:** A web-based Kanban-style list-making application that helps teams organize and prioritize projects.
   - **Usage:** Trello leverages Underscore.js for various utility functions, helping streamline its project management interface.

4. **Pinterest**
   - **Description:** A visual discovery engine for finding ideas like recipes, home and style inspiration, and more.
   - **Usage:** Pinterest uses Underscore.js to handle client-side data operations and streamline its interactive elements.

5. **Reddit**
   - **Description:** A network of communities based on people's interests where users can post, vote, and comment.
   - **Usage:** Reddit employs Underscore.js for handling various frontend tasks and improving user interactions.

### Popular Sites Using Lodash

1. **Medium**
   - **Description:** An online publishing platform that allows people to read and write articles on a variety of topics.
   - **Usage:** Medium uses Lodash for its robust utility functions that help manage data transformations and manipulations effectively.

2. **Slack**
   - **Description:** A messaging app for teams that brings all communication together, creating a unified archive.
   - **Usage:** Slack incorporates Lodash to handle its extensive data processing needs and to streamline its feature-rich messaging interface.

3. **Shopify**
   - **Description:** An e-commerce platform that allows anyone to set up an online store and sell their products.
   - **Usage:** Shopify uses Lodash to ensure efficient data handling and to support its comprehensive suite of e-commerce tools.

4. **Wix**
   - **Description:** A cloud-based web development platform that allows users to create HTML5 websites and mobile sites.
   - **Usage:** Wix leverages Lodash for its array manipulation, object handling, and other utility functions to enhance its website builder.

5. **Zillow**
   - **Description:** An online real estate marketplace that helps users find information about homes, apartments, and real estate markets.
   - **Usage:** Zillow uses Lodash to manage data processing tasks and to ensure efficient performance of its real estate listings and user interactions.


## Useful Resources for Underscore.js and Lodash

### Underscore.js Links

1. **Website:**
   - [Underscore.js Official Website](https://underscorejs.org/)

2. **Documentation:**
   - [Underscore.js Documentation](https://underscorejs.org/#documentation)

3. **GitHub:**
   - [Underscore.js GitHub Repository](https://github.com/jashkenas/underscore)

4. **CDN:**
   - [Underscore.js CDN (cdnjs)](https://cdnjs.com/libraries/underscore.js)
   

### Lodash Links

1. **Website:**
   - [Lodash Official Website](https://lodash.com/)

2. **Documentation:**
   - [Lodash Documentation](https://lodash.com/docs/)

3. **GitHub:**
   - [Lodash GitHub Repository](https://github.com/lodash/lodash)

4. **CDN:**
   - [Lodash CDN (cdnjs)](https://cdnjs.com/libraries/lodash.js)
   `

These resources provide comprehensive information and tools for effectively using Underscore.js and Lodash in your projects.

## Alternatives

Here are some alternatives to Underscore.js and Lodash, along with links to their respective websites or documentation:

1. **Ramda**
   - **Website:** [Ramda](https://ramdajs.com/)
   - **GitHub:** [Ramda GitHub Repository](https://github.com/ramda/ramda)
       `
2. **Immutable.js**
   - **Website & Documentation:** [Immutable.js](https://immutable-js.github.io/immutable-js/)
   - **GitHub:** [Immutable.js GitHub Repository](https://github.com/immutable-js/immutable-js)
   

3. **Lodash-es**
   - **Website:** [Lodash-es](https://lodash.com/docs/4.17.15)
   - **GitHub:** [Lodash-es GitHub Repository](https://github.com/lodash/lodash)
  
4. **RxJS**
   - **Website & Documentation:** [RxJS](https://rxjs.dev/)
   - **GitHub:** [RxJS GitHub Repository](https://github.com/ReactiveX/rxjs)
   

5. **date-fns**
   - **Website:** [date-fns](https://date-fns.org/)
   - **GitHub:** [date-fns GitHub Repository](https://github.com/date-fns/date-fns)
   
These alternatives offer various features and focus areas, such as functional programming, immutability, reactive programming, and date manipulation, catering to different project requirements and preferences.


