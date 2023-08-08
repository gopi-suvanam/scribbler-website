---
title: Numerical Analysis in JavaScript for Scientific/Mathematical Computation
description: Numerical analysis in JavaScript allows researchers, scientists, and engineers to tackle complex problems by formulating them as computational tasks and finding approximate solutions using numerical algorithms and techniques. JavaScript can be used to implement Bisection Method, Newton's Method, Euler's Method, Simpson's Rule, Gaussian Elimination and Runge-Kutta Method.
layout: post
tags: javascript
---

### What is Numerical Analysis?
Numerical analysis is a branch of mathematics and computer science that focuses on developing algorithms and methods for solving mathematical problems using numerical approximations and computational techniques. It deals with the study, design, analysis, and implementation of numerical algorithms to obtain solutions to mathematical problems that may be too complex or impossible to solve analytically.

Numerical analysis encompasses a wide range of mathematical problems, including but not limited to:

- Solving equations and systems of equations: Numerical methods such as bisection, Newton's method, and Gaussian elimination are used to find roots of equations or solutions to systems of linear or nonlinear equations.

- Interpolation and approximation: Techniques like polynomial interpolation and least squares approximation are employed to estimate values between known data points or to approximate complicated functions by simpler ones.

- Numerical integration and differentiation: Methods like Simpson's rule and the trapezoidal rule are used to approximate the definite integral of a function, while finite difference approximations are used to compute derivatives of functions.

- Solving ordinary and partial differential equations: Numerical methods like Euler's method, Runge-Kutta methods, and finite difference or finite element methods are employed to approximate solutions to differential equations that model real-world phenomena.

- Optimization: Numerical optimization algorithms are used to find the minimum or maximum of a given function, which is useful in various fields such as engineering, economics, and machine learning.

### Numerical Analysis in JavaScript
Below are a few examples of numerical analysis techniques implemented in JavaScript. These examples demonstrate the implementation of the bisection method for finding the roots of equations to solving differential equations/doing integration. You can use this notebook on Scribbler for experimentation: [Numerical Analysis Recipes](https://app.scribbler.live/#./examples/Numerical-Analysis-Recipes.jsnb){: .jsnb-link} 

These algorithms use [Higher Order Functions](/2023/05/26/Higher-Order-Functions-in-Functional-Programming-using-JavaScript.html) in a [functional programming paradigm](/2023/03/13/JavaScript-for-Functional-Programming.html).

#### [Bisection Method](https://en.wikipedia.org/wiki/Bisection_method) for Finding Solution to an Equation

	function bisectionMethod(func, a, b, tolerance) {
	  let c = (a + b) / 2;
	  while (Math.abs(func(c)) > tolerance) {
	    if (func(a) * func(c) < 0) {
	      b = c;
	    } else {
	      a = c;
	    }
	    c = (a + b) / 2;
	  }
	  return c;
	}
	
	// Example usage
	function f(x) {
	  return x * x - 4; // Find the root of this function
	}
	
	const root = bisectionMethod(f, 1, 3, 0.0001);
	console.log("Root:", root);

#### [Newton's Method](https://en.wikipedia.org/wiki/Newton%27s_method) for Finding Solution to an Equation

	function newtonsMethod(func, derivative, x0, tolerance) {
	  let x = x0;
	  while (Math.abs(func(x)) > tolerance) {
	    x = x - func(x) / derivative(x);
	  }
	  return x;
	}
	
	// Example usage
	function f(x) {
	  return x * x - 4; // Find the root of this function
	}
	
	function fDerivative(x) {
	  return 2 * x; // Derivative of f(x)
	}
	
	const root = newtonsMethod(f, fDerivative, 2, 0.0001);
	console.log("Root:", root);

#### [Euler's Method](https://en.wikipedia.org/wiki/Euler_method) for Ordinary Differential Equation

	function eulerMethod(dydx, x0, y0, h, numSteps) {
	  let x = x0;
	  let y = y0;
	  for (let i = 0; i < numSteps; i++) {
	    const slope = dydx(x, y);
	    y = y + h * slope;
	    x = x + h;
	  }
	  return y;
	}
	
	// Example usage
	function dydx(x, y) {
	  return x * x - 4 * y; // Solve the differential equation dy/dx = x^2 - 4y
	}
	
	const solution = eulerMethod(dydx, 0, 1, 0.1, 10);
	console.log("Solution:", solution);

#### [Simpson's Rule](https://en.wikipedia.org/wiki/Simpson%27s_rule) for Numerical Integration

	function simpsonsRule(func, a, b, n) {
	  const h = (b - a) / n;
	  let sum = func(a) + func(b);
	
	  for (let i = 1; i < n; i++) {
	    const x = a + i * h;
	    sum += i % 2 === 0 ? 2 * func(x) : 4 * func(x);
	  }
	
	  return (h / 3) * sum;
	}
	
	// Example usage
	function f(x) {
	  return Math.sin(x); // Integrate sin(x) from 0 to π
	}
	
	const integral = simpsonsRule(f, 0, Math.PI, 100);
	console.log("Integral:", integral);
	
#### [Gaussian Elimination](https://en.wikipedia.org/wiki/Gaussian_elimination) for a System of Linear Equations

	function gaussianElimination(matrix) {
	  const n = matrix.length;
	
	  for (let i = 0; i < n; i++) {
	    let maxRow = i;
	    for (let j = i + 1; j < n; j++) {
	      if (Math.abs(matrix[j][i]) > Math.abs(matrix[maxRow][i])) {
	        maxRow = j;
	      }
	    }
	
	    [matrix[i], matrix[maxRow]] = [matrix[maxRow], matrix[i]];
	
	    for (let j = i + 1; j < n; j++) {
	      const ratio = matrix[j][i] / matrix[i][i];
	      for (let k = i; k < n + 1; k++) {
	        matrix[j][k] -= ratio * matrix[i][k];
	      }
	    }
	  }
	
	  const solution = new Array(n);
	
	  for (let i = n - 1; i >= 0; i--) {
	    let sum = 0;
	    for (let j = i + 1; j < n; j++) {
	      sum += matrix[i][j] * solution[j];
	    }
	    solution[i] = (matrix[i][n] - sum) / matrix[i][i];
	  }
	
	  return solution;
	}
	
	// Example usage
	const augmentedMatrix = [
	  [2, 1, -1, 8],
	  [-3, -1, 2, -11],
	  [-2, 1, 2, -3],
	];
	
	const solution = gaussianElimination(augmentedMatrix);
	console.log("Solution:", solution);

#### [Runge-Kutta Method](https://en.wikipedia.org/wiki/Runge%E2%80%93Kutta_methods) for Ordinary Differential Equations

	function rungeKuttaMethod(dydx, x0, y0, h, numSteps) {
	  let x = x0;
	  let y = y0;
	
	  for (let i = 0; i < numSteps; i++) {
	    const k1 = h * dydx(x, y);
	    const k2 = h * dydx(x + h / 2, y + k1 / 2);
	    const k3 = h * dydx(x + h / 2, y + k2 / 2);
	    const k4 = h * dydx(x + h, y + k3);
	
	    y = y + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
	    x = x + h;
	  }
	
	  return y;
	}
	
	// Example usage
	function dydx(x, y) {
	  return x * x - 4 * y; // Solve the differential equation dy/dx = x^2 - 4y
	}
	
	const solution = rungeKuttaMethod(dydx,0, 1, 0.1, 10);
	console.log("Solution:", solution);
You can experiment with Runge-Kutta Method in this notebook on Scribbler: [Runge-Kutta Method for Differential Equations](https://app.scribbler.live/#./examples/Runge-Kutta-for-Differential-Equations.jsnb). 




