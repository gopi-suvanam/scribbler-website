---
title: Bonus Lesson - Putting it All Together
layout: default
description: The is a bonus lesson on JavaScript tutorial. It helps you build a small web-application from scratch.
---
## Introduction
In this bonus lesson, we'll put together everything we've learned so far to create a dynamic web application for charting cryptocurrency prices using a public, free API. We'll use D3.js to create interactive charts based on user input. This lesson is the last of the tutorial : [JavaScript Tutorial for Beginners](https://scribbler.live/learn/javascript-tutorial-beginners/)

## HTML Structure:

Let's start by setting up the HTML structure for our web application. We'll include input fields for selecting the cryptocurrency symbol (e.g., BTC, ETH) and a container for displaying the chart.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cryptocurrency Price Chart</title>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

    <style>
        /* CSS styles for chart container */
        #chart {
            width: 800px;
            height: 400px;
            margin: 20px auto;
            border: 1px solid #ccc;
        }
    </style>
</head>


<body>
    <h1>Cryptocurrency Price Chart</h1>
    <label for="cryptoSymbol">Enter Cryptocurrency Symbol (e.g., BTC, ETH):</label>
    <input type="text" id="cryptoSymbol" placeholder="BTC">
    <button id="loadButton">Load Chart</button>
    
    <div id="chart"></div>

    <script src="script.js"></script>
</body>
</html>
```

Save this file as index.html.

## JavaScript (script.js):

First creat a function that fetches the data for a particular currency. We will use the following concepts discussed during the course:
1. `document.getElementById` to get the name of the crypt-currency from input
2. `fetch` for getting data from API
3. `reponose.json` for converting the API output to an object.
4. `.then` for asynchronous process.
5. `.forEach` for running a loo[
6. `.push` for pushing a value into an array
7. `.addEventListener` to attach a function to a click event

We will also use a special function Date to convert a timestamp to a date and we will use Plotly.newPlot - a function to plot data into a chart.

```javascript

function drawGraph(){
    // Fetch cryptocurrency data from API
    let currencySymbol = document.getElementById('cryptoSymbol').value.toLowerCase();
    fetch('https://api.coingecko.com/api/v3/coins/'+currencySymbol+'/market_chart?vs_currency=usd&days=7')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Process data
            const cryptoSymbol = document.getElementById('cryptoSymbol').value.toUpperCase();
   	    const prices = [];
            const timestamps = [];
        //Run a loop across the price points and extract the time and price
   	data.prices.forEach(function(data_point){
   		prices.push(data_point[1]);
   		timestamps.push(new Date(data_point[0]));
   		
   	})
   	
   	//Create data in the format required for Plotly
        let chartData = [{
            x: timestamps,
            y: prices,
            type: 'line'
        }];
        
        //Additional items on the graph
        let layout = {
            title: `Cryptocurrency Chart for ${currencySymbol}`,
            xaxis: { title: 'Date' },
            yaxis: { title: 'Price (USD)' }
        };
        Plotly.newPlot('chart', chartData, layout);
        
    })
    .catch(error => {
        // Handle errors if API request fails
        console.error('There was a problem fetching cryptocurrency data:', error);
    });
}

```

Add the below line to the script file for attaching the function to the click event of the 

```
document.getElementById('loadButton').addEventListener('click', drawGraph);
```

Save this file as script.js in the same folder where you have save index.html. Now double click and open index.html in the browser. Enter "bitcoin" in the input field and click the "Load Chart" button. Voila! You have your first web-app ready. 

## Explanation
Explanation:
- We listen for the click event on the "Load Data" button and retrieve the user-input cryptocurrency symbol.
- We then fetch cryptocurrency data for the specified symbol from the CoinGecko API.
- If the fetch operation is successful, we extract price data and timestamps from the response.
- We create a Plotly chart using the extracted data, specifying the x-axis (timestamps) and y-axis (prices).
- The chart is then displayed in the <div id="chart"></div> element.
- If there's an error during the fetch operation, we log it to the console for debugging.

## Summary
By integrating dynamic import, API usage, and the Plotly library, we've created an interactive cryptocurrency charting tool. Users can input a cryptocurrency symbol, and our application dynamically fetches and visualizes its price data. This example demonstrates how to leverage modern web development techniques to create powerful and user-friendly data visualization applications. This application use various concepts discussed through out the course and gives the learners a handson problem to learn.
