---
title: Building Web-Based Machine Learning Models Using TensorFlow.js
description: TensorFlow.js provides a powerful way to build and deploy machine learning models directly in the browser. 
start_link: https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Tensorflow-ML-Example.jsnb
categories: [AI-ML,Libraries]
layout: post
---

In this article, we will explore how to build machine learning models directly in the browser using **TensorFlow.js**. This approach allows us to leverage the power of machine learning without the need for backend servers. We will demonstrate how to load data from an online source, preprocess it, and train a simple neural network model.

## What is TensorFlow.js?

TensorFlow.js is a library for developing and deploying machine learning models in the browser or on Node.js. It provides several tools to load pre-trained models, build models from scratch, or even convert Python-based TensorFlow models to be used in JavaScript.


- **In-browser computation**: No need for server-side processing—everything happens in the browser.
- **Real-time interactivity**: Can handle real-time user interactions and dynamically update the model.
- **GPU support**: TensorFlow.js utilizes WebGL for GPU acceleration, making it feasible to train complex models in the browser.
  
## Step 1: Setting Up TensorFlow.js

To begin, you can include TensorFlow.js directly via CDN in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
```


## Step 2: Loading Data from an Online Source

We will load a CSV file of sample data from an online source using `fetch` in JavaScript. For this example, let’s assume we are working with a CSV of housing prices, where each row represents a house with features such as the number of rooms, area, and price.

Here’s how to load and parse the data:

```javascript
async function loadData() {
  const response = await fetch('https://example.com/housing_data.csv');
  const csvData = await response.text();

  const parsedData = csvData.split('\n').slice(1).map(row => {
    const cols = row.split(',');
    return {
      rooms: parseFloat(cols[0]),
      area: parseFloat(cols[1]),
      price: parseFloat(cols[2])
    };
  });

  return parsedData;
}
```

This function fetches the data from a CSV file hosted online and parses it into an array of objects where each object corresponds to a row in the dataset.

## Step 3: Preprocessing Data

Once the data is loaded, we need to prepare it for model training. We will split the dataset into features (inputs) and labels (outputs) and normalize the data.

```javascript
function preprocessData(data) {
  const inputs = data.map(d => [d.rooms, d.area]);
  const labels = data.map(d => d.price);

  // Convert to tensors
  const inputTensor = tf.tensor2d(inputs);
  const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

  // Normalize the data
  const inputMax = inputTensor.max();
  const inputMin = inputTensor.min();
  const normalizedInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));

  const labelMax = labelTensor.max();
  const labelMin = labelTensor.min();
  const normalizedLabels = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));

  return {
    inputs: normalizedInputs,
    labels: normalizedLabels,
    inputMax,
    inputMin,
    labelMax,
    labelMin
  };
}
```

In this preprocessing step, we normalize the inputs and labels, ensuring that all values are scaled between 0 and 1.

## Step 4: Building the Model

Now, let’s build a simple neural network model using TensorFlow.js. The model will consist of three layers: an input layer, a hidden layer, and an output layer.

```javascript
function createModel() {
  const model = tf.sequential();

  model.add(tf.layers.dense({inputShape: [2], units: 50, activation: 'relu'}));
  model.add(tf.layers.dense({units: 50, activation: 'relu'}));
  model.add(tf.layers.dense({units: 1}));

  model.compile({
    optimizer: tf.train.adam(),
    loss: 'meanSquaredError'
  });

  return model;
}
```

This function creates a basic feedforward neural network. The `inputShape` is set to 2, representing the two features (rooms and area). The network has two hidden layers, each with 50 neurons, and the output layer predicts a single value (house price).

## Step 5: Training the Model

Now that we have our model, we can train it using the preprocessed data.

```javascript
async function trainModel(model, inputs, labels) {
  const history = await model.fit(inputs, labels, {
    epochs: 50,
    batchSize: 32,
    shuffle: true,
    validationSplit: 0.2,
    callbacks: {
      onEpochEnd: (epoch, logs) => {
        console.log(`Epoch ${epoch}: Loss = ${logs.loss}`);
      }
    }
  });
  return history;
}
```

The `fit` method trains the model on the input and label tensors for a given number of epochs. We also define a callback to log the training progress at the end of each epoch.

## Step 6: Making Predictions

Once the model is trained, we can use it to make predictions on new data. Since the model was trained on normalized data, we need to apply the same normalization to the inputs and denormalize the outputs after making predictions.

```javascript
function predict(model, inputData, inputMin, inputMax, labelMin, labelMax) {
  const normalizedInput = tf.tensor2d(inputData).sub(inputMin).div(inputMax.sub(inputMin));
  const predictions = model.predict(normalizedInput);
  const unnormalizedPredictions = predictions.mul(labelMax.sub(labelMin)).add(labelMin);
  
  return unnormalizedPredictions.arraySync();
}
```

## Full Example in Action

Here’s how to put everything together:

```javascript
(async function() {
  // Load and preprocess data
  const rawData = await loadData();
  const {inputs, labels, inputMax, inputMin, labelMax, labelMin} = preprocessData(rawData);

  // Create and train model
  const model = createModel();
  await trainModel(model, inputs, labels);

  // Make predictions
  const testInput = [[3, 1200]]; // Example: 3 rooms, 1200 sqft
  const predictions = predict(model, testInput, inputMin, inputMax, labelMin, labelMax);

  console.log('Predicted Price:', predictions);
})();
```

This code fetches the data, preprocesses it, builds and trains the model, and finally makes predictions. You can easily adapt this approach for other machine learning tasks by modifying the dataset and model architecture.



By leveraging browser-based machine learning, you can create interactive, real-time applications that do not require server-side infrastructure. Try experimenting with different datasets and model architectures to see the full potential of TensorFlow.js!
