---
title: Option Pricing in JavaScript using Black-Scholes Formula
layout: post
description: Black-Scholes is a closed-form solution to option pricing and can easily be implemented in JavaScript for web-app development or experimetnation.
---

### Options in Finance
In finance, an option is a financial contract between two parties, where the buyer of the option has the right, but not the obligation, to buy or sell an underlying asset at a predetermined price and time in the future. The underlying asset can be a stock, index, commodity, or currency, and the predetermined price is called the strike price or exercise price.

There are two main types of options: call options and put options. A call option gives the buyer the right to buy the underlying asset at the strike price, while a put option gives the buyer the right to sell the underlying asset at the strike price.

The price of an option is determined by various factors, including the current price of the underlying asset, the strike price, the time to expiration, the volatility of the underlying asset, and the interest rate. The Black-Scholes model is a mathematical formula used to calculate the theoretical price of an option based on these factors.

Options can be used for various purposes, such as hedging against potential losses or speculating on the future price movements of the underlying asset. However, options trading can be complex and involves various risks, including the risk of losing the entire investment. It is important to understand the underlying asset and the risks involved before trading options

### Black-Scholes Model
The Black-Scholes formula, also known as the Black-Scholes-Merton model, is a mathematical formula used in finance to calculate the theoretical price of European-style options. It was developed by Fischer Black, Myron Scholes, and Robert Merton in the 1970s and has become a widely used model in option pricing theory. The Black-Scholes formula assumes that the underlying asset follows a geometric Brownian motion, and it does not take into account factors such as dividends, transaction costs, or early exercise of options. It is used to estimate the theoretical price of European-style options, which can only be exercised at the expiration date.

The Black-Scholes formula for calculating the theoretical price of a call option is as follows:
- C = S * N(d1) - X * e^(-r * T) * N(d2)
And the formula for calculating the theoretical price of a put option is:
- P = X * e^(-r * T) * N(-d2) - S * N(-d1)
where:
- C: The theoretical price of the call option
- P: The theoretical price of the put option
- S: The current stock price
- X: The strike price of the option
- T: The time to expiration of the option (in years)
- r: The risk-free interest rate
- N(d1) and N(d2): The cumulative distribution functions of the standard normal distribution, calculated based on the values of d1 and d2.
- e: The mathematical constant Euler's number, approximately equal to 2.71828
- d1 = (ln(S / X) + (r + (σ^2) / 2) * T) / (σ * sqrt(T))
- d2 = d1 - σ * sqrt(T)
- ln: The natural logarithm
- σ: The volatility of the underlying asset

### Black-Scholes Implementation in JavaScript

JavaScript can be used to implement Black-Scholes - a closed-form solution to option pricing. For experimenting use the notebook in Scribbler: [Black-Scholes Formula for Option Pricing](https://app.scribbler.live/#./examples/Black-Scholes.jsnb){: .jsnb-link} 

To price options using the Black-Scholes formula in JavaScript, you can follow these steps:

1. Define the necessary variables: You will need to define the current stock price, the strike price, the time until expiration (in years), the risk-free interest rate, and the stock's annualized volatility.

2. Calculate d1 and d2: These are the two parameters used in the Black-Scholes formula. d1 is calculated as [(ln(S/K) + (r + σ²/2)t)] / (σ√t), and d2 is calculated as d1 - σ√t.

3. Calculate the option price: The option price can be calculated using the Black-Scholes formula, which is:

4. Option price = S * N(d1) - K * e^(-rt) * N(d2)

Where S is the current stock price, K is the strike price, r is the risk-free interest rate, t is the time until expiration (in years), and N() is the cumulative normal distribution function.

Implement the cumulative normal distribution function: You can use a library like jStat or a custom implementation to calculate the cumulative normal distribution function. Alternatively, you can use an approximation like the one provided by the Abramowitz and Stegun handbook. Standard normal density function can be calculated as:

	ndist=function(z) {
	  return (1.0/(Math.sqrt(2*Math.PI)))*Math.exp(-0.5*z);
	}
	
Cumulative normal distribution does not have a closed form formula. But it can be approximated through:

	normalcdf=function(X){   //Approximation for cumulative standard normal distribution.
		var T=1/(1+.2316419*Math.abs(X));
		var D=.3989423*Math.exp(-X*X/2);
		var Prob=D*T*(.3193815+T*(-.3565638+T*(1.781478+T*(-1.821256+T*1.330274))));
		if (X>0) {
			Prob=1-Prob
		}
		return Prob
	}   
	
Black-Scholes price can be obtained using the code:

	black_scholes.call_price=function(S,K,r,v,t) { 
	  var sqt = Math.sqrt(t);
	  d1 = (Math.log(S/K) + r*t)/(v*sqt) + 0.5*(v*sqt);
	  d2 = d1 - (v*sqt);
	  delta = normalcdf(d1);
	  Nd2 = normalcdf(d2);
	  ert = Math.exp(-r*t);
	  nd1 = ndist(d1);
	  result={}
	  result['price']=S*delta-K*ert *Nd2;
	  result['gamma'] = nd1/(S*v*sqt);
	  result['vega'] = S*sqt*nd1;
	  result['theta'] = -(S*v*nd1)/(2*sqt) - r*K*ert*Nd2;
	  result['rho'] = K*t*ert*Nd2;
	  return (result );
	} //end of black_scholes call
	
The above code not only gives the price of the option but also gives "greeks" i.e. sensitivities of the prices to various factors. The above code is part of the library <a href="https://github.com/gopi-suvanam/di-libs/"> Di-Libs </a>. 

Black-Scholes formula makes certain assumptions including the assumption of geometric Brownian motion of the underlying price. If some of the assumption are not valid then there may not be a closed-form solution. In that case, numeric methods like Monte-Carlo simulation will have to be used. There is a followup article on Option Pricing using simulation here: [Option Pricing using Simulation
](/2023/05/04/Monte-Carlo-Simulation-for-Option-Pricing.html)
