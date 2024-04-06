---
title: Exploring Numerical Methods for Integration Using JavaScript
layout: post
description: In this article, we'll explore several numerical methods for integration and implement them using JavaScript. We will look at Reimann Sum, Trapezoidal Rule and Simpson's rule.
start_link: https://app.scribbler.live/?jsnb=./examples/Numerical-Integration.jsnb
---

## Introduction to Numerical Integration
Integration is a fundamental concept in mathematics and is widely used in various fields, including physics, engineering, and data analysis. Numerical methods for integration provide techniques to approximate the definite integral of a function when analytical solutions are difficult or impossible to obtain. 

Numerical methods for integration play a crucial role in approximating definite integrals, especially for functions without analytical solutions. JavaScript provides a versatile platform for implementing these methods, enabling researchers, engineers, and developers to perform numerical integration in various applications. By understanding and implementing these methods, one can gain insights into the behavior of functions and solve real-world problems that involve integration.

Each numerical integration rule employs a different strategy for approximating the integral, with varying levels of accuracy and computational complexity. Understanding the logic behind these rules helps in selecting the appropriate method for different functions and integration tasks.

Play around with the methods using this notebook: [Numerical Integration Notebook](https://app.scribbler.live/?jsnb=./examples/Numerical-Integration.jsnb)

## Riemann Sum
The Riemann Sum approximates the definite integral of a function by dividing the interval [a, b] into n subintervals of equal width and computing the sum of the areas of rectangles formed by the function values at sample points within each subinterval.

Logic:
- Divide the interval [a, b] into n subintervals, each of width dx = (b - a) / n.
- Evaluate the function at sample points within each subinterval (e.g., left endpoint, midpoint, or right endpoint).
- Multiply each function value by the width of the corresponding subinterval (dx).
- Sum up the areas of all rectangles to approximate the integral.


```javascript
// Riemann Sum Implementation
function riemannSum(func, a, b, n) {
    const dx = (b - a) / n;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        const xi = a + i * dx;
        sum += func(xi) * dx;
    }
    return sum;
}

// Example Usage
const f = x => x ** 2; // Function to integrate
const a = 0; // Lower bound
const b = 1; // Upper bound
const n = 1000; // Number of subintervals
const result = riemannSum(f, a, b, n);
console.log('Riemann Sum Result:', result);
```

*Explanation:* The `riemannSum` function approximates the definite integral of a given function `func` over the interval `[a, b]` using `n` subintervals. It calculates the width of each subinterval (`dx`) and sums up the area of rectangles formed by the function values at sample points within each subinterval.

## Trapezoidal Rule
The Trapezoidal Rule is another numerical method that approximates the definite integral by dividing the interval into trapezoids and summing their areas. The Trapezoidal Rule approximates the definite integral by dividing the interval [a, b] into n subintervals and summing the areas of trapezoids formed by adjacent sample points, with the first and last trapezoids including half of the endpoints.


Logic:
- Divide the interval [a, b] into n subintervals, each of width dx = (b - a) / n.
- Evaluate the function at endpoints and sample points within each subinterval.
- Calculate the area of each trapezoid formed by adjacent sample points.
- Sum up the areas of all trapezoids to approximate the integral.


```javascript
// Trapezoidal Rule Implementation
function trapezoidalRule(func, a, b, n) {
    const dx = (b - a) / n;
    let sum = 0.5 * (func(a) + func(b)); // Include endpoints
    for (let i = 1; i < n; i++) {
        const xi = a + i * dx;
        sum += func(xi);
    }
    return sum * dx;
}

// Example Usage
const result = trapezoidalRule(f, a, b, n);
console.log('Trapezoidal Rule Result:', result);
```

*Explanation:* The `trapezoidalRule` function approximates the definite integral using the Trapezoidal Rule. It sums the areas of trapezoids formed by adjacent sample points, with the first and last trapezoids including half of the endpoints.

## Simpson's Rule 
Simpson's Rule is a more accurate numerical method that approximates the definite integral using quadratic interpolations. It divides the interval [a, b] into an even number of subintervals and sums the areas of quadratic interpolations formed by adjacent sample points.

Logic:
- Divide the interval [a, b] into n subintervals, each of width dx = (b - a) / n.
- Evaluate the function at endpoints and sample points within each subinterval.
- Use quadratic interpolation to approximate the function within each subinterval.
- Calculate the area under each quadratic interpolation curve.
- Sum up the areas of all quadratic interpolations to approximate the integral.

```javascript
// Simpson's Rule Implementation
function simpsonsRule(func, a, b, n) {
    if (n % 2 !== 0) throw new Error('Number of subintervals must be even for Simpson\'s Rule');
    const dx = (b - a) / n;
    let sum = func(a) + func(b); // Include endpoints
    for (let i = 1; i < n; i++) {
        const xi = a + i * dx;
        sum += 2 * (i % 2 ? 4 : 2) * func(xi);
    }
    return sum * dx / 6;
}

// Example Usage
const result = simpsonsRule(f, a, b, n);
console.log('Simpson\'s Rule Result:', result);
```

*Explanation:* The `simpsonsRule` function implements Simpson's Rule to approximate the definite integral. It sums the areas of quadratic interpolations formed by adjacent sample points, with weights 4 and 2 alternated to account for the endpoints and odd/even indices.





