---
title: Understanding Gradient Descent with Examples in JavaScript
description: Learn how to implement gradient descent for optimizing functions using JavaScript. This article provides a step-by-step guide, code examples, and an exercise to apply gradient descent in a JavaScript notebook environment for numerical optimization tasks.
layout: post
start_link: https://app.scribbler.live/?jsnb=./examples/Gradient-Descent.jsnb
categories: Scientific
---

## What is Gradient Descent?

Gradient descent is a popular optimization algorithm used in machine learning and numerical optimization to minimize a function by iteratively moving in the direction of the steepest descent of the function. In this article, we'll explore the concept of gradient descent through numerical examples implemented in JavaScript.

Gradient descent is a first-order optimization algorithm used to find the local minimum of a function. It involves taking steps proportional to the negative of the gradient (or derivative) of the function at the current point. The goal is to iteratively update the parameters (or variables) of the function to minimize a given cost or loss function.

Gradient descent is part of a set of algorithms called Numerical Methods. An article on implementations of a few other numerical methods in JavaScript is available here: [Numerical Analysis in JavaScript for Scientific/Mathematical Computation](https://scribbler.live/2023/06/07/Numerical-Analysis-in-JavaScript-for-Scientific-Computing.html).

### Mathematical Concept

Given a function _f(x)_, the gradient descent algorithm can be expressed as:

x<sub>n+1</sub> = x<sub>n</sub> - α∇ f(x<sub>n</sub>)

where:
- x<sub>n</sub> is the current value of the parameter.
- α (alpha) is the learning rate (step size), a small positive scalar.
- ∇ f(x<sub>n</sub>) is the gradient (derivative) of _f_ at x<sub>n</sub>.

### Key Steps of Gradient Descent

1. *Initialize Parameters*: Start with an initial guess for the parameter _x_.
2. *Compute Gradient*: Calculate the gradient ▽f(x) of the function at the current parameter value.
3. *Update Parameters*: Update the parameter _x_ in the direction opposite to the gradient scaled by the learning rate α
4. *Repeat*: Continue iterating until convergence or a maximum number of iterations is reached.

## JavaScript Example: Minimizing a Quadratic Function

Let's consider a simple example of using gradient descent to minimize a quadratic function f(x) = x<sup>2</sup>.

```javascript
// Gradient Descent to minimize f(x) = x^2

function gradientDescent(initialX, learningRate, maxIterations, tolerance) {
  let x = initialX;

  for (let i = 0; i < maxIterations; i++) {
    const gradient = 2 * x; // Gradient of f(x) = x^2

    if (Math.abs(gradient) < tolerance) {
      console.log(`Gradient descent converged at iteration ${i}, x = ${x}`);
      break;
    }

    x = x - learningRate * gradient; // Update x using gradient descent
  }

  return x;
}

// Parameters
const initialX = 5; // Initial guess for x
const learningRate = 0.1; // Learning rate (step size)
const maxIterations = 100; // Maximum iterations
const tolerance = 0.0001; // Convergence tolerance

// Perform gradient descent
const minimizedX = gradientDescent(initialX, learningRate, maxIterations, tolerance);

console.log(`Minimized x: ${minimizedX}`);
```

In this implementation:
- We define a `gradientDescent` function that performs gradient descent on the function _f(x) = x<sup>2</sup>_.
- The `gradient` variable represents the gradient of _f(x)_ at the current value of _x_.
- We update _x_ using the gradient descent update rule _x_ = _x_ - α*_gradient_.
- The process continues until the gradient magnitude falls below a specified tolerance or the maximum number of iterations is reached.

### Running the Example

To run the above JavaScript code, you can execute it in a Node.js environment or directly in a browser console. Adjust the initial parameters (`initialX`, `learningRate`, `maxIterations`, `tolerance`) to observe different behaviors of the gradient descent algorithm.


## Gradient Descent for Minimizing a Generic Function (Two Variables)

Let's consider a generic function _f(x, y)_ of two variables _x_ and _y_ that we want to minimize using gradient descent.

### Gradient Calculation (Numerical Approximation)

The gradient _∇ f(x, y) = [∂f/∂x, ∂f/∂y]_ can be approximated using finite differences:

∂f/∂x ≈ (f(x + ϵ, y) - f(x, y))/ϵ

∂f/∂y ≈ (f(x, y + ϵ) - f(x, y))/ϵ

where ϵ is a small perturbation.

### JavaScript Implementation

You can experiment with this code here: [JavaScript Notebook for Gradient Descent](https://app.scribbler.live/?jsnb=./examples/Gradient-Descent.jsnb).

```javascript
// Gradient Descent to minimize a generic function f(x, y)

function gradientDescent2D(f, initialX, initialY, learningRate, maxIterations, tolerance, epsilon) {
  let x = initialX;
  let y = initialY;

  for (let i = 0; i < maxIterations; i++) {
    // Compute gradient using numerical approximation
    const gradientX = (f(x + epsilon, y) - f(x, y)) / epsilon;
    const gradientY = (f(x, y + epsilon) - f(x, y)) / epsilon;

    // Update parameters using gradient descent
    x = x - learningRate * gradientX;
    y = y - learningRate * gradientY;

    // Compute magnitude of gradient
    const gradientMagnitude = Math.sqrt(gradientX * 2 + gradientY * 2);

    // Check convergence
    if (gradientMagnitude < tolerance) {
      console.log(`Gradient descent converged at iteration ${i}, (x, y) = (${x}, ${y})`);
      break;
    }
  }

  return { x, y };
}

// Define the function f(x, y) - Example: f(x, y) = (x-3)^2 + (y-5)^2
function exampleFunction(x, y) {
  return (x-3)*2 + (y-5)*2;
}

// Parameters
const initialX = 1; // Initial guess for x
const initialY = 1; // Initial guess for y
const learningRate = 0.1; // Learning rate (step size)
const maxIterations = 100; // Maximum iterations
const tolerance = 0.0001; // Convergence tolerance
const epsilon = 0.0001; // Small perturbation for gradient calculation

// Perform gradient descent
const minimizedParams = gradientDescent2D(exampleFunction, initialX, initialY, learningRate, maxIterations, tolerance, epsilon);

console.log(`Minimized (x, y): (${minimizedParams.x}, ${minimizedParams.y})`);
```

### Explanation

In this implementation:
- We define a `gradientDescent2D` function that takes a generic function `f(x, y)` as input and performs gradient descent to minimize it.
- The `exampleFunction` represents the function _f(x, y)_ that we want to minimize (e.g., _f(x, y) = (x-3)^2 + (y-5)^2_ for a simple quadratic function).
- Inside the loop, the gradients ∂f/∂x and ∂f/∂y are calculated using finite differences.
- The parameters _x_ and _y_ are updated using the gradient descent update rule.
- Convergence is checked based on the magnitude of the gradient.
- The process continues until convergence or a maximum number of iterations is reached.

### Running the Example

To use this gradient descent algorithm for a specific function _f(x, y)_, replace the `exampleFunction` with your own function. Adjust the initial parameters (`initialX`, `initialY`, `learningRate`, `maxIterations`, `tolerance`, `epsilon`) to suit your optimization problem.

This extended gradient descent algorithm allows you to minimize a generic function of two variables _f(x, y)_ using numerical gradient approximation and iterative updates. You can apply this approach to optimize various types of functions in machine learning, numerical optimization, and scientific computing by defining the objective function and appropriate parameters. Experiment with different functions and settings to explore the behavior of gradient descent in multidimensional spaces.

## Experiment with Gradient Descent

Gradient descent is a fundamental optimization technique used extensively in machine learning and numerical optimization. In this article, we've explored the concept of gradient descent through a simple numerical example implemented in JavaScript. You can apply similar principles to more complex functions and real-world optimization problems by appropriately defining the objective function and its gradient.

Experiment with different functions, learning rates, and initial values to gain a deeper understanding of how gradient descent works and its sensitivity to different parameters. Further exploration can involve implementing gradient descent for more complex functions and applying it to real-world optimization tasks.

Gradient descent is just one of many optimization algorithms used in machine learning and numerical computation. It forms the basis for more sophisticated optimization techniques used in deep learning and neural network training.

The extended gradient descent algorithm allows you to minimize a generic function of two variables _f(x,y)_ using numerical gradient approximation and iterative updates. You can apply this approach to optimize various types of functions in machine learning, numerical optimization, and scientific computing by defining the objective function and appropriate parameters. Experiment with different functions and settings to explore the behavior of gradient descent in multidimensional spaces.

## Exercise Optimizing a Function with Arbitrary Number of Variables

In this tutorial, we've explored how to implement gradient descent to optimize a function of two variables using JavaScript. Now, let's extend this concept to optimize a function with an arbitrary number of variables as an exercise. The reader should try to implement this procedure in JavaScript starting with a [Blank Notebook ](https://app.scribbler.live#) or you can use this as a starting point: [JavaScript Notebook for Gradient Descent](https://app.scribbler.live/?jsnb=./examples/Gradient-Descent.jsnb).

### Objective:
Implement gradient descent to optimize a generic function _f_ with _n_ variables using JavaScript.

### Steps:
1. *Define the Objective Function _f_*

2. *Implement Gradient Calculation*
   - Compute the gradient ∇f(x) numerically using finite differences:

3. *Apply Gradient Descent*:
   - Use the computed gradient to update the variables _f_ iteratively: 
   	x<sub>i</sub>=x<sub>i</sub>−α ∂f/∂x</sub>=x<sub>
	for i=1,2,…,n, where α is the learning rate.

4. *Convergence Criteria*:
   - Implement a convergence criterion based on the magnitude of the gradient or the change in the function value.

By completing this exercise, you'll gain hands-on experience in implementing gradient descent for optimizing a function with an arbitrary number of variables using JavaScript. Experiment with different objective functions and parameters to deepen your understanding of gradient-based optimization techniques in numerical computation and machine learning. Happy coding!


