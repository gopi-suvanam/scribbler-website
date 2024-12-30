---
title: Introducing Scribbler's New Feature - Code Smarter with AI
start_link: https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Scribbler-AI-Intro.jsnb
description: Use AI in Scribbler to code faster - generate the code, run it, modify it.
layout: post
categories: [Scribbler, AI-ML]
---

## Power of AI for Coding
We’re excited to announce a powerful new feature in Scribbler, the JavaScript notebook, that leverages AI to help you write better code right within your browser! Scribbler now integrates with WebLLM, allowing you to run AI models locally without subscriptions or cloud costs, using open-source models. Here’s everything you need to know about this game-changing addition.

You can also use [Google AI Studio APIs](https://aistudio.google.com/) for using Gemini AI to write code.

### What is WebLLM
[WebLLM](https://webllm.mlc.ai/) enables running language models directly in your browser, thanks to modern hardware acceleration. Scribbler’s AI assistant uses these models to provide coding suggestions, refactor code, or even generate snippets based on prompts—all on your device.

### No Subscriptions, No Cloud—It’s Open-Source and Local
One of the standout aspects of this feature is that it doesn’t require any paid subscription or remote server processing. Everything happens on your local machine. The models, being open-source, are loaded directly onto your device. That means your data stays private and local.

## What You Need to Get Started
GPU-Enabled Device: Since model inference requires processing power, a GPU is necessary to run these models efficiently.
GPU-Enabled Browser: Make sure your browser supports GPU acceleration (modern browsers like Chrome or Firefox will suffice).

### How to Use Scribbler’s AI
Here’s how you can start using AI to boost your coding productivity:

- Click "AI" in the Menu: Once you’re in Scribbler, you’ll see an "AI" option in the top menu. Click on it to access the AI assistant.
- Choose a Model: Depending on your device’s capabilities, you can choose from a range of models. If you’re unsure whether your GPU can handle larger models, start with the smallest model.
- Pro Tip: The first load will take a little time as the model downloads, but subsequent uses will be much faster.
- Invoke AI in Code Cells: To use the AI, type //> followed by your prompt in a code cell, and then run the cell. Watch as the AI provides suggestions or even generates full code snippets based on your input.

## Why This is a Game-Changer
- Local Processing: All AI computations happen on your device, ensuring both privacy and performance.
- Quick Prototyping: By using //>, you can quickly get code suggestions and experiment with new ideas.
- Accessibility: You don’t need to sign up for expensive subscriptions or set up external environments—everything runs in your browser.

### Example Usage
Say you’re writing a function in JavaScript but are unsure how to structure it. Simply add a cell with a prompt like this:

```javascript
//> Write a function to calculate factorial of a number
```

Run the cell, and Scribbler’s AI will generate the code for you, like magic! You can tweak the prompt for more specific requests, and the AI adapts to your needs.

## Using AI APIs
To access the AI APIs in Scribbler, simply click on the "AI" button in the top menu bar and select the API of your choice. Currently, Scribbler supports a few of AI APIs, including [Google Gemini](https://aistudio.google.com/apikey) and overtime more APIs will be supported.

### Inputting the API Key

Before you can start using the AI API, you'll need to input your API key. To do this, navigate to the [secrets page](/secrets.html) and enter your API key in the designated field. This will authenticate your API requests and allow you to access the AI functionality.

###Coding with AI

Once you've inputted your API key, you're ready to start coding with AI. To use the AI API, simply prefix your code with the //> prompt. This will trigger the AI engine, which will then process your code and provide suggestions, completions, or even entire blocks of code.

For example, let's say you're building a simple chatbot and you want to use the AI API to generate a response to a user's input. You could write the following code:

```javascript
//> Make a todo application.
```

The AI engine would then analyze the input and generate a response, which you could then use in your chatbot.

### Tips and Tricks

Here are a few tips and tricks to help you get the most out of the AI APIs in Scribbler:

- Be specific: When using the AI in Scribbler, be as specific as possible with your requests. This will help the AI engine provide more accurate and relevant results.
- Experiment with different APIs: Scribbler supports a few of AI APIs, so don't be afraid to experiment with different ones to see which works best for your project.
- Use the AI API to generate boilerplate code: The AI API can be used to generate boilerplate code for common tasks, such as setting up a form or creating a class.

## Conclusion
With the new AI feature in Scribbler powered by WebLLM, coding is about to get a whole lot smarter. It’s easy, private, and designed to fit seamlessly into your workflow. Whether you're a seasoned developer or just starting out, the AI assistant can save time, enhance creativity, and provide insights to help you build faster and more efficiently.

Ready to give it a try? Head over to Scribbler, click on “AI,” and let the magic happen! Check a sample notebook here: [https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Scribbler-AI-Intro.jsnb](https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Scribbler-AI-Intro.jsnb)
