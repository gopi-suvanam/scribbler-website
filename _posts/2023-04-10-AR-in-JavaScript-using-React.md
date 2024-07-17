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

## Building an AR Photo Booth with React Native and ViroReact

Creating a simple React.js app for a photo booth with the ability to change the background using AR involves several steps. We can use ViroReact for AR functionalities. Below is a sample code to get you started.

### Step 1: Setup the Project
First, set up a new React Native project with ViroReact. 

1. Install React Native CLI:
   ```bash
   npm install -g react-native-cli
   ```

2. Initialize a new React Native project:
   ```bash
   react-native init PhotoBoothAR
   cd PhotoBoothAR
   ```

3. Install ViroReact:
   ```bash
   npm install --save react-viro
   ```

4. Link the ViroReact module:
   ```bash
   react-native link react-viro
   ```

5. Follow [ViroReact setup documentation](https://docs.viromedia.com/docs/getting-started) for additional configuration details, especially for iOS and Android platforms.

### Step 2: Create the Photo Booth Component

Create a `PhotoBooth.js` file and add the following code:

```jsx
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ViroARSceneNavigator, ViroARScene, ViroImage, ViroARPlaneSelector, ViroNode, ViroCamera } from 'react-viro';

class PhotoBooth extends Component {
  constructor() {
    super();
    this.state = {
      backgroundIndex: 0,
    };
  }

  changeBackground = () => {
    this.setState({
      backgroundIndex: (this.state.backgroundIndex + 1) % backgrounds.length,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ViroARSceneNavigator
          style={styles.arView}
          initialScene={{ scene: InitialARScene }}
          viroAppProps={{ backgroundIndex: this.state.backgroundIndex }}
        />
        <View style={styles.controls}>
          <TouchableOpacity onPress={this.changeBackground} style={styles.button}>
            <Text style={styles.buttonText}>Change Background</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const backgrounds = [
  require('./assets/background1.jpg'),
  require('./assets/background2.jpg'),
  require('./assets/background3.jpg'),
];

const InitialARScene = (props) => {
  const { backgroundIndex } = props.arSceneNavigator.viroAppProps;
  return (
    <ViroARScene>
      <ViroARPlaneSelector>
        <ViroNode position={[0, 0, -3]}>
          <ViroCamera position={[0, 0, 0]}>
            <ViroImage source={backgrounds[backgroundIndex]} position={[0, 0, -5]} scale={[10, 10, 1]} />
          </ViroCamera>
        </ViroNode>
      </ViroARPlaneSelector>
    </ViroARScene>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  arView: {
    flex: 1,
  },
  controls: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default PhotoBooth;
```

### Step 3: Modify `App.js`

Replace the content of `App.js` with the following code:

```jsx
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import PhotoBooth from './PhotoBooth';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <PhotoBooth />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
```

### Step 4: Add Background Images

Create an `assets` folder in your project root and add a few background images named `background1.jpg`, `background2.jpg`, and `background3.jpg`.

### Step 5: Run the App

To run the app, execute:

```bash
react-native run-ios
# or
react-native run-android
```

This is a basic implementation of a photo booth app with AR background changing functionality. The app uses ViroReact for AR capabilities and allows users to change the background by tapping a button. You can extend this app by adding more features like capturing photos, adding filters, and more.




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

## Libraries and Resources for AR in React.js

Here are some popular libraries for implementing Augmented Reality (AR) in React.js:

1. **React-Three-AR**
   - **Description**: A React wrapper for Three.js AR functionality, which allows you to create AR experiences using React components.
   - **GitHub**: [React-Three-AR](https://github.com/miltoncandelero/react-three-ar)

2. **react-xr**
   - **Description**: A set of components for building VR and AR applications with React and Three.js.
   - **GitHub**: [react-xr](https://github.com/pmndrs/react-xr)

3. **react-webcam**
   - **Description**: A simple webcam component for React that can be used for basic AR applications.
   - **GitHub**: [react-webcam](https://github.com/mozmorris/react-webcam)

4. **ViroReact**
   - **Description**: A high-performance AR/VR development platform for React Native that supports ARKit and ARCore.
   - **GitHub**: [ViroReact](https://github.com/viromedia/viro)

5. **aframe-react**
   - **Description**: A React component for integrating A-Frame, a web framework for building virtual reality experiences, which can also be used for AR.
   - **GitHub**: [aframe-react](https://github.com/supermedium/aframe-react)

6. **react-vr**
   - **Description**: A React library for creating VR applications, which can be adapted for certain AR use cases.
   - **GitHub**: [react-vr](https://github.com/facebookarchive/react-360)

### Links to Online Resources

1. **React-Three-AR Documentation**
   - **GitHub**: [React-Three-AR](https://github.com/miltoncandelero/react-three-ar)

2. **react-xr Documentation**
   - **GitHub**: [react-xr](https://github.com/pmndrs/react-xr)

3. **react-webcam Documentation**
   - **GitHub**: [react-webcam](https://github.com/mozmorris/react-webcam)

4. **ViroReact Documentation**
   - **GitHub**: [ViroReact](https://github.com/viromedia/viro)
   - **Website**: [Viro Media](https://viromedia.com/)

5. **aframe-react Documentation**
   - **GitHub**: [aframe-react](https://github.com/supermedium/aframe-react)
   - **A-Frame Website**: [A-Frame](https://aframe.io/)

6. **react-vr Documentation**
   - **GitHub**: [react-vr](https://github.com/facebookarchive/react-360)

### Alternatives and Additional Resources

1. **8th Wall**
   - **Description**: A comprehensive AR platform that supports WebAR, which can be integrated with React.js.
   - **Website**: [8th Wall](https://www.8thwall.com/)

2. **ZapWorks**
   - **Description**: A platform for creating AR experiences with a focus on ease of use and powerful features.
   - **Website**: [ZapWorks](https://zap.works/)

3. **AR.js**
   - **Description**: A lightweight library for AR on the web, which can be integrated with React.js.
   - **GitHub**: [AR.js](https://github.com/AR-js-org/AR.js)

4. **Three.js**
   - **Description**: A powerful 3D graphics library that can be used to create AR experiences and integrated with React.js.
   - **GitHub**: [Three.js](https://github.com/mrdoob/three.js)
   - **Website**: [Three.js](https://threejs.org/)

These libraries and resources can help you get started with creating AR experiences in React.js, leveraging the power of JavaScript and modern web technologies.

## Tutorials and Courses on AR using React.js

Here are some online tutorials and courses to help you learn about AR development using React.js and related technologies:

### Online Tutorials

1. **Creating AR Experiences with React-Three-AR**
   - **Description**: A step-by-step guide on using React-Three-AR to create simple AR applications.
   - **Link**: [React-Three-AR Tutorial](https://github.com/miltoncandelero/react-three-ar#readme)

2. **Building VR and AR Applications with React and Three.js**
   - **Description**: A tutorial on using react-xr to build VR and AR applications.
   - **Link**: [React-XR Documentation](https://github.com/pmndrs/react-xr#readme)

3. **Getting Started with ViroReact**
   - **Description**: A comprehensive guide to using ViroReact for AR development with React Native.
   - **Link**: [ViroReact Documentation](https://docs.viromedia.com/docs/getting-started)

4. **A-Frame and React Integration**
   - **Description**: A tutorial on integrating A-Frame with React for building AR applications.
   - **Link**: [A-Frame and React](https://aframe.io/blog/aframe-react/)

### Online Courses

1. **React VR and AR with ViroReact**
   - **Platform**: Udemy
   - **Description**: Learn how to create VR and AR applications using ViroReact and React Native.
   - **Link**: [React VR and AR with ViroReact](https://www.udemy.com/course/react-vr-ar-viroreact/)

2. **Building Web AR Applications**
   - **Platform**: Coursera
   - **Description**: A course on building AR applications for the web using libraries like AR.js.
   - **Link**: [Building Web AR Applications](https://www.coursera.org/learn/web-ar)

3. **Introduction to AR Development**
   - **Platform**: edX
   - **Description**: An introductory course on AR development, covering basic concepts and tools.
   - **Link**: [Introduction to AR Development](https://www.edx.org/course/introduction-to-ar-development)

4. **Augmented Reality Development with 8th Wall**
   - **Platform**: LinkedIn Learning
   - **Description**: A course on creating AR experiences using the 8th Wall platform.
   - **Link**: [Augmented Reality Development with 8th Wall](https://www.linkedin.com/learning/augmented-reality-development-with-8th-wall)

5. **Augmented Reality for Web Developers**
   - **Platform**: Pluralsight
   - **Description**: A course focused on building AR applications for the web.
   - **Link**: [Augmented Reality for Web Developers](https://www.pluralsight.com/courses/augmented-reality-web-developers)

### Additional Resources

1. **React VR Tutorial**
   - **Platform**: Medium
   - **Description**: A blog post series on creating VR applications with React VR, which can be adapted for AR.
   - **Link**: [React VR Tutorial](https://medium.com/@BrodaNoel/creating-a-vr-app-with-react-vr-742d3c3d6f6e)

2. **WebAR Rocks Tutorials**
   - **Platform**: WebAR Rocks
   - **Description**: Tutorials on creating WebAR experiences, with examples and source code.
   - **Link**: [WebAR Rocks Tutorials](https://webar.rocks/)

These resources provide a mix of tutorials, courses, and documentation to help you get started with AR development using React.js and related technologies.

