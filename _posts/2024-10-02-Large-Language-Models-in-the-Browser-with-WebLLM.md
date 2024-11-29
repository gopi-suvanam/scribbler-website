---
title: WebLLM for Large Language Models (LLM) in the Browser 
description: With WebLLM, you can bring AI to your web applications without needing a backend, making it a powerful tool for building private, responsive, and portable AI-powered solutions.
layout: post
categories: [Libraries,AI-ML]
start_link: https://app.scribbler.live/?jsnb=https://examples.scribbler.live/WebLLM-Experiments.jsnb
---

Running Large Language Models (LLMs) directly in the browser is now possible, thanks to WebLLM, which leverages WebGPU and other modern browser technologies. This brings powerful AI capabilities to client-side applications without the need for a backend, ensuring privacy, low latency, and portability. In this article, we’ll explore how to set up and use WebLLM in a browser-based JavaScript application, including examples of how to run a model, handle chat completions, and enable streaming responses.

An alternative approach to this is to use a cloud service and access an [LLM through an API](https://scribbler.live/2024/11/29/Gemini-AI-Studio-API-in-Scribbler.html).

## What is WebLLM?

WebLLM allows you to run LLMs directly in the browser using WebGPU. This eliminates the need for cloud-based APIs, reducing latency and ensuring that no data is sent to external servers. WebLLM supports a variety of models, and you can integrate it with any modern browser that supports WebGPU.

### Key Benefits of WebLLM:
- **Privacy**: All computations happen on the client side.
- **No Backend**: There’s no need for API calls or server-side processing.
- **Portability**: WebLLM works across multiple platforms, including mobile devices.
- **Streaming Support**: You can stream AI model responses in real-time, creating more dynamic interactions.

## Code Exmaples

Let’s walk through how to use WebLLM in a web application.

### Step 1: Include WebLLM via CDN

To get started, you can include WebLLM using a CDN for easy access:

```javascript
import * as webllm from "https://esm.run/@mlc-ai/web-llm";
```

Alternatively, you can dynamically import WebLLM:

```javascript
const webllm = await import ("https://esm.run/@mlc-ai/web-llm");
```

### Step 2: Create MLCEngine and Load a Model

Most of the operations in WebLLM are carried out through the `MLCEngine` interface. You need to create an instance of `MLCEngine` and load a model. Below is an example of how to create an engine and load the model.

```javascript
import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

// Progress callback to track model loading
const initProgressCallback = (progress) => {
  console.log(`Model loading progress: ${progress}%`);
};

// Select the LLM model you want to load
const selectedModel = "Llama-3.1-8B-Instruct-q4f32_1-MLC";

// Create and load the engine with the selected model
const engine = await CreateMLCEngine(selectedModel, {
  initProgressCallback: initProgressCallback, // Pass progress callback
});
```

### Step 3: Run Chat Completions

Once the model is loaded, you can invoke chat completions similar to how you’d interact with OpenAI’s GPT models. Here’s an example of how to run a basic chat completion.

```javascript
const messages = [
  { role: "system", content: "You are a helpful AI assistant." },
  { role: "user", content: "What is the capital of France?" },
];

// Get the AI's response
const reply = await engine.chat.completions.create({ messages });
console.log(reply.choices[0].message);
```

This code sends a message to the model and logs the AI’s response (in this case, "Paris").

### Step 4: Enable Streaming Responses

WebLLM supports streaming, allowing the AI to generate responses in chunks. This can be useful for long responses where you want real-time feedback.

```javascript
const messages = [
  { role: "system", content: "You are a helpful AI assistant." },
  { role: "user", content: "Can you explain how the internet works?" },
];

// Enable streaming for real-time response
const chunks = await engine.chat.completions.create({
  messages,
  stream: true, // Enable streaming
  temperature: 0.7,
});

let response = "";
for await (const chunk of chunks) {
  response += chunk.choices[0]?.delta.content || "";
  console.log(response); // Output partial responses in real-time
}
```

In this example, the response will be streamed in parts, allowing the browser to display each part of the answer as it’s generated.

## Conclusion

WebLLM makes it incredibly easy to run large language models in the browser, with full support for chat completions, streaming, and more. This allows for dynamic AI-powered web applications that offer both performance and privacy benefits.

### Key Takeaways:
- **Client-side Execution**: LLMs run entirely within the browser, offering privacy and speed advantages.
- **Streaming Support**: Real-time response generation adds interactivity to your application.
- **OpenAI-style Interface**: WebLLM supports familiar chat APIs, making it easy to integrate into existing projects.

