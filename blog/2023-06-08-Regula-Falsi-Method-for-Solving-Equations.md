---
title: Regula Falsi Method for Solving Equations 
description: Regula Falsi method, also known as the false position method, is a numerical method used to find the root of an equation within a given interval. It is one of the oldes and easily implmentable method.
layout: post
---

### What is Regula-Falsi Method?
The Regula Falsi method, also known as the false position method, is a numerical method used to find the root of an equation within a given interval. It is an iterative method that makes use of linear interpolation to approximate the root.

The method starts with two initial guesses, a and b, such that f(a) and f(b) have opposite signs, indicating that the root lies between them. The Regula Falsi method then computes a new estimate, c, for the root by finding the x-intercept of the line connecting the points (a, f(a)) and (b, f(b)).

The formula for computing c in the Regula Falsi method is:

	c = (a * f(b) - b * f(a)) / (f(b) - f(a))

If f(c) is close enough to zero or the desired tolerance level, c is considered the root. Otherwise, the method updates the interval by replacing either a or b with c, depending on the sign of f(c). The process continues iteratively until the desired level of accuracy is achieved.

The Regula Falsi method is similar to the bisection method, but instead of taking the midpoint of the interval, it selects the x-intercept of the line connecting the function values at the endpoints. This can lead to faster convergence in some cases, especially when the function has asymmetrical behavior near the root.

### History of Regula Falsi Method

The origins of the Regula Falsi method can be traced back to the work of Greek mathematicians, particularly Hero of Alexandria (c. 10-70 CE). Hero described a method for approximating roots of equations in his work "Metrica," which involved a geometric interpretation of the method. His approach was based on the idea of linear interpolation between two initial guesses to estimate the root.

One of the earliest Indian mathematicians who discussed the Regula Falsi method was the mathematician and astronomer Brahmagupta (598-668 CE). Brahmagupta described the method in his treatise "Brahmasphutasiddhanta" (Correctly Established Doctrine of Brahma), which included rules for solving quadratic equations. He used a variant of the Regula Falsi method to approximate roots of quadratic equations.

Another influential Indian mathematician, Mahāvīra (c. 9th century CE), also contributed to the development of the Regula Falsi method. He discussed the technique in his work "Ganitasarasangraha" (Compendium of the Essence of Mathematics), where he provided detailed explanations and examples of the method's application to solve equations.

Indian mathematicians played a crucial role in the development and dissemination of mathematical knowledge during the classical period. Their contributions not only included the Regula Falsi method but also encompassed other mathematical topics such as arithmetic, algebra, trigonometry, and numerical analysis.

The Regula Falsi method gained further prominence during the medieval period and was used by Islamic mathematicians. One notable mathematician who contributed to the development and understanding of the method was Abu al-Hasan al-Uqlidisi (c. 952-1000 CE), an Arab mathematician from Baghdad. He wrote a treatise titled "Kitab al-Fusul fi al-Hisab al-Hindi" (Book of Chapters on Hindu Numeration), in which he discussed the Regula Falsi method as a technique for solving polynomial equations.

Throughout history, the Regula Falsi method underwent refinements and modifications as mathematicians made advancements in numerical analysis and calculus. The method was described by various mathematicians, including Persian mathematician Sharaf al-Dīn al-Tūsī (1135-1213) and Italian mathematician Leonardo Fibonacci (c. 1170-1250). It continued to be a fundamental technique for root finding until more sophisticated methods were developed later, such as Newton's method in the 17th century.

Today, the Regula Falsi method holds historical significance as one of the earliest known numerical methods for finding roots of equations. While it may not be as commonly used as more advanced methods, its historical significance and fundamental principles have contributed to the development of numerical analysis as a field of study.

### JavaScript Code for Regula Falsi Method

Below an example of how you can implement the Regula Falsi method in JavaScript to approximate the root of an equation. You can experiment using the notebook on Scribbler: [Regula Falsi Method](https://app.scribbler.live/#./examples/Regula-Falsi.jsnb){: .jsnb-link} 

	function regulaFalsi(func, a, b, tolerance, maxIterations) {
	  let c;
	  let iterations = 0;
	
	  while (Math.abs(b - a) > tolerance && iterations < maxIterations) {
	    c = (a * func(b) - b * func(a)) / (func(b) - func(a));
	
	    if (func(c) === 0) {
	      break; // Found exact root
	    } else if (func(a) * func(c) < 0) {
	      b = c;
	    } else {
	      a = c;
	    }
	
	    iterations++;
	  }
	
	  return c;
	}
	
	// Example usage
	function f(x) {
	  return x * x - 4; // Solve the equation x^2 - 4 = 0
	}
	
	const root = regulaFalsi(f, 1, 3, 0.0001, 100);
	console.log("Approximate root:", root);

