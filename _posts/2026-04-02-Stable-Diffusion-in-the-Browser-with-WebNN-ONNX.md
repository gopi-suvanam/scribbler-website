---
title: Stable Diffusion in the Browser with WebNN + ONNX Runtime
description: Running stable diffusion image generation models in the browser is a game changing experience for AI. This article explains how to do it using ONNX models, using WebNN and ONNX run time.
start_link: https://app.scribbler.live/?jsnb=https://decentralized-intelligence.com/scribbler-webnn/sample/WebNN-Stable-Diffusion.jsnb
categories: [AI-ML,Scribbler,JavaScript]
layout: post
---

## A practical guide using Scribbler WebNN + `scribbler-webnn/sd.js`

For years, running **Stable Diffusion** meant:

* Python environments
* CUDA setup
* Expensive GPUs
* Cloud APIs

That model is breaking.

Today, with **WebNN + ONNX Runtime Web + WebGPU**, you can:

> Run Stable Diffusion directly inside a browser tab — locally, privately, and fast.

This shift is profound. It turns every browser into an **AI runtime**, not just a UI.

According to recent work in browser ML stacks, technologies like **WebGPU, WASM, and ONNX Runtime Web** now enable high-performance AI inference locally without servers. 



## 🧠 Core Stack Explained

### 1. WebNN (Hardware-native AI in browser)

WebNN is a new web standard that allows models to run directly on:

* GPU (Intel / NVIDIA / AMD)
* CPU
* NPU (AI accelerators)

It exposes native acceleration without needing CUDA or platform-specific code. 

👉 Think of it as:

> “DirectML / CoreML — but for the web.”

Note:To run Stable Diffusion efficiently in the browser using WebNN and WebGPU, you must first enable these experimental features in your browser settings. Navigate to chrome://flags (or edge://flags) and enable WebNN and WebGPU, then restart the browser. Without these enabled, the model will fall back to CPU-based execution, resulting in significantly slower performance. With GPU acceleration active, turbo models can generate images in as little as ~100ms, while full Stable Diffusion 1.5 runs in just a few seconds directly inside the browser.


### 2. ONNX Runtime Web

ONNX Runtime is the execution engine that:

* Loads ONNX models
* Optimizes execution graph
* Chooses backend (WebNN, WebGPU, WASM)

It supports:

* WebGPU acceleration
* WebNN execution provider
* WASM fallback

It can deliver **massive speedups (20x–500x vs CPU in some cases)** when GPU is used. 



### 3. Stable Diffusion (ONNX optimized)

Stable Diffusion runs as a pipeline:

* Text encoder
* UNet (denoising core)
* VAE decoder

The trick is:

✔ Convert to ONNX
✔ Quantize (fp16 / int8 / 4-bit)
✔ Split into browser-friendly chunks



### 4. Scribbler WebNN (`sd.js`)

The project you shared:

👉 **scribbler-webnn**

Provides:

* A lightweight Stable Diffusion engine in JS
* WebNN + ONNX Runtime integration
* Notebook-style execution (Scribbler)

This is the missing piece that makes everything usable.



## ⚙️ How It Works (Pipeline)

```
Prompt → Tokenizer → Text Embedding
        ↓
     UNet (diffusion steps)
        ↓
     Latent image
        ↓
     VAE decode
        ↓
     Final Image (Canvas)
```

All of this runs **inside the browser**.



## 🧩 An Easy Implementation using `scribbler-webnn/sd.js`



### 1. Load ONNX Runtime (WebGPU/WebNN)


```javascript
const ortRes = await fetch("https://data.jsdelivr.com/v1/packages/npm/onnxruntime-web");
const ortData = await ortRes.json();
const ortVersion = ortData.tags.dev;

await scrib.loadScript(
  `https://cdn.jsdelivr.net/npm/onnxruntime-web@${ortVersion}/dist/ort.webgpu.min.js`
);
```



### 2. Import `sd.js` (THIS is key)

```javascript
const SD_BASE = "https://decentralized-intelligence.com/scribbler-webnn/";
const { SDPipeline, AVAILABLE_MODELS } = await import(`${SD_BASE}/sd.js`);
```



### 3. Create Pipeline

```javascript
const pipeline = new SDPipeline({
  model: "sd-turbo",   // or "sdxl-turbo", "sd-1.5"
  provider: "webnn",   // or "webgpu"
});
```

👉 This is the **core object** — everything runs through it.



### 4. Load Model (async + progress)

```javascript
await pipeline.load({
  onProgress: (p) => {
    console.log("Loading:", p, "%");
  }
});
```



### 5. Generate Image (Correct API)

```javascript
const result = await pipeline.generate({
  prompt: "a futuristic city at sunset, ultra realistic",
  steps: 4,          // turbo models: 1–4 steps
});
```



### 6. Render to Canvas

The pipeline does NOT return a DOM image.

It returns raw output that you render:

```javascript
const canvas = document.getElementById("canvas");
await pipeline.draw(result, canvas);
```


# See for yourself

### 🖥️ Sample Page

Checkout a simple sample html page that illustrates the power of WebNN:

* Prompt input
* Model selection (Turbo / SD1.5)
* Real-time rendering

👉 [https://decentralized-intelligence.com/scribbler-webnn/sample/](https://decentralized-intelligence.com/scribbler-webnn/sample/)



### 📓 Scribbler Notebook

We can also use WebNN in Scribbler notebooks. This is where things get interesting:

👉 [https://app.scribbler.live/?jsnb=https://decentralized-intelligence.com/scribbler-webnn/sample/WebNN-Stable-Diffusion.jsnb](https://app.scribbler.live/?jsnb=https://decentralized-intelligence.com/scribbler-webnn/sample/WebNN-Stable-Diffusion.jsnb)

You get:

* Interactive cells
* Editable prompts
* Live GPU execution
* Shareable links

No setup. Just open and run.



## ⚡ Performance: Why This Is Wild

### 🟢 Turbo Models (e.g., SD Turbo, LCM)

* ~1–4 steps inference
* GPU accelerated via WebNN/WebGPU
* Latency: **~100ms to 300ms**

These models trade a bit of quality for extreme speed.



### 🔵 Stable Diffusion 1.5

* 20–30 steps
* Optimized ONNX + fp16
* Latency: **~2–4 seconds in browser**

This was **previously impossible without CUDA GPUs**.



### ⚙️ Why it's fast

* No network latency (local execution)
* GPU acceleration via WebNN/WebGPU
* Quantized models (smaller tensors)
* Optimized ONNX graphs



## 🔥 GPU Acceleration (Intel + NVIDIA)

The beauty of WebNN:

* Works on **Intel iGPUs**
* Works on **NVIDIA GPUs**
* No CUDA dependency

This is huge.

Traditionally:

| Platform   | Requirement        |
| - |  |
| PyTorch SD | CUDA (NVIDIA only) |
| Browser SD | Any GPU via WebNN  |



## 🌍 Why This Is a Game Changer

### 1. Zero Setup AI

No:

* Python
* pip install
* CUDA
* Docker

Just open a URL.



### 2. Infinite Scale (No Servers)

Every user runs inference locally.

Result:

* Zero GPU hosting cost
* No scaling bottlenecks



### 3. Privacy by Default

* Prompts stay local
* Images never leave device

This is critical for:

* Design tools
* Enterprise apps
* Sensitive workflows



### 4. New App Paradigm

We are moving from:

```
Frontend → API → GPU server → Response
```

To:

```
Frontend = AI Engine
```



### 5. Shareable AI Apps

Instead of:

> “Clone repo, install dependencies”

You now say:

> “Open this link”



### 6. Democratization of AI

Anyone with:

* A laptop
* A browser

…can run generative AI.



## 🧠 Architectural Shift: Cloud → Edge → Browser

| Era       | Compute Location  |
|  | -- |
| 2015–2020 | Cloud APIs        |
| 2020–2023 | Local GPU         |
| 2024+     | Browser-native AI |

This is the same shift we saw with:

* IDE → VSCode → Web IDEs
* Apps → SaaS → PWA

Now:

> AI → Local AI → Browser AI



### 🧪 What This Enables Next

* Real-time AI design tools
* Multiplayer generative apps
* AI-powered web games
* Local fine-tuning in browser
* Edge-first AI startups



### 🧩 Key Takeaway

What you’re building with:

* `scribbler-webnn`
* `sd.js`
* WebNN + ONNX Runtime

…is not just a demo.

It’s a preview of a new computing model:

> **The browser is becoming the universal AI runtime.**



## ✨ Final Thought

When Stable Diffusion runs:

* In **100ms**
* On **any GPU**
* Inside a **browser tab**

_it stops being “AI infrastructure” and becomes:

> **a primitive of the web itself**




## 🚀 Live demos & resources

* GitHub: [https://github.com/gopi-suvanam/scribbler-webnn](https://github.com/gopi-suvanam/scribbler-webnn)
* sd.js: [https://decentralized-intelligence.com/scribbler-webnn/sd.js](https://decentralized-intelligence.com/scribbler-webnn/sd.js)
* Sample page: [https://decentralized-intelligence.com/scribbler-webnn/sample/](https://decentralized-intelligence.com/scribbler-webnn/sample/)
* Scribbler Notebook: [https://app.scribbler.live/?jsnb=https://decentralized-intelligence.com/scribbler-webnn/sample/WebNN-Stable-Diffusion.jsnb](https://app.scribbler.live/?jsnb=https://decentralized-intelligence.com/scribbler-webnn/sample/WebNN-Stable-Diffusion.jsnb)


