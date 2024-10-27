---
title: How to Generate AI Images from Prompts in JavaScript using Web Stable Diffusion
layout: post
description: Stable Diffusion, a text-to-image AI model, generates high-quality images by iteratively transforming noise into visuals, with WebGPU enabling in-browser GPU acceleration for efficient and private local processing. 
start_link: https://app.scribbler.live/?jsnb=https://examples.scribbler.live/Stable-Diffusion-Art.jsnb
categories: [Libraries,AI-ML]
---

Generating images from textual prompts has been a transformative development in AI. Web Stable Diffusion allows users to run AI-powered image generation directly within a web browser, making it accessible and highly customizable. In this article, we’ll walk through setting up a simple web-based interface using JavaScript to generate images using Stable Diffusion models, with options for model selection, prompt customization, and scheduler settings. In another article we have looked at using WebGPU and [MLC](https://scribbler.live/2024/10/02/Large-Language-Models-in-the-Browser-with-WebLLM.html) for using [Large Langugae Models in the Browser](https://scribbler.live/2024/10/02/Large-Language-Models-in-the-Browser-with-WebLLM.html).

This tutorial uses Web Stable Diffusion, and you can test the setup directly from your browser without additional server infrastructure. Let's dive into the setup and code required to make this possible!

## Understanding Stable Diffusion and WebGPU

### What is Stable Diffusion?

[Stable Diffusion](https://stability.ai/) is an advanced AI model designed for generating high-quality images from text prompts. Developed as a deep-learning-based generative model, it leverages diffusion processes to iteratively transform random noise into coherent images that align with given prompts. Here’s a simplified breakdown of how it works:

1. **Diffusion Process**: Stable Diffusion works by starting with random noise and iteratively denoising it in steps, guided by the information encoded in the prompt.
2. **Model Structure**: It combines two main components — a neural network (the U-Net) that learns how to transform the noise, and an autoencoder (VAE) that converts images into a latent space representation to make processing computationally efficient.
3. **Scheduler**: The scheduler is a crucial part of the diffusion process, determining the sequence of steps taken during denoising. Different schedulers impact the quality, style, and speed of image generation.

Stable Diffusion is highly versatile and has become widely used in various applications such as art creation, concept visualization, and gaming. The model’s success and adoption stem from its efficiency and adaptability to run on a range of hardware — from powerful GPUs to more lightweight setups, especially when combined with WebGPU.

### How WebGPU Enhances Image Generation

WebGPU is a modern graphics API designed to enable high-performance computing in web applications by leveraging the power of the GPU directly from the browser. Unlike previous web graphics standards like WebGL, which are optimized primarily for 3D graphics, WebGPU provides broader, more flexible support for compute workloads, making it ideal for machine learning tasks like image generation.

### Key Advantages of WebGPU for Stable Diffusion

1. **In-Browser GPU Acceleration**: With WebGPU, users can run Stable Diffusion models directly within a browser, utilizing GPU resources on supported devices without the need for server-based processing. This means users can generate images locally, which offers:
   - Reduced latency: Generating images within the browser eliminates the round-trip time to a server, providing faster results.
   - Enhanced privacy: No data needs to be transmitted to external servers, allowing for more secure and private AI interactions.

2. **Improved Performance**: WebGPU’s advanced memory and parallel processing capabilities make it highly efficient for the computational demands of deep learning models like Stable Diffusion. Tasks that involve large matrices or tensors, which are typical in AI processing, can be executed faster on a GPU than on a CPU.

3. **Compatibility with Modern Devices**: WebGPU aims to be cross-platform, meaning it will run on a wide range of devices, from high-end desktops to laptops and even mobile devices, as long as they have compatible hardware and browsers. This accessibility widens the potential user base for Stable Diffusion and other complex AI models.

### Integrating WebGPU with Stable Diffusion

When running Stable Diffusion with WebGPU, the model performs all computationally intensive operations, like the diffusion steps and image generation, using the local GPU. Libraries like TVM.js make it possible to manage these operations within JavaScript, allowing for:
- **Tokenizer Management**: Tokenizers, essential for converting prompts into a format that the model can interpret, can be initialized and run efficiently within the browser.
- **Model Selection and Scheduler Adjustment**: With JavaScript, we can dynamically manage different model configurations and scheduler settings based on device capabilities, optimizing the generation process.

The combination of Stable Diffusion and WebGPU marks an exciting development in AI-driven graphics. As more devices support WebGPU, this setup will enable faster, accessible, and scalable in-browser AI applications, bringing generative image capabilities to a wider audience.




## Prerequisites for Running Stable Diffusion in the Browser

Before proceeding, ensure you have the following:
- **Device with GPU** and enough video RAM to hose the model and run
- **Browser with WebGPU** support enabled (available in most recent versions of Chrome and Firefox).
- **Stable Diffusion Models** hosted on Hugging Face, which our code will access for generating the tokenizer.

## Setting up the HTML and JavaScript Code

The following code creates a simple HTML interface, allowing users to select the Stable Diffusion model (e.g., XL or 1.5), input prompts, adjust the scheduler, and even enable intermediate step rendering to view the generation process in stages.

### Complete Code
Download the stable diffuciton wrapper from here [https://examples.scribbler.live/stable_diffusion.js](https://examples.scribbler.live/stable_diffusion.js). This is a modfied version available from [MLC AI Github ](https://github.com/mlc-ai/web-stable-diffusion/). Here’s the full HTML and JavaScript code:
```html
<!-- Load Stable Diffusion script -->
<script src="stable_diffusion.js"></script>
```
Loading tokenizer from hugging face (you will have to download the [tokenizers_wasm.js](https://websd.mlc.ai/dist/tokenizers-wasm/tokenizers_wasm.js):
```javascript
  import init, { TokenizerWasm } from "tokenizers_wasm.js";

  var initialized = false;
  async function getTokenizer(name) {
    if (!initialized) {
      await init(); // Initialize the tokenizer WASM module
      initialized = true;
    }
    const jsonText = await (await fetch("https://huggingface.co/" + name + "/raw/main/tokenizer.json")).text();
    return new TokenizerWasm(jsonText); // Return the initialized tokenizer for the model
  }

  // Make getTokenizer function available globally
  tvmjsGlobalEnv.getTokenizer = getTokenizer;
```
Load the model:

```javascript
  function initProgressCallback(report) {
	document.getElementById("init-progress-tracker-label").innerHTML = report.text;
	document.getElementById("init-progress-tracker-progress").value = report.progress * 100;
  }
  window.sdEngine=await getWebStableDiffusion(initProgressCallback,scrib.getDom("canvas"));

```
Display Canvas
```html
<div>
<canvas id="canvas" width="512" height="512"></canvas>
</div>
<div id="log"></div>

Input prompts and paramters:
```javascript
sdEngine.generate(`${artist} style art on: ${prompt}`, negPrompt, progressCallback, 0, vaeCycle);
```



```

## Code Explanation

1. **Global Environment Setup**: We initialize a global environment for TVM.js functions to avoid any variable conflicts across modules.

2. **Tokenizer Setup**:
   - A function `getTokenizer` fetches the tokenizer configuration from the Hugging Face repository for the selected model.
   - The `await init()` call initializes the tokenizer WASM module.

3. **User Interface Elements**:
   - Model selection (`modelId`): Choose between `Stable-Diffusion-XL` and `Stable-Diffusion-1.5`.
   - Text input fields for the main prompt and an optional negative prompt.
   - Scheduler selection (`schedulerId`): Allows the user to select a compatible scheduler based on the chosen model. The options dynamically update based on model compatibility.
   - VAE cycle option for intermediate step rendering, controlled via the `vaeCycle` dropdown.
   - A progress bar that displays the rendering progress and a "Generate" button to initiate image generation.

4. **Scheduler Adjustments Based on Model**:
   - The `updateSchedulerBasedOnModel` function dynamically enables or disables schedulers based on the selected model, allowing only compatible options.
   - `window.onload` ensures this function runs at page load and whenever the model selection changes.

5. **Canvas for Image Display**:
   - The `<canvas>` element is where the generated image is rendered, giving users immediate visual feedback.

## Running the Code

1. Save the HTML code to a local file (e.g., `index.html`).
2. Open this file in a WebGPU-enabled browser.
3. Enter a prompt, select a model, adjust the scheduler as needed, and click "Generate."

Check these notebooks at final outputs:
1. [Notebook for Stable Diffusion Art](https://app.scribbler.live/?jsnb=https://examples.scribbler.live/Stable-Diffusion-Art.jsnb)
2. [Notebook for AI Story Illustrator](https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/AI-Story-Illustrator.jsnb)
3. [Page of AI Art](https://examples.scribbler.live/AI-Art.html)
4. [Page for Story Illustrator](https://examples.scribbler.live/sample-pages/AI-Story-Illustrator.html)


With this setup, you can quickly generate AI-driven images directly from your browser. This tutorial showcases Web Stable Diffusion's flexibility, allowing prompt and model adjustments for experimentation. Enjoy exploring the power of AI image generation on the web!
