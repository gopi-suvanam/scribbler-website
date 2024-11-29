---
title: Securely Storing and Using Secrets in Scribbler Notebooks  
start_link: https://app.scribbler.live/?jsnb=https://examples.scribbler.live/AI-DataScience/Gemini-Podcast.jsnb
categories: Scribbler
layout: post
description: Scribbler allows storing of keys securely in the browser and using them in notebooks. 
---


Scribbler, the JavaScript notebook, continues to push the boundaries of what a browser-based coding environment can achieve. One of its standout features is the ability to securely store and use secrets such as API keys directly in the browser, offering developers a safe and seamless way to manage sensitive data. In this article, we’ll dive into how this feature works, its advantages, and how you can use it effectively in your projects.  

## **What Are Secrets in Scribbler?**  

In Scribbler, secrets are pieces of sensitive information like API keys, tokens, or other credentials that are securely stored in the browser's local storage. These secrets are:  

- **Accessible Only When Necessary**: They can only be accessed when the code iframe is broken out of its sandbox environment.  
- **Notebook-Agnostic**: Secrets stored in one notebook can be reused across others.  
- **Hidden During Sharing**: Sharing a notebook doesn’t expose stored secrets, ensuring your sensitive data remains private.  

---

## **How to Store Secrets in Scribbler**  

Storing secrets in Scribbler is straightforward and user-friendly.  

1. **Open the Secrets Manager**:  
   Navigate to `Edit -> Secrets` in the menu bar. This opens the secrets management interface.  

2. **Add a Secret**:  
   Provide a name for your secret (e.g., `API_KEY`) and its value (e.g., `123456abcd`). Click **Store**.  

3. **Verify Storage**:  
   The secret is now securely stored in the browser's local storage.  

---

## **Accessing Secrets in Code**  

Scribbler provides the `scrib.getSecret` function to retrieve secrets in your code. Here’s how you can use it:  

```javascript
const apiKey = scrib.getSecret('API_KEY');  
scrib.show(`My API key is: ${apiKey}`); // Use your secret in code
```  

> **Note**: The `scrib.getSecret` function works only when the code iframe is broken out of the sandbox. You can do that by clicking **Edit->Trust the NB** or the red ⤯ button at the top right corner. This ensures secrets are not inadvertently exposed or accessed. 

---

## **Practical Use Case**  

Let’s say you’re working on a notebook that interacts with a third-party API. Instead of hardcoding the API key, you can store it securely and retrieve it when needed:  

```javascript
async function fetchData() {
    const apiKey = scrib.getSecret('API_KEY');
    const response = await fetch(`https://api.example.com/data?key=${apiKey}`);
    const data = await response.json();
    console.log(data);
}

fetchData();
```  

This approach keeps your key secure and makes the notebook portable for sharing. Anyone using your notebook can configure their own secrets without altering your code.  

---

## **Benefits of Scribbler’s Secrets Management**  

1. **Enhanced Security**: Secrets are stored securely in local storage and are never hardcoded in notebooks.  
2. **Notebook Portability**: Shared notebooks don’t expose secrets, maintaining privacy even in collaborative environments.  
3. **Reusability**: Once a secret is stored, it can be reused across multiple notebooks without re-entry.  
4. **Convenience**: A built-in interface and easy-to-use API make managing secrets simple and effective.  

---

## **Best Practices for Using Secrets in Scribbler**  

- **Limit Scope**: Only store secrets that are essential for your code.  
- **Rotate Keys Regularly**: Update stored secrets periodically to maintain security.  
- **Validate Access**: Ensure your secrets are accessed only in trusted environments.  
- **Backup Sensitive Data**: Since secrets are stored locally, make sure you have a backup in case of browser data loss.  

---

## **Conclusion**  

Scribbler’s secure secrets management is a game-changer for developers working on projects that involve sensitive data. By combining ease of use with robust security, this feature allows you to focus on building and sharing impactful notebooks without compromising on privacy.  

Start using Scribbler today and experience secure coding like never before!  
