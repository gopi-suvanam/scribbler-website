---
title: Closure in JavaScript for Functional Programming
layout: post
description: Closure is an important feature available in JavaScript to do functional style programming. There are many practial applications of closure including in mathematical computations, UI experince, machine learning etc.
---

In JavaScript, a closure is created when a function is defined within another function and the inner function uses variables declared in the outer function's scope chain. This is a core concept of [functional programming](/2023/03/13/JavaScript-for-Functional-Programming.html).

The inner function can still access the variables of the outer function, even after the outer function has returned. This allows for more flexible and powerful functions as they can maintain a reference to variables that are no longer in scope.

### Role of Closure
Closures play a significant role in functional programming. Functional programming is a programming paradigm that emphasizes the use of pure functions, immutability, and higher-order functions. Higher-order functions are functions that can take other functions as arguments or return functions as their results.

Closures are used to create higher-order functions that can generate new functions based on their inputs. In functional programming, these higher-order functions are often used to transform data or to create new functions that have specific behaviors based on the input data.

Closures are also used to create private variables and functions. By encapsulating variables and functions within a closure, you can limit their scope and prevent them from being accessed from outside the closure. This is particularly useful in situations where you want to avoid naming conflicts or prevent external code from modifying your variables or functions.

Closures can also be used to implement currying, which is the process of transforming a function that takes multiple arguments into a series of functions that each take a single argument. This technique can make functions more modular and easier to reuse.

### Importance of Closure

Closures are important in JavaScript because they provide a way to create private variables and functions in a function.

By encapsulating variables and functions within a closure, you can limit their scope and prevent them from being accessed from outside the closure. This is particularly useful in situations where you want to avoid naming conflicts or prevent external code from modifying your variables or functions.

Closures are also used extensively in functional programming to create higher-order functions that can generate new functions based on their inputs. This is because closures can capture the state of a function at a particular point in time, allowing for more flexible and powerful functions.

Additionally, closures can help to reduce memory usage by allowing variables and functions to be garbage collected once they are no longer in use.


### Example of Closure in JavaScript
Here's an example:

	function outerFunction(name) {
	  const outerVariable = "Hello "+name+"! I am in the outer function's scope.";
	
	  function innerFunction() {
	    return(outerVariable);
	  }
	
	  return innerFunction;
	}
	
	const inner = outerFunction("User");
	inner(); // Output: "Hello User! I am in the outer function's scope."
	
In this example, the outerFunction returns the innerFunction. The innerFunction maintains a reference to the outerVariable, which is no longer in scope when the innerFunction is executed. Nonetheless, because of the closure, the innerFunction is still able to access the outerVariable and log its value.

### Practical Use: Moments (statistics)

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
		return sum.arr.length
		
	}
Finally, the k'th moment is:

	k_th_moment = mean(powers) //Output 4.333333333333333
	
Now that we have the power function and mean function defined, we can easily calculate any moment in a single line. For example, if you want 5th moment, you can do so in a single line:
	
	console.log(mean(population.map(power_k(5))) //Output 5.333333333333333
	
There are several interesting uses of such closure. A more sophisticated example could be where one wants to simulate the behavior of gas with fixed volume and mass but varying temperature. Then the behavior can be enclosed as a function of temperature with the volume and mass encapsulated as data.

A detailed discussion higher order function with an example involving closure is in this article: [Higher Order Functions in Functional Programming using JavaScript](/2023/05/26/Higher-Order-Functions-in-Functional-Programming-using-JavaScript.html).
	







