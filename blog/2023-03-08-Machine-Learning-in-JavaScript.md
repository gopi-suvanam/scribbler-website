---
layout: post
title: Machine Learning in JavaScript
description: Python has been the main language for machine learning but JavaScript is good alternative especially for decentralized machine learning.
---

Machine learning in JavaScript could be a powerful paradign for building [decentralized AI systems](/2023/02/25/Decentralized-Artificial-Intelligence.html). JavaScript is a [versatile programming langauge](/2023/02/22/Why-JavaScript-is-Great.html) and it is ideal especially for [edge computing](/2023/01/14/JavaScript-Ideal-For-Fog-Computing.html).This article highlights how machine learning can be done in JavaScript using simple code. 

### ML Libraries in JavaScript
Here's a list of some popular machine learning libraries in JavaScript:

1. [TensorFlow.js](https://www.tensorflow.org/js) - A library for building and training machine learning models in JavaScript and deploying them in the browser or on Node.js.

2. [Brain.js](https://brain.js.org/#/) - A flexible neural network library for JavaScript that supports both backpropagation and reinforcement learning.

3. [Synaptic](https://caza.la/synaptic/#/) - A simple and lightweight neural network library for browser and Node.js that supports various types of neural networks including multi-layer perceptrons, Hopfield networks, and self-organizing maps.

4. [ConvNetJS](https://cs.stanford.edu/people/karpathy/convnetjs/started.html) - A library for training deep neural networks in the browser or on Node.js that supports various types of layers and activation functions.

5. [ML.js](https://github.com/mljs/ml) - A collection of machine learning algorithms implemented in JavaScript that includes regression, clustering, and classification models.

6. [Neataptic](https://wagenaartje.github.io/neataptic/) - A neat and modular neural network library for JavaScript that allows easy building and training of various types of neural networks.

7. [Keras-js](https://transcranial.github.io/keras-js/#/) - A library that allows running Keras models in the browser or on Node.js using WebGL.

8. [Weka.js](https://github.com/MtnFranke/node-weka) - A JavaScript port of the popular machine learning library Weka that provides various algorithms for data mining, machine learning, and predictive modeling.

There are many other machine learning libraries available in JavaScript, and this is just a selection of popular ones.

### Image Classification using JavaScript
Here's an example code using TensorFlow.js library for image classification:

	<html>
	<head>
	  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.7.0"></script>
	  <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@2.0.4"></script>
	  <script>
	    async function classifyImage() {
	      const img = document.getElementById('img');
	      const model = await mobilenet.load();
	      const predictions = await model.classify(img);
	      console.log('Predictions: ', predictions);
	      document.getElementById('result').innerHTML = predictions[0].className;
	    }
	  </script>
	</head>
	<body>
	  <img src="image.jpg" id="img" width="224" height="224" onload="classifyImage()">
	  <div id="result"></div>
	</body>
	</html>
	
This code loads the MobileNet model, which has been pre-trained on a large dataset of images, and uses it to classify a new image. The classifyImage() function loads the image and makes a prediction using the pre-trained model, and then displays the top prediction in the result div.

This is just a simple example, but TensorFlow.js supports many other machine learning models and tasks such as object detection, text classification, and more.

### Text Classification using JavaScript
Here's an example of using TensorFlow.js for text classification in JavaScript:

	<html>
	<head>
	  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.7.0"></script>
	  <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/universal-sentence-encoder@4.0.0"></script>
	  <script>
	    async function classifyText() {
	      const model = await tf.loadLayersModel('model.json');
	      const encoder = await use.load();
	      const text = document.getElementById('text').value;
	      const embeddings = encoder.embed(text);
	      const prediction = model.predict(embeddings).dataSync();
	      console.log('Prediction: ', prediction);
	      document.getElementById('result').innerHTML = prediction[0] > 0.5 ? 'Positive' : 'Negative';
	    }
	  </script>
	</head>
	<body>
	  <textarea id="text" cols="50" rows="10"></textarea>
	  <button onclick="classifyText()">Classify</button>
	  <div id="result"></div>
	</body>
	</html>

This code loads a pre-trained text classification model that was trained using Universal Sentence Encoder, which is a deep learning model that encodes text into high-dimensional vectors. The classifyText() function takes user input text, encodes it using the Universal Sentence Encoder, and then makes a prediction using the pre-trained model. The result is displayed as either "Positive" or "Negative" depending on the predicted sentiment.

This is just another example of how TensorFlow.js can be used to perform machine learning tasks in JavaScript, and there are many other models and tasks that can be tackled with this library.

### Machine Learning in JavaScript using Scikit-Learn
There are several other libraries other than TensorFlow for machine learning. Scikit-learn is another popular library. Below is example of using scikit-learn library for a simple classification problem in JavaScript using the scikit-js library:

	<html>
	<head>
	  <script src="https://cdn.jsdelivr.net/npm/scikit-js"></script>
	  <script>
	    async function classifyData() {
	      const data = [
	        [0.5, 0.5],
	        [0.7, 0.8],
	        [0.1, 0.2],
	        [0.4, 0.6],
	        [0.25, 0.75]
	      ];
	      const labels = [0, 1, 0, 1, 0];
	      const model = new scikitjs.KNeighborsClassifier();
	      model.fit(data, labels);
	      const testData = [[0.6, 0.4]];
	      const prediction = model.predict(testData);
	      console.log('Prediction: ', prediction[0]);
	      document.getElementById('result').innerHTML = prediction[0];
	    }
	  </script>
	</head>
	<body>
	  <button onclick="classifyData()">Classify Data</button>
	  <div id="result"></div>
	</body>
	</html>

This code uses scikit-js, a JavaScript implementation of scikit-learn, to perform a simple classification task. The classifyData() function defines a dataset of two-dimensional data points and their corresponding labels, and fits a K-nearest neighbors (KNN) classification model to the data using the KNeighborsClassifier class. Then, the function uses the trained model to predict the label of a new data point and displays the result.

This is just a simple example, but scikit-learn provides many other machine learning models and tools for a wide range of tasks such as regression, clustering, and more.





