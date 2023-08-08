---
title: Scientific Simulation in JavaScript
layout: post
description: Scientific simulation requires running several scenarios of a function call - ideal use-case for JavaScript.
---

### What is Scientific Simulation
Scientific simulation refers to the use of computer-based models or algorithms to mimic real-world phenomena or systems in a controlled and virtual environment. It involves creating a computational representation of a physical or abstract system and using it to simulate and analyze its behavior under different conditions or scenarios. Scientific simulations are widely used in various fields of science, such as physics, chemistry, biology, environmental science, and engineering, to study complex systems, make predictions, test hypotheses, and gain insights that may be difficult or expensive to obtain through experimentation alone.

Scientific simulations can be based on different approaches, such as numerical simulations, agent-based simulations, Monte Carlo simulations, and computational modeling, among others. These simulations can involve a wide range of variables, parameters, and interactions, and can generate large amounts of data that can be analyzed and visualized to understand the behavior of the system being simulated. Scientific simulations are used in diverse applications, such as weather forecasting, drug discovery, climate modeling, population dynamics, material science, and astrophysics, among others. They play a crucial role in advancing scientific knowledge, aiding decision-making, and solving complex problems across various domains.

### JavaScript for Simulation of a Physical System
JavaScript provides a wide range of features and libraries that can be leveraged to implement simulations of various types, from simple animations to complex simulations of scientific, physical, or social systems. Here's an example of how JavaScript can be used for a basic simulation:


	<!DOCTYPE html>
	<html>
	  <head>
	    <title>Simple JavaScript Simulation</title>
	    <style>
	      /* CSS styles for simulation canvas */
	      canvas {
	        border: 1px solid black;
	      }
	    </style>
	  </head>
	  <body>
	    <canvas id="simulationCanvas" width="400" height="400"></canvas>
	    <script>
	      // JavaScript code for simulation
	
	      // Get canvas element
	      const canvas = document.getElementById('simulationCanvas');
	      const ctx = canvas.getContext('2d');
	
	      // Set initial position and velocity
	      let x = canvas.width / 2;
	      let y = canvas.height - 30;
	      let dx = 2;
	      let dy = -2;
	
	      // Set ball radius
	      const ballRadius = 10;
	
	      // Function to draw the ball
	      function drawBall() {
	        ctx.beginPath();
	        ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
	        ctx.fillStyle = 'blue';
	        ctx.fill();
	        ctx.closePath();
	      }
	
	      // Function to update ball position
	      function updateBallPosition() {
	        // Clear canvas
	        ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	        // Draw ball
	        drawBall();
	
	        // Update position
	        x += dx;
	        y += dy;
	
	        // Reverse direction if ball hits canvas edges
	        if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
	          dx = -dx;
	        }
	        if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
	          dy = -dy;
	        }
	      }
	
	      // Call updateBallPosition function repeatedly for animation
	      setInterval(updateBallPosition, 10);
	    </script>
	  </body>
	</html>


This example demonstrates a simple simulation of a bouncing ball using HTML5 canvas and JavaScript. The canvas element is used as a drawing surface, and JavaScript is used to update the position of the ball, redraw it, and handle its bouncing behavior. This is just a basic example, and JavaScript can be used to implement much more complex simulations with advanced graphics, physics, and interactivity depending on the requirements of the simulation.
You can play with the simulation here on Scribbler: [Bouncing Ball Simulation](https://app.scribbler.live#./examples/Simple-Simulation.jsnb){: .jsnb-link} 

This is a simple example. As you can notice the ball moves in the same loop over and over again in this simple simulation. But what if we make it more interesting by moving the border of the box as well. This can create an effect of chaos:
[Dynamic-Simulation](https://app.scribbler.live/#./examples/Dynamic-Simulation.jsnb){: .jsnb-link} 

### Monte-Carlo Simulation
Monte Carlo simulation is a computational technique that uses random sampling and statistical modeling to simulate and analyze the behavior of complex systems or processes. It is named after the famous Monte Carlo casino in Monaco, known for its games of chance, as the technique relies on random sampling to approximate and estimate outcomes in situations where deterministic solutions are not easily feasible.

In a Monte Carlo simulation, a system or process is represented by a mathematical or computational model, which includes input parameters, rules or equations that govern the system's behavior, and output variables of interest. The simulation is run multiple times, with random values for the input parameters drawn from probability distributions that represent their uncertainty or variability. The model is then used to simulate the system's behavior or outcomes, and the results are aggregated and analyzed statistically to obtain estimates, probabilities, or insights about the system's behavior or performance.

Monte Carlo simulation is widely used in various fields, including finance, engineering, physics, biology, and social sciences, among others. It can be used for a wide range of applications, such as risk assessment, optimization, decision-making, reliability analysis, and performance evaluation. Some examples of Monte Carlo simulation applications include assessing investment risks, predicting the performance of complex engineering systems, estimating the probability of rare events, simulating the behavior of molecules in a chemical reaction, and modeling the spread of infectious diseases in a population.

Monte Carlo simulation allows for the exploration of a wide range of scenarios and uncertainties, and it can provide valuable insights into the behavior and performance of complex systems. However, it should be used with caution, as the accuracy of the results depends on the quality of the model, the appropriateness of the input parameters and probability distributions, and the assumptions made during the simulation process. Verification and validation of the simulation results are important to ensure their reliability and usefulness for decision-making.

### Option Price Simulation Using Black-Scholes
Options are financial contracts that give the buyer the right, but not the obligation, to buy or sell an underlying asset, such as a stock, bond, or commodity, at a predetermined price (known as the strike price) within a specified period of time (known as the expiration date). Options are commonly used in financial markets for speculative purposes, risk management, and hedging strategies.

There are two main types of options:

Call option: A call option gives the buyer the right to buy the underlying asset at the strike price before the expiration date. If the market price of the underlying asset rises above the strike price, the buyer of the call option can exercise the option and buy the asset at the lower strike price, thereby making a profit.

Put option: A put option gives the buyer the right to sell the underlying asset at the strike price before the expiration date. If the market price of the underlying asset falls below the strike price, the buyer of the put option can exercise the option and sell the asset at the higher strike price, thereby making a profit.


The Black-Scholes model is a mathematical model used in finance to calculate the theoretical price of an option based on various parameters, such as the current stock price, strike price, time to expiration, volatility, and interest rate. A detailed explanation of the formula is given [here](/2023/04/06/Option-Pricing-using-Black-Scholes-in-JavaScript.html).

It is a common practice in financial analysis to calculate the value of a financial instrument in several scenarios. To test, if JavaScript can do this effectively we generate 10 million scenarios of price movements (using random generators) and price an option in all those scenarios. We then calculate the average value and the distribution of the prices. This code for this is:

	// 10 million simulations of option price
	// Simulated using for-loop and map
		
	num_sims=10000000;
	maximum=4000;
	minimum=1000;
	spot_price=random.oned.uniform(num_sims,minimum,maximum)
	strike_price=spot_price=random.oned.uniform(num_sims,minimum,maximum)
	time_to_expiry=random.oned.uniform(num_sims,0,1)
	risk_free_rate=0.05;
	volatility=random.oned.uniform(num_sims,0.1,0.25)
	option_type=random.oned.choice(num_sims,['Call','Put'])
	volatility.mean()
	
	/*---------*/
	//Simulation using for loop
	
	prices=[];
	for(i=0;i<num_sims;i++)
	prices.push(black_scholes.option_price(option_type[i],spot_price[i],strike_price[i],risk_free_rate,volatility[i],time_to_expiry[i])['price'] );
	show(prices.mean(),prices.length)
	
	/*---------*/
	//Simulation using map function
	
	idx=range(0,num_sims,1)
	prices= idx.map(i=>black_scholes.option_price(option_type[i],spot_price[i],strike_price[i],risk_free_rate,volatility[i],time_to_expiry[i])['price'] )
	show(prices.mean(),prices.length)
	
	/*---------*/
	prices.dist().transpose().plot('scatter')

This code uses the libraries [DI-Libs](/di-libs/). For playing around with the code use this notebook on Scribbler:
[https://app.scribbler.live/#./examples/Black-Scholes-Simulation.jsnb](https://app.scribbler.live/#./examples/Black-Scholes-Simulation.jsnb){: .jsnb-link} 




