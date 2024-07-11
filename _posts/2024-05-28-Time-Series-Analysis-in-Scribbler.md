---
title: How to do Time Series Analysis for Data Science Projects Using Scribbler
layout: post
description:  Scribbler is an excellent tool for performing time series analysis in data science projects. You can load, analyze, and visualize time series data directly in your browser and you can apply advanced statistical models like ARIMA for forecasting. 
start_link: https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/time-series.jsnb
categories: [Scribbler, DataScience]
---

Scribbler is a powerful JavaScript notebook tool that allows you to run JavaScript and HTML code in the browser, making it an excellent platform for time series analysis in data science projects. In this article, we'll explore how to use Scribbler to perform time series analysis, including loading data from an external source and conducting basic analysis.

## Time Series Analysis

Time series analysis is a statistical technique used to analyze and interpret patterns in data points collected over time. It has numerous applications across various domains where understanding trends, patterns, and forecasting future values are crucial. Here are some key applications of time series analysis:

### 1. **Economics and Finance**

- **Stock Market Analysis**: Analyzing historical stock prices to identify trends, seasonal patterns, and cycles. Techniques like ARIMA (AutoRegressive Integrated Moving Average) models and GARCH (Generalized Autoregressive Conditional Heteroskedasticity) models are commonly used.
- **Macroeconomic Forecasting**: Predicting future economic indicators such as GDP growth, inflation rates, and unemployment rates based on historical data.
- **Risk Management**: Assessing and forecasting financial risks, including volatility modeling, Value at Risk (VaR) estimation, and stress testing.

### 2. **Business Forecasting**

- **Sales Forecasting**: Predicting future sales based on past sales data to optimize inventory management, production planning, and resource allocation.
- **Demand Forecasting**: Forecasting customer demand for products and services to optimize supply chain operations and marketing strategies.
- **Budgeting and Financial Planning**: Using time series analysis to forecast revenues, expenses, and cash flows for budgeting and financial planning purposes.

### 3. **Meteorology and Climate Science**

- **Weather Forecasting**: Analyzing historical weather data (temperature, humidity, precipitation) to predict future weather conditions and extreme events.
- **Climate Change Analysis**: Studying long-term trends and patterns in temperature, sea level rise, and other climate variables to understand climate change impacts.

### 4. **Engineering and Manufacturing**

- **Quality Control**: Monitoring and analyzing process data over time to detect deviations, defects, or anomalies in manufacturing processes.
- **Predictive Maintenance**: Using sensor data and historical maintenance records to predict equipment failures and optimize maintenance schedules.

### 5. **Healthcare and Epidemiology**

- **Disease Surveillance**: Tracking and predicting the spread of infectious diseases based on historical incidence data.
- **Patient Monitoring**: Analyzing time series data from medical sensors (e.g., heart rate monitors, EEG) to monitor patient health and detect anomalies.

### 6. **Social Sciences and Demography**

- **Population Studies**: Analyzing demographic data (birth rates, mortality rates, migration patterns) to study population trends and forecast future demographics.
- **Social Media Analytics**: Analyzing time series data from social media platforms to track trends, user engagement, and sentiment over time.

### 7. **Transportation and Urban Planning**

- **Traffic Forecasting**: Predicting traffic volumes and congestion patterns based on historical traffic data to optimize transportation infrastructure and urban planning.
- **Public Transit Demand**: Forecasting demand for public transit services to optimize routes, schedules, and resource allocation.

### 8. **Energy and Utilities**

- **Energy Consumption Forecasting**: Predicting future energy demand based on historical consumption patterns to optimize energy production, distribution, and pricing.
- **Renewable Energy Forecasting**: Forecasting output from renewable energy sources (e.g., solar, wind) based on weather conditions and historical data to optimize integration into the power grid.

### 9. **Education and Institutional Research**

- **Student Enrollment Forecasting**: Predicting future student enrollments based on historical enrollment data to optimize resource allocation and facilities planning in educational institutions.
- **Academic Performance Analysis**: Analyzing student performance data over time to identify trends, patterns, and factors influencing academic achievement.

### 10. **Marketing and Consumer Behavior**

- **Market Research**: Analyzing sales data and consumer behavior over time to identify market trends, seasonality, and customer preferences.
- **Campaign Effectiveness**: Evaluating the impact and effectiveness of marketing campaigns over time to optimize marketing strategies and investments.


Time series analysis plays a critical role in understanding past trends, predicting future outcomes, and making informed decisions across a wide range of disciplines. Advances in computational techniques and availability of large datasets have further enhanced its applicability and relevance in various domains.

## Why JavaScript and Scribbler for Time Series Analysis

Scribbler is a JavaScript notebook tool, a platform for interactive computing and data analysis similar to Jupyter notebooks. Using JavaScript with Scribbler for time series analysis offers several distinct advantages:

### 1. **Interactive Computing Environment**

- **Code Execution**: Scribbler provides an interactive environment where JavaScript code can be written, executed, and visualized in real-time. This is ideal for exploratory data analysis (EDA) and iterative development of time series analysis algorithms.

- **Immediate Feedback**: Users can execute JavaScript code cells sequentially, instantly seeing results, visualizations, and statistical summaries. This immediate feedback facilitates rapid experimentation and debugging.

### 2. **Rich Visualization Capabilities**

- **Data Visualization**: JavaScript libraries like D3.js, Chart.js, and Plotly.js can be integrated seamlessly within Scribbler notebooks. These libraries offer powerful visualization capabilities for plotting time series data, exploring trends, and creating interactive charts and graphs.

- **Customizable Dashboards**: Users can create customizable dashboards and interactive widgets to explore and analyze time series data dynamically. This flexibility allows for tailored visual representations based on specific analysis requirements.

### 3. **Educational and Collaborative Features**

- **Teaching and Learning**: Scribbler is often used in educational settings to teach programming concepts and data analysis techniques. JavaScript notebooks provide a hands-on learning experience for students to experiment with time series algorithms and visualize results interactively.

- **Collaboration**: Scribbler supports collaboration features, allowing multiple users to work on the same notebook simultaneously. This is beneficial for team projects, workshops, and collaborative research efforts involving time series analysis.

### 4. **Data Integration and Access**

- **Data Handling**: JavaScript within Scribbler notebooks can fetch data from various sources, including APIs, databases, and local files. This capability enables seamless integration of external data for time series analysis and visualization.

- **Dynamic Data Updates**: Scribbler notebooks can handle dynamic data updates, making them suitable for applications requiring real-time monitoring and analysis of streaming time series data.

### 5. **Community and Documentation**

- **Community Support**: JavaScript notebooks like Scribbler benefit from a supportive community of users and developers. This community provides resources, tutorials, and shared notebooks that facilitate learning and troubleshooting for time series analysis tasks.

- **Documentation and Examples**: Scribbler typically offers comprehensive documentation and example notebooks showcasing different time series analysis techniques, algorithms, and visualizations. This helps users quickly get started and explore advanced functionalities.


In conclusion, using JavaScript with Scribbler for time series analysis combines the flexibility of JavaScript programming with the interactive and collaborative features of a notebook environment. This setup is particularly advantageous for educational purposes, rapid prototyping, and interactive data exploration and visualization in web-based applications.



## Getting Started with Scribbler

Scribbler notebooks consist of cells that can contain either HTML or JavaScript code. You can also load external libraries using the `scrib.loadScript` function, which enables you to leverage various JavaScript libraries for data analysis and visualization.
First, let's create html cell to hold data and chart:

*HTML Cell*
```html
  <div id="chart"></div>
```


### Loading Data from an External Source

Now let's load time series data from an external source. We'll use the [Yahoo Finance API](https://developer.yahoo.com/api/) to fetch historical stock prices for a given company. In the code below we are using [All Origins](https://allorigins.win/) for [CORS security](https://portswigger.net/web-security/cors).


*JavaScript Cell*
```javascript
async function loadYahooFinanceData(symbol, startDate, endDate) {
      const url = `https://query1.finance.yahoo.com/v7/finance/download/${symbol}?period1=${Math.floor(new Date(startDate).getTime() / 1000)}&period2=${Math.floor(new Date(endDate).getTime() / 1000)}&interval=1d&events=history&includeAdjustedClose=true`;
	
      const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
      const responseJSON = await response.json();
	  const dataURL=responseJSON.contents;
	  const base64String = dataURL.split(',')[1];
     const csvText = atob(base64String);

	  console.log(dataURL);
      return csvText;
    }

    function parseCSVData(csvData) {
      const lines = csvData.split('\n');
      const headers = lines[0].split(',');
      const data = lines.slice(1).map(line => {
        const values = line.split(',');
        const entry = {};
        headers.forEach((header, index) => {
          entry[header] = values[index];
        });
        return entry;
      });
      return data;
    }
var timeSeriesData

//Load the data
(async function(){
  const symbol = 'AAPL'; // Apple Inc.
  const startDate = '2023-01-01';
  const endDate = '2024-01-01';
  const csvData = await loadYahooFinanceData(symbol, startDate, endDate);
   timeSeriesData = parseCSVData(csvData);
  scrib.show("loaded data");
})();


```

### Time Series Analysis

Once we have the data, we can perform basic time series analysis. In this example, we will calculate the [moving average](https://en.wikipedia.org/wiki/Moving_average), a common technique used to smooth out short-term fluctuations and highlight longer-term trends.

```javascript
    

    function calculateMovingAverage(data, period) {
      return data.map((entry, index, arr) => {
        if (index < period - 1) {
          return { ...entry, movingAverage: null };
        }
        const slice = arr.slice(index - period + 1, index + 1);
        const sum = slice.reduce((acc, val) => acc + parseFloat(val['Close']), 0);
        const movingAverage = sum / period;
        return { ...entry, movingAverage };
      });
    }

    
```

### Visualizing the Data

For visualizing the data, we can use [Plotly](https://plotly.com/), a powerful charting library. Plotly already comes pre-loaded in Scribbler. Let's add a simple line chart to visualize the closing prices and the moving average.

*Code Cell*
```javascript
let  movingAverageData = calculateMovingAverage(timeSeriesData, 5);
let closingData=timeSeriesData.map(entry=>[entry['Date'],entry['Close']]);
let params={
 'names':['Closing Prices','Moving Average'] 
};
[closingData.transpose(),movingAverageData.transpose()].plot('multi-line','chart',params)```
```


## AutoRegressive (AR) Model

The [autoregressive model](https://en.wikipedia.org/wiki/Autoregressive_model) predicts a value based on a number of lagged values (previous observations). 

### Steps:
1. Define a function to calculate the coefficients for the AR model.
2. Use these coefficients to make predictions.

Here's a basic implementation:

### 1. Calculate AR Coefficients
For simplicity, we'll use the Yule-Walker equations to estimate the AR coefficients.

```javascript
function calculateARCoefficients(series, p) {
  const n = series.length;
  let autoCovariance = [];
  for (let k = 0; k <= p; k++) {
    let sum = 0;
    for (let t = k; t < n; t++) {
      sum += series[t] * series[t - k];
    }
    autoCovariance.push(sum / n);
  }

  let R = [];
  for (let i = 0; i < p; i++) {
    R[i] = [];
    for (let j = 0; j < p; j++) {
      R[i][j] = autoCovariance[Math.abs(i - j)];
    }
  }

  let r = autoCovariance.slice(1, p + 1);
  return solveMatrix(R, r);
}

function solveMatrix(R, r) {
  // Simple matrix solver for small matrices using Gaussian elimination
  const n = R.length;
  for (let i = 0; i < n; i++) {
    let maxEl = Math.abs(R[i][i]);
    let maxRow = i;
    for (let k = i + 1; k < n; k++) {
      if (Math.abs(R[k][i]) > maxEl) {
        maxEl = Math.abs(R[k][i]);
        maxRow = k;
      }
    }
    for (let k = i; k < n; k++) {
      [R[maxRow][k], R[i][k]] = [R[i][k], R[maxRow][k]];
    }
    [r[maxRow], r[i]] = [r[i], r[maxRow]];

    for (let k = i + 1; k < n; k++) {
      let c = -R[k][i] / R[i][i];
      for (let j = i; j < n; j++) {
        if (i === j) {
          R[k][j] = 0;
        } else {
          R[k][j] += c * R[i][j];
        }
      }
      r[k] += c * r[i];
    }
  }

  let coeffs = Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    coeffs[i] = r[i] / R[i][i];
    for (let k = i - 1; k >= 0; k--) {
      r[k] -= R[k][i] * coeffs[i];
    }
  }
  return coeffs;
}
```

### 2. AR Model Prediction
Use the calculated coefficients to make predictions.

```javascript
function predictAR(series, p, numPredictions) {
  const coeffs = calculateARCoefficients(series, p);
  let predictions = series.slice();

  for (let i = 0; i < numPredictions; i++) {
    let nextValue = 0;
    for (let j = 0; j < p; j++) {
      nextValue += coeffs[j] * predictions[predictions.length - j - 1];
    }
    predictions.push(nextValue);
  }
  return predictions.slice(series.length);
}

// Example usage
const data = [112, 118, 132, 129, 121, 135, 148, 148, 136, 119, 104, 118, 115, 126, 141, 135, 125, 149, 170, 170, 158, 133, 114, 140, 145, 150, 178, 163, 172, 178];

const p = 2; // Number of lag observations (AR order)
const numPredictions = 5; // Number of future points to predict

const forecast = predictAR(data, p, numPredictions);
console.log('Forecast:', forecast);
```

### Explanation:
1. **calculateARCoefficients**: This function calculates the AR coefficients using the Yule-Walker equations and a simple Gaussian elimination method for solving linear equations.
2. **predictAR**: This function uses the calculated coefficients to predict future values based on the AR model.

This simple AR model can predict future values based on the linear combination of the past `p` values. While this implementation is basic, it illustrates the core concepts of autoregression. For more sophisticated models, especially for larger datasets and more complex time series, it's advisable to use specialized libraries or statistical software.


### Finally Calling the Autoregssion Function and Plotting the Result

```javascript
const closingPrices = timeSeriesData.map(entry => parseFloat(entry['Close']));
const p = 2; // Number of lag observations (AR order)
const numPredictions = 5; // Number of future points to predict

const forecast = predictAR(closingPrices, p, numPredictions);
forecast.plot()
```

## Experiment With Time-series

The Scribbler JavaScript notebook is an ideal tool for time series analysis due to its interactive and flexible environment. It allows users to write and execute JavaScript code directly in their web browser, making it highly accessible and easy to use. With the ability to import and utilize various JavaScript libraries, such as `mljs`, `simple-statistics`, and `TensorFlow.js`, it supports comprehensive data analysis and machine learning tasks. This interactivity is particularly beneficial for time series analysis, as users can visualize data trends, perform transformations, and apply models like ARIMA or autoregressive models in real-time. Additionally, the notebook's capability to display graphical outputs and charts inline enhances the analytical process, providing immediate visual feedback and aiding in the intuitive understanding of complex time series data. By combining code execution, data visualization, and the power of modern JavaScript libraries, Scribbler JavaScript notebook offers a robust platform for conducting detailed and insightful time series analysis.

For experimenting in time-series use this notebook: [Time-Series Analysis Notebook](https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/time-series.jsnb)


