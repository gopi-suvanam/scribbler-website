---
title: Numeric.js for Numerical Analysis and Linear Algebra in JavaScript
layout: post
categories: [Libraries, Scientific]
description: Numeric.js is a JavaScript library that provides a range of numerical computing and linear algebra/matrix computing functionalities.
start_link: https://app.scribbler.live/?jsnb=./examples/Matrix-Operations-Linear-Algebra.jsnb
---

## Introduction to Numeric.js

[Numeric.js](https://github.com/ccc-js/numeric2) is an old but well built library that provides a convenient and efficient way to perform numerical computations in JavaScript. It aims to bridge the gap between JavaScript and numerical computing, enabling developers to work with complex mathematical operations directly in the browser or in Node.js applications. The library is well-documented, actively maintained, and has a large user community, making it a reliable choice for numerical computing tasks in JavaScript.

Key Features of Numeric.js:

1. Matrix Operations: Numeric.js allows you to perform essential matrix operations like addition, subtraction, multiplication, and inversion. It supports both dense and sparse matrices, enabling efficient handling of large datasets.

2. Linear Algebra: The library provides functions for solving linear systems of equations, computing eigenvalues and eigenvectors, performing singular value decomposition (SVD), and solving least-squares problems. These operations are essential for many mathematical and scientific computations.

3. Interpolation: Numeric.js supports various interpolation methods, including linear, polynomial, and spline interpolation. Interpolation is useful for estimating values between known data points, smoothing data, and generating continuous functions from discrete data.

4. Numerical Optimization: Numeric.js includes optimization algorithms such as Newton's method, conjugate gradient, and simulated annealing. These algorithms allow you to find the minimum or maximum of a function, which is valuable for parameter estimation, curve fitting, and optimization problems.

5. Statistics: The library provides statistical functions for computing mean, variance, standard deviation, correlation, covariance, and more. These functions are helpful in analyzing data and extracting meaningful insights.

6. Special Functions: Numeric.js offers a range of special mathematical functions, including trigonometric functions, exponential and logarithmic functions, gamma function, Bessel functions, and more. These functions are commonly used in scientific and engineering applications.

7. Utilities: Numeric.js provides various utility functions for array manipulation, rounding, formatting numbers, random number generation, and other common numerical operations.

Here are some of the key functionalities offered by numeric.js along with examples:

## Mathematical Functions
Numeric.js provides various mathematical functions, including trigonometric, exponential, logarithmic, and special functions.
Numeric computations involving trigonometric, exponential, logarithmic, and special functions are crucial in various fields and applications. Here are some notable applications for each type of function:

### Trigonometric Functions

1. **Engineering and Physics**: Used in the analysis of waves, oscillations, and circular motion.
2. **Computer Graphics**: Essential for rendering scenes, transformations, rotations, and animations.
3. **Signal Processing**: Employed in Fourier transforms for analyzing and filtering signals.
4. **Astronomy**: Utilized in the study of planetary motions, celestial mechanics, and light waves.
5. **Navigation and Geodesy**: Critical for calculating distances and angles in GPS and map projections.

### Exponential Functions

1. **Population Dynamics**: Modeling population growth and decay processes.
2. **Finance**: Calculating compound interest, option pricing (e.g., Black-Scholes model), and investment growth.
3. **Radioactive Decay**: Describing the decay of radioactive substances and half-life calculations.
4. **Thermodynamics**: Modeling heat transfer, chemical reaction rates, and temperature changes.
5. **Epidemiology**: Predicting the spread of infectious diseases and modeling exponential growth phases of epidemics.

### Logarithmic Functions

1. **Information Theory**: Measuring information entropy and data compression (e.g., Shannon entropy).
2. **Acoustics**: Quantifying sound intensity and decibel levels.
3. **Earthquake Science**: Describing the magnitude of earthquakes using the Richter scale.
4. **Complexity Analysis**: Analyzing the time complexity of algorithms (e.g., logarithmic time complexity).
5. **Biology**: Modeling enzyme kinetics and growth rates of organisms.

### Special Functions

1. **Quantum Mechanics**: Using Hermite polynomials, Legendre polynomials, and Bessel functions in solving Schrödinger equations.
2. **Electromagnetism**: Applying Bessel functions and spherical harmonics in solving Maxwell's equations.
3. **Statistical Distributions**: Utilizing gamma functions and beta functions in probability distributions and statistical analyses.
4. **General Relativity**: Employing elliptic functions and hypergeometric functions in modeling gravitational fields and spacetime curvature.
5. **Aerodynamics**: Using Airy functions and other special functions to model airflow over wings and predict aerodynamic properties.

### Cross-Disciplinary Applications

1. **Machine Learning and AI**: Leveraging activation functions (e.g., sigmoid, tanh) in neural networks, which involve exponential and logarithmic functions.
2. **Economics and Social Sciences**: Modeling economic growth, market trends, and consumer behavior using a combination of these functions.
3. **Climate Science**: Simulating atmospheric dynamics, ocean currents, and climate models often involve trigonometric and special functions.
4. **Medical Imaging**: Utilizing exponential and logarithmic functions in image reconstruction techniques like CT and MRI.


Numeric computations involving trigonometric, exponential, logarithmic, and special functions are integral to a wide range of scientific, engineering, and industrial applications. Their versatility and mathematical properties enable accurate modeling, analysis, and prediction of complex phenomena across various domains.

### Example Code
```javascript
const x = 2;
const sinValue = numeric.sin(x);
const expValue = numeric.exp(x);
const gammaValue = numeric.gamma(x);
// sinValue = 0.909
// expValue = 7.389
// gammaValue = 1
```

For numeric functions in numeric.js, x can be a scalar number or an array.

## [Matrix Operations and Linear Algebra](https://app.scribbler.live/?jsnb=./examples/Matrix-Operations-Linear-Algebra.jsnb)

Numeric.js allows you to perform various matrix operations, such as matrix addition, subtraction, multiplication, and inversion. Matrix operations and linear algebra are foundational tools in many scientific, engineering, and technological fields. Here are some notable applications:

### 1. Computer Graphics and Vision

- **Transformations and Rotations**: Used for translating, scaling, and rotating objects in 3D space.
- **Rendering**: Key in projecting 3D scenes onto 2D screens, including perspective and orthographic projections.
- **Image Processing**: Employed in filtering, transforming, and analyzing images and videos.

### 2. Machine Learning and Data Science

- **Principal Component Analysis (PCA)**: Utilized for dimensionality reduction and feature extraction.
- **Neural Networks**: Involve matrix multiplications for forward and backward propagation through layers.
- **Support Vector Machines (SVM)**: Use linear algebra for finding optimal hyperplanes for classification.

### 3. Engineering and Physics

- **Finite Element Analysis (FEA)**: Used to solve complex physical systems by dividing them into simpler parts.
- **Structural Analysis**: Involves solving systems of linear equations to determine stresses and strains in structures.
- **Control Systems**: Matrix operations are crucial in modeling and designing systems for stability and control.

### 4. Economics and Finance

- **Portfolio Optimization**: Used to maximize returns or minimize risk by solving linear equations.
- **Risk Management**: Involves covariance matrices to understand and mitigate risks in investments.
- **Econometric Models**: Linear regression and other statistical models rely on matrix operations.

### 5. Computer Networks and Communications

- **Signal Processing**: Uses Fourier transforms and other matrix-based methods for filtering and analyzing signals.
- **Error-Correcting Codes**: Employ matrix operations to detect and correct errors in data transmission.
- **Network Analysis**: Involves graph theory and matrix representations to analyze and optimize networks.

### 6. Robotics and Control

- **Kinematics and Dynamics**: Matrices are used to model and control the motion of robots.
- **Path Planning**: Algorithms like the A* search and Dijkstra's algorithm rely on graph representations and matrix operations.
- **State Estimation**: Kalman filters and other estimation techniques use linear algebra to predict and update system states.

### 7. Cryptography

- **Encryption Algorithms**: Linear algebra underpins many cryptographic methods, including those involving matrix transformations.
- **Public Key Cryptography**: Uses mathematical structures that rely heavily on linear algebra.

### 8. Natural Language Processing (NLP)

- **Word Embeddings**: Techniques like Word2Vec and GloVe use matrix factorization to represent words in vector space.
- **Topic Modeling**: Methods like Latent Semantic Analysis (LSA) use singular value decomposition (SVD) to uncover hidden topics in text.

### 9. Quantum Computing

- **Quantum Algorithms**: Quantum states and operations are represented and manipulated using linear algebra.
- **Simulating Quantum Systems**: Involves solving large systems of linear equations to understand quantum behavior.

### 10. Computational Biology

- **Genomics**: Uses matrix operations for aligning DNA sequences and understanding genetic relationships.
- **Protein Structure Prediction**: Involves solving linear equations to predict the 3D structures of proteins.
- **Bioinformatics**: Employs linear algebra in analyzing and visualizing complex biological data.

### 11. Environmental Science

- **Climate Modeling**: Uses linear systems to simulate and predict climate patterns.
- **Population Dynamics**: Matrix models describe the growth and interactions within ecological systems.


Matrix operations and linear algebra are indispensable across a wide array of fields due to their ability to efficiently solve systems of equations, perform transformations, and handle high-dimensional data. Their applications span from theoretical foundations to practical implementations, making them essential tools in modern science and technology.


### Example Code
```javascript
const A = [[1, 2], [3, 4]];
const B = [[5, 6], [7, 8]];

const C = numeric.add(A, B);
// C = [[6, 8], [10, 12]]

const D = numeric.dot(A, B);
// D = [[19, 22], [43, 50]]

const E = numeric.inv(A);
// E = [[-2, 1], [1.5, -0.5]]
```

You can solve linear systems of equations using the numeric.solve() function.
```javascript
const A = [[2, 3], [4, -1]];
const b = [7, 1];

const x = numeric.solve(A, b);
// x = [2, -1]
```


### [Eigenvalues and Eigenvectors](https://app.scribbler.live/?jsnb=./examples/Eigen-Decomposition.jsnb):
Numeric.js allows you to compute eigenvalues and eigenvectors of a matrix using the numeric.eig() function. 
Eigenvalues and eigenvectors are fundamental concepts in linear algebra with a wide range of applications in various fields. Here's an overview of their  applications:

### 1. **Principal Component Analysis (PCA)**
PCA is a technique used in data analysis and machine learning to reduce the dimensionality of datasets. It relies on eigenvalues and eigenvectors of the covariance matrix of the data to identify the principal components, which are the directions of maximum variance.

### 2. **Vibrations and Modal Analysis**
In mechanical engineering and structural analysis, eigenvalues and eigenvectors are used to study the natural frequencies and mode shapes of structures. The eigenvalues correspond to the natural frequencies, and the eigenvectors describe the mode shapes.

### 3. **Quantum Mechanics**
Eigenvalues and eigenvectors are crucial in quantum mechanics, where they are used to solve the Schrödinger equation. The eigenvalues represent possible measurement outcomes (e.g., energy levels), and the eigenvectors represent the corresponding quantum states.

### 4. **Stability Analysis**
In systems theory and control engineering, the stability of a system is often analyzed using the eigenvalues of its state matrix. If the real parts of all eigenvalues are negative, the system is stable.

### 5. **Markov Chains**
In probability theory, the steady-state behavior of Markov chains is analyzed using eigenvalues and eigenvectors. The eigenvector corresponding to the eigenvalue 1 of the transition matrix represents the steady-state distribution.

### 6. **Graph Theory**
Eigenvalues and eigenvectors of adjacency matrices or Laplacian matrices of graphs provide insights into the properties of the graph, such as connectivity and clustering.

### 7. **Image Compression**
Techniques like Singular Value Decomposition (SVD), which is closely related to eigenvalue decomposition, are used in image compression to represent images with fewer data points while preserving important features.

### 8. **Facial Recognition**
Eigenfaces, a method in facial recognition, use eigenvectors derived from the covariance matrix of facial images. These eigenvectors, or eigenfaces, represent common features in faces and can be used to identify individuals.

### 9. **Differential Equations**
Solutions to linear differential equations often involve eigenvalues and eigenvectors. For example, the solutions to systems of linear differential equations can be expressed in terms of the eigenvalues and eigenvectors of the system matrix.


Eigenvalues and eigenvectors are powerful tools in linear algebra with broad applications in science, engineering, and data analysis. Their ability to provide insights into the structure and behavior of linear transformations makes them indispensable in both theoretical and practical contexts.

### Example Code
```javascript
const A = [[2, -1], [4, 3]];

const { lambda, E } = numeric.eig(A);
// lambda = [4, 1]
// E = [[0.707, 0.447], [0.707, -0.894]]
```

## [Singular Value Decomposition (SVD)](https://app.scribbler.live/?jsnb=./examples/Singular-Value-Decomposition.jsnb)
Numeric.js provides SVD functionality through the numeric.svd() function. ### Singular Value Decomposition (SVD)

Singular Value Decomposition (SVD) is a fundamental matrix factorization technique in linear algebra with numerous applications in signal processing, statistics, machine learning, and more. Here’s a detailed list of applications of SVD.


### 1. **Principal Component Analysis (PCA)**

- **Dimensionality Reduction**: SVD is used in PCA to reduce the dimensionality of data while retaining the most significant variance. By projecting the data onto the space spanned by the leading singular vectors, we can achieve a lower-dimensional representation.
- **Data Compression**: SVD helps in compressing data by representing it with fewer dimensions while preserving essential features.

### 2. **Signal Processing**

- **Noise Reduction**: SVD can be used to filter out noise from signals. By reconstructing the signal using only the largest singular values, noise components (usually associated with smaller singular values) can be removed.
- **Image Processing**: SVD is employed in image compression and denoising by approximating the original image with a lower-rank matrix.

### 3. **Latent Semantic Analysis (LSA)**

- **Natural Language Processing**: SVD is used in LSA to analyze relationships between a set of documents and the terms they contain. It helps in reducing the dimensions of the term-document matrix, capturing the latent structure in the data.

### 4. **Recommender Systems**

- **Collaborative Filtering**: SVD is utilized to decompose the user-item rating matrix. By identifying latent factors that explain observed ratings, it enables better recommendations even for sparse matrices with many missing values.

### 5. **Pseudoinverse Calculation**

- **Solving Linear Systems**: SVD can be used to compute the Moore-Penrose pseudoinverse of a matrix, which is useful for solving linear systems, especially when the matrix is not square or is ill-conditioned.

### 6. **Data Analysis and Visualization**

- **Feature Extraction**: SVD helps in extracting important features from large datasets, facilitating data analysis and visualization by reducing the complexity of the data.

### 7. **Quantum Computing**

- **Quantum State Representation**: In quantum computing, SVD is used to analyze and simplify quantum states and operations, contributing to the development of quantum algorithms.


SVD is a versatile and powerful tool in linear algebra with applications spanning many disciplines. Its ability to decompose matrices into simpler, more interpretable components makes it invaluable for data analysis, signal processing, and machine learning.


	const A = [[1, 2], [3, 4], [5, 6]];
	
	const { U, S, V } = numeric.svd(A);
	// U = [[-0.229, 0.883], [-0.524, 0.240], [-0.819, -0.402]]
	// S = [9.525, 0.514]
	// V = [[-0.619, -0.785], [-0.785, 0.619]]

## [Cubic Spline Interpolation Interpolation](https://app.scribbler.live/?jsnb=./examples/Cubic-Spline-Interpolation.jsnb)

Numeric.js supports spline interpolation, using the numeric.spline() function. Cubic spline interpolation is a commonly used method for smooth interpolation between data points. Cubic spline interpolation is a method used to construct a smooth curve through a set of data points. This technique has several practical applications across various fields due to its ability to produce smooth and accurate interpolations. Here are some key applications:

### 1. **Data Visualization**

- **Smooth Plotting**: Cubic splines are used to create smooth curves that pass through or near data points in charts and graphs, providing a visually appealing representation of data trends.

### 2. **Computer Graphics and Animation**

- **Curve Modeling**: Used to design smooth curves and surfaces in computer graphics, such as Bezier curves and B-splines for character modeling, animation paths, and object shapes.
- **Keyframe Interpolation**: In animation, cubic splines interpolate between keyframes to produce smooth transitions and realistic motion.

### 3. **Signal Processing**

- **Noise Reduction**: Applied to smooth out noisy data while preserving important features of the signal.
- **Resampling**: Used for resampling and reconstructing signals when changing the sampling rate, ensuring smooth transitions between samples.

### 4. **Engineering**

- **Structural Analysis**: In civil and mechanical engineering, cubic splines model the deformation of beams and structures under load, providing a smooth representation of deflection curves.
- **Aerodynamics**: Used in the design of airfoil shapes and other aerodynamic surfaces, ensuring smooth transitions that affect airflow and performance.

### 5. **Geophysics**

- **Seismic Data Interpretation**: Helps in interpreting seismic data by interpolating between discrete measurements to produce smooth subsurface images.
- **Topographic Mapping**: Used in creating smooth contour lines and elevation models from discrete topographic data points.

### 6. **Medicine and Biology**

- **Medical Imaging**: Applied in the reconstruction of smooth contours in medical images, such as CT or MRI scans, improving the clarity and accuracy of visual representations.
- **Growth Curves**: Used to model biological growth curves smoothly, such as human height or weight over time.

### 7. **Economics and Finance**

- **Yield Curve Smoothing**: In finance, cubic splines are used to interpolate and smooth yield curves, which represent interest rates across different maturities.
- **Data Forecasting**: Helps in predicting future trends by creating smooth interpolations of historical economic or financial data.

### 8. **Robotics and Control Systems**

- **Path Planning**: In robotics, cubic splines are used to plan smooth paths for robotic arms or autonomous vehicles, ensuring smooth and efficient movement.
- **Trajectory Optimization**: Used to optimize the trajectories of moving parts or vehicles, balancing smoothness and precision.

### 9. **Astronomy and Astrophysics**

- **Orbit Estimation**: Applied to interpolate and smooth the orbits of celestial bodies, improving the accuracy of orbital predictions.
- **Light Curve Analysis**: Used in the analysis of light curves from variable stars or exoplanets, providing smooth models of brightness variations over time.

### 10. **Environmental Science**

- **Climate Data Analysis**: Used to interpolate and smooth climate data, such as temperature or precipitation records, to analyze long-term trends.
- **Pollution Modeling**: Helps in creating smooth spatial models of pollution dispersion based on discrete measurement points.

Cubic spline interpolation is a versatile and powerful tool used in a wide array of applications across different fields. Its ability to produce smooth, accurate interpolations makes it invaluable in data visualization, computer graphics, engineering, medicine, finance, and many other areas. By ensuring smooth transitions and accurate representations, cubic splines play a crucial role in both theoretical analysis and practical applications.

### Code Sample

```javascript
// Data points
const x = [0, 1, 2, 3, 4];
const y = [1, 4, 7, 12, 21];

// Create a cubic spline function
const spline = numeric.spline(x, y);

// Evaluate the spline at a specific point
const interpolatedValue = spline.at(2.5);
console.log(interpolatedValue); 
```



## Other Popular JavaScript Numeric Libraries

Here are some popular JavaScript numeric libraries that are commonly used for numerical computations, scientific simulations, and data processing:

### 1. **Math.js**
- **Description:** A comprehensive mathematics library for JavaScript and Node.js.
- **Features:** Supports arithmetic, algebra, statistics, complex numbers, units, and matrices.
- **Website:** [mathjs.org](http://mathjs.org/)

### 2. **NumJS**
- **Description:** A JavaScript library that brings NumPy-like functionalities to JavaScript.
- **Features:** Supports matrix operations, linear algebra, and basic mathematical functions.
- **Website:** [NumJS GitHub](https://github.com/nicolaspanel/numjs)

### 3. **algebra.js**
- **Description:** A library for symbolic algebra in JavaScript.
- **Features:** Provides capabilities for creating and solving equations, working with polynomials, and performing symbolic calculations.
- **Website:** [algebra.js GitHub](https://github.com/nicolewhite/algebra.js)


### 4. **D3.js (Data-Driven Documents)**
- **Description:** Although primarily a data visualization library, D3.js includes numerous mathematical and numerical utilities.
- **Features:** Supports various statistical functions, linear algebra operations, and data transformations.
- **Website:** [d3js.org](https://d3js.org/)

### 5. **Sylvester**
- **Description:** A lightweight JavaScript library for vector and matrix math.
- **Features:** Provides vector, matrix, and plane operations, and includes algorithms for solving linear systems.
- **Website:** [Sylvester GitHub](https://github.com/jcoglan/sylvester)

### 6. **Simple-statistics**
- **Description:** A JavaScript library for performing statistical operations.
- **Features:** Includes functions for descriptive statistics, regression analysis, and various probability distributions.
- **Website:** [Simple-statistics GitHub](https://github.com/simple-statistics/simple-statistics)

### 7. **JStat**
- **Description:** A JavaScript statistical library that supports a variety of statistical operations and distributions.
- **Features:** Offers matrix operations, statistical functions, probability distributions, and hypothesis testing.
- **Website:** [JStat GitHub](https://github.com/jstat/jstat)

### 8. **Big.js**
- **Description:** A library for arbitrary-precision decimal arithmetic.
- **Features:** Supports operations on very large or very small decimal numbers with high precision.
- **Website:** [Big.js GitHub](https://github.com/MikeMcl/big.js/)

### 9. **Decimal.js**
- **Description:** Another library for arbitrary-precision decimal arithmetic.
- **Features:** Similar to Big.js but offers additional functionality like support for different rounding modes.
- **Website:** [Decimal.js GitHub](https://github.com/MikeMcl/decimal.js/)

### 10. **Complex.js**
- **Description:** A library for complex number arithmetic.
- **Features:** Supports operations on complex numbers, including addition, multiplication, division, and more.
- **Website:** [Complex.js GitHub](https://github.com/infusion/Complex.js)


These libraries cover a broad range of numerical and mathematical functionalities, making JavaScript a powerful tool for scientific computing, data analysis, and simulation projects.

