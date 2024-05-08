---
title: Power of AI in the Browser with Pretrained TensorFlow.js Models
description: TensorFlow.js empowers web developers to harness the full potential of machine learning directly within the browser environment. With its support for both model training and inference, developers can create powerful AI-driven applications without the need for extensive backend infrastructure.
layout: post
start_link:  https://app.scribbler.live/?jsnb=./examples/Tensorflow-Pretrained.jsnb
---

## What is TensorFlow.js?

In recent years, the democratization of machine learning has brought transformative capabilities to developers worldwide. However, the deployment of machine learning models has traditionally required powerful hardware and complex infrastructure. Enter TensorFlow.js, a library that brings the power of machine learning to the browser, allowing developers to create AI-powered applications without the need for extensive backend support.

TensorFlow.js is an open-source library developed by Google that enables machine learning and deep learning models to run directly in the browser or on Node.js. It provides a flexible and intuitive interface for building and deploying machine learning models using JavaScript and WebGL for high-performance computation.

## Why TensorFlow.js?

The use of machine learning in the browser opens up a world of possibilities for developers:

1. *Low-latency Inference*: By running models directly in the browser, inference can be performed with minimal latency, providing real-time responses to user interactions.
  
2. *Privacy*: Since data doesn't leave the user's device, privacy concerns associated with sending data to remote servers are mitigated.
  
3. *Reduced Server Load*: Offloading computation to client devices reduces the load on servers, leading to more scalable applications.
  
4. *Cross-Platform Compatibility*: TensorFlow.js runs in all modern web browsers, as well as in Node.js environments, making it accessible across a wide range of platforms.

In earlier articles we have looked at [Machine Learning in Javascript Using Tensoflow.js](https://scribbler.live/2023/04/11/Machine-learning-in-Javascript-using-TensorflowJS.html) and [Using Brain.js for Machine Learning
](https://scribbler.live/2023/04/30/Machine-Learning-in-JavaScript-using-Brainjs.html). In this article we will look at how to use pretrained models from Tensorflow.js to build AI applications in the browser.

## Getting Started

Let's dive into a simple example to illustrate how to use TensorFlow.js for image classification. We'll build a web application that takes an image input from the user and predicts the object present in the image.

First, include TensorFlow.js in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.11.0/dist/tf.min.js"></script>
```

Next, define your model. For simplicity, we'll use a pre-trained MobileNet model, which is capable of classifying images into a thousand different categories:

```javascript
async function loadModel() {
  const model = await tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json');
           
  return model;
}
```

Then, create a function to handle image classification:

```javascript
async function classifyImage(model, image) {
    // Preprocess the image
    const preprocessedImage = tf.image.resizeBilinear(image, [224, 224]).toFloat().div(255).expandDims();
    
    // Predict the image
    const predictions = model.predict(preprocessedImage);
    return predictions;
}

```

Finally, wire up the HTML and JavaScript to capture an image from the user and display the prediction:

```html
<h1>Image Classification with Pretrained Model</h1>
<input type="file" id="image-selector">
<img id="selected-image" src="#" alt="Selected Image" style="max-width: 300px;">
<h2>Predictions:</h2>
<ul id="predictions"></ul>

<script>
async function run() {
    const imageSelector = document.getElementById('image-selector');
    const selectedImage = document.getElementById('selected-image');
    const predictionsList = document.getElementById('predictions');

    // Load the MobileNet model
    const model = await loadModel();

    // Event listener for when a new image is selected
    imageSelector.addEventListener('change', async () => {
        const file = imageSelector.files[0];
        if (file) {
            selectedImage.src = URL.createObjectURL(file);

            // Create a TensorFlow.js tensor from the selected image
            const image = tf.browser.fromPixels(selectedImage);
            
            // Classify the image
            const predictions = await classifyImage(model, image);
            
            // Display predictions
            const topPredictions = await predictions.data();
            const top5 = Array.from(topPredictions)
                .map((p, i) => ({ probability: p, className: `Class ${i}` }))
                .sort((a, b) => b.probability - a.probability)
                .slice(0, 5);

            predictionsList.innerHTML = '';
            top5.forEach(prediction => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `${prediction.className}: ${Math.round(prediction.probability * 100)}%`;
                predictionsList.appendChild(listItem);
            });
        }
    });
}

run();
</script>
```

## Pretrained Text models
Here's how you can use the Universal Sentence Encoder, a pretrained Tensorflow model, for a basic question and answer system in JavaScript:

```javascript
// Import TensorFlow.js library
import * as tf from '@tensorflow/tfjs';

// Load the Universal Sentence Encoder model
async function loadModel() {
    const model = await tf.loadLayersModel('https://tfhub.dev/google/universal-sentence-encoder/4/model.json');
    return model;
}

// Function to encode text using the Universal Sentence Encoder
async function encodeText(model, text) {
    // Encode the text
    const embeddings = await model.predict([text]);
    return embeddings;
}

// Function to find the most similar question to the input question
async function findMostSimilarQuestion(questions, embeddings, inputQuestion) {
    // Encode the input question
    const inputEmbeddings = await encodeText(embeddings, inputQuestion);

    // Find the cosine similarity between the input question and each question in the dataset
    const similarities = questions.map(async (question, index) => {
        const questionEmbeddings = await encodeText(embeddings, question);
        const similarity = tf.losses.cosineDistance(inputEmbeddings, questionEmbeddings).dataSync()[0];
        return { index, similarity };
    });

    // Sort the similarities and find the most similar question
    const sortedSimilarities = await Promise.all(similarities);
    const mostSimilarQuestion = sortedSimilarities.reduce((prev, curr) => (prev.similarity < curr.similarity) ? prev : curr);
    
    return questions[mostSimilarQuestion.index];
}

// Example questions dataset
const questions = [
    "What is TensorFlow.js?",
    "How do I use the Universal Sentence Encoder?",
    "What are the benefits of machine learning?",
    "How can I train my own model?"
];

// Run the example
async function run() {
    // Load the Universal Sentence Encoder model
    const embeddings = await loadModel();
    
    // User input question
    const userInputQuestion = "What is TensorFlow.js and how do I use it?";
    
    // Find the most similar question
    const mostSimilarQuestion = await findMostSimilarQuestion(questions, embeddings, userInputQuestion);
    
    console.log("User Input Question:", userInputQuestion);
    console.log("Most Similar Question:", mostSimilarQuestion);
}

// Run the example
run();
```

In this example:

- We load the Universal Sentence Encoder model.
- We define a function `encodeText` to encode the input text into embeddings using the Universal Sentence Encoder.
- We define a function `findMostSimilarQuestion` to find the most similar question to the input question in a given dataset of questions.
- We run the example by calling the `run` function, which loads the model, finds the most similar question to a user input question, and prints the results.

This is a basic example of using the Universal Sentence Encoder for a question and answer system. In a real-world scenario, you would use a more comprehensive dataset of questions and possibly incorporate more advanced techniques for similarity calculation and question answering.



## List of Pretrained Models
 TensorFlow.js offers several pre-trained models that cover a range of tasks such as image classification, object detection, natural language processing, and more. Here's a list of some popular pre-trained TensorFlow.js models along with their links:

1. *MobileNet*: MobileNet models for image classification.
   - Model Link: [MobileNet](https://tfhub.dev/google/imagenet/mobilenet_v2_100_224/classification/4)

2. *COCO-SSD*: Object detection model trained on the COCO dataset.
   - Model Link: [COCO-SSD](https://tfhub.dev/tensorflow/tfjs-model/ssd_mobilenet_v2/1/default/1)

3. *PoseNet*: Real-time human pose estimation model.
   - Model Link: [PoseNet](https://tfhub.dev/tensorflow/tfjs-model/posenet/mobilenet/float/075/1)

4. *Universal Sentence Encoder*: Sentence embedding model trained for various NLP tasks.
   - Model Link: [Universal Sentence Encoder](https://tfhub.dev/google/universal-sentence-encoder/4)

5. *ALBERT*: Light-weight BERT model for natural language understanding.
   - Model Link: [ALBERT](https://tfhub.dev/tensorflow/albert_lite_base/1)

6. *BERT Question Answering*: BERT model fine-tuned for question answering tasks.
   - Model Link: [BERT Question Answering](https://tfhub.dev/tensorflow/bert_en_uncased_L-12_H-768_A-12/2)

7. *BERT Sentiment Analysis*: BERT model fine-tuned for sentiment analysis.
   - Model Link: [BERT Sentiment Analysis](https://tfhub.dev/tensorflow/bert_en_uncased_L-12_H-768_A-12/2)

8. *Style Transfer*: Model for real-time style transfer between images.
   - Model Link: [Style Transfer](https://tfhub.dev/google/magenta/arbitrary-image-stylization-v1-256/2)

9. *DeepLab*: Semantic segmentation model for identifying objects and regions within images.
   - Model Link: [DeepLab](https://tfhub.dev/tensorflow/tfjs-model/deeplab/pascal/1/default/1)

10. *Pix2Pix*: Model for image-to-image translation tasks.
    - Model Link: [Pix2Pix](https://tfhub.dev/tensorflow/pix2pix/edge2shoes/1/default/1)

11. *WaveGlow*: Generative model for high-quality speech synthesis.
    - Model Link: [WaveGlow](https://tfhub.dev/nvidia/waveglow_ckpt_256/1)

12. *Tacotron2*: End-to-end speech synthesis model.
    - Model Link: [Tacotron2](https://tfhub.dev/nvidia/tacotron2_LJ512_4/1)

Please note that the availability of these models may change over time, and you should always refer to the TensorFlow Hub or the official TensorFlow.js documentation for the latest information and model links.


## Try Tensorflow.js
 
Whether it's building custom models, training them with user-generated data, or deploying them for real-time inference, TensorFlow.js opens up a world of possibilities for intelligent web development.

So, why wait? Dive into the world of TensorFlow.js today and unlock the next generation of web applications powered by machine learning. From training to deployment, the journey to AI-enhanced web experiences begins here. You can use this notebook to experiment further: [Tensorflow Pretrained Text Model](https://app.scribbler.live/?jsnb=./examples/Tensorflow-Pretrained.jsnb).
