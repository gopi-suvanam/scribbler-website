---
title: A Guide to Monte Carlo Simulation with JavaScript Examples
description: We look at how to use Monte Carlo simulation for solving various scientific and computation problems in JavaScript.
layout: post
start_link: https://app.scribbler.live/#github:gopi-suvanam/scribbler/examples/Monte-Carlo-Simulation.jsnb
categories: Scientific
---

## Introduction to Monte Carlo simulation

Monte Carlo simulation is a powerful computational technique used to model and analyze complex systems through random sampling. This method, named after the famous Monte Carlo Casino, leverages randomness to estimate probabilistic outcomes by performing repeated random sampling computations. Originally developed during the Manhattan Project in the 1940s for nuclear weapons research, Monte Carlo simulation has since become a fundamental tool in various fields, including finance, engineering, physics, and computer science.

### Historical Context

The Monte Carlo simulation technique was first proposed by scientists like Stanislaw Ulam and John von Neumann during their work on nuclear physics and random sampling methods in the mid-20th century. The method gained widespread popularity due to its effectiveness in solving complex problems involving probabilistic uncertainty, eventually becoming a cornerstone of modern computational science.

## Method Overview

Monte Carlo simulations rely on generating random samples from probability distributions to approximate numerical results. The basic steps involved in a Monte Carlo simulation are as follows:

1. *Define the Problem*: Identify the system or process to be simulated and specify the relevant parameters and variables.

2. *Generate Random Inputs*: Sample random values for the input variables from their respective probability distributions.

3. *Perform Simulations*: Apply the sampled input values to the model or system and perform computations to obtain the output.

4. *Aggregate Results*: Repeat the simulation process multiple times (iterations) and aggregate the results to estimate statistical properties of interest (e.g., mean, variance).

### Various Methods

Monte Carlo simulation encompasses various methods tailored to specific types of problems:

- *Monte Carlo Integration*: Estimate integrals using random sampling methods like the hit-or-miss or importance sampling techniques.
  
- *Monte Carlo Markov Chain (MCMC)*: Generate samples from complex probability distributions using algorithms such as Metropolis-Hastings or Gibbs sampling.

- [*Monte Carlo Option Pricing*](https://scribbler.live/2023/05/04/Monte-Carlo-Simulation-for-Option-Pricing.html): Calculate option prices in finance by simulating future stock price trajectories.

## Applications of Monte Carlo Simulation in JavaScript

1. **Financial Modeling**:
   - **Portfolio Analysis**: Assessing the risk and return of investment portfolios.
   - **Option Pricing**: Calculating the value of financial derivatives like options.

2. **Risk Management**:
   - **Project Management**: Estimating project timelines and costs with uncertainty.
   - **Insurance**: Evaluating risk and determining premiums for insurance policies.

3. **Game Development**:
   - **Random Event Simulation**: Creating realistic and unpredictable game environments.
   - **AI Decision Making**: Enhancing non-player character behavior through probabilistic methods.

4. **Scientific Research**:
   - **Particle Physics**: Simulating particle interactions and decay processes.
   - **Climate Modeling**: Predicting climate change scenarios based on variable data.

5. **Operations Research**:
   - **Supply Chain Optimization**: Improving logistics and inventory management under uncertainty.
   - **Queueing Theory**: Analyzing and optimizing customer service systems and networks.

6. **Healthcare**:
   - **Epidemiology**: Modeling the spread of diseases and the impact of interventions.
   - **Medical Trials**: Simulating patient outcomes and treatment efficacy.

7. **Marketing Analysis**:
   - **Customer Behavior**: Predicting customer responses to different marketing strategies.
   - **Market Penetration**: Estimating the success of new product launches.
   

## JavaScript Code Examples

The examples below give an overview of Monte Carlo Simulation techniques. Use this notebook for experimenting: [Monte Carlo Simulation Notebook](https://app.scribbler.live/#github:gopi-suvanam/scribbler/examples/Monte-Carlo-Simulation.jsnb)

### Example 1: Monte Carlo Simulation for Estimating the Value of π

Let's demonstrate a simple Monte Carlo simulation in JavaScript to estimate the value of π using random sampling in a unit square and circle:

```javascript
function estimatePi(numSamples) {
    let insideCircle = 0;

    for (let i = 0; i < numSamples; i++) {
        const x = Math.random(); // Random x-coordinate in [0, 1)
        const y = Math.random(); // Random y-coordinate in [0, 1)

        // Check if the point (x, y) is inside the unit circle
        if (x * x + y * y < 1) {
            insideCircle++;
        }
    }

    // Estimate pi as the ratio of points inside the circle to total points
    const piEstimate = (4 * insideCircle) / numSamples;
    return piEstimate;
}

// Example: Estimate pi using 1 million samples
const numSamples = 1000000;
const estimatedPi = estimatePi(numSamples);
console.log("Estimated value of π:", estimatedPi);
```

In this example:
- We randomly sample points (x, y) within a unit square [0, 1) × [0, 1).
- We count the number of points falling inside the unit circle (centered at the origin with radius 1).
- The estimated value of π is calculated as the ratio of points inside the circle to the total number of samples.

Let's expand the JavaScript code examples to include additional Monte Carlo simulations demonstrating different applications. Below are two more examples: one for estimating the area under a curve using Monte Carlo integration and another for simulating a simple game of dice.

### Example 2: Monte Carlo Integration for Area Estimation

Suppose we want to estimate the area under the curve of a given function f(x) within a specified interval [a, b] using Monte Carlo integration:

```javascript
function monteCarloIntegration(func, a, b, numSamples) {
    let areaEstimate = 0;

    for (let i = 0; i < numSamples; i++) {
        const x = a + Math.random() * (b - a); // Random x in [a, b]
        const y = func(x); // Evaluate the function at x

        // Check if the point (x, y) is below the curve y = f(x)
        if (Math.random() * (b - a) < y) {
            areaEstimate += 1; // Point is below the curve, count it
        }
    }

    // Estimate the area as the ratio of counted points to total points
    areaEstimate = areaEstimate / numSamples * (b - a);
    return areaEstimate;
}

// Example: Estimate the area under the curve y = x^2 from 0 to 1 using 1 million samples
const func = x => x * x;
const a = 0;
const b = 1;
const numSamples = 1000000;

const estimatedArea = monteCarloIntegration(func, a, b, numSamples);
console.log("Estimated area under the curve y = x^2 from 0 to 1:", estimatedArea);
```

In this example:
- We sample random points (x, y) within the rectangle \([a, b] \times [0, \max(f(x))]\).
- We count the number of points that fall below the curve \( y = f(x) \).
- The estimated area under the curve is calculated as the ratio of points below the curve to the total number of samples.

### Example 3: Monte Carlo Simulation of a Dice Game

Let's simulate a simple dice game using Monte Carlo methods to estimate the probability of rolling a sum of 7 with two dice:

```javascript
function rollDice() {
    return Math.floor(Math.random() * 6) + 1; // Roll a 6-sided die
}

function simulateDiceGame(numTrials) {
    let countSum7 = 0;

    for (let i = 0; i < numTrials; i++) {
        const dice1 = rollDice();
        const dice2 = rollDice();

        // Check if the sum of two dice is equal to 7
        if (dice1 + dice2 === 7) {
            countSum7++; // Count successful outcomes (sum of 7)
        }
    }

    // Estimate the probability of rolling a sum of 7
    const probabilitySum7 = countSum7 / numTrials;
    return probabilitySum7;
}

// Example: Estimate the probability of rolling a sum of 7 with two dice using 1 million trials
const numTrials = 1000000;
const estimatedProbability = simulateDiceGame(numTrials);
console.log("Estimated probability of rolling a sum of 7 with two dice:", estimatedProbability);
```

In this example:
- We simulate rolling two six-sided dice repeatedly.
- We count the number of trials where the sum of the dice is equal to 7.
- The estimated probability of rolling a sum of 7 is calculated as the ratio of successful outcomes to the total number of trials.

## Conclusion

Monte Carlo simulation is a versatile and powerful technique for solving complex problems involving uncertainty and randomness. By leveraging random sampling and statistical inference, Monte Carlo methods enable researchers and practitioners to make informed decisions, optimize processes, and understand probabilistic systems across various disciplines. JavaScript provides a convenient platform for implementing Monte Carlo simulations, making these computational tools accessible to a wider audience for educational and practical applications.

Feel free to use these code examples as starting points for further exploration and application of Monte Carlo simulations in your projects and studies. Experiment with different simulations and explore advanced Monte Carlo methods to tackle challenging problems in science, engineering, finance, and beyond. Use this notebook for experimenting: [Monte Carlo Simulation Notebook](https://app.scribbler.live/#github:gopi-suvanam/scribbler/examples/Monte-Carlo-Simulation.jsnb)
