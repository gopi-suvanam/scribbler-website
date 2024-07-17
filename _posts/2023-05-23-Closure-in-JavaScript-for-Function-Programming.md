---
title: Closure in JavaScript for Functional Programming
layout: post
description: Closure is an important feature available in JavaScript to do functional style programming. There are many practial applications of closure including in mathematical computations, UI experince, machine learning etc.
start_link: https://app.scribbler.live/?jsnb=./examples/Closure-in-JavaScript.jsnb
categories: [Functional-Programming, JavaScript]
---

## What is a Closure?

A closure in JavaScript is a function that remembers and accesses variables from its outer scope even after the outer function has finished executing. This means that a function defined inside another function has access to the outer function's variables, and this access is preserved even after the outer function has returned. Closure is a core concept of [functional programming](/2023/03/13/JavaScript-for-Functional-Programming.html).


### How Closures Work in JavaScript

#### Lexical Scoping

To understand closures, it's essential first to understand the concept of lexical scoping. In JavaScript, the scope of a variable is defined by its location within the source code (lexical scope). A function's scope includes the function's own local variables, parameters, and variables from the enclosing scope(s).

#### Creation of a Closure

When a function is defined, it retains a reference to its lexical environment, which includes variables in the scope where the function was created. This reference forms the closure.

#### Example

Consider the following code:

```javascript
function outerFunction() {
  let outerVariable = 'I am outside!';

  function innerFunction() {
    console.log(outerVariable); // Accessing a variable from the outer scope
  }

  return innerFunction;
}

const myFunction = outerFunction();
myFunction(); // Logs: "I am outside!"
```

In this example:
1. `outerFunction` defines a variable `outerVariable` and an inner function `innerFunction`.
2. `innerFunction` accesses `outerVariable`, creating a closure.
3. `outerFunction` returns `innerFunction`, and the returned function is assigned to `myFunction`.
4. When `myFunction` is called, it still has access to `outerVariable` from the scope of `outerFunction`, even though `outerFunction` has already finished executing.



## Role of Closure
Closures play a significant role in functional programming. Functional programming is a programming paradigm that emphasizes the use of pure functions, immutability, and higher-order functions. Higher-order functions are functions that can take other functions as arguments or return functions as their results.

Closures are used to create higher-order functions that can generate new functions based on their inputs. In functional programming, these higher-order functions are often used to transform data or to create new functions that have specific behaviors based on the input data.

Closures are also used to create private variables and functions. By encapsulating variables and functions within a closure, you can limit their scope and prevent them from being accessed from outside the closure. This is particularly useful in situations where you want to avoid naming conflicts or prevent external code from modifying your variables or functions.

Closures can also be used to implement currying, which is the process of transforming a function that takes multiple arguments into a series of functions that each take a single argument. This technique can make functions more modular and easier to reuse.

## Importance of Closure

Closures are important in JavaScript because they provide a way to create private variables and functions in a function.

By encapsulating variables and functions within a closure, you can limit their scope and prevent them from being accessed from outside the closure. This is particularly useful in situations where you want to avoid naming conflicts or prevent external code from modifying your variables or functions.

Closures are also used extensively in functional programming to create higher-order functions that can generate new functions based on their inputs. This is because closures can capture the state of a function at a particular point in time, allowing for more flexible and powerful functions.

Additionally, closures can help to reduce memory usage by allowing variables and functions to be garbage collected once they are no longer in use.





##  Examples of Closure

### Example 1: Basic Example

```javascript
function outerFunction(name) {
  const outerVariable = "Hello "+name+"! I am in the outer function's scope.";

  function innerFunction() {
    return(outerVariable);
  }

  return innerFunction;
}

const inner = outerFunction("User");
inner(); // Output: "Hello User! I am in the outer function's scope."
```
	

This code example demonstrates how closures in JavaScript allow an inner function to retain access to variables from its outer function's scope even after the outer function has completed execution. This is useful for creating functions that can maintain state or access variables in a controlled manner.


### Closure Explanation

- When `outerFunction` is called with `"User"`, it creates an execution context with `name` set to `"User"` and `outerVariable` set to `"Hello User! I am in the outer function's scope."`.
- `innerFunction` is defined within this context and captures the variables within its lexical scope, which includes `outerVariable`.
- Even after `outerFunction` finishes executing, `innerFunction` retains access to `outerVariable` because of the closure. This allows `innerFunction` to return `outerVariable` when it is later called as `inner`.

You can play around with this example and other in this notebook: [JavaScript Notebook for Closures](https://app.scribbler.live/?jsnb=./examples/Closure-in-JavaScript.jsnb)

### Example 2: Creating Private Variables

```javascript
function createCounter() {
    let count = 0;

    return function() {
        return ++count;
    };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
```

#### Code Explanation

This code demonstrates the use of closures in JavaScript to create a simple counter. The `createCounter` function initializes a `count` variable and returns an inner function that increments and returns this `count` variable. Each time the returned function (`counter`) is called, it updates and returns the `count`. The inner function retains access to the `count` variable even after `createCounter` has finished executing, thanks to the closure created by the inner function. This allows the counter to maintain its own independent state across multiple calls.


1. **Define the `createCounter` Function**:
   ```javascript
   function createCounter() {
       let count = 0;

       return function() {
           return ++count;
       };
   }
   ```
   - `createCounter` is a function that, when called, initializes a local variable `count` to `0`.
   - Inside `createCounter`, an anonymous inner function is defined and returned. This inner function has access to the `count` variable due to JavaScript's closure mechanism.

2. **Return the Counter Function**:
   ```javascript
       return function() {
           return ++count;
       };
   ```
   - The inner function uses the increment operator (`++`) on `count` before returning it. Each call to this function will increment the `count` variable by 1 and then return the new value of `count`.

3. **Create a Counter Instance**:
   ```javascript
   const counter = createCounter();
   ```
   - `createCounter` is called, and the returned inner function (the counter function) is assigned to the variable `counter`.
   - At this point, `counter` is a function that has access to its own `count` variable, which is initialized to `0` within `createCounter`.

4. **Call the Counter Function**:
   ```javascript
   console.log(counter()); // Output: 1
   console.log(counter()); // Output: 2
   ```
   - The first call to `counter()` increments the `count` from `0` to `1` and returns `1`, which is logged to the console.
   - The second call to `counter()` increments the `count` from `1` to `2` and returns `2`, which is logged to the console.

### Example 3: Implementing Memoization

```javascript
function memoize(func) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if (!cache[key]) {
            cache[key] = func(...args);
        }
        return cache[key];
    };
}

const expensiveCalculation = memoize(function(n) {
    console.log('Performing expensive calculation...');
    return n * n;
});

console.log(expensiveCalculation(5)); // Output: Performing expensive calculation... 25
console.log(expensiveCalculation(5)); // Output: 25 (result retrieved from cache)
```


#### Code Explanation

This code demonstrates how to create a memoization function in JavaScript to optimize performance by caching results of expensive function calls. The `memoize` function wraps an existing function and adds a caching mechanism using an object (`cache`). When the memoized function is called, it checks if the result for the given arguments is already in the cache. If so, it returns the cached result; otherwise, it computes the result, caches it, and then returns it. This technique can significantly improve performance for functions with repetitive and costly computations.


1. **Define the `memoize` Function**:
   ```javascript
   function memoize(func) {
       const cache = {};

       return function(...args) {
           const key = JSON.stringify(args);
           if (!cache[key]) {
               cache[key] = func(...args);
           }
           return cache[key];
       };
   }
   ```
   - `memoize` is a higher-order function that takes a function `func` as an argument and returns a new function.
   - Inside `memoize`, an empty object `cache` is created to store the results of function calls.

2. **Return the Memoized Function**:
   ```javascript
       return function(...args) {
           const key = JSON.stringify(args);
           if (!cache[key]) {
               cache[key] = func(...args);
           }
           return cache[key];
       };
   ```
   - The returned function uses the rest parameter syntax (`...args`) to collect all its arguments into an array.
   - It creates a `key` by converting the `args` array into a JSON string. This `key` uniquely identifies the combination of arguments.
   - It checks if the `cache` object already has a value for this `key`. If not, it calls the original `func` with the `args` and stores the result in `cache[key]`.
   - Finally, it returns the cached result.

3. **Memoize an Expensive Function**:
   ```javascript
   const expensiveCalculation = memoize(function(n) {
       console.log('Performing expensive calculation...');
       return n * n;
   });
   ```
   - `expensiveCalculation` is a memoized version of the function that calculates the square of a number `n`. The memoized function will cache the results to avoid redundant calculations.

4. **Call the Memoized Function**:
   ```javascript
   console.log(expensiveCalculation(5)); // Output: Performing expensive calculation... 25
   console.log(expensiveCalculation(5)); // Output: 25 (result retrieved from cache)
   ```
   - The first call to `expensiveCalculation(5)` logs "Performing expensive calculation..." and returns `25` because it calculates `5 * 5`.
   - The second call to `expensiveCalculation(5)` does not log "Performing expensive calculation..." because the result `25` is retrieved from the cache.



## Practical Use: Moments (statistics)

In this section we will build code for calculate moments from a set of numbers. k-th raw moment is defined in statistics as mean(x^k), where x is a number from a population of random numbers. Mean can be calculated as sum(x^k)/n, where n is size of the population. First we will define the population

	const population = [1,2,3,5,8,2,6,3,5,10,7,4] //Can be any sequence
	
We, will create an encapsulated power function:
	
	power_k=function(k){
		return x=>x^k;
	} //The power_k returns a function that encapsulates k using closure.

We, will calculate the sequence of powers using the [Array function map](/2023/05/23/Array-Function-in-JavaScript.html):
	const k=3;
	const powers= population.map(power_k(3))

We, can define mean using [Array function reduce](/2023/05/23/Array-Function-in-JavaScript.html):

	mean = function(arr){
		const sum = arr.reduce((accumulator, num) => {
		  return accumulator + num;
		}, 0);
		return sum/arr.length
		
	}
Finally, the k'th moment is:

	k_th_moment = mean(powers) //Output 4.333333333333333
	
Now that we have the power function and mean function defined, we can easily calculate any moment in a single line. For example, if you want 5th moment, you can do so in a single line:
	
	console.log(mean(population.map(power_k(5)))) //Output 5.333333333333333
	
There are several interesting uses of such closure. A more sophisticated example could be where one wants to simulate the behavior of gas with fixed volume and mass but varying temperature. Then the behavior can be enclosed as a function of temperature with the volume and mass encapsulated as data.

A detailed discussion higher order function with an example involving closure is in this article: [Higher Order Functions in Functional Programming using JavaScript](/2023/05/26/Higher-Order-Functions-in-Functional-Programming-using-JavaScript.html).
	

## Applications of Closure in JavaScript

Closures are a fundamental and powerful concept in JavaScript, enabling functions to remember and access variables from an outer function’s scope even after the outer function has finished executing. This unique feature opens the door to a variety of practical and advanced programming techniques. Here are some key applications of closures in JavaScript:

### 1. Data Privacy
Closures are often used to create private variables and methods. This is a form of data encapsulation, where internal details of an object or function are hidden from the outside world.

```javascript
function createCounter() {
  let count = 0;
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.decrement()); // 0
```

### 2. Function Factories
Closures enable the creation of function factories, where a function returns other functions with preset configurations. This technique is useful for generating multiple similar functions without redundant code.

```javascript
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

### 3. Event Handlers
Closures are essential in event handling, especially when dealing with asynchronous code or callbacks. They allow you to retain access to variables that were in scope when the event handler was defined.

```javascript
function setup() {
  let name = 'Closure Example';
  document.getElementById('btn').addEventListener('click', function() {
    alert('Button clicked in ' + name);
  });
}

setup();
```

### 4. Memoization
Memoization is an optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again. Closures provide a convenient way to store these results.

```javascript
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const fibonacci = memoize(function(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(10)); // 55
```

### 5. Iterators and Generators
Closures can be used to create iterators and generators, allowing for customized iteration behavior.

```javascript
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next: function() {
      if (nextIndex < end) {
        let result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    }
  };
  return rangeIterator;
}

const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
  console.log(result.value); // 1 3 5 7 9
  result = it.next();
}
```

### 6. Module Pattern
Closures are often used to create modules, encapsulating functionality and exposing only the parts that need to be public.

```javascript
const calculatorModule = (function() {
  let total = 0;
  
  return {
    add: function(x) {
      total += x;
      return total;
    },
    subtract: function(x) {
      total -= x;
      return total;
    },
    getTotal: function() {
      return total;
    }
  };
})();

console.log(calculatorModule.add(10)); // 10
console.log(calculatorModule.subtract(5)); // 5
console.log(calculatorModule.getTotal()); // 5
```

### 7. Currying
Currying is a technique where a function is transformed into a sequence of functions, each with a single argument. Closures are instrumental in implementing currying.

```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1, 2, 3)); // 6
```

Closures in JavaScript are a versatile and powerful feature, enabling various advanced programming techniques and design patterns. From data privacy and function factories to memoization and currying, closures provide a robust toolset for developers to write clean, efficient, and maintainable code. Understanding and mastering closures unlocks the full potential of JavaScript as a functional programming language.





