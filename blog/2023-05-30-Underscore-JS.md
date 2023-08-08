---
title: How to Use Underscore JS in JavaScript
description: Underscore JS provides several utilites and functions for quick development in JavaScript. 
tags: javascript
layout: post
---

### What is Underscore JS?

[Underscore.js](https://underscorejs.org/) is a popular JavaScript library that provides a set of utility functions and [functional programming](/2023/03/13/JavaScript-for-Functional-Programming.html) helpers. It is designed to enhance the functionality and flexibility of JavaScript code and simplify common programming tasks. Underscore.js offers a wide range of functions, including array and object manipulation, iteration and iteration control, function composition, data manipulation, and more. It is often used in web development projects to streamline code, improve readability, and increase productivity. Some key features of Underscore.js include:

- Collection Functions: Underscore.js provides a rich set of functions for working with arrays and objects, such as each, map, filter, reduce, groupBy, and pluck. These functions simplify common tasks like iterating over collections, transforming data, filtering values, and aggregating results.

- Functional Programming Support: The library includes functions that support functional programming paradigms, such as compose, partial, throttle, debounce, and memoize. These functions enable developers to write clean and reusable code by composing functions, currying arguments, and controlling function execution.

- Object Manipulation: Underscore.js offers functions for manipulating and transforming objects, such as extend, defaults, pick, omit, and clone. These functions allow developers to merge objects, set default values, extract specific properties, remove unwanted properties, and create deep copies of objects.

- Utility Functions: The library includes various utility functions to handle common tasks, including type checking (isArray, isObject, isFunction, etc.), value manipulation (identity, times, random, etc.), and more.

- Template Engine: Underscore.js features a simple yet powerful template engine that allows developers to embed JavaScript expressions within HTML templates. It provides a convenient way to generate dynamic content by interpolating data and executing JavaScript logic within templates.

- Chaining: Underscore.js supports method chaining, allowing developers to apply multiple operations to a collection or object in a concise and readable manner. This chaining syntax helps create more expressive and fluid code.

Overall, Underscore.js is a versatile and widely adopted library that provides developers with a comprehensive set of tools to enhance JavaScript programming. It promotes functional programming principles, simplifies common tasks, and improves code readability, making it a valuable asset in web development projects.

### How to Use Underscore JS?

For experimenting see this notebook on Scribbler: [Using Underscore JS](https://app.scribbler.live/#./examples/Underscore-JS.jsnb){: .jsnb-link} 

Here are code examples demonstrating how to include Underscore.js using a CDN (Content Delivery Network) in HTML. 

#### Including Underscore.js using the cdnjs CDN:

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

#### Including Underscore.js using the unpkg CDN:

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

#### Map: Transform an array of numbers by doubling each value.

	var numbers = [1, 2, 3, 4, 5];
	var doubledNumbers = _.map(numbers, function(num) {
	  return num * 2;
	});
	console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

#### Pluck: Extract a specific property from an array of objects.

	var users = [
	  { name: 'John', age: 25 },
	  { name: 'Alice', age: 30 },
	  { name: 'Bob', age: 28 }
	];
	var names = _.pluck(users, 'name');
	console.log(names); // Output: ['John', 'Alice', 'Bob']

#### GroupBy: Group an array of objects based on a specific property.

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

#### SortBy: Sort an array of objects based on a specific property.

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

#### Template: Generate HTML templates using Underscore's template syntax.

	var template = _.template('<h1><%= title %></h1>');
	var html = template({ title: 'Welcome to my website' });
	console.log(html); // Output: <h1>Welcome to my website</h1>
