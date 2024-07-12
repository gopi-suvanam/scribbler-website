---
title: Option Pricing using Simulation 
layout: post
description: Monte-Carlo simulation can be used to price financial options and the code can be implemented in any programming language including Python and JavaScript.
start_link: https://app.scribbler.live/?jsnb=./examples/Option-Pricing-MC.jsnb
categories: [Financial, Scientific]
---

[Jump to Scribbler Notebook](https://app.scribbler.live/?jsnb=./examples/Option-Pricing-MC.jsnb)

## What are Options in Finance
In finance, options are financial derivatives that give the holder the right, but not the obligation, to buy or sell an underlying asset at a predetermined price within a specific time period. Here are the main types of options:

1. **Call Options** - Give the holder the right to buy the underlying asset at a specified strike price.
   - Example: Buy a call option to purchase a stock at $50.

2. **Put Options** - Give the holder the right to sell the underlying asset at a specified strike price.
   - Example: Buy a put option to sell a stock at $50.

3. **American Options** - Can be exercised at any time before the expiration date.
   - Example: Most stock options.

4. **European Options** - Can only be exercised on the expiration date.
   - Example: Index options.

5. **Bermudan Options** - Can be exercised on specific dates before the expiration date.
   - Example: Some exotic options.

6. **Exotic Options** - More complex options with features like path-dependency or multiple underlying assets.
   - Example: Barrier options, Asian options.

7. **Employee Stock Options (ESOs)** - Granted to employees as part of their compensation package, with specific vesting schedules.
   - Example: An employee can buy company stock at a discount after a certain period.

Each type of option serves different strategic purposes, from hedging to speculation to employee compensation.

## Option Pricing
The price of an option is determined by several factors, including:

- The current market price of the underlying asset: As the price of the underlying asset increases, the price of a call option typically increases and the price of a put option typically decreases.

- The strike price: The further the strike price is from the current market price of the underlying asset, the lower the price of a call option and the higher the price of a put option.

- Time to expiration: As the expiration date approaches, the price of an option may decrease, as there is less time for the underlying asset to move in the desired direction.

- Volatility: Higher volatility increases the potential for large price movements in the underlying asset, which can increase the price of both call and put options.

- Interest rates: Higher interest rates may increase the cost of holding a position in an option, which can decrease the price of both call and put options.

- Dividends: If the underlying asset pays dividends, this can affect the price of the option. Specifically, the price of a call option may decrease and the price of a put option may increase as the ex-dividend date approaches.

These factors can interact in complex ways, and different pricing models may give different results depending on their assumptions about these factors. As a result, the pricing of options is often complex and can involve sophisticated mathematical models, such as the Black-Scholes model or more advanced methods like Monte Carlo simulation.

We have looked at [Monte-Carlo simulation](/2023/04/25/Scientific-Simulation-in-JavaScript.html) and pricing of options using [Black-Scholes formula](/2023/04/06/Option-Pricing-using-Black-Scholes-in-JavaScript.html).  The Black-Scholes formula is a mathematical model used to determine the theoretical price of European call and put options. It assumes that the price of the underlying asset follows a lognormal distribution and incorporates factors such as the current price of the asset, the option's strike price, time to expiration, risk-free interest rate, and the asset's volatility. This model helps investors and traders estimate the fair value of options, facilitating more informed trading and hedging decisions.

The Black-Scholes formula is not always applicable due to several assumptions that may not hold true in real market conditions. Here are the key reasons:

1. **Constant Volatility:** Black-Scholes assumes constant volatility, but in reality, volatility can change over time.
   
2. **Lognormal Distribution:** It assumes the price of the underlying asset follows a lognormal distribution, which may not accurately reflect asset price behaviors, especially with extreme events.

3. **European Options Only:** The formula is designed for European options, which can only be exercised at expiration, not for American options that can be exercised any time before expiration.

4. **No Dividends:** It assumes that the underlying asset does not pay dividends, which is often not the case for stocks.

5. **Interest Rates:** The model assumes constant risk-free interest rates, whereas interest rates can vary.

6. **No Transaction Costs:** It does not account for transaction costs or taxes, which affect real trading.

Due to these limitations, more advanced methods like Monte Carlo simulation are sometimes used. Monte Carlo simulations can model a wide range of possible outcomes by simulating the random paths of asset prices, accounting for changing volatility, varying interest rates, dividends, and other factors. This flexibility makes them more accurate for pricing complex derivatives and options in real-world scenarios.

In this article we look at option pricing using Monte-Carlo simulation. This is a useful technique especially if the option being priced has some exotic/structured terms or if the underlying financial factors do not follow Brownian motion. 


## Monte-Carlo Simulation for Option Pricing

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

## Option Price Simulation Using JavaScript
Below an example implementation of this method in JavaScript (it does 100k simulated paths).You can play around with the code on Scribbler: [JavaScript Notebook for Option Pricing using Monte-Carlo Simulation](https://app.scribbler.live/?jsnb=./examples/Option-Pricing-MC.jsnb){: .jsnb-link} 

```javascript
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

function normalRandom() { //Generating Normally Distributed variables: https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform
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
```
### Explanation

The above code calculates the price of a European call option using a Monte Carlo simulation method. Here's a breakdown of the key components and steps:

#### Main Function: `optionPriceMC`

1. **Initialization:**
   - `totalPayoff`: Accumulates the total payoff from all simulations.
   - `dt`: Time step of one day (1/365).
   - `sqrtDt`: Square root of the time step for calculating the standard deviation.
   - `drift`: The deterministic part of the asset's return, derived from Ito's lemma (`riskFreeRate - 0.5 * volatility^2`).

2. **Monte Carlo Simulation Loop:**
   - The outer loop runs for the specified number of simulations (`simulations`).
   - For each simulation, the initial asset price is set to the current spot price (`spot`).

3. **Price Path Simulation:**
   - The inner loop simulates the asset price path over the expiration period (`expiration`) in daily steps (`dt`).
   - `z`: A random number generated from a standard normal distribution using the `normalRandom` function.
   - `price`: The asset price is updated using the geometric Brownian motion formula: `price *= Math.exp(drift * dt + volatility * sqrtDt * z)`.

4. **Payoff Calculation:**
   - At the end of each simulation, the payoff of the call option is calculated as `Math.max(price - strike, 0)`.
   - The payoff is discounted back to present value using the risk-free rate and added to `totalPayoff`.

5. **Option Price Calculation:**
   - After all simulations, the average of the discounted payoffs (`totalPayoff / simulations`) gives the estimated option price.

#### Normal Random Number Generator: `normalRandom`

- This function generates random numbers following a standard normal distribution using the Box-Muller transform.
- Two uniformly distributed random numbers `u` and `v` are generated, ensuring they are not zero.
- These are transformed into a normally distributed random number using the formula: `Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)`.

#### Example Usage


- Here, the `optionPriceMC` function is called with example parameters:
  - `strikePrice`: 100
  - `expirationDays`: 30 (1 month)
  - `volatility`: 0.2 (20%)
  - `riskFreeRate`: 0.01 (1%)
  - `spotPrice`: 110
  - `numSimulations`: 100000 (number of Monte Carlo simulations)
- The result, the estimated price of the call option, is logged to the console.


This Monte Carlo simulation code provides a flexible and powerful method to estimate the price of a European call option, especially useful when market conditions deviate from the assumptions made in models like Black-Scholes. Although this code replicates Geometric-Brownian motion, it can be modified to incorporate other processes of price movement.

## Options Price Simulation Using Python
Here's an example Python code for pricing a European call option using Monte Carlo simulation:

```python
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
```
This code uses the numpy library to generate random normal numbers, which are used to simulate the underlying asset's price movements over time. It then calculates the payoffs for the call option based on the simulated prices, and discounts the payoffs back to the present value using the risk-free interest rate. Finally, it returns the estimated price of the call option based on the simulated payoffs.

## Assumptions in the Code
The code provided for pricing a European call option using Monte Carlo simulation makes several key assumptions:

1. **Geometric Brownian Motion (GBM) for Asset Prices:**
   - The asset price follows a stochastic process modeled by geometric Brownian motion (GBM), which incorporates both a deterministic drift and a stochastic volatility component.

2. **Constant Volatility and Risk-Free Rate:**
   - The volatility (`volatility`) and the risk-free interest rate (`riskFreeRate`) are constant over the life of the option.

3. **Lognormal Distribution of Returns:**
   - The returns of the asset are lognormally distributed, derived from the GBM assumption.

4. **Discretization of Time:**
   - Time is discretized into small steps (`dt = 1.0 / 365`), corresponding to daily intervals.

5. **No Dividends:**
   - The underlying asset does not pay any dividends during the life of the option.

6. **Efficient Market:**
   - The market is efficient, meaning there are no arbitrage opportunities.

7. **No Transaction Costs:**
   - There are no transaction costs or taxes associated with buying or selling the option.

8. **European Style Option:**
   - The option can only be exercised at expiration, not before (i.e., it is a European option).

### Key Points in Code Reflecting Assumptions:

- **Geometric Brownian Motion:**
  ```javascript
  const drift = riskFreeRate - 0.5 * volatility ** 2; // this comes from Ito's lemma
  ...
  price *= Math.exp(drift * dt + volatility * sqrtDt * z);
  ```

- **Constant Volatility and Risk-Free Rate:**
  ```javascript
  const dt = 1.0 / 365; // time step of one day
  const sqrtDt = Math.sqrt(dt);
  ```

- **Lognormal Distribution:**
  ```javascript
  price *= Math.exp(drift * dt + volatility * sqrtDt * z);
  ```

- **No Dividends and Efficient Market:**
  - These assumptions are inherent in the pricing model and are not explicitly coded but are assumed in the derivation of the drift and volatility parameters.

- **No Transaction Costs:**
  - Not explicitly coded but assumed in the final payoff calculation:
  ```javascript
  totalPayoff += payoff * Math.exp(-riskFreeRate * expiration); // discounted payoff
  ```

- **European Style Option:**
  ```javascript
  const payoff = Math.max(price - strike, 0); // payoff at expiration
  ```

These assumptions simplify the model and allow for the use of Monte Carlo simulations to estimate the option price. However, in real-world applications, deviations from these assumptions might necessitate more sophisticated models and adjustments.

### Assumptions in the Monte Carlo Simulation Code for Option Pricing

The provided code for pricing a European call option using Monte Carlo simulation is based on several key assumptions. However, the code can be modified to accommodate different assumptions and more complex scenarios.

#### Current Assumptions

1. **Geometric Brownian Motion (GBM) for Asset Prices:**
   - The asset price follows a stochastic process modeled by geometric Brownian motion (GBM), which incorporates both a deterministic drift and a stochastic volatility component.

2. **Constant Volatility and Risk-Free Rate:**
   - The volatility (`volatility`) and the risk-free interest rate (`riskFreeRate`) are constant over the life of the option.

3. **Lognormal Distribution of Returns:**
   - The returns of the asset are lognormally distributed, derived from the GBM assumption.

4. **Discretization of Time:**
   - Time is discretized into small steps (`dt = 1.0 / 365`), corresponding to daily intervals.

5. **No Dividends:**
   - The underlying asset does not pay any dividends during the life of the option.

6. **Efficient Market:**
   - The market is efficient, meaning there are no arbitrage opportunities.

7. **No Transaction Costs:**
   - There are no transaction costs or taxes associated with buying or selling the option.

8. **European Style Option:**
   - The option can only be exercised at expiration, not before (i.e., it is a European option).

### Key Points in Code Reflecting Assumptions:

- **Geometric Brownian Motion:**
  ```javascript
  const drift = riskFreeRate - 0.5 * volatility ** 2; // this comes from Ito's lemma
  ...
  price *= Math.exp(drift * dt + volatility * sqrtDt * z);
  ```

- **Constant Volatility and Risk-Free Rate:**
  ```javascript
  const dt = 1.0 / 365; // time step of one day
  const sqrtDt = Math.sqrt(dt);
  ```

- **Lognormal Distribution:**
  ```javascript
  price *= Math.exp(drift * dt + volatility * sqrtDt * z);
  ```

- **No Dividends and Efficient Market:**
  - These assumptions are inherent in the pricing model and are not explicitly coded but are assumed in the derivation of the drift and volatility parameters.

- **No Transaction Costs:**
  - Not explicitly coded but assumed in the final payoff calculation:
  ```javascript
  totalPayoff += payoff * Math.exp(-riskFreeRate * expiration); // discounted payoff
  ```

- **European Style Option:**
  ```javascript
  const payoff = Math.max(price - strike, 0); // payoff at expiration
  ```

### Possible Modifications for Different Assumptions

1. **Variable Volatility and Risk-Free Rate:**
   - Modify the code to include time-varying volatility and risk-free rates by using arrays or functions to update these parameters at each time step.

2. **Dividend Payments:**
   - Adjust the price update formula to account for dividend payments:
     ```javascript
     const dividendYield = 0.03; // Example dividend yield
     price *= Math.exp((drift - dividendYield) * dt + volatility * sqrtDt * z);
     ```

3. **American Style Options:**
   - Implement early exercise by checking at each time step if exercising the option is more beneficial than holding it.

4. **Transaction Costs:**
   - Include transaction costs in the payoff calculation:
     ```javascript
     const transactionCost = 0.01; // Example transaction cost
     const payoff = Math.max(price - strike - transactionCost, 0);
     ```

5. **Alternative Models:**
   - Use other stochastic models like Heston model for stochastic volatility or jump-diffusion models for sudden price changes.

6. **Path-Dependent Options:**
   - For options like Asian options, track the average price over time and use it to calculate the payoff:
     ```javascript
     let avgPrice = 0;
     for (let t = 0; t < expiration; t += dt) {
       // Update avgPrice in the loop
       avgPrice += price;
     }
     avgPrice /= (expiration / dt);
     const payoff = Math.max(avgPrice - strike, 0);
     ```


The current Monte Carlo simulation code makes several simplifying assumptions to price a European call option. However, it can be adapted to handle more complex scenarios by modifying the underlying assumptions and incorporating additional factors such as variable volatility, dividends, transaction costs, and early exercise features. This flexibility allows for a more accurate representation of real-world market conditions.
