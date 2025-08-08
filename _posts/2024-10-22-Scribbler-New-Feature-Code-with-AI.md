---
title: Introducing Scribbler's New Feature - Code Smarter with AI
start_link: https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Scribbler-AI-Intro.jsnb
description: Use AI in Scribbler to code faster - generate the code, run it, modify it.
layout: post
categories: [Scribbler, AI-ML]
---

## Power of AI for Coding

We’re excited to unveil a major update to **Scribbler**, the JavaScript notebook for the browser — now powered by **multiple AI backends**! In addition to **WebLLM** (for local AI), you can now use **Google Gemini**, **OpenAI**, and even the blazing-fast **Groq API** to supercharge your coding experience.

Generate code, refactor, debug, or build prototypes — all with the help of AI, right inside your notebook.

---

## Four AI Backends — One Seamless Experience

Whether you want to run models **locally** or via the **fastest APIs**, Scribbler has you covered:

* **WebLLM** – Run open-source models *in-browser*, no cloud or cost
* **Gemini (Google)** – Use Gemini via AI studio
* **OpenAI** – Tap into GPT-3.5
* **Groq** – Experience ultra-fast responses from the Groq LPU-backed API

Choose the one that best fits your workflow and device capabilities.

---

## Local, Private, and Open-Source with WebLLM

[WebLLM](https://webllm.mlc.ai/) runs models **entirely in your browser**, enabling fast and private inference with no subscriptions or external dependencies.

* ⚙️ Works with GPU-enabled browsers (Chrome, Firefox)
* 🔐 Keeps your data 100% on-device
* 🆓 Completely free and open-source

---

## How to Use AI in Scribbler

1. **Click "AI"** in the top menu of Scribbler
2. **Choose a model or API provider** (WebLLM, Groq, OpenAI, Gemini)
3. **Enter API key** (for Groq, OpenAI, or Gemini – one-time setup at [/secrets](https://app.scribbler.live/secrets.html))
4. **Type `//>` in a code cell**, followed by your prompt
5. **Run the cell** to receive AI-generated suggestions or code

---

## Example Prompt

```javascript
//> Create a drag-and-drop todo app using HTML and JS
```

AI will auto-generate boilerplate or working code instantly, which you can modify or extend.

---

## Why This Changes Everything

* ⚡ **Speed & Choice**: Choose from the fastest APIs or go local
* 🔒 **Privacy-first**: WebLLM never sends data to the cloud. Scribbler does not store or receive the API Keys (they will be directly sent to the service provider)
* 🧠 **Enhanced Creativity**: Brainstorm or prototype without context-switching
* 💡 **Zero friction**: Works right from your browser — no IDEs, no installs

---

## Tips for Using AI in Scribbler

* ✅ **Be specific**: Clear prompts yield better responses
* 🔁 **Experiment**: Try different providers for different tasks
* 💬 **Use for content too**: Generate blog drafts, tutorials, or doc snippets

---

## Supported AI APIs and Setup

### Gemini (Google)

* [Get API key](https://aistudio.google.com/apikey)
* Enter it under [Secrets](https://app.scribbler.live/secrets.html)

### OpenAI

* Use your [personal or org OpenAI key](https://platform.openai.com/docs/overview)
* Enter it under [Secrets](https://app.scribbler.live/secrets.html)

### Groq

* [Get API key from Groq](https://console.groq.com/)
* Enter it under [Secrets](https://app.scribbler.live/secrets.html)
* Ideal for lightning-fast completions with Llama 3

---

## Conclusion

Scribbler is now a full-fledged AI-powered coding notebook — supporting both **in-browser AI** and **best-in-class APIs** like OpenAI, Gemini, and Groq. Whether you're building, learning, or experimenting, Scribbler helps you code smarter and faster.

👉 [Try it out now](https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Scribbler-AI-Intro.jsnb) and experience the future of developer notebooks.


