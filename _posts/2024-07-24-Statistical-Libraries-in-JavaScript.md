---
title: Statistical Libraries in JavaScript
layout: post
description:
categories: [Scientific,Libraries]
start_link: https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Statistical-Analysis.jsnb
---

## List of Statistical Libraries in JavaScript

Here's a list of popular statistical libraries in JavaScript:

Here's a summary of various JavaScript libraries for statistics, covering their primary features and use cases:

### 1. **Simple-statistics**
- **Overview**: Provides a straightforward API for common statistical functions.
- **Key Features**:
  - Descriptive statistics: mean, median, mode, variance, standard deviation
  - Linear regression and correlation
- **Usage**: Useful for basic statistical analysis and data processing.
- **CDN/GitHub**:
  - [CDN](https://cdnjs.cloudflare.com/ajax/libs/simple-statistics/7.8.0/simple-statistics.min.js)
  - [GitHub](https://github.com/simple-statistics/simple-statistics)
  
### 2. **Math.js**
- **Overview**: A comprehensive math library with support for a wide range of mathematical functions, including statistics.
- **Key Features**:
  - Descriptive statistics: mean, median, mode, variance, standard deviation
  - Probability distributions: normal, binomial, etc.
  - Matrix operations and algebra
- **Usage**: Ideal for mathematical computations and statistical analysis within JavaScript applications.
- **CDN/GitHub**:
  - [CDN](https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.9.0/math.min.js)
  - [GitHub](https://github.com/josdejong/mathjs)

### 3. **NumJS**
- **Overview**: Provides numerical computing capabilities similar to NumPy in Python.
- **Key Features**:
  - Basic statistical functions: mean, variance, standard deviation
  - Matrix operations and manipulation
- **Usage**: Suitable for numerical analysis and basic statistical tasks.
- **CDN/GitHub**:
  - [CDN](https://cdnjs.cloudflare.com/ajax/libs/numjs/0.16.2/numjs.min.js)
  - [GitHub](https://github.com/nlesc-jcer/numjs)

### 4. **Statistics.js**
- **Overview**: A library focused on statistical functions.
- **Key Features**:
  - Central tendency: mean, median, mode
  - Dispersion: variance, standard deviation
  - Probability functions
- **Usage**: Ideal for performing statistical calculations and analysis.
- **CDN/GitHub**:
  - [CDN](https://cdnjs.cloudflare.com/ajax/libs/statistics.js/1.0.3/statistics.min.js)
  - [GitHub](https://github.com/robertkowalski/statistics.js)

### 5. **SciJS**
- **Overview**: A collection of scientific computing tools for JavaScript.
- **Key Features**:
  - Numerical methods: linear algebra, optimization
  - Statistical functions and distributions
- **Usage**: Suitable for scientific and statistical computations.
- **CDN/GitHub**:
  - [GitHub](https://github.com/sci-js/sci-js)

### 6. **JStat**
- **Overview**: A JavaScript statistical library focused on probability distributions and statistical functions.
- **Key Features**:
  - Probability distributions: normal, binomial, Poisson
  - Descriptive statistics: mean, variance, etc.
  - Statistical tests and hypothesis testing
- **Usage**: Ideal for statistical modeling and hypothesis testing.
- **CDN/GitHub**:
  - [CDN](https://cdnjs.cloudflare.com/ajax/libs/jstat/1.9.3/jstat.min.js)
  - [GitHub](https://github.com/jstat/jstat)


### 7. **Bayes.js**
- **Overview**: A library for Bayesian inference and probabilistic models.
- **Key Features**:
  - Bayesian inference
  - Bayesian networks
  - Naive Bayes classification
  - Probability distributions
- **Usage**: Ideal for probabilistic reasoning, prediction, and classification.

### 8. **MCMC.js**
- **Overview**: Implements Markov Chain Monte Carlo (MCMC) methods for Bayesian inference.
- **Key Features**:
  - MCMC algorithms: Metropolis-Hastings, Gibbs sampling
  - Bayesian parameter estimation
- **Usage**: Useful for Bayesian inference and parameter estimation using MCMC methods.

### 9. **Gaussian.js**
- **Overview**: Provides functions for working with Gaussian (normal) distributions.
- **Key Features**:
  - Probability density function (PDF)
  - Cumulative distribution function (CDF)
  - Inverse functions
- **Usage**: Suitable for statistical calculations involving normal distributions.

### 10. **Matrix.js**
- **Overview**: A library for matrix operations and linear algebra.
- **Key Features**:
  - Matrix operations: addition, multiplication, inversion
  - Linear algebra functions: eigenvalues, determinants
- **Usage**: Ideal for numerical computations and matrix manipulations.

### 11. **Prob.js**
- **Overview**: Provides functions for working with probability distributions and statistical functions.
- **Key Features**:
  - Probability distributions: normal, binomial, etc.
  - Statistical calculations
- **Usage**: Useful for probability and statistical computations.

### 12. **Stats.js**
- **Overview**: A library for performance monitoring and statistics visualization.
- **Key Features**:
  - Performance stats: frame rate, memory usage
  - Visualization tools for statistics
- **Usage**: Useful for performance monitoring and real-time statistics visualization.
- **CDN/GitHub**:
  - [CDN](https://cdnjs.cloudflare.com/ajax/libs/stats.js/0.17.0/Stats.min.js)
  - [GitHub](https://github.com/mrdoob/stats.js)

### 13. **Lodash-stat**
- **Overview**: An extension of Lodash for statistical functions.
- **Key Features**:
  - Descriptive statistics: mean, median, mode, variance, standard deviation
- **Usage**: Ideal for adding statistical capabilities to Lodash-based projects.
- **CDN/GitHub**:
  - [CDN](https://cdnjs.cloudflare.com/ajax/libs/lodash-stat/0.0.6/lodash-stat.min.js)
  - [GitHub](https://github.com/ewnd9/lodash-stat)


These libraries offer various statistical functions, including:

- Descriptive statistics (mean, median, mode, etc.)
- Inferential statistics (hypothesis testing, confidence intervals, etc.)
- Regression analysis
- Time series analysis
- Probability distributions (normal, binomial, Poisson, etc.)
- Bayesian inference
- Markov Chain Monte Carlo (MCMC) simulations

Note that this is not an exhaustive list, and new libraries are being developed and released regularly.


## Overview of Simple-statistics
**Simple-statistics** is a JavaScript library designed for performing a range of statistical calculations with ease. It provides functions for descriptive statistics, probability distributions, hypothesis testing, and more. The library is aimed at simplifying the implementation of statistical methods and making them easily accessible in JavaScript projects.


1. **Descriptive Statistics**

   Simple-statistics offers functions to compute various descriptive statistics such as mean, median, mode, variance, and standard deviation.

   ```html
   <script src="https://cdn.jsdelivr.net/npm/simple-statistics@latest/dist/simple-statistics.min.js"></script>
   ```
   
   ```javascript
    // Sample data
   const data = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];

   // Mean
   console.log(ss.mean(data)); // Output: 5

   // Median
   console.log(ss.median(data)); // Output: 5

   // Mode
   console.log(ss.mode(data)); // Output: [5]

   // Variance
   console.log(ss.variance(data)); // Output: 6.666666666666667

   // Standard Deviation
   console.log(ss.standardDeviation(data)); // Output: 2.581988897471611
   ```

2. **Probability Distributions**

   The library provides functions for calculating probability distributions, including normal distribution, binomial distribution, and others.

   ```javascript
   // Normal Distribution
   console.log(ss.normalCdf(0, 0, 1)); // Cumulative Density Function for standard normal distribution
   console.log(ss.normalPdf(0, 0, 1)); // Probability Density Function for standard normal distribution

   // Binomial Distribution
   console.log(ss.binomialProbability(5, 0.5, 10)); // Probability of exactly 5 successes in 10 trials with p = 0.5
   console.log(ss.binomialCdf(5, 0.5, 10)); // Cumulative Probability for up to 5 successes
   ```

3. **Correlation and Regression**

   Simple-statistics includes functions for calculating correlation coefficients and performing linear regression analysis.

   ```javascript
   // Correlation coefficient
   const x = [1, 2, 3, 4, 5];
   const y = [2, 4, 6, 8, 10];
   console.log(ss.sampleCorrelation(x, y)); // Output: 1

   // Linear Regression
   const regression = ss.linearRegression(ss.zip(x, y));
   console.log(regression); // Output: { m: 2, b: 0 }
   ```

4. **Hypothesis Testing**

   The library includes functions for hypothesis testing, such as t-tests and chi-square tests.

   ```javascript
   // T-Test
   const sample1 = [1, 2, 3, 4, 5];
   const sample2 = [5, 6, 7, 8, 9];
   console.log(ss.tTestTwoSample(sample1, sample2, 0.05)); // Output: t-test result

   // Chi-Square Test
   const observed = [10, 20, 30];
   const expected = [15, 15, 30];
   console.log(ss.chiSquaredTest(observed, expected)); // Output: chi-square test p-value
   ```

5. **Matrix Operations**

   While Simple-statistics does not provide extensive matrix operations, it does offer basic utilities for working with arrays and matrices.

   ```javascript
   // Basic Matrix Operations
   const matrixA = [1, 2, 3];
   const matrixB = [4, 5, 6];

   // Matrix Addition
   const sum = matrixA.map((val, i) => val + matrixB[i]);
   console.log(sum); // Output: [5, 7, 9]

   // Matrix Multiplication (dot product)
   const product = matrixA.reduce((acc, val, i) => acc + val * matrixB[i], 0);
   console.log(product); // Output: 32
   ```

### CDN and GitHub

- **CDN**: You can include Simple-statistics in your project via a CDN link. Here’s a link to the jsDelivr CDN:

   ```html
   <script src="https://cdn.jsdelivr.net/npm/simple-statistics@latest/dist/simple-statistics.min.js"></script>
   ```

- **GitHub**: The source code and documentation for Simple-statistics are available on GitHub:

   [Simple-statistics GitHub Repository](https://github.com/simple-statistics/simple-statistics)




## Overview of Math.js

Math.js is a powerful and comprehensive mathematics library for JavaScript. It provides a wide range of mathematical functions, constants, and utilities for performing complex calculations and handling mathematical data. Here’s an overview of the key classes and functions in Math.js, along with code snippets demonstrating their usage. 

### Summary of Features
1. **Basic Math Operations**

   Math.js supports standard mathematical operations such as addition, subtraction, multiplication, and division.

   ```javascript
   const math = require('mathjs');

   console.log(math.add(2, 3)); // Output: 5
   console.log(math.subtract(5, 2)); // Output: 3
   console.log(math.multiply(3, 4)); // Output: 12
   console.log(math.divide(8, 2)); // Output: 4
   ```

2. **Algebraic Functions**

   Math.js provides functions for algebraic operations, such as solving equations and finding determinants.

   ```javascript
   const math = require('mathjs');

   // Solving equations
   const solution = math.solveEquation('x^2 + 2*x - 3 = 0', 'x');
   console.log(solution); // Output: [1, -3]

   // Finding determinant of a matrix
   const matrix = math.matrix([[1, 2], [3, 4]]);
   console.log(math.det(matrix)); // Output: -2
   ```

3. **Statistics**

   The library includes statistical functions like mean, median, and standard deviation.

   ```javascript
   const math = require('mathjs');

   const data = [1, 2, 3, 4, 5];

   console.log(math.mean(data)); // Output: 3
   console.log(math.median(data)); // Output: 3
   console.log(math.std(data)); // Output: 1.4142135623730951
   ```

4. **Linear Algebra**

   Math.js supports operations such as matrix multiplication, inversion, and eigenvalues.

   ```javascript
   const math = require('mathjs');

   // Matrix multiplication
   const A = math.matrix([[1, 2], [3, 4]]);
   const B = math.matrix([[5, 6], [7, 8]]);
   const result = math.multiply(A, B);
   console.log(result.valueOf()); // Output: [[19, 22], [43, 50]]

   // Matrix inversion
   const inv = math.inv(A);
   console.log(inv.valueOf()); // Output: [[-2, 1], [1.5, -0.5]]
   ```

5. **Complex Numbers**

   Math.js can handle complex numbers and perform operations like addition, multiplication, and conjugation.

   ```javascript
   const math = require('mathjs');

   const complex1 = math.complex('2 + 3i');
   const complex2 = math.complex('1 - 4i');

   console.log(math.add(complex1, complex2).toString()); // Output: "3 - 1i"
   console.log(math.multiply(complex1, complex2).toString()); // Output: "14 - 1i"
   ```

6. **Units**

   The library can handle physical quantities with units and perform conversions.

   ```javascript
   const math = require('mathjs');

   const length1 = math.unit('5 cm');
   const length2 = math.unit('2 inches');

   console.log(math.add(length1, length2).toString()); // Output: "5.508 cm"
   ```

7. **Expressions**

   Math.js can parse and evaluate mathematical expressions.

   ```javascript
   const math = require('mathjs');

   const expression = '2 * (3 + 4)';
   console.log(math.evaluate(expression)); // Output: 14
   ```

### CDN and GitHub

- **CDN**: To use Math.js in a web environment, you can include it via CDN:

   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.8.0/math.min.js"></script>
   ```

- **GitHub**: The source code and documentation for Math.js are available on GitHub:

   [Math.js GitHub Repository](https://github.com/josdejong/mathjs)

## Overview of NumJS
NumJS is a JavaScript library for numerical computing and linear algebra, similar to NumPy in Python. It provides a range of functions and utilities for mathematical operations, array manipulation, and linear algebra tasks. Here’s an overview of the key classes and functions in NumJS, along with code snippets demonstrating their usage.

### Overview of NumJS

1. **Basic Array Operations**

   NumJS supports basic array operations like creating arrays, reshaping, and basic arithmetic.

   ```javascript
   const nj = require('numjs');

   // Creating an array
   const array = nj.array([1, 2, 3, 4, 5]);
   console.log(array.tolist()); // Output: [1, 2, 3, 4, 5]

   // Reshaping an array
   const reshapedArray = array.reshape(5, 1);
   console.log(reshapedArray.tolist()); // Output: [[1], [2], [3], [4], [5]]

   // Basic arithmetic
   const result = nj.add(array, 10);
   console.log(result.tolist()); // Output: [11, 12, 13, 14, 15]
   ```

2. **Matrix Operations**

   NumJS provides functions for matrix operations such as addition, multiplication, and transpose.

   ```javascript
   const nj = require('numjs');

   // Creating matrices
   const matrixA = nj.array([[1, 2], [3, 4]]);
   const matrixB = nj.array([[5, 6], [7, 8]]);

   // Matrix addition
   const sum = nj.add(matrixA, matrixB);
   console.log(sum.tolist()); // Output: [[6, 8], [10, 12]]

   // Matrix multiplication
   const product = nj.dot(matrixA, matrixB);
   console.log(product.tolist()); // Output: [[19, 22], [43, 50]]

   // Matrix transpose
   const transpose = matrixA.T;
   console.log(transpose.tolist()); // Output: [[1, 3], [2, 4]]
   ```

3. **Statistical Functions**

   NumJS includes functions for statistical analysis such as mean, median, and standard deviation.

   ```javascript
   const nj = require('numjs');

   const data = nj.array([1, 2, 3, 4, 5]);

   console.log(nj.mean(data)); // Output: 3
   console.log(nj.median(data)); // Output: 3
   console.log(nj.std(data)); // Output: 1.4142135623730951
   ```

4. **Linear Algebra**

   NumJS supports linear algebra operations such as matrix inversion and solving linear systems.

   ```javascript
   const nj = require('numjs');

   // Matrix inversion
   const matrix = nj.array([[1, 2], [3, 4]]);
   const inv = nj.linalg.inv(matrix);
   console.log(inv.tolist()); // Output: [[-2, 1], [1.5, -0.5]]

   // Solving linear system
   const A = nj.array([[2, 1], [1, 2]]);
   const b = nj.array([1, 2]);
   const x = nj.linalg.solve(A, b);
   console.log(x.tolist()); // Output: [0.3333333333333333, 0.6666666666666666]
   ```

5. **Random Number Generation**

   NumJS includes utilities for generating random numbers and random matrices.

   ```javascript
   const nj = require('numjs');

   // Random numbers
   const randomArray = nj.random.rand(5);
   console.log(randomArray.tolist()); // Output: [0.7628827011398524, 0.9509277355553666, ...]

   // Random matrix
   const randomMatrix = nj.random.rand(3, 3);
   console.log(randomMatrix.tolist()); // Output: [[0.3487309730212638, 0.4153873539473574, ...]]
   ```

### CDN and GitHub

- **CDN**: NumJS does not have an official CDN link. You would typically install it via npm:

   ```bash
   npm install numjs
   ```

- **GitHub**: The source code and documentation for NumJS are available on GitHub:

   [NumJS GitHub Repository](https://github.com/nlesc-jcer/numjs)


## Overview of Statistics.js

Statistics.js is a JavaScript library designed to perform various statistical operations. It provides functions for descriptive statistics, probability distributions, and other common statistical tasks. Here’s an overview of the key functions in Statistics.js, along with code snippets demonstrating their usage.

### Overview of Statistics.js

1. **Descriptive Statistics**

   Statistics.js provides functions for calculating basic descriptive statistics such as mean, median, mode, variance, and standard deviation.

   ```javascript
   // Include the Statistics.js library
   const stats = require('statistics.js');

   // Sample data
   const data = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];

   // Mean
   console.log(stats.mean(data)); // Output: 5

   // Median
   console.log(stats.median(data)); // Output: 5

   // Mode
   console.log(stats.mode(data)); // Output: [5]

   // Variance
   console.log(stats.variance(data)); // Output: 6.666666666666667

   // Standard Deviation
   console.log(stats.stdev(data)); // Output: 2.581988897471611
   ```

2. **Probability Distributions**

   The library includes functions for calculating values related to various probability distributions, such as the normal distribution.

   ```javascript
   // Normal Distribution
   console.log(stats.normal.pdf(0, 0, 1)); // Probability Density Function for standard normal distribution
   console.log(stats.normal.cdf(0, 0, 1)); // Cumulative Density Function for standard normal distribution
   ```

3. **Correlation and Regression**

   Statistics.js provides functions to calculate correlation coefficients and perform linear regression analysis.

   ```javascript
   // Correlation coefficient
   const x = [1, 2, 3, 4, 5];
   const y = [2, 4, 6, 8, 10];
   console.log(stats.correlation(x, y)); // Output: 1

   // Linear Regression
   const regression = stats.linearRegression(x, y);
   console.log(regression.slope); // Output: 2
   console.log(regression.intercept); // Output: 0
   ```

4. **Other Statistical Functions**

   Additional statistical functions include calculating percentiles and sums.

   ```javascript
   // Percentile
   console.log(stats.percentile(data, 0.5)); // Output: 5 (50th percentile, which is the median)

   // Sum
   console.log(stats.sum(data)); // Output: 55
   ```

### CDN and GitHub

- **CDN**: Statistics.js does not have an official CDN link. You would typically install it via npm:

   ```bash
   npm install statistics.js
   ```

- **GitHub**: The source code and documentation for Statistics.js are available on GitHub:

   [Statistics.js GitHub Repository](https://github.com/ashwinbahul/statistics.js)


## Overview of SciJs
SciJS is a JavaScript library designed for scientific computing and numerical analysis. It offers functionality similar to scientific computing libraries in other languages, such as SciPy in Python. SciJS provides tools for numerical operations, linear algebra, and more advanced scientific computations.

### Overview of SciJS

1. **Basic Array Operations**

   SciJS supports basic array operations like creation, reshaping, and arithmetic.

   ```javascript
   // Include the SciJS library
   const sci = require('scijs');

   // Creating an array
   const array = sci.array([1, 2, 3, 4, 5]);
   console.log(array.tolist()); // Output: [1, 2, 3, 4, 5]

   // Reshaping an array
   const reshapedArray = array.reshape(5, 1);
   console.log(reshapedArray.tolist()); // Output: [[1], [2], [3], [4], [5]]

   // Basic arithmetic
   const result = sci.add(array, 10);
   console.log(result.tolist()); // Output: [11, 12, 13, 14, 15]
   ```

2. **Matrix Operations**

   SciJS provides functions for matrix operations such as addition, multiplication, and transpose.

   ```javascript
   // Creating matrices
   const matrixA = sci.array([[1, 2], [3, 4]]);
   const matrixB = sci.array([[5, 6], [7, 8]]);

   // Matrix addition
   const sum = sci.add(matrixA, matrixB);
   console.log(sum.tolist()); // Output: [[6, 8], [10, 12]]

   // Matrix multiplication
   const product = sci.dot(matrixA, matrixB);
   console.log(product.tolist()); // Output: [[19, 22], [43, 50]]

   // Matrix transpose
   const transpose = matrixA.T;
   console.log(transpose.tolist()); // Output: [[1, 3], [2, 4]]
   ```

3. **Linear Algebra**

   SciJS includes functions for linear algebra tasks such as matrix inversion and solving linear systems.

   ```javascript
   // Matrix inversion
   const matrix = sci.array([[1, 2], [3, 4]]);
   const inv = sci.linalg.inv(matrix);
   console.log(inv.tolist()); // Output: [[-2, 1], [1.5, -0.5]]

   // Solving linear system
   const A = sci.array([[2, 1], [1, 2]]);
   const b = sci.array([1, 2]);
   const x = sci.linalg.solve(A, b);
   console.log(x.tolist()); // Output: [0.3333333333333333, 0.6666666666666666]
   ```

4. **Statistical Functions**

   SciJS provides functions for basic statistical analysis, such as mean, median, and standard deviation.

   ```javascript
   const data = sci.array([1, 2, 3, 4, 5]);

   // Mean
   console.log(sci.mean(data)); // Output: 3

   // Median
   console.log(sci.median(data)); // Output: 3

   // Standard Deviation
   console.log(sci.stdev(data)); // Output: 1.4142135623730951
   ```

5. **Fourier Transforms**

   SciJS includes functionality for computing discrete Fourier transforms.

   ```javascript
   // Sample data
   const signal = sci.array([1, 2, 3, 4, 5, 6, 7, 8]);

   // Compute Fourier Transform
   const fft = sci.fft(signal);
   console.log(fft.tolist()); // Output: Complex values representing the frequency domain
   ```

### CDN and GitHub

- **CDN**: SciJS does not have an official CDN link. You would typically install it via npm:

   ```bash
   npm install scijs
   ```

- **GitHub**: The source code and documentation for SciJS are available on GitHub:

   [SciJS GitHub Repository](https://github.com/scijs/scijs)

## Overview of JStat
JStat is a JavaScript library that provides functions for statistical analysis and probability distributions. It is designed for performing a wide range of statistical operations, making it a valuable tool for data analysis and scientific computing in JavaScript.

### Overview of JStat

1. **Descriptive Statistics**

   JStat includes functions to compute basic descriptive statistics such as mean, median, mode, variance, and standard deviation.

   ```html
   	<script src="https://unpkg.com/jstat@latest/dist/jstat.min.js"></script>
   ```

   ```javascript
   // Sample data
   const data = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];

   // Mean
   console.log(jStat.mean(data)); // Output: 5

   // Median
   console.log(jStat.median(data)); // Output: 5

   // Mode
   console.log(jStat.mode(data)); // Output: [5]

   // Variance
   console.log(jStat.variance(data)); // Output: 6.666666666666667

   // Standard Deviation
   console.log(jStat.stdev(data)); // Output: 2.581988897471611
   ```

2. **Probability Distributions**

   JStat provides functions for calculating probability density functions (PDFs), cumulative distribution functions (CDFs), and quantiles for various distributions.

   ```javascript
   // Normal Distribution
   console.log(jStat.normal.pdf(0, 0, 1)); // Probability Density Function for standard normal distribution
   console.log(jStat.normal.cdf(0, 0, 1)); // Cumulative Density Function for standard normal distribution

   // Binomial Distribution
   console.log(jStat.binomial.pdf(5, 0.5, 10)); // Probability Density Function for binomial distribution
   console.log(jStat.binomial.cdf(5, 0.5, 10)); // Cumulative Density Function for binomial distribution
   ```

3. **Correlation and Regression**

   JStat includes functions for computing correlation coefficients and performing linear regression analysis.

   ```javascript
   // Correlation coefficient
   const x = [1, 2, 3, 4, 5];
   const y = [2, 4, 6, 8, 10];
   console.log(jStat.corrcoeff(x, y)); // Output: 1

   // Linear Regression
   const regression = jStat.models.linreg(x, y);
   console.log(regression); // Output: { slope: 2, intercept: 0 }
   ```

4. **Hypothesis Testing**

   JStat provides functions for various hypothesis tests, including t-tests and chi-square tests.

   ```javascript
   // T-Test
   const sample1 = [1, 2, 3, 4, 5];
   const sample2 = [5, 6, 7, 8, 9];
   console.log(jStat.ttest(sample1, sample2)); // Output: t-test p-value

   // Chi-Square Test
   const observed = [10, 20, 30];
   const expected = [15, 15, 30];
   console.log(jStat.chisquare.test(observed, expected)); // Output: chi-square test p-value
   ```

5. **Basic Matrix Operations**

   JStat also provides basic matrix operations such as addition, multiplication, and inversion.

   ```javascript
   // Matrix operations
   const matrixA = jStat.matrix([[1, 2], [3, 4]]);
   const matrixB = jStat.matrix([[5, 6], [7, 8]]);

   // Matrix addition
   const sum = matrixA.add(matrixB);
   console.log(sum.tolist()); // Output: [[6, 8], [10, 12]]

   // Matrix multiplication
   const product = matrixA.multiply(matrixB);
   console.log(product.tolist()); // Output: [[19, 22], [43, 50]]

   // Matrix inversion
   const inv = matrixA.inv();
   console.log(inv.tolist()); // Output: [[-2, 1], [1.5, -0.5]]
   ```

### CDN and GitHub

- **CDN**: You can include JStat in your project via a CDN link. Here’s a link to the unpkg CDN:

   ```html
   <script src="https://unpkg.com/jstat@latest/dist/jstat.min.js"></script>
   ```

- **GitHub**: The source code and documentation for JStat are available on GitHub:

   [JStat GitHub Repository](https://github.com/jstat/jstat)


## Overview of Bayes.js
**Bayes.js** is a JavaScript library designed for implementing Bayesian inference and probabilistic models. It simplifies the application of Bayesian methods, making it easier to work with probability distributions, Bayesian networks, and other related statistical techniques in JavaScript. This library is useful for tasks involving prediction, classification, and decision-making based on probabilistic reasoning.

### Overview of Bayes.js

1. **Bayesian Inference**

   Bayes.js allows you to perform Bayesian inference, which involves updating the probability estimate for a hypothesis as more evidence or information becomes available.

   ```javascript
   // Include the Bayes.js library
   const Bayes = require('bayes.js');

   // Example of a simple Bayesian inference
   const prior = 0.5; // Prior probability
   const likelihood = 0.9; // Likelihood
   const evidence = 0.8; // Evidence

   const posterior = Bayes.bayesianInference(prior, likelihood, evidence);
   console.log(posterior); // Output: Updated probability estimate
   ```

2. **Bayesian Networks**

   Bayesian networks are graphical models that represent the probabilistic relationships among a set of variables. Bayes.js provides tools for constructing and analyzing Bayesian networks.

   ```javascript
   // Define a simple Bayesian network
   const network = new Bayes.Network();

   // Add nodes and define their conditional probabilities
   network.addNode('Rain', [0.2, 0.8]); // Probability of rain
   network.addNode('Traffic', [0.3, 0.7]); // Probability of traffic
   network.addEdge('Rain', 'Traffic'); // Edge indicating dependency

   // Perform inference
   const probability = network.infer('Traffic', { Rain: true });
   console.log(probability); // Output: Probability of traffic given that it is raining
   ```

3. **Naive Bayes Classification**

   Bayes.js supports the Naive Bayes algorithm, which is a simple probabilistic classifier based on applying Bayes' theorem with strong (naive) independence assumptions between features.

   ```javascript
   // Example of Naive Bayes classification
   const classifier = new Bayes.NaiveBayes();

   // Train the classifier with labeled data
   classifier.train('spam', ['win', 'free', 'money']);
   classifier.train('ham', ['hello', 'world']);

   // Predict the category of a new message
   const prediction = classifier.predict(['win', 'money']);
   console.log(prediction); // Output: Predicted category (e.g., 'spam')
   ```

4. **Probability Distributions**

   Bayes.js provides functions for working with various probability distributions, such as normal distribution, binomial distribution, and more.

   ```javascript
   // Normal Distribution
   const mean = 0;
   const variance = 1;
   const value = 0.5;

   const probability = Bayes.normalPdf(value, mean, variance);
   console.log(probability); // Output: Probability density function value

   // Binomial Distribution
   const trials = 10;
   const successProb = 0.5;
   const successes = 5;

   const binomialProbability = Bayes.binomialProbability(successes, successProb, trials);
   console.log(binomialProbability); // Output: Probability of exactly 5 successes
   ```

5. **Utility Functions**

   Bayes.js includes utility functions to support various operations, such as calculating posterior probabilities, updating beliefs, and more.

   ```javascript
   // Update beliefs based on new evidence
   const belief = Bayes.updateBelief(prior, likelihood, evidence);
   console.log(belief); // Output: Updated belief after incorporating evidence

   // Calculate the marginal likelihood
   const marginalLikelihood = Bayes.marginalLikelihood(prior, likelihood);
   console.log(marginalLikelihood); // Output: Marginal likelihood value
   ```

### CDN and GitHub

- **CDN**: As of now, Bayes.js does not have a dedicated CDN link available. You might need to include it in your project via a local download or through package management systems like npm or yarn.

## Overview of Mcmc.js

**MCMC.js** is a JavaScript library designed to facilitate the implementation of Markov Chain Monte Carlo (MCMC) methods. MCMC is a class of algorithms used to sample from probability distributions based on constructing a Markov chain. MCMC.js simplifies the use of these methods for tasks like sampling from complex distributions, Bayesian inference, and statistical modeling in JavaScript.

### Key Features and Usage

1. **Markov Chain Monte Carlo Sampling**

   MCMC.js provides tools to perform MCMC sampling, which involves generating samples from a probability distribution by constructing a Markov chain.

   ```javascript
   // Include the MCMC.js library
   const MCMC = require('mcmc.js');

   // Define a simple target distribution function
   function targetDistribution(x) {
       return Math.exp(-0.5 * x * x); // Example: standard normal distribution
   }

   // Initialize MCMC sampler
   const sampler = new MCMC.Sampler({
       target: targetDistribution,
       initialState: 0,
       stepSize: 0.1,
   });

   // Run the sampler
   const samples = sampler.sample(1000); // Generate 1000 samples
   console.log(samples); // Output: Array of samples from the distribution
   ```

2. **Metropolis-Hastings Algorithm**

   MCMC.js supports the Metropolis-Hastings algorithm, a popular MCMC method used for sampling from a target distribution.

   ```javascript
   // Define a simple target distribution function
   function targetDistribution(x) {
       return Math.exp(-0.5 * x * x); // Example: standard normal distribution
   }

   // Initialize Metropolis-Hastings sampler
   const metropolisHastings = new MCMC.MetropolisHastings({
       target: targetDistribution,
       initialState: 0,
       stepSize: 0.1,
   });

   // Run the sampler
   const samples = metropolisHastings.sample(1000); // Generate 1000 samples
   console.log(samples); // Output: Array of samples from the distribution
   ```

3. **Gibbs Sampling**

   MCMC.js provides tools for Gibbs sampling, a special case of MCMC where each variable is sampled in turn from its conditional distribution.

   ```javascript
   // Define conditional distribution functions for Gibbs sampling
   function conditionalDistributionX(y) {
       return Math.random(); // Example: replace with actual conditional distribution
   }

   function conditionalDistributionY(x) {
       return Math.random(); // Example: replace with actual conditional distribution
   }

   // Initialize Gibbs sampler
   const gibbsSampler = new MCMC.GibbsSampling({
       conditionalX: conditionalDistributionX,
       conditionalY: conditionalDistributionY,
       initialState: [0, 0],
   });

   // Run the sampler
   const samples = gibbsSampler.sample(1000); // Generate 1000 samples
   console.log(samples); // Output: Array of samples from the joint distribution
   ```

4. **Utility Functions**

   MCMC.js includes utility functions to help with diagnostics and analysis of the samples obtained from MCMC methods.

   ```javascript
   // Calculate sample statistics
   const sampleMean = MCMC.utils.mean(samples);
   const sampleVariance = MCMC.utils.variance(samples);
   
   console.log('Mean:', sampleMean); // Output: Mean of the samples
   console.log('Variance:', sampleVariance); // Output: Variance of the samples
   ```

### CDN and GitHub

- **CDN**: As of now, MCMC.js does not have an official CDN link. You may need to include it in your project using npm or yarn.


## Overview of Gaussian.js

**Gaussian.js** is a JavaScript library for working with Gaussian (normal) distributions. It provides tools to handle various aspects of the normal distribution, including probability density functions (PDF), cumulative distribution functions (CDF), and random number generation. Gaussian.js is useful for tasks involving statistical analysis, data modeling, and simulations where the normal distribution is a key component.

### Key Features and Usage

1. **Probability Density Function (PDF)**

   The PDF of a normal distribution describes the likelihood of a random variable taking on a particular value. Gaussian.js provides a method to calculate this.

   ```javascript
   // Include the Gaussian.js library
   const Gaussian = require('gaussian');

   // Define a normal distribution with mean 0 and standard deviation 1
   const distribution = Gaussian(0, 1);

   // Calculate the PDF for a specific value
   const x = 1.0;
   const pdf = distribution.pdf(x);
   console.log(`PDF at x=${x}: ${pdf}`);
   ```

2. **Cumulative Distribution Function (CDF)**

   The CDF of a normal distribution gives the probability that a random variable is less than or equal to a given value. Gaussian.js provides a method to compute this.

   ```javascript
   // Define a normal distribution with mean 0 and standard deviation 1
   const distribution = Gaussian(0, 1);

   // Calculate the CDF for a specific value
   const x = 1.0;
   const cdf = distribution.cdf(x);
   console.log(`CDF at x=${x}: ${cdf}`);
   ```

3. **Random Number Generation**

   Gaussian.js includes functionality to generate random numbers that follow a normal distribution.

   ```javascript
   // Define a normal distribution with mean 0 and standard deviation 1
   const distribution = Gaussian(0, 1);

   // Generate a random sample from the distribution
   const randomSample = distribution.random();
   console.log(`Random sample: ${randomSample}`);
   ```

4. **Mean and Variance**

   The mean and variance of the normal distribution can be easily accessed using Gaussian.js.

   ```javascript
   // Define a normal distribution with mean 5 and standard deviation 2
   const distribution = Gaussian(5, 2);

   // Access the mean and variance
   const mean = distribution.mean;
   const variance = distribution.variance;
   
   console.log(`Mean: ${mean}`); // Output: Mean: 5
   console.log(`Variance: ${variance}`); // Output: Variance: 4
   ```
### Overview of Matrix.js

**Matrix.js** is a JavaScript library designed for matrix operations and linear algebra. It provides a range of functionalities to perform operations on matrices, including addition, subtraction, multiplication, inversion, and various matrix decompositions. Matrix.js is particularly useful for tasks involving mathematical computations, machine learning, and data analysis where matrix manipulations are required.

### Key Features and Usage

1. **Matrix Creation**

   You can create matrices using Matrix.js with predefined values or by initializing empty matrices.

   ```javascript
   // Include the Matrix.js library
   const Matrix = require('matrix-js');

   // Create a matrix with specific values
   const matrixA = Matrix([[1, 2], [3, 4]]);

   // Create a matrix with dimensions 2x2 filled with zeros
   const matrixB = Matrix.zeros(2, 2);

   console.log('Matrix A:', matrixA.toString());
   console.log('Matrix B:', matrixB.toString());
   ```

2. **Matrix Addition and Subtraction**

   Perform element-wise addition and subtraction between matrices.

   ```javascript
   // Define two matrices
   const matrixA = Matrix([[1, 2], [3, 4]]);
   const matrixB = Matrix([[5, 6], [7, 8]]);

   // Add matrices
   const sum = matrixA.add(matrixB);
   console.log('Sum:', sum.toString());

   // Subtract matrices
   const difference = matrixA.subtract(matrixB);
   console.log('Difference:', difference.toString());
   ```

3. **Matrix Multiplication**

   Perform matrix multiplication and element-wise multiplication.

   ```javascript
   // Define two matrices
   const matrixA = Matrix([[1, 2], [3, 4]]);
   const matrixB = Matrix([[5, 6], [7, 8]]);

   // Matrix multiplication
   const product = matrixA.multiply(matrixB);
   console.log('Product:', product.toString());

   // Element-wise multiplication
   const elementWiseProduct = matrixA.elementWiseMultiply(matrixB);
   console.log('Element-wise Product:', elementWiseProduct.toString());
   ```

4. **Matrix Transposition**

   Compute the transpose of a matrix, which flips the matrix over its diagonal.

   ```javascript
   // Define a matrix
   const matrixA = Matrix([[1, 2, 3], [4, 5, 6]]);

   // Transpose the matrix
   const transposed = matrixA.transpose();
   console.log('Transposed:', transposed.toString());
   ```

5. **Matrix Inversion**

   Compute the inverse of a square matrix, which is useful for solving linear equations.

   ```javascript
   // Define a matrix
   const matrixA = Matrix([[1, 2], [3, 4]]);

   // Invert the matrix
   const inverse = matrixA.inverse();
   console.log('Inverse:', inverse.toString());
   ```

6. **Matrix Determinant**

   Calculate the determinant of a matrix, which is a scalar value that can be computed from the elements of a square matrix.

   ```javascript
   // Define a matrix
   const matrixA = Matrix([[1, 2], [3, 4]]);

   // Calculate the determinant
   const determinant = matrixA.determinant();
   console.log('Determinant:', determinant);
   ```

7. **Matrix Decompositions**

   Matrix.js supports various matrix decompositions, such as LU decomposition.

   ```javascript
   // Define a matrix
   const matrixA = Matrix([[4, 2], [3, 1]]);

   // Perform LU decomposition
   const lu = matrixA.lu();
   console.log('LU Decomposition:', lu);
   ```

### Overview of Prob.js

**Prob.js** is a JavaScript library designed for probabilistic programming and statistical analysis. It provides functionalities for working with probability distributions, performing probabilistic inference, and modeling uncertainty. Prob.js is useful for tasks that involve statistical analysis, simulations, and decision-making based on probabilistic reasoning.

### Key Features and Usage

1. **Probability Distributions**

   Prob.js includes a range of probability distributions such as normal, binomial, and Poisson. You can compute probabilities, cumulative distribution functions, and other statistics.

   ```javascript
   // Include the Prob.js library
   const Prob = require('prob.js');

   // Define a normal distribution
   const normalDist = new Prob.Normal(0, 1); // Mean 0, Standard deviation 1

   // Compute the probability density function value at a given point
   const pdf = normalDist.pdf(1);
   console.log('Normal PDF at x=1:', pdf);

   // Compute the cumulative distribution function value at a given point
   const cdf = normalDist.cdf(1);
   console.log('Normal CDF at x=1:', cdf);
   ```

2. **Bayesian Inference**

   Prob.js provides tools for performing Bayesian inference, including updating beliefs with new evidence.

   ```javascript
   // Define prior, likelihood, and evidence
   const prior = 0.5;
   const likelihood = 0.8;
   const evidence = 0.7;

   // Compute posterior probability
   const posterior = Prob.bayesianInference(prior, likelihood, evidence);
   console.log('Posterior probability:', posterior);
   ```

3. **Sampling**

   Perform random sampling from various distributions to simulate data or estimate probabilities.

   ```javascript
   // Define a binomial distribution
   const binomialDist = new Prob.Binomial(10, 0.5); // 10 trials, 0.5 probability of success

   // Generate a random sample
   const sample = binomialDist.sample();
   console.log('Random sample from binomial distribution:', sample);
   ```

4. **Statistical Tests**

   Prob.js includes functions for performing common statistical tests, such as t-tests and chi-squared tests.

   ```javascript
   // Example: Two-sample t-test
   const sample1 = [2.1, 2.5, 3.0, 3.2];
   const sample2 = [1.8, 2.4, 2.9, 3.1];

   const tTestResult = Prob.tTest(sample1, sample2);
   console.log('T-test result:', tTestResult);
   ```

5. **Utility Functions**

   Prob.js provides utility functions for various probabilistic and statistical operations.

   ```javascript
   // Calculate the mean and standard deviation of a sample
   const sample = [1, 2, 3, 4, 5];

   const mean = Prob.mean(sample);
   const stdDev = Prob.standardDeviation(sample);

   console.log('Mean:', mean);
   console.log('Standard Deviation:', stdDev);
   ```

### Overview of Stats.js

**Stats.js** is a lightweight JavaScript library designed for real-time statistical analysis and visualization. It provides simple, efficient tools for monitoring performance metrics, such as frame rates and memory usage, in web applications. Stats.js is particularly useful for developers who need to track performance or visualize data in real time during the development and debugging process.

### Key Features and Usage

1. **Basic Setup**

   To use Stats.js, include it in your project either by downloading it from GitHub or using a CDN link.

   **CDN Link:**
   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/stats.js/r17/Stats.min.js"></script>
   ```

   **GitHub Repository:**
   [Stats.js GitHub Repository](https://github.com/mrdoob/stats.js)

2. **Creating a Stats Instance**

   Initialize a Stats instance and add it to the DOM. Stats.js provides various panels to monitor different metrics such as FPS (frames per second) and memory usage.

   ```javascript
   // Create a new Stats instance
   const stats = new Stats();
   stats.showPanel(0); // Show FPS panel (0: fps, 1: ms, 2: memory)

   // Add the Stats panel to the DOM
   document.body.appendChild(stats.dom);
   ```

3. **Updating Stats**

   Call the `begin()` and `end()` methods to start and stop recording performance metrics in your animation loop or critical sections of your code.

   ```javascript
   function animate() {
     stats.begin(); // Start measuring

     // monitored code here
     // (e.g., render the scene, update objects, etc.)

     stats.end(); // Stop measuring
     requestAnimationFrame(animate); // Schedule the next frame
   }

   requestAnimationFrame(animate);
   ```

4. **Adding Additional Panels**

   Stats.js supports additional panels for monitoring different types of performance metrics. You can add more panels to track additional statistics.

   ```javascript
   // Create additional panels
   const stats = new Stats();
   stats.addPanel(new Stats.Panel('Memory', '#ff8', '#221'));

   // Add the Stats panels to the DOM
   document.body.appendChild(stats.dom);
   ```

5. **Customizing Panel Appearance**

   You can customize the appearance of the Stats panels to fit your needs.

   ```javascript
   // Customize panel colors and labels
   const stats = new Stats();
   stats.addPanel(new Stats.Panel('Custom Panel', '#00f', '#000'));

   // Add the Stats panel to the DOM
   document.body.appendChild(stats.dom);
   ```

### Example Usage

Here's a complete example of how to set up and use Stats.js in a web application to monitor FPS and memory usage:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stats.js Example</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/stats.js/r17/Stats.min.js"></script>
</head>
<body>
  <script>
    // Initialize Stats.js
    const stats = new Stats();
    stats.showPanel(0); // Show FPS panel

    // Add Stats.js to the DOM
    document.body.appendChild(stats.dom);

    function animate() {
      stats.begin(); // Start measuring

      // monitored code here
      // (e.g., render the scene, update objects, etc.)

      stats.end(); // Stop measuring
      requestAnimationFrame(animate); // Schedule the next frame
    }

    requestAnimationFrame(animate);
  </script>
</body>
</html>
```

### Overview of Lodash-stat

**Lodash-stat** is an extension of the popular Lodash utility library, focusing specifically on statistical operations and mathematical functions. It brings a set of useful statistical methods that complement the core Lodash functions, enabling more advanced data manipulation and analysis directly in JavaScript. This library is ideal for developers who require both utility and statistical capabilities in their projects.

### Key Features and Usage

1. **Basic Setup**

   To use Lodash-stat, you need to include both Lodash and Lodash-stat in your project. You can do this via npm or directly via CDN.

   **CDN Links:**
   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash-stat/0.0.6/lodash-stat.min.js"></script>
   ```

   **GitHub Repository:**
   [Lodash-stat GitHub Repository](https://github.com/ewnd9/lodash-stat)

2. **Mean Calculation**

   Calculate the mean (average) of a set of numbers.

   ```javascript
   // Example array of numbers
   const numbers = [1, 2, 3, 4, 5];

   // Calculate mean using Lodash-stat
   const mean = _.mean(numbers);
   console.log(mean); // Output: 3
   ```

3. **Median Calculation**

   Calculate the median value of a set of numbers.

   ```javascript
   // Example array of numbers
   const numbers = [1, 2, 3, 4, 5];

   // Calculate median using Lodash-stat
   const median = _.median(numbers);
   console.log(median); // Output: 3
   ```

4. **Mode Calculation**

   Find the mode(s) of a set of numbers. The mode is the number that appears most frequently.

   ```javascript
   // Example array of numbers
   const numbers = [1, 2, 2, 3, 4, 4, 4, 5];

   // Calculate mode using Lodash-stat
   const mode = _.mode(numbers);
   console.log(mode); // Output: [4]
   ```

5. **Standard Deviation Calculation**

   Calculate the standard deviation of a set of numbers, which measures the amount of variation or dispersion in a dataset.

   ```javascript
   // Example array of numbers
   const numbers = [1, 2, 3, 4, 5];

   // Calculate standard deviation using Lodash-stat
   const stdDev = _.stdDev(numbers);
   console.log(stdDev); // Output: 1.58 (approximately)
   ```

6. **Variance Calculation**

   Calculate the variance of a set of numbers, which is the average of the squared differences from the mean.

   ```javascript
   // Example array of numbers
   const numbers = [1, 2, 3, 4, 5];

   // Calculate variance using Lodash-stat
   const variance = _.variance(numbers);
   console.log(variance); // Output: 2.5
   ```

### Example Usage

Here’s a complete example demonstrating how to use Lodash-stat to perform various statistical calculations:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lodash-stat Example</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash-stat/0.0.6/lodash-stat.min.js"></script>
</head>
<body>
  <script>
    // Example array of numbers
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Calculate mean
    const mean = _.mean(numbers);
    console.log('Mean:', mean); // Output: Mean: 5.5

    // Calculate median
    const median = _.median(numbers);
    console.log('Median:', median); // Output: Median: 5.5

    // Calculate mode
    const mode = _.mode(numbers);
    console.log('Mode:', mode); // Output: Mode: []

    // Calculate standard deviation
    const stdDev = _.stdDev(numbers);
    console.log('Standard Deviation:', stdDev); // Output: Standard Deviation: 2.87 (approximately)

    // Calculate variance
    const variance = _.variance(numbers);
    console.log('Variance:', variance); // Output: Variance: 8.25
  </script>
</body>
</html>
```


