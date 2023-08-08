---
title: Option Pricing using Simulation 
layout: post
description: Monte-Carlo simulation can be used to price financial options and the code can be implemented in any programming language including Python and JavaScript.
---

### Option Pricing

We have looked at [Monte-Carlo simulation](/2023/04/25/Scientific-Simulation-in-JavaScript.html) and pricing of options using [Black-Scholes formula](/2023/04/06/Option-Pricing-using-Black-Scholes-in-JavaScript.html). In this article we look at option pricing using Monte-Carlo simulation. This is a useful technique especially if the option being priced has some exotic/structured terms or if the underlying financial factors do not follow Brownian motion. 

Options are financial contracts that give the buyer the right, but not the obligation, to buy or sell an underlying asset at a predetermined price (known as the strike price) on or before a specified date (known as the expiration date). The buyer of an option pays a premium to the seller (also known as the writer) for the right to exercise the option.

There are two types of options: call options and put options. A call option gives the buyer the right to buy the underlying asset at the strike price, while a put option gives the buyer the right to sell the underlying asset at the strike price. The seller of an option, on the other hand, has the obligation to sell (in the case of a call option) or buy (in the case of a put option) the underlying asset if the buyer decides to exercise the option.

The price of an option is determined by several factors, including:

- The current market price of the underlying asset: As the price of the underlying asset increases, the price of a call option typically increases and the price of a put option typically decreases.

- The strike price: The further the strike price is from the current market price of the underlying asset, the lower the price of a call option and the higher the price of a put option.

- Time to expiration: As the expiration date approaches, the price of an option may decrease, as there is less time for the underlying asset to move in the desired direction.

- Volatility: Higher volatility increases the potential for large price movements in the underlying asset, which can increase the price of both call and put options.

- Interest rates: Higher interest rates may increase the cost of holding a position in an option, which can decrease the price of both call and put options.

- Dividends: If the underlying asset pays dividends, this can affect the price of the option. Specifically, the price of a call option may decrease and the price of a put option may increase as the ex-dividend date approaches.

These factors can interact in complex ways, and different pricing models may give different results depending on their assumptions about these factors. As a result, the pricing of options is often complex and can involve sophisticated mathematical models, such as the Black-Scholes model or more advanced methods like Monte Carlo simulation.

### Monte-Carlo Simulation for Option Pricing
Monte Carlo simulation is often used to price options because it allows for a more flexible and realistic approach to modeling the complex interactions between the various factors that determine option prices.

Monte Carlo simulation involves using random variables to simulate possible future outcomes for the underlying asset's price, and then using these simulated outcomes to calculate the expected value of the option payoff. This approach can be particularly useful for modeling options on assets with complex, non-linear price behavior, or when there is uncertainty about the future value of the underlying asset.

By using Monte Carlo simulation, traders and investors can obtain a range of possible prices for an option, rather than relying on a single, point estimate. This can help them better understand the potential risks and rewards associated with the option, and make more informed trading decisions.

It's worth noting that Monte Carlo simulation is just one of many possible approaches to option pricing, and different methods may be more appropriate in different situations. However, it is a widely used and powerful technique that can help traders and investors better understand the behavior of options in a variety of market conditions.


To price options using simulation in JavaScript, we can use the Monte Carlo method. The steps to do this are as follows:

1. Define the parameters of the option, such as the strike price, expiration date, and volatility.

2. Generate a large number of random price paths for the underlying asset using a geometric Brownian motion model. The formula for this model is:

S(t+dt) = S(t) * exp((r - 0.5 * sigma^2) * dt + sigma * sqrt(dt) * Z)

Where:

S(t) is the price of the underlying asset at time t
r is the risk-free interest rate
sigma is the volatility of the underlying asset
dt is the time step
Z is a random variable from a normal distribution with mean 0 and standard deviation 1

3. Calculate the payoff of the option at expiration for each price path generated in step 2.

4. Discount the payoffs back to the present value using the risk-free interest rate.

5. Take the average of the discounted payoffs to obtain the option price.

### Using JavaScript
Below an example implementation of this method in JavaScript (it does 100k simulated paths).You can play around with the code on Scribbler: [JavaScript Notebook for Option Pricing using Monte-Carlo Simulation](https://app.scribbler.live/#./examples/Option-Pricing-MC.jsnb){: .jsnb-link} 

	function optionPriceMC(strike, expiration, volatility, riskFreeRate, spot, simulations) {
	  let totalPayoff = 0;
	  const dt = 1.0 / 365; // time step of one day
	  const sqrtDt = Math.sqrt(dt);
	  const drift = riskFreeRate - 0.5 * volatility ** 2; //this comes from Ito's lemma
	
	  for (let i = 0; i < simulations; i++) {
	    let price = spot;
	    for (let t = 0; t < expiration; t += dt) {
	      const z = normalRandom(); // generate a random number from a normal distribution
	      price *= Math.exp(drift * dt + volatility * sqrtDt * z);
	    }
	    const payoff = Math.max(price - strike, 0); // payoff at expiration
	    totalPayoff += payoff * Math.exp(-riskFreeRate * expiration); // discounted payoff
	  }
	
	  const optionPrice = totalPayoff / simulations;
	  return optionPrice;
	}
	
	function normalRandom() { //Generating Normally Dstributed variables: https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform
	  let u = 0, v = 0;
	  while (u === 0) u = Math.random(); // ensure u is not 0
	  while (v === 0) v = Math.random(); // ensure v is not 0
	  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
	}
	
	// Example usage
	const strikePrice = 100;
	const expirationDays = 30;
	const volatility = 0.2;
	const riskFreeRate = 0.01;
	const spotPrice = 110;
	const numSimulations = 100000;
	
	const optionPrice = optionPriceMC(strikePrice, expirationDays, volatility, riskFreeRate, spotPrice, numSimulations);
	console.log("Option price: " + optionPrice);

Although this code replicates Geometric-Brownian motion, it can be modified to incorporate other processes of price movement.

### Using Python
Here's an example Python code for pricing a European call option using Monte Carlo simulation:

	import numpy as np
	
	def call_option_price(S, K, r, sigma, T, simulations):
	    """
	    Calculates the price of a European call option using Monte Carlo simulation.
	    
	    Parameters:
	    S (float): the current price of the underlying asset
	    K (float): the strike price of the option
	    r (float): the risk-free interest rate
	    sigma (float): the volatility of the underlying asset
	    T (float): the time to expiration of the option (in years)
	    simulations (int): the number of Monte Carlo simulations to run
	    
	    Returns:
	    float: the estimated price of the call option
	    """
	    
	    # Calculate the parameters for the simulation
	    dt = 1 / 365.0 #Converting one day to years
	    n = int(T / dt)
	    sqrt_dt = np.sqrt(dt)
	    r_per_dt = r * dt
	    
	    # Generate the random simulations for the underlying asset
	    S_t = S * np.exp(np.cumsum((r - 0.5 * sigma ** 2) * dt + sigma * sqrt_dt * np.random.normal(0, 1, (n, simulations)), axis=0))
	    
	    # Calculate the payoffs for the call option
	    payoff = np.maximum(S_t[-1] - K, 0)
	    
	    # Discount the payoffs back to the present value
	    call_price = np.exp(-r * T) * np.mean(payoff)
	    
	    return call_price
	print(100,100,0.05,0.15,30,100000)

This code uses the numpy library to generate random normal numbers, which are used to simulate the underlying asset's price movements over time. It then calculates the payoffs for the call option based on the simulated prices, and discounts the payoffs back to the present value using the risk-free interest rate. Finally, it returns the estimated price of the call option based on the simulated payoffs.


