---
title: How to Use Underscore JS in JavaScript
description: Underscore JS provides several utilites and functions for quick development in JavaScript. 
categories: [JavaScript, Libraries]
layout: post
start_link: https://app.scribbler.live/#./examples/Underscore-JS.jsnb
---
[Jump to Scribbler Notebook on Underscore.js](https://app.scribbler.live/#./examples/Underscore-JS.jsnb)

## What is Underscore JS?

[Underscore.js](https://underscorejs.org/) is a popular JavaScript library that provides a set of utility functions and [functional programming](/2023/03/13/JavaScript-for-Functional-Programming.html) helpers. It is designed to enhance the functionality and flexibility of JavaScript code and simplify common programming tasks. Underscore.js offers a wide range of functions, including array and object manipulation, iteration and iteration control, function composition, data manipulation, and more. It is often used in web development projects to streamline code, improve readability, and increase productivity. Some key features of Underscore.js include:

- Collection Functions: Underscore.js provides a rich set of functions for working with arrays and objects, such as each, map, filter, reduce, groupBy, and pluck. These functions simplify common tasks like iterating over collections, transforming data, filtering values, and aggregating results.

- Functional Programming Support: The library includes functions that support functional programming paradigms, such as compose, partial, throttle, debounce, and memoize. These functions enable developers to write clean and reusable code by composing functions, currying arguments, and controlling function execution.

- Object Manipulation: Underscore.js offers functions for manipulating and transforming objects, such as extend, defaults, pick, omit, and clone. These functions allow developers to merge objects, set default values, extract specific properties, remove unwanted properties, and create deep copies of objects.

- Utility Functions: The library includes various utility functions to handle common tasks, including type checking (isArray, isObject, isFunction, etc.), value manipulation (identity, times, random, etc.), and more.

- Template Engine: Underscore.js features a simple yet powerful template engine that allows developers to embed JavaScript expressions within HTML templates. It provides a convenient way to generate dynamic content by interpolating data and executing JavaScript logic within templates.

- Chaining: Underscore.js supports method chaining, allowing developers to apply multiple operations to a collection or object in a concise and readable manner. This chaining syntax helps create more expressive and fluid code.

Overall, Underscore.js is a versatile and widely adopted library that provides developers with a comprehensive set of tools to enhance JavaScript programming. It promotes functional programming principles, simplifies common tasks, and improves code readability, making it a valuable asset in web development projects.

## How to Use Underscore JS?

For experimenting see this notebook on Scribbler: [Using Underscore JS](https://app.scribbler.live/?jsnb=./examples/Underscore-JS.jsnb){: .jsnb-link} 

Here are code examples demonstrating how to include Underscore.js using a CDN (Content Delivery Network) in HTML. 

### Including Underscore.js using the cdnjs CDN:

	<!DOCTYPE html>
	<html>
	<head>
	  <title>Underscore.js CDN Example</title>
	  <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.1/underscore-min.js"></script>
	</head>
	<body>
	  <script>
	    // Example usage of Underscore.js functions
	    var numbers = [1, 2, 3, 4, 5];
	    var doubledNumbers = _.map(numbers, function(num) {
	      return num * 2;
	    });
	    console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
	  </script>
	</body>
	</html>

### Including Underscore.js using the unpkg CDN:

	<!DOCTYPE html>
	<html>
	<head>
	  <title>Underscore.js CDN Example</title>
	  <script src="https://unpkg.com/underscore@1.13.1/underscore-min.js"></script>
	</head>
	<body>
	  <script>
	    // Example usage of Underscore.js functions
	    var numbers = [1, 2, 3, 4, 5];
	    var sum = _.reduce(numbers, function(acc, num) {
	      return acc + num;
	    }, 0);
	    console.log(sum); // Output: 15
	  </script>
	</body>
	</html>

### Map: Transform an array of numbers by doubling each value.

	var numbers = [1, 2, 3, 4, 5];
	var doubledNumbers = _.map(numbers, function(num) {
	  return num * 2;
	});
	console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

### Pluck: Extract a specific property from an array of objects.

	var users = [
	  { name: 'John', age: 25 },
	  { name: 'Alice', age: 30 },
	  { name: 'Bob', age: 28 }
	];
	var names = _.pluck(users, 'name');
	console.log(names); // Output: ['John', 'Alice', 'Bob']

### GroupBy: Group an array of objects based on a specific property.

	var students = [
	  { name: 'John', grade: 'A' },
	  { name: 'Alice', grade: 'B' },
	  { name: 'Bob', grade: 'A' },
	  { name: 'Charlie', grade: 'B' }
	];
	var groupedStudents = _.groupBy(students, 'grade');
	console.log(groupedStudents);
	/*
	Output:
	{
	  A: [{ name: 'John', grade: 'A' }, { name: 'Bob', grade: 'A' }],
	  B: [{ name: 'Alice', grade: 'B' }, { name: 'Charlie', grade: 'B' }]
	}
	*/

### SortBy: Sort an array of objects based on a specific property.

	var students = [
	  { name: 'John', age: 25 },
	  { name: 'Alice', age: 30 },
	  { name: 'Bob', age: 28 }
	];
	var sortedStudents = _.sortBy(students, 'age');
	console.log(sortedStudents);
	/*
	Output:
	[
	  { name: 'John', age: 25 },
	  { name: 'Bob', age: 28 },
	  { name: 'Alice', age: 30 }
	]
	*/

### Template: Generate HTML templates using Underscore's template syntax.

	var template = _.template('<h1><%= title %></h1>');
	var html = template({ title: 'Welcome to my website' });
	console.log(html); // Output: <h1>Welcome to my website</h1>


## Applications of Underscore.js

Underscore.js is a popular JavaScript utility library that provides a rich set of functions for working with arrays, objects, and other data types. Here are some common applications of Underscore.js:

#### 1. **Data Manipulation and Transformation**

- **Array Operations**: Underscore.js offers a variety of functions for manipulating arrays, including sorting, filtering, mapping, reducing, and finding unique elements. This makes it easier to work with large datasets and perform complex operations with minimal code.
- **Object Utilities**: The library provides functions for deep cloning, extending objects, and extracting values, which are useful for managing and manipulating complex data structures in JavaScript applications.

#### 2. **Functional Programming**

- **Function Composition**: Underscore.js includes functions for function composition and partial application, enabling developers to create more modular and reusable code. This supports a functional programming style, which can lead to cleaner and more maintainable code.
- **Higher-Order Functions**: The library offers a range of higher-order functions, such as `map`, `reduce`, `filter`, and `each`, that operate on collections and make it easier to apply functional programming techniques in JavaScript.

#### 3. **Templating**

- **Client-Side Templating**: Underscore.js includes a simple yet powerful templating engine that allows developers to create HTML templates with embedded JavaScript. This is useful for rendering dynamic content on the client side, such as in single-page applications (SPAs).

#### 4. **Utilities and Helpers**

- **Utility Functions**: The library provides a wide range of utility functions for common programming tasks, such as generating unique IDs, escaping HTML, and managing delays with debounce and throttle functions. These utilities simplify common tasks and improve code readability.
- **Chaining**: Underscore.js supports method chaining, allowing developers to perform multiple operations on a collection in a single, readable statement. This can make the code more concise and expressive.

#### 5. **Iterating Collections**

- **Collection Iteration**: Underscore.js makes it easy to iterate over arrays and objects with functions like `each`, `map`, `reduce`, and `filter`. These functions abstract away the complexity of loops and iterators, making the code more concise and easier to understand.
- **Querying and Searching**: The library provides functions for querying and searching through collections, such as `find`, `where`, and `findWhere`, which help in locating specific elements or subsets of data based on certain criteria.

#### 6. **Handling Events**

- **Event Binding and Unbinding**: Underscore.js offers functions for binding and unbinding events, which are useful for managing user interactions in web applications. This can help in building interactive user interfaces with less boilerplate code.

#### 7. **Cross-Browser Compatibility**

- **Polyfills and Shims**: Underscore.js includes polyfills and shims for older browsers, ensuring that the provided functions work consistently across different environments. This is particularly useful for maintaining compatibility with legacy systems.

#### 8. **Testing and Debugging**

- **Simplified Testing**: By providing a rich set of utility functions, Underscore.js can simplify the process of writing tests for JavaScript code. Functions like `isEqual` can be used to compare objects and arrays, making it easier to verify the correctness of test results.
- **Debugging Helpers**: The library’s utility functions can assist in debugging by providing tools for inspecting and manipulating data, which can help identify issues and understand the flow of data in an application.

#### 9. **Game Development**

- **Game Logic**: Underscore.js can be used to manage game state and logic, including player data, inventory systems, and game mechanics. Its collection and utility functions help in building robust game logic with ease.

#### 10. **Data Visualization**

- **Charting and Graphing**: In data visualization, Underscore.js can be used to preprocess and transform data before feeding it into visualization libraries. This includes operations like data aggregation, filtering, and mapping.


## Underscore.js Documentation

Underscore.js is a utility library that provides a wide range of functions for dealing with arrays, objects, functions, and other data types. Here are some key classes and functions along with code snippets to illustrate their usage.

1. **Arrays**

   - **_.map**
     - **Description**: Produces a new array of values by mapping each value in a list through a transformation function.
     - **Usage**:
       ```javascript
       var numbers = [1, 2, 3];
       var doubled = _.map(numbers, function(num) { return num * 2; });
       console.log(doubled); // [2, 4, 6]
       ```

   - **_.filter**
     - **Description**: Looks through each value in the list, returning an array of all the values that pass a truth test.
     - **Usage**:
       ```javascript
       var numbers = [1, 2, 3, 4, 5, 6];
       var evens = _.filter(numbers, function(num) { return num % 2 === 0; });
       console.log(evens); // [2, 4, 6]
       ```

   - **_.reduce**
     - **Description**: Reduce builds up a single result from a list of values, applying a function against an accumulator and each element in the list.
     - **Usage**:
       ```javascript
       var sum = _.reduce([1, 2, 3], function(sum, num) { return sum + num; }, 0);
       console.log(sum); // 6
       ```

   - **_.find**
     - **Description**: Returns the first value that passes a truth test.
     - **Usage**:
       ```javascript
       var numbers = [1, 2, 3, 4, 5, 6];
       var firstEven = _.find(numbers, function(num) { return num % 2 === 0; });
       console.log(firstEven); // 2
       ```

2. **Objects**

   - **_.extend**
     - **Description**: Copy all of the properties in the source objects over to the destination object.
     - **Usage**:
       ```javascript
       var destination = { name: 'Moe' };
       var source = { age: 50 };
       _.extend(destination, source);
       console.log(destination); // { name: 'Moe', age: 50 }
       ```

   - **_.pick**
     - **Description**: Return a copy of the object, filtered to only have values for the whitelisted keys.
     - **Usage**:
       ```javascript
       var object = { name: 'Moe', age: 50, userid: 'moe1' };
       var picked = _.pick(object, 'name', 'age');
       console.log(picked); // { name: 'Moe', age: 50 }
       ```

   - **_.omit**
     - **Description**: Return a copy of the object, filtered to omit the blacklisted keys.
     - **Usage**:
       ```javascript
       var object = { name: 'Moe', age: 50, userid: 'moe1' };
       var omitted = _.omit(object, 'userid');
       console.log(omitted); // { name: 'Moe', age: 50 }
       ```

3. **Collections**

   - **_.each**
     - **Description**: Iterates over a list of elements, yielding each in turn to an iteratee function.
     - **Usage**:
       ```javascript
       _.each([1, 2, 3], function(num) { console.log(num); });
       // 1
       // 2
       // 3
       ```

   - **_.groupBy**
     - **Description**: Splits a collection into sets, grouped by the result of running each value through a function.
     - **Usage**:
       ```javascript
       var grouped = _.groupBy([1.3, 2.1, 2.4], function(num) { return Math.floor(num); });
       console.log(grouped); // { '1': [1.3], '2': [2.1, 2.4] }
       ```

   - **_.sortBy**
     - **Description**: Returns a sorted copy of a list, ranked in ascending order by the results of running each value through a function.
     - **Usage**:
       ```javascript
       var sorted = _.sortBy([1, 2, 3, 4, 5, 6], function(num) { return Math.sin(num); });
       console.log(sorted); // [5, 4, 6, 3, 1, 2]
       ```

4. **Utility Functions**

   - **_.identity**
     - **Description**: Returns the same value that is used as the argument. In math: f(x) = x.
     - **Usage**:
       ```javascript
       var stooge = { name: 'moe' };
       console.log(_.identity(stooge) === stooge); // true
       ```

   - **_.times**
     - **Description**: Invokes the given function n times.
     - **Usage**:
       ```javascript
       _.times(3, function() { console.log('Hello'); });
       // Hello
       // Hello
       // Hello
       ```

   - **_.random**
     - **Description**: Returns a random integer between min and max, inclusive.
     - **Usage**:
       ```javascript
       console.log(_.random(0, 100)); // Random integer between 0 and 100
       ```


## Alternatives to Underscore.js

There are several alternative libraries to Underscore.js that provide similar utility functions for working with arrays, objects, functions, and more. Here are some popular alternatives:

1. **Lodash**
   - **Description**: A modern JavaScript utility library delivering modularity, performance, & extras.
   - **Website**: [lodash.com](https://lodash.com/)
   - **Documentation**: [Lodash Documentation](https://lodash.com/docs/)
   - **GitHub**: [Lodash GitHub](https://github.com/lodash/lodash)
   - **CDN**: [Lodash CDN](https://cdn.jsdelivr.net/npm/lodash/)

2. **Ramda**
   - **Description**: A practical functional library for JavaScript programmers.
   - **Website**: [ramdajs.com](https://ramdajs.com/)
   - **Documentation**: [Ramda Documentation](https://ramdajs.com/docs/)
   - **GitHub**: [Ramda GitHub](https://github.com/ramda/ramda)
   - **CDN**: [Ramda CDN](https://cdn.jsdelivr.net/npm/ramda/)

3. **Rambda**
   - **Description**: Faster alternative to Ramda.
   - **Website**: [rambda.now.sh](https://rambda.now.sh/)
   - **Documentation**: [Rambda Documentation](https://rambda.now.sh/)
   - **GitHub**: [Rambda GitHub](https://github.com/selfrefactor/rambda)
   - **CDN**: [Rambda CDN](https://cdn.jsdelivr.net/npm/rambda/)

4. **Sugar.js**
   - **Description**: A JavaScript utility library for working with native objects.
   - **Website**: [sugarjs.com](https://sugarjs.com/)
   - **Documentation**: [Sugar.js Documentation](https://sugarjs.com/docs/)
   - **GitHub**: [Sugar.js GitHub](https://github.com/andrewplummer/Sugar)
   - **CDN**: [Sugar.js CDN](https://cdn.jsdelivr.net/npm/sugar/)

5. **lazy.js**
   - **Description**: A utility library for lazy evaluation.
   - **Website**: [danieltao.com/lazy.js](http://danieltao.com/lazy.js/)
   - **Documentation**: [Lazy.js Documentation](http://danieltao.com/lazy.js/docs/)
   - **GitHub**: [Lazy.js GitHub](https://github.com/dtao/lazy.js)
   - **CDN**: [Lazy.js CDN](https://cdn.jsdelivr.net/npm/lazy.js/)

6. **Collect.js**
   - **Description**: A convenience wrapper for working with arrays and objects.
   - **Website**: [collect.js.org](https://collect.js.org/)
   - **Documentation**: [Collect.js Documentation](https://collect.js.org/docs/)
   - **GitHub**: [Collect.js GitHub](https://github.com/ecrmnn/collect.js)
   - **CDN**: [Collect.js CDN](https://cdn.jsdelivr.net/npm/collect.js/)


Here are some online resources where you can learn more about utility libraries like Lodash, Underscore.js, and their alternatives:

### Learning Resources for Lodash and Underscore.js


### Documentation

 **Underscore.js Official Documentation**
   - **Link**: [Underscore.js Documentation](https://underscorejs.org/)
   - **Description**: The official documentation for Underscore.js, detailing all available functions with examples.

### GitHub Repository
 **Underscore.js GitHub Repository**
   - **Link**: [Underscore.js GitHub](https://github.com/jashkenas/underscore)
   - **Description**: The source code repository for Underscore.js.

### Online Tutorials and Courses

1. **Pluralsight**
   - **Course**: [Using Underscore.js](https://www.pluralsight.com/courses/using-underscore-js)
   - **Description**: A course that covers the basics and advanced features of Underscore.js.

2. **Coursera**
   - **Course**: [Functional Programming in JavaScript](https://www.coursera.org/learn/functional-programming-javascript)
   - **Description**: This course covers functional programming concepts that are often utilized with libraries like Lodash and Ramda.

3. **Udemy**
   - **Course**: [JavaScript Utility Libraries: Underscore and Lodash](https://www.udemy.com/course/javascript-utility-libraries-underscore-and-lodash/)
   - **Description**: A comprehensive course covering the usage of both Underscore and Lodash.



### Learning Resources for Alternatives

1. **Ramda.js Documentation**
   - **Link**: [Ramda Documentation](https://ramdajs.com/docs/)
   - **Description**: The official documentation for Ramda, a practical functional library for JavaScript programmers.

2. **Rambda Documentation**
   - **Link**: [Rambda Documentation](https://rambda.now.sh/)
   - **Description**: Documentation for Rambda, which is a faster alternative to Ramda.

3. **Sugar.js Documentation**
   - **Link**: [Sugar.js Documentation](https://sugarjs.com/docs/)
   - **Description**: The official documentation for Sugar.js, a utility library for working with native objects.

4. **Lazy.js Documentation**
   - **Link**: [Lazy.js Documentation](http://danieltao.com/lazy.js/docs/)
   - **Description**: Documentation for Lazy.js, a utility library for lazy evaluation.

5. **Collect.js Documentation**
   - **Link**: [Collect.js Documentation](https://collect.js.org/docs/)
   - **Description**: Documentation for Collect.js, a convenience wrapper for working with arrays and objects.

6. **Lodash Official Documentation**
   - **Link**: [Lodash Documentation](https://lodash.com/docs/)
   - **Description**: The official documentation provides comprehensive details on Lodash's features, including examples and use cases.


By exploring these resources, you can deepen your understanding of utility libraries in JavaScript, learn best practices, and stay updated with the latest developments and use cases.
