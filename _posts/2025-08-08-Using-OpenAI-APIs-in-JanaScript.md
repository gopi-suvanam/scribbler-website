---
title: How to Use OpenAI's GPT Models in JavaScript with Scribbler for Generative AI in the Browser
description: Scribbler is a browser-based notebook that lets you connect with the OpenAI API (and others like Gemini and Groq) to generate content, prototype tools, and run AI experiments securely and interactively.
layout: post
categories: Scribbler,AI-ML
---

Credits: This article is written by [Sudarsan Mansingh](#about-author)

By integrating the OpenAI API with Scribbler, you can harness the power of advanced generative models like GPT-3.5-turbo and GPT-4 — all from a secure, browser-based notebook. With no backend setup, Scribbler is ideal for fast prototyping, creative experiments, and building AI-powered applications in real time.


We have discussed how to use [Gemini API earlier with Scribbler](https://scribbler.live/2024/11/29/Gemini-AI-Studio-API-in-Scribbler.html) for AI. This article explains how to use OpenAI APIs on the same lines.


## What is the OpenAI API?

The OpenAI API gives you access to cutting-edge language models like GPT-3.5-turbo and GPT-4. These models can generate human-like text, write code, summarize content, answer questions, and more. With Scribbler, you can interact with these models directly in your browser — no servers, no setup, just fast iteration.

---

## Storing the API Key Securely

Before using the API, securely store your OpenAI key in Scribbler:

1. **Open Secrets Manager**: Navigate to `Edit -> Secrets`.
2. **Add Your API Key**: Save your OpenAI key with a name like `OPENAI-API-KEY`.
3. **Verify**: Ensure the secret is stored and available for use.

> 🔒 Your API key is stored securely in your browser’s local storage. It’s never sent to Scribbler servers or visible to others.

---

## Example: Generate a Blog Post Introduction Using GPT

Let’s generate a blog post introduction on the topic of renewable energy.

### Code Implementation

```javascript
const apiKey = scrib.getSecret("OPENAI-API-KEY");
if (typeof(apiKey) === 'undefined') scrib.error("Couldn't find the API key");

const url = "https://api.openai.com/v1/chat/completions";
const prompt = "Write a compelling introduction for a blog post about the future of renewable energy.";

const data = {
    model: "gpt-3.5-turbo",
    messages: [
        { role: "user", content: prompt }
    ],
    max_tokens: 200,
    temperature: 0.7
};

async function generateBlogIntro() {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    if (result.choices && result.choices.length > 0) {
        scrib.show(result.choices[0].message.content);
    } else {
        scrib.error("No response from OpenAI API.");
    }
}

generateBlogIntro();
```

---

### Explanation

- **API Key Retrieval**: Uses `scrib.getSecret` to securely access your OpenAI key.
- **Prompt**: Instructs the model to write an engaging blog intro.
- **Payload**: Sets the model, messages, token limit, and creativity level.
- **API Call**: Sends a POST request and parses the JSON response.
- **Output**: Displays the result in the notebook with `scrib.show`.

---

## Advantages of Using Scribbler with OpenAI

✅ **Secure Key Storage** – Secrets are managed in-browser, never exposed.  
✅ **Rapid Prototyping** – Test prompts and iterate quickly, no backend needed.  
✅ **Dynamic Prompting** – Modify and execute prompts in real-time.  
✅ **Share Notebooks Safely** – Share your notebook without sharing your API keys.  
✅ **Multi-Model Support** – Easily switch between OpenAI, Gemini, and local models.

---

## Example Output

> “As the world grapples with the effects of climate change, renewable energy is no longer just an alternative — it's a necessity. From solar panels on rooftops to offshore wind farms powering cities, the future of energy is being reshaped by sustainable innovation. In this blog, we explore the trends, technologies, and breakthroughs that are driving the clean energy revolution.”

---

## Best Practices

- 🎯 **Refine Prompts**: Clear, specific prompts yield better responses.  
- ⚠️ **Handle Errors**: Always validate responses and catch API errors.  
- 📊 **Track Usage**: Monitor your OpenAI usage and billing.  
- 🧪 **Tune Parameters**: Experiment with `temperature`, `max_tokens`, etc. for different outputs.

---

## TL;DR

Scribbler is a browser-based notebook that lets you connect with the OpenAI API (and others like Gemini and Groq) to generate content, prototype tools, and run AI experiments securely and interactively. No backend setup required, and your secrets stay safe in your browser.

---

## See Also

- [Using Gemini AI Studio API with Scribbler](https://scribbler.live/2024/11/29/Gemini-AI-Studio-API-in-Scribbler.html)

---

## About Author
![Sudarsan](/guests/sudarsan.webp "Sudarsan Mansingh")
Sudarsan Mansingh is a computer science student at Guru Gobind Singh Indraprastha University (GGSIPU), Delhi. He is a full stack developer and an Gen-AI expert. 
He can be reached at:
[Linkedin Profile](https://www.linkedin.com/in/sudarsan2k5/)
[X profile](https://x.com/Sudarsan2k5)
