---
title: Higher Order Functions in Functional Programming using JavaScript
layout: post
description: Higher-order functions are functions that take other functions as arguments or return them as values. They are an essential part of functional programming, and JavaScript has many built-in higher-order functions, such as forEach, map, filter, reduce.
tags: javascript, functional programming
---

Higher-order functions are functions that can take other functions as arguments or return functions as results. In JavaScript, functions are first-class citizens, which means they can be treated like any other value. This allows for the creation and manipulation of higher-order functions. We have looked at some of these functions when we talked about [Array functions](/2023/05/23/Array-Function-in-JavaScript.html) and [Closure](/2023/05/23/Closure-in-JavaScript-for-Function-Programming.html). This article is part of a series on higher [functional programming](/2023/03/13/JavaScript-for-Functional-Programming.html). 

### Uses
Higher-order functions are used practically in various scenarios to write cleaner, more modular, and reusable code. Here are some practical use cases for higher-order functions:

**Callback Functions:** Higher-order functions are often used to handle asynchronous operations and callbacks. For example, in event-driven programming or when making API calls, you can pass a callback function to a higher-order function that executes the callback once the operation is complete.

	function fetchData(url, callback) {
	  // Perform asynchronous operation
	  // Call the callback function with the fetched data
	  callback(data);
	}
	
	function handleData(data) {
	  // Handle the fetched data
	}
	
	fetchData('https://example.com/api', handleData);


**Function Composition:** Higher-order functions allow you to compose multiple functions together to create more complex operations. This can enhance code readability and maintainability.

	// Example functions
	const square = arr=>arr.map(x=>x*x)
	const sum = arr=>arr.reduce((accumulator, num) =>  accumulator + num, 0);
	// Function composition
	const compose = (f, g) => (x) => f(g(x));
	
	// Compose functions to perform a series of operations
	const sum_of_squares= compose(sum,square)
	
	// Usage example
	const result = sum_of_squares([1,2,3]); 
	
	console.log(result) //14

**Iteration and Transformation:** Higher-order functions like map(), filter(), and reduce() are commonly used for iterating over arrays, transforming data, and performing operations on array elements.

	const numbers = [1, 2, 3, 4, 5];
	
	const doubledNumbers = numbers.map(function (num) {
	  return num * 2;
	});
	
	const evenNumbers = numbers.filter(function (num) {
	  return num % 2 === 0;
	});
	
	const sum = numbers.reduce(function (acc, num) {
	  return acc + num;
	}, 0);
	
	console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
	console.log(evenNumbers); // Output: [2, 4]
	console.log(sum); // Output: 15

**Currying and Partial Application:** Higher-order functions enable currying and partial application, allowing you to create new functions by pre-filling some arguments of an existing function.

	// Currying using arrow functions 
	const curryMultiply = (a) => (b) => (c) => a * b * c;
	
	console.log(curryMultiply(2)(3)(4)); // Output: 24

### Example of Solving Differential Equation using Higher Order Function
Below an implementation of the [Runge-Kutta method](https://en.wikipedia.org/wiki/Runge%E2%80%93Kutta_methods) (specifically, the fourth-order Runge-Kutta method) in JavaScript. Experiment using this notebook on Scribbler: [Runge-Kutta Method for Differential Equations](https://app.scribbler.live/#./examples/Runge-Kutta-for-Differential-Equations.jsnb){: .jsnb-link} 


	function runge_kutta(dydt, y0, t0, h) {
	  return t=>{
		  const numSteps = Math.floor((t - t0) / h);
		  let t1 = t0;
		  let y = y0;
		
		  for (let i = 0; i < numSteps; i++) {
		    const k1 = h * dydt(t1, y);
		    const k2 = h * dydt(t1 + h / 2, y + k1 / 2);
		    const k3 = h * dydt(t1 + h / 2, y + k2 / 2);
		    const k4 = h * dydt(t1 + h, y + k3);
		
		    y = y + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
		    t1 = t1 + h;
		  }
		
		  return y;
	  }
	}
	
This function runge_kutta is a higher-order function that takes and input of a function representing dy/dt and returns another function that maps y as a function of t. Example usage: Solve the differential equation dy/dt = t^2 + y with initial condition y(0) = 1

	const dydt = (t, y) => t * t + y; //Inline function definition
	const y0 = 1;
	const t0 = 0;
	
	const h = 0.1;
	
	const f = runge_kutta(dydt, y0, t0, h);
	console.log("Value of y at 1",f(1));


### Example of Higher Order Function in Simulation
Below is an example of a Monte Carlo simulation for football odds calculation using a simple scoring model. Experiment in this notebook: [Monte-Carlo Simulation of Goals](/jsnb/#./examples/Monte-Carlo-Simulation-of-Goals.jsnb){: .jsnb-link} 

	// Function to perform Monte Carlo simulation for odds calculation
	function monte_carlo_simulation( num_simulations, simulate_match) {
	  let home_wins = 0;
	  let away_wins = 0;
	  let draws = 0;
	
	  for (let i = 0; i < num_simulations; i++) {
	    const goal_difference = simulate_match();
	
	    if (goal_difference > 0) {
	      home_wins++;
	    } else if (goal_difference < 0) {
	      away_wins++;
	    } else {
	      draws++;
	    }
	  }
	
	  return {
	    "home_win_percentage":home_wins/num_simulations,
	    "away_win_precentage":away_wins/num_simulations,
	    "draw_percentage":draws/num_simulations,
	  };
	}

This function takes a variable number of simulations and a function simulateMatch, that simulates a the scores each time it is called. The simulation can be customized and a sample is give below:

	// Sample function to simulate a football match and return the goal difference
	function simulate_match_on_strength(home_team_strength, away_team_strength) {
	  return ()=>{
			
		  // Generate random goal counts for each team
		  const home_goals = Math.round(Math.random() * home_team_strength);
		  const away_goals = Math.round(Math.random() * away_team_strength);
		
		  // Calculate the goal difference
		  const goal_difference = home_goals - away_goals;
		  return goal_difference;
	  }
	}

This returns a function that encapsulates 'Home Team Strength' and 'Away Team Strength' using the [concept of closure](/2023/05/23/Closure-in-JavaScript-for-Function-Programming.html). This can be input into the simulation as below:

	//Output win percentages on where home team is stronger than away team.
	console.log(monte_carlo_simulation(1000,simulate_match_on_strength(2,1)))


