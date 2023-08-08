---
title: Augmented Reality (AR) in JavaScript using React
description: JavaScript and React are ideal for creating augmented reality (AR) experiences because they powerful, cross-platoform tools for building web applications.
layout: post
---
### JavaScript and React
JavaScript and React are ideal for creating augmented reality (AR) experiences. Here are some reasons why:

Cross-platform support: JavaScript and React allow you to create AR experiences that can run on multiple devices and platforms, including smartphones, tablets, laptops, and desktops.

Easy to learn and use: JavaScript is a widely-used programming language with a large community and many resources available online. React, a popular JavaScript library for building user interfaces, has a simple and intuitive API that allows developers to create complex web applications with ease.

Rich ecosystem: JavaScript and React have a large ecosystem of libraries, frameworks, and tools that make it easy to create AR experiences. For example, AR.js, a JavaScript library for AR, is built on top of Three.js, a 3D graphics library for the web.

Integration with other web technologies: JavaScript and React can easily integrate with other web technologies such as HTML, CSS, and WebGL, making it possible to create rich and interactive AR experiences.

Performance: JavaScript and React have high performance and can handle complex computations and rendering tasks efficiently, which is crucial for AR applications.

Overall, JavaScript and React are ideal for creating AR experiences because they offer a powerful and flexible platform that can run on a wide range of devices and can be easily integrated with other web technologies.

### Steps for Creating AR in JS
There are several libraries and frameworks available for creating augmented reality (AR) experiences in JavaScript using React. Here are the steps you can follow to get started:

Choose an AR library or framework: There are several AR libraries and frameworks available in JavaScript, such as AR.js, Three.js, A-Frame, and React AR. You can choose one based on your requirements.

Set up your React project: Create a new React project using tools like Create React App or any other similar tools.

Install the AR library or framework: Install the chosen AR library or framework using npm or yarn.

Create an AR component: Create a new React component that will handle the AR view. You can use JSX and standard React component lifecycle methods.

Add AR content: Add 3D models or other AR content that you want to display in the AR view. You can use the AR library's or framework's APIs to add content to the AR view.

Run your app: Start your React app and test your AR experience in a supported browser or device.

### Code Examples for AR using React 
Here's an example using [AR.js](https://ar-js-org.github.io/AR.js-Docs/) to display a 3D model in AR:
Install AR.js and A-Frame:

	npm install ar.js aframe

Create a new React component for the AR view:

	import React, { Component } from 'react';
	import 'aframe';
	import 'ar.js';
	
	class ARView extends Component {
	  render() {
	    return (
	      <a-scene embedded arjs>
		<a-marker preset="hiro">
		  <a-entity
		    gltf-model="url(path/to/your/model.glb)"
		    scale="0.1 0.1 0.1"
		    position="0 0 0"
		  ></a-entity>
		</a-marker>
		<a-entity camera></a-entity>
	      </a-scene>
	    );
	  }
	}

	export default ARView;

Import the ARView component in your app and render it:

	import React from 'react';
	import ARView from './ARView';
	
	function App() {
	  return (
	    <div className="App">
	      <ARView />
	    </div>
	  );
	}
	
	export default App;

Start your React app and test the AR view in a supported browser or device. When you point your device's camera at a Hiro marker, the 3D model will be displayed in AR. This App uses AR.js and A-Frame, for other AR libraries and frameworks see: [JavaScript AR Frameworks and Libraries](/2023/05/30/JavaScript-AR-Frameworks-Libraries.html).

### An Example of AR using WebAR.js using only HTML
Here's an example of how to use the [WebAR.js]() library to create an augmented reality experience with JavaScript:
First, you'll need to include the WebAR.js/AR.js library in your HTML file:

	<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>

Next, you'll need to create a new [A-Frame scene](https://aframe.io/) with the AR.js component:

	<a-scene embedded arjs>
	  <!-- AR content goes here -->
	</a-scene>

The arjs attribute enables AR.js support in the scene, and the embedded attribute allows the scene to be embedded within the web page. Now you can add AR content to the scene. For example, you can add a 3D model that will appear in the camera view when a marker is detected:

	<a-marker preset="hiro">
	  <a-box position="0 0.5 0" material="color: red;"></a-box>
	</a-marker>

Here, we're using the "hiro" marker preset, which is a pre-defined marker pattern that can be used to trigger AR content. When the camera detects the "hiro" marker, it will place a red box at the position specified. Finally, you can add a camera element to the scene to allow the user to view the AR content:

	<a-entity camera></a-entity>

This will add a camera element to the scene, which will display the AR content when the camera is pointed at a marker.

Here's the complete code for a simple AR.js example:

	<!DOCTYPE html>
	<html>
	  <head>
	    <meta charset="utf-8">
	    <title>WebAR.js Example</title>
	    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
	  </head>
	  <body>
	    <a-scene embedded arjs>
	      <a-marker preset="hiro">
	        <a-box position="0 0.5 0" material="color: red;"></a-box>
	      </a-marker>
	      <a-entity camera></a-entity>
	    </a-scene>
	  </body>
	</html>

When you open this HTML file in a browser that supports AR.js, it will display the AR content when the camera is pointed at the "hiro" marker. You can try this out by printing the "hiro" marker from the AR.js website and holding it up to your device's camera. 

Note: The versions and CDN links might change as both AR.js and A-Frame are continuously being developed. Please go to individual sites for the current documentation.





	
