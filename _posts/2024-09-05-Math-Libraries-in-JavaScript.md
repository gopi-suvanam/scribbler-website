---
title: Exploring Math Libraries in JavaScript
layout: post
description: JavaScript offers a rich ecosystem of math libraries for different purposes - from basic arithmetic and matrix manipulation to high-precision arithmetic and symbolic computation. 
start_link: https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Math-Libraries-Example.jsnb
categories: [JavaScript, Libraries, Scientific]
---

## List of Popular Mathematical Libraries in JavaScript

JavaScript, though not originally designed for complex mathematical operations, has evolved to support sophisticated math computations through several libraries. This article explores some popular math libraries in JavaScript and provides small code snippets for quick demonstrations.

### I. **Math.js**
[Math.js](https://mathjs.org/) is one of the most popular math libraries for JavaScript. It supports a wide range of mathematical operations, including arithmetic, matrices, complex numbers, units, and more.

#### Key Features:
- Support for basic arithmetic, algebra, and calculus.
- Matrix and vector manipulation.
- Complex numbers and units support.
- Extensible and customizable.

#### Example:
Loading
```html
 <script src='https://cdnjs.cloudflare.com/ajax/libs/mathjs/13.1.1/math.js'></script>
```
Using
```javascript

const sum = math.add(10, 5);
const matrixA = math.matrix([[1, 2], [3, 4]]);
const matrixB = math.matrix([[5, 6], [7, 8]]);
const product = math.multiply(matrixA, matrixB);

console.log(sum);           // Output: 15
console.log(product);       // Output: [[19, 22], [43, 50]]
```

In the snippet above, `math.add` adds two numbers, while matrix multiplication is demonstrated using `math.multiply`.

### II. **Numeric.js**
[Numeric.js](https://github.com/sloisel/numeric) is another powerful math library for JavaScript that focuses on numerical computations, especially matrix operations and linear algebra.

#### Key Features:
- Handles large matrices and vectors.
- Supports linear algebra, differential equations, and optimization.
- Designed for performance.

#### Example:
Loading
```javascript
import('https://cdnjs.cloudflare.com/ajax/libs/numeric/1.2.6/numeric.min.js');
```
Using
```javascript
const matrix1 = [[1, 2], [3, 4]];
const matrix2 = [[5, 6], [7, 8]];
const result = numeric.dot(matrix1, matrix2);

console.log(result); // Output: [[19, 22], [43, 50]]
```

Here, `numeric.dot` performs matrix multiplication in a straightforward way, similar to `math.js`.

### III. **Big.js**
[Big.js](https://github.com/MikeMcl/big.js/) is a library for arbitrary-precision arithmetic in JavaScript. It is perfect when precision in floating-point operations is critical, such as in financial calculations.

#### Key Features:
- Arbitrary precision for numbers.
- Supports addition, subtraction, multiplication, division, and rounding.
- Suitable for high-precision arithmetic.

#### Example:
Loading Big.js
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/big.js/2.3.0/big.min.js"></script>
```
Using
```javascript

// Perform high-precision division
const a = new Big(1);
const b = new Big(3);
const result = a.div(b);

console.log(result.toString()); // Output: 0.33333333333333333333...
```

`Big.js` ensures high precision in floating-point division, avoiding typical JavaScript rounding issues.

### IV. **Algebrite**
[Algebrite](https://algebrite.org/) is a computer algebra system (CAS) that supports symbolic computations in JavaScript. It can perform tasks such as differentiation, integration, and solving equations symbolically.

#### Key Features:
- Symbolic algebraic operations like differentiation and integration.
- Equation solving.
- Simplification of expressions.

#### Example:
Loading
```html
<script src="https://cdn.jsdelivr.net/npm/algebrite@1.4.0/dist/algebrite.bundle-for-browser.min.js"></script>
```
Using

```javascript
// Differentiate an expression
const derivative = Algebrite.run('d(x^2 + 3*x + 2, x)');
console.log(derivative); // Output: 2*x + 3
```

Algebrite performs symbolic differentiation, making it a valuable tool for calculus operations in JavaScript.



### V. **Polynomial.js**
[Polynomial.js](https://www.npmjs.com/package/polynomial) is a lightweight JavaScript library for manipulating polynomials, solving polynomial equations, and performing polynomial arithmetic.

#### Key Features:
- Polynomial addition, multiplication, and division.
- Polynomial root-finding.
- Evaluation of polynomials at given points.

#### Example:
Loading
```javascript
import('https://cdn.jsdelivr.net/npm/polynomial@1.1.0');
```
Using
```javascript

// Define two polynomials
const poly1 = new Polynomial([1, -3, 2]); // Represents x^2 - 3x + 2
const poly2 = new Polynomial([1, 1]);     // Represents x + 1

// Multiply the polynomials
const result = poly1.mul(poly2);

console.log(result.toString()); // Output: x^3 - 2x^2 - x + 2
```

Polynomial.js provides a convenient way to manipulate and solve polynomial expressions.

## Details of Math.js

[Math.js](https://mathjs.org/) is a comprehensive math library for JavaScript that provides a wide range of functionalities. It’s designed to be flexible and powerful, making it suitable for various types of mathematical operations. Here are the key features:

### 1. **Support for Arithmetic Operations**
Math.js supports all standard arithmetic operations such as addition, subtraction, multiplication, and division.

```javascript
const math = require('mathjs');
console.log(math.add(5, 2));      // Output: 7
console.log(math.multiply(4, 3)); // Output: 12
```

### 2. **Matrix and Vector Operations**
Math.js offers extensive support for working with matrices and vectors, including basic matrix operations, transformations, and matrix manipulation.

```javascript
const matrixA = math.matrix([[1, 2], [3, 4]]);
const matrixB = math.matrix([[5, 6], [7, 8]]);
const product = math.multiply(matrixA, matrixB);
console.log(product); // Output: [[19, 22], [43, 50]]
```

### 3. **Support for Complex Numbers**
Math.js allows operations with complex numbers, including addition, multiplication, division, and more.

```javascript
const a = math.complex(2, 3);
const b = math.complex(1, 4);
const result = math.add(a, b);
console.log(result); // Output: 3 + 7i
```

### 4. **Unit and Measurement Support**
You can work with physical quantities using units. Math.js allows for unit conversions and calculations with units.

```javascript
const speed = math.unit('5 km/h');
const time = math.unit('2 hours');
const distance = math.multiply(speed, time);
console.log(distance.toString()); // Output: 10 km
```

### 5. **Symbolic Computation**
Math.js supports symbolic computation, such as algebraic manipulations, solving equations, simplification, and derivatives.

```javascript
const expression = math.parse('x^2 + 2x');
const derivative = math.derivative(expression, 'x');
console.log(derivative.toString()); // Output: 2*x + 2
```

### 6. **Statistical Functions**
Statistical operations, such as mean, median, standard deviation, and variance, are included in Math.js.

```javascript
const data = [5, 6, 2, 9, 4];
console.log(math.mean(data));       // Output: 5.2
console.log(math.std(data));        // Output: 2.8635...
```

### 7. **Probability and Combinatorics**
Math.js supports functions for working with probabilities and combinatorics, such as factorial, permutations, and combinations.

```javascript
console.log(math.factorial(5));     // Output: 120
console.log(math.combinations(5, 2)); // Output: 10
```

### 8. **String Manipulation and Parsing**
Math.js has a powerful expression parser that allows you to evaluate and manipulate mathematical expressions as strings.

```javascript
const result = math.evaluate('sqrt(16) + 3 * 2');
console.log(result); // Output: 10
```

### 9. **Custom Functions**
You can define custom functions in Math.js, making it extensible for specific needs.

```javascript
const customFunction = math.evaluate('f(x) = x^2 + 1');
console.log(customFunction(4)); // Output: 17
```

### 10. **Extensible Type System**
Math.js supports multiple data types including numbers, big numbers, complex numbers, fractions, matrices, units, and more.

### 11. **Big Number Support**
For operations requiring arbitrary precision, Math.js supports big numbers, enabling high-precision arithmetic.

```javascript
const bigA = math.bignumber('0.1');
const bigB = math.bignumber('0.2');
console.log(math.add(bigA, bigB).toString()); // Output: 0.3
```

### 12. **Linear Algebra**
Math.js includes functions for linear algebra such as eigenvalues, determinants, inverse matrices, and more.

```javascript
const matrix = math.matrix([[1, 2], [3, 4]]);
console.log(math.det(matrix)); // Output: -2
```

### 13. **Trigonometry Functions**
Math.js supports a wide variety of trigonometric functions, both in degrees and radians.

```javascript
console.log(math.sin(math.pi / 4)); // Output: 0.7071...
console.log(math.cos(math.unit(90, 'deg'))); // Output: 0
```

### 14. **Logical Functions**
Logical functions, such as and, or, not, xor, are available in Math.js.

```javascript
console.log(math.and(true, false)); // Output: false
console.log(math.xor(true, false)); // Output: true
```

### 15. **Flexible Input and Output Formats**
Math.js supports various input and output formats, including JSON, LaTeX, and string representations of mathematical expressions.

```javascript
const expression = math.parse('x^2 + x');
console.log(expression.toTex()); // Output: 'x^{2} + x'
```

### 16. **Browser and Node.js Compatibility**
Math.js works seamlessly in both the browser and Node.js environments, making it versatile for different kinds of projects.

