---
title: Using Gemini AI Studio API for Generative Language AI with Scribbler  
description: By integrating the Gemini AI Studio API with Scribbler, you unlock the potential of generative language AI in a secure, browser-based environment.
layout: post
categories: [AI-ML, Scribbler]
start_link: https://app.scribbler.live/?jsnb=https://examples.scribbler.live/AI-DataScience/AI-Podcast-Generator.jsnb
---

The Gemini AI Studio API by Google offers powerful generative language capabilities for applications like content creation, conversational AI, and beyond. Integrating this API with Scribbler, the JavaScript notebook, allows developers to prototype and implement generative AI features efficiently. In this article, we will walk through using the Gemini AI Studio API to generate language outputs, securely manage API keys with [Scribbler’s secrets feature](https://scribbler.live/2024/11/28/Securely-Storing-Secrets-in-Scribbler.html), and create a podcast script example.  

This is an alternative approach to using local [AI through WebLLM](https://scribbler.live/2024/10/02/Large-Language-Models-in-the-Browser-with-WebLLM.html).

## **What is the Gemini AI Studio API?**  

Gemini AI Studio is Google’s generative AI solution designed for creating sophisticated content with ease. Its **gemini-1.5-flash-latest** model is capable of generating context-aware language outputs, making it ideal for use cases like:  
- Creative writing  
- Virtual assistants  
- Automated content generation  

With Scribbler, you can interact with this API directly in the browser, creating prototypes without needing additional runtime environments.  

---

## **Storing the API Key Securely**  

Before accessing the Gemini API, store your API key securely in Scribbler:  

1. **Open Secrets Manager**: Navigate to `Edit -> Secrets` in Scribbler’s menu.  
2. **Add Your API Key**: Save the API key under a descriptive name, e.g., `GOOGLE-API-KEY`.  
3. **Validate Storage**: Confirm the secret is saved and ready for use.  

---

## **Code Example: Generate a Podcast Script**  

The following example demonstrates how to use the Gemini AI Studio API to create a podcast script. The host is Stan, and the guest is Kendra. The script is divided into sections for the host and guest, with the prompt provided dynamically.  

### **Code Implementation**  

```javascript
const apiKey = scrib.getSecret("GOOGLE-API-KEY");  
if (typeof(apiKey) === 'undefined') scrib.error("Couldn't find the API key");  

const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;  
const prompt = "Discuss the impact of AI on education in the next decade.";  

const data = {  
    "contents": [  
        {  
            "parts": [  
                {  
                    "text": `Generate a podcast for this prompt (split into host and guest. The guest's name is Kendra, and the host's name is Stan. Do not include sound effects): ${prompt}`  
                }  
            ]  
        }  
    ]  
};  

async function generatePodcast() {  
    const response = await fetch(url, {  
        method: 'POST',  
        headers: {  
            'Content-Type': 'application/json'  
        },  
        body: JSON.stringify(data)  
    });  

    const result = await response.json();  
    console.log("Generated Podcast Script:", result);
    // Output the script to the console or render it in your application
}  

generatePodcast();
```  

---

### **Explanation**  

1. **API Key Retrieval**: The `scrib.getSecret` function fetches the API key securely from Scribbler’s secrets. If the key isn’t found, an error is displayed.  
2. **Prompt Construction**: The prompt specifies the context and format for the response. Here, it generates a podcast with roles for a host and a guest.  
3. **Request Payload**: The `data` object specifies the input for the generative model.  
4. **API Call**: The script sends a POST request to the Gemini AI Studio API and retrieves the generated content as JSON.  

---

## **Advantages of Using Scribbler with Gemini API**  

1. **Secure Secrets Management**: Store and retrieve API keys securely using Scribbler’s secrets feature.  
2. **Rapid Prototyping**: Test API integrations and iterate quickly within a browser-based environment.  
3. **Dynamic Content Creation**: Use Scribbler’s code cells to generate and modify prompts in real time.  
4. **Notebook Sharing**: Share your notebook without exposing sensitive API keys, ensuring privacy and security.  

---

## **Example Output**  

Here’s an example of what the API might return based on the prompt:  

```
Stan: Welcome to our podcast, everyone! Today, we’re discussing the fascinating impact of AI on education over the next decade. Joining us is Kendra, an expert in education technology. Welcome, Kendra!  

Kendra: Thank you, Stan. It’s great to be here.  

Stan: Let’s dive in. How do you think AI will transform traditional classrooms?  

Kendra: Great question. I believe AI will personalize learning experiences for students by analyzing their progress and adapting lessons to suit individual needs...  
```  

---

## **Best Practices**  

- **Refine Prompts**: Craft detailed and specific prompts to get the best results from the model.  
- **Handle Errors Gracefully**: Check for errors in API responses and display meaningful feedback to users.  
- **Monitor API Usage**: Keep track of API call limits and quotas to ensure uninterrupted service.  


 From creating podcast scripts to powering conversational agents, the possibilities are endless. Start building with Scribbler today and take advantage of Google’s cutting-edge generative AI capabilities!  
