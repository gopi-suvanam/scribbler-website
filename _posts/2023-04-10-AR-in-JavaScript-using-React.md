---
title: Augmented Reality (AR) in JavaScript using React
description: JavaScript and React are ideal for creating augmented reality (AR) experiences because they powerful, cross-platoform tools for building web applications.
layout: post
categories: XR
---
## JavaScript and React
JavaScript and React are ideal for creating augmented reality (AR) experiences. Here are some reasons why:

Cross-platform support: JavaScript and React allow you to create AR experiences that can run on multiple devices and platforms, including smartphones, tablets, laptops, and desktops.

Easy to learn and use: JavaScript is a widely-used programming language with a large community and many resources available online. React, a popular JavaScript library for building user interfaces, has a simple and intuitive API that allows developers to create complex web applications with ease.

Rich ecosystem: JavaScript and React have a large ecosystem of libraries, frameworks, and tools that make it easy to create AR experiences. For example, AR.js, a JavaScript library for AR, is built on top of Three.js, a 3D graphics library for the web.

Integration with other web technologies: JavaScript and React can easily integrate with other web technologies such as HTML, CSS, and WebGL, making it possible to create rich and interactive AR experiences.

Performance: JavaScript and React have high performance and can handle complex computations and rendering tasks efficiently, which is crucial for AR applications.

Overall, JavaScript and React are ideal for creating AR experiences because they offer a powerful and flexible platform that can run on a wide range of devices and can be easily integrated with other web technologies.

For accessing camera using JavaScript check the article: [Accessing the Camera from JavaScript for XR Applications](https://scribbler.live/2024/06/18/Accessing-Camera-for-XR.html). Also for more libraries on XR, check out: [JavaScript Libraries for Image Processing](https://scribbler.live/2023/06/16/JavaScript-Libraries-Image-Processing.html).

## Steps for Creating AR in JS
There are several libraries and frameworks available for creating augmented reality (AR) experiences in JavaScript using React. Here are the steps you can follow to get started:

Choose an AR library or framework: There are several AR libraries and frameworks available in JavaScript, such as AR.js, Three.js, A-Frame, and React AR. You can choose one based on your requirements.

Set up your React project: Create a new React project using tools like Create React App or any other similar tools.

Install the AR library or framework: Install the chosen AR library or framework using npm or yarn.

Create an AR component: Create a new React component that will handle the AR view. You can use JSX and standard React component lifecycle methods.

Add AR content: Add 3D models or other AR content that you want to display in the AR view. You can use the AR library's or framework's APIs to add content to the AR view.

Run your app: Start your React app and test your AR experience in a supported browser or device.

## Code Examples for AR using React 
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

## An Example of AR using WebAR.js using only HTML
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

## Applications of AR in JavaScript using React

1. **Virtual Try-Ons**:
   - **Fashion and Retail**: Allow users to try on virtual clothing, accessories, or makeup directly through their device's camera.
   - **Home Decor**: Visualize how furniture, paintings, or other decor items would look in a room before making a purchase.

2. **Educational Tools**:
   - **Interactive Learning**: Create immersive educational experiences where students can interact with 3D models of historical artifacts, biological organisms, or scientific phenomena.s
   - **Virtual Tours**: Offer virtual tours of historical sites, museums, or architectural landmarks with interactive AR elements.

3. **Gaming and Entertainment**:
   - **AR Games**: Develop location-based AR games where users engage with virtual objects overlaid on the real world.
   - **Live Events**: Enhance live events such as concerts or sports matches with AR overlays providing real-time information or interactive experiences.

4. **Marketing and Advertising**:
   - **Product Demonstrations**: Showcase products in AR to provide a more engaging and interactive experience for potential customers.
   - **AR Campaigns**: Launch marketing campaigns with AR elements that allow users to interact with branded content in innovative ways.

5. **Healthcare and Medical Training**:
   - **Simulation and Training**: Simulate medical procedures or anatomy studies using AR to enhance training effectiveness.
   - **Patient Education**: Explain medical conditions or treatment options using interactive AR visualizations.

6. **Industrial Applications**:
   - **Maintenance and Repair**: Assist technicians by overlaying AR instructions or diagrams onto machinery or equipment, guiding them through complex tasks.
   - **Product Design**: Prototype and visualize new product designs in a real-world context before manufacturing.

7. **Navigation and Wayfinding**:
   - **AR Navigation**: Provide AR-based navigation systems that overlay directions and points of interest onto the user's view of their surroundings.
   - **Tourism**: Enhance tourist experiences with AR guides that provide historical information or augmented views of landmarks.

8. **Social Networking**:
   - **AR Filters**: Develop AR filters and effects for social media platforms that allow users to transform their environment or appearance in real-time.
   - **Collaborative AR**: Enable multiple users to interact with shared AR experiences, fostering collaborative and social interactions.

9. **Remote Assistance and Support**:
   - **AR Remote Support**: Assist users or technicians remotely by overlaying AR annotations or instructions onto their live camera feed.
   - **Training and Onboarding**: Onboard new employees or users with AR-guided tutorials and interactive training sessions.

10. **Environmental and Urban Planning**:
    - **Architectural Visualization**: Visualize proposed building designs or urban planning projects overlaid onto existing landscapes using AR.
    - **Environmental Impact Assessment**: Assess and visualize the potential impact of infrastructure projects on the environment through AR simulations.

Implementing AR in JavaScript using React allows developers to leverage the framework's component-based architecture and state management capabilities to create highly interactive and responsive AR experiences that seamlessly integrate with web applications.





	
