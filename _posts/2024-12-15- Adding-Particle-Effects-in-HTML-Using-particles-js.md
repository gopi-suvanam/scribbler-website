---
title: Adding Particle Effects in HTML Using particles.js  
description: By integrating particles.js into HTML, you unlock the potential to create dynamic, visually engaging effects in your HTML pages. 
layout: post
categories: Libraries
start_link: https://app.scribbler.live/?jsnb=https://examples.scribbler.live/Libraries-APIs/Particle-Js.jsnb
---



This article will guide you through embedding and using particles.js in HTML, enabling you to add dynamic and visually appealing particle effects to your projects. **Scribbler**, the JavaScript notebook, is a versatile tool for experimenting with code directly in your browser. By leveraging its capabilities, you can seamlessly integrate libraries like **particles.js**, a lightweight JavaScript library for creating interactive particle effects.


---

## What is particles.js?

**particles.js** is a library that allows you to create particle effects, such as animated backgrounds, interactive visuals, or decorative overlays. With just a few lines of code, you can create stunning animations that respond to user interactions like hovering or clicking.

---

### Why Use particles.js in Scribbler?

- **Ease of Use:** Scribbler combines HTML and JavaScript, making it ideal for experimenting with particles.js.  
- **Interactive Outputs:** The live preview feature of Scribbler lets you instantly see the results of your particle configurations.  
- **Browser-Based:** No additional runtime or setup is needed beyond your browser.

---

## Steps to Use particles.js in HMTL

### 1. Include the particles.js Library

The first step is to include the **particles.js** library in your HTML using a CDN link. Add the following `<script>` tag in:  
```html
<script src="https://cdn.jsdelivr.net/npm/particles.js"></script>
```

### 2. Add an HTML Container

Create a `<div>` element where the particle effects will render. Assign it an `id` for identification. Example:  
```html
<div id="particles-js" style="position: absolute; width: 100%; height: 100%;"></div>
```

### 3. Write the Configuration

Define a configuration object to specify the behavior of the particles (e.g., number, color, size, and movement). You can either inline the configuration in your JavaScript cell or fetch it from a hosted file.

### 4. Initialize particles.js

Initialize the library using the `particlesJS` function, passing the `id` of your container and the configuration object.

---

## Example: Particles.js in HTML

Here’s a step-by-step example of integrating particles.js.

### HTML Cell:
```html
<div id="particles-js" style="position: absolute; width: 100%; height: 100%;"></div>

```

### JavaScript Cell:
```javascript
// Configuration for particles.js
const particleConfig = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      }
    },
    opacity: { value: 0.5 },
    size: { value: 5 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    }
  },
  retina_detect: true
};

// Initialize particles.js
particlesJS("particles-js", particleConfig);
```

---

## Customizing Particle Effects

The configuration object (`particleConfig`) allows you to customize various aspects of the particle system:

- **Number of Particles:** Adjust the `value` in `number`.  
- **Particle Shape:** Choose from shapes like `circle`, `edge`, `triangle`, or provide a custom image.  
- **Interactivity:** Enable hover or click effects by modifying the `interactivity` property.  

For advanced customizations, you can refer to the official [particles.js documentation](https://vincentgarreau.com/particles.js/).

---

## Benefits of Using particles.js in Scribbler

1. **Instant Feedback:** Scribbler provides real-time output for your code.  
2. **No Setup Hassle:** With a simple CDN import, you can start creating effects immediately.  
3. **Perfect for Prototyping:** Experiment with different configurations and integrate the results into your projects.

---


Whether you're building interactive prototypes or experimenting with animations, this combination provides a powerful, browser-based platform for creativity. 

Give it a try and elevate your next Scribbler notebook with particles.js!

Try it here: [Scribbler Notebook for Particle.js](https://app.scribbler.live/?jsnb=https://examples.scribbler.live/Libraries-APIs/Particle-Js.jsnb)
