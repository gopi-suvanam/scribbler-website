---
title: Using Brain.js for Machine Learning
layout: post
description: Brain.js is a popular open-source JavaScript library for building neural networks useful for solving a wide range of problems.
start_link: https://app.scribbler.live/?jsnb=./examples/Decentralized-ML-Model-Storage.jsnb
---
[Jump to Scribbler Notebook](https://app.scribbler.live/?jsnb=./examples/Decentralized-ML-Model-Storage.jsnb)
## About Brain.js
Brain.js is a popular open-source JavaScript library for building neural networks. It is designed to be easy to use and provides a simple API for creating and training various types of neural networks, including feedforward networks, recurrent networks, and convolutional networks.

With Brain.js, you can build machine learning models that can be used for a variety of tasks, such as text classification, image recognition, and time series analysis. The library is written entirely in JavaScript and runs in the browser as well as on the server-side using Node.js.

Some of the key features of Brain.js include:
- Support for multiple types of neural networks, including feedforward, recurrent, and convolutional networks.
- Simple API for creating and training neural networks.
- Support for both CPU and GPU training.
- Ability to save and load trained models.
- Support for transfer learning, where you can use pre-trained models for new tasks.

Brain.js has a large and active community of developers, and there are many examples and tutorials available online to help you get started with the library. Brain.js is an alternative to [Tensforflow.js](/2023/04/11/Machine-learning-in-Javascript-using-TensorflowJS.html).

### Usecases of Brain.js
Brain.js can be used in a wide range of machine learning applications, including:

Image Recognition: Brain.js can be used to build neural networks that can recognize objects in images. This can be useful for applications like self-driving cars, security systems, and medical imaging.

Natural Language Processing: Brain.js can be used to build models for sentiment analysis, chatbots, and language translation.

Time Series Analysis: Brain.js can be used to build models for forecasting, anomaly detection, and stock market prediction.

Recommendation Systems: Brain.js can be used to build models that can recommend products, movies, or music based on a user's behavior.

Game AI: Brain.js can be used to build intelligent agents for games that can learn and adapt to the player's behavior.

Fraud Detection: Brain.js can be used to build models that can detect fraudulent behavior in financial transactions.

Speech Recognition: Brain.js can be used to build models that can recognize speech and convert it to text. This can be useful for applications like voice assistants and dictation software.

Health Monitoring: Brain.js can be used to build models that can monitor health data, such as heart rate and blood pressure, and predict potential health issues.


Experiment in this notebook on Scribbler:[Decentralized ML Modeling Using Brain.js](https://app.scribbler.live/?jsnb=./examples/Decentralized-ML-Model-Storage.jsnb){: .jsnb-link} 

## Brain.js vs Tensorflow.js
Although Tensorflow.js is more popular, brain.js jas its own advanages. 
- Brain.js:
    - High-Level Abstraction: Brain.js is designed to be more high-level, abstracting away many details of machine learning. This makes it easier for developers who are new to machine learning.
    - JavaScript-Centric: It is specifically written for JavaScript users, so its syntax is more familiar and user-friendly for web developers.
- TensorFlow.js: 
    - Ecosystem and Versatility: TensorFlow.js is part of the larger TensorFlow ecosystem. It allows you to convert existing TensorFlow and Keras models into formats usable by TensorFlow.js. It's versatile and well-maintained across different platforms.
    - Python-Centri: Tensorflow is Python centric and most of its users are Python developers.

## Code examples of Brain.js
Here's a simple example of how to use a CDN to load Brain.js in browsers by loading the library from a CDN:

	<!DOCTYPE html>
	<html>
	<head>
	  <title>Brain.js Example</title>
	  <script src="https://cdn.jsdelivr.net/npm/brain.js"></script>
	</head>
	<body>
	  <script>
	    // create a neural network
	    const net = new brain.NeuralNetwork();
	
	    // define the training data
	    const trainingData = [
	      { input: [0, 0], output: [0] },
	      { input: [0, 1], output: [1] },
	      { input: [1, 0], output: [1] },
	      { input: [1, 1], output: [0] }
	    ];
	
	    // train the network
	    net.train(trainingData);
	
	    // use the network to make predictions
	    console.log(net.run([0, 0])); // output: [0]
	    console.log(net.run([0, 1])); // output: [1]
	    console.log(net.run([1, 0])); // output: [1]
	    console.log(net.run([1, 1])); // output: [0]
	  </script>
	</body>
	</html>
	
In this example, we include the Brain.js library using the CDN provided by jsDelivr in the head of the HTML document. We then create a neural network, define the training data, train the network, and use it to make predictions. The output of the network for each input is printed to the console.

### Digit recognition model

A more complex example would be to build digit recognition. Here's an example code snippet using brain.js in a browser environment to train a neural network on the MNIST dataset for handwritten digit recognition:

	  <script src="https://cdn.jsdelivr.net/npm/brain.js"></script>
	  <script src="https://cdnjs.cloudflare.com/ajax/libs/mnist/1.0.4/mnist.js"></script>
	  
In this example, we include the brain.js and mnist packages using the <script> tags from the CDN (Content Delivery Network). When you open this HTML file in a web browser, the browser will load brain.js and mnist packages from the CDN and execute the JavaScript code.  

	  <script>
	    // Load the MNIST dataset
	    const set = mnist.set(8000, 2000);

	    // Convert the dataset into suitable format for brain.js
	    const trainingData = set.training.map((data) => ({
	      input: data.input,
	      output: data.output,
	    }));
	    const testingData = set.test.map((data) => ({
	      input: data.input,
	      output: data.output,
	    }));

	    // Create a new neural network
	    const net = new brain.NeuralNetwork();

	    // Train the network
	    net.train(trainingData, {
	      log: true,
	      logPeriod: 100,
	    });

	    // Evaluate the network
	    const accuracy = net.test(testingData);
	    console.log('Accuracy:', accuracy);

	    // Make predictions on new data
	   const randomIndex = Math.floor(Math.random() * set.test.length);
	   const randomTestData = set.test[randomIndex];

	    console.log('New Image:');
	    console.log('Input:', newImage.input);
	    console.log('Predicted Output:', prediction);
	  </script>

The training part will take a few minutes, so you have to be patient when the data is loaded.  The training and evaluation process will be logged in the browser console, and the prediction results will also be displayed in the console.

Note: The browser environment may have certain limitations and security restrictions when it comes to loading external scripts or accessing local files. Make sure to adjust the code accordingly and consider the security implications of running machine learning code in a browser environment.
	
### Saving and Loading Models
Usually, model building and using/applying the model does not happen in the same script. Thus there is a need to save the built model and use it in another script/application. [Serialization](/2023/05/27/Serialization-in-Python-JavaScript.html) helps in storing the model and being used in other applications. In Brain.js, this can be done using two functions: toJSON and fromJSON. In the above example, we can store the mode built as a JSON object in a file. 

The model can also be stored in a decentralized platform like [IPFS](https://ipfs.tech/):
	
	const digitReconModel = JSON.stringify(net.toJSON());
	//Download the file, push to cloud or store it IPFS. The code below shows how to store it in IPFS:
	(async ()=>{
	   node = await Ipfs.create()
	  const results = await node.add(digitReconModel)
	  const cid = results['cid']
	  console.log("CID",cid)

	})();
	
This model can be loaded back and used:
	
	(async ()=>{
  		constant digitReconModelJSON='';
		const flow=node.cat();
		  for await(const chunk of flow){
			digitReconModelJSON += chunk.toString().split(",").map(x=>String.fromCharCode(parseInt(x))).join("");
		  }
		 digitReconModel = net.fromJSON(JSON.parse(digitReconModelJSON));
	})();

## Summary
Overall, Brain.js offers a lightweight and accessible solution for implementing machine learning in JavaScript, making it a good choice for developers looking to incorporate machine learning capabilities into their web applications or Node.js projects.
