---
title: Master Tutorial on API Testing Using JavaScript
description: Learn how to test APIs using JavaScript without the need to install any tools
layout: post
categories: JavaScript
start_link: https://app.scribbler.live/?jsnb=examples/API-Testing.jsnb
---

API testing is a critical part of software quality assurance, ensuring that application endpoints work as expected, even as backend services evolve. In this guide, we’ll explore how to test APIs using vanilla JavaScript (without Node.js) and ES6 syntax. We'll use browser-based APIs like `fetch` and integrate some testing logic directly within the browser or any JavaScript runtime. Learning about JavaScript for API testing here: [Testing APIs using JavaScript](https://scribbler.live/2024/03/22/Testing-APIs-using-JavaScript.html).

---

## **1. Introduction to API Testing**

API testing involves:
- Validating response data and formats.
- Ensuring appropriate HTTP status codes are returned.
- Checking error handling for invalid inputs.
- Verifying performance and timeouts.

### Key Benefits:
- Detects issues early in development.
- Ensures consistency across endpoints.
- Facilitates integration with front-end apps.

---

## **2. Tools for API Testing in Browser-Based JavaScript**

Using JavaScript directly in the browser console or tools like Scribbler, you can test APIs without requiring external libraries or frameworks. Core APIs like `fetch` make it easy to send requests and process responses.

### Why ES6 Syntax?
- Promises and `async/await` improve readability.
- Template literals simplify request body construction.
- Destructuring and modules make code modular and clean.

Check this article for how Scribbler can be used for this: [Testing APIs using JavaScript](https://scribbler.live/2024/03/22/Testing-APIs-using-JavaScript.html).
---

## **3. Basic GET API Test**

### Example: Testing a Public API
```javascript
const testAPI = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Assertions
        console.assert(response.status === 200, "Status code is not 200");
        console.assert(data.id === 1, "Data ID mismatch");
        console.assert(data.title, "Title is missing");

        console.log("GET API Test Passed");
    } catch (error) {
        console.error("GET API Test Failed:", error);
    }
};

testAPI();
```

### Explanation:
1. `fetch` is used for making HTTP requests.
2. `console.assert` is used for basic assertions.
3. Error handling ensures tests don't break on exceptions.

---

## **4. Testing POST Requests**

### Example: Creating a Resource
```javascript
const testCreatePost = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const payload = {
        title: "Test Post",
        body: "This is a test.",
        userId: 1
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();
        
        // Assertions
        console.assert(response.status === 201, "Status code is not 201");
        console.assert(data.title === payload.title, "Title mismatch");
        console.assert(data.body === payload.body, "Body mismatch");

        console.log("POST API Test Passed");
    } catch (error) {
        console.error("POST API Test Failed:", error);
    }
};

testCreatePost();
```

### Highlights:
- The `body` is serialized to JSON using `JSON.stringify`.
- Assertions validate the created resource against the input payload.

---

## **5. Testing with Query Parameters**

### Example: Filtering Data
```javascript
const testFilterPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts?userId=1";

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Assertions
        console.assert(response.status === 200, "Status code is not 200");
        console.assert(Array.isArray(data), "Response is not an array");
        console.assert(data.every(post => post.userId === 1), "Filter criteria mismatch");

        console.log("Query Parameter Test Passed");
    } catch (error) {
        console.error("Query Parameter Test Failed:", error);
    }
};

testFilterPosts();
```

### Notes:
- Query parameters can be appended directly to the URL string.
- `Array.every` validates all elements in the response array.

---

## **6. Testing Error Responses**

### Example: Invalid Endpoint
```javascript
const testInvalidEndpoint = async () => {
    const url = "https://jsonplaceholder.typicode.com/invalid-endpoint";

    try {
        const response = await fetch(url);

        // Assertions
        console.assert(response.status === 404, "Expected 404 status code");
        console.log("Invalid Endpoint Test Passed");
    } catch (error) {
        console.error("Invalid Endpoint Test Failed:", error);
    }
};

testInvalidEndpoint();
```

---

## **7. Automated Batch Testing**

### Example: Running Multiple Tests
```javascript
const runTests = async () => {
    console.log("Starting API Tests...");

    await testAPI();
    await testCreatePost();
    await testFilterPosts();
    await testInvalidEndpoint();

    console.log("All Tests Completed");
};

runTests();
```

### Benefits:
- Easy to add new tests to the suite.
- Results are logged sequentially in the console.

---

## **8. Mocking API Responses (Optional)**

For testing in isolation, you can mock API responses using tools like `fetch-mock` or manually intercept `fetch`.

### Example: Mocking in the Browser
```javascript
window.fetch = async (url, options) => {
    if (url === "https://jsonplaceholder.typicode.com/posts") {
        return {
            json: async () => [{ id: 1, title: "Mock Post", userId: 1 }],
            status: 200,
        };
    }
    return {
        json: async () => ({}),
        status: 404,
    };
};

testFilterPosts(); // Test using mocked data
```

---

## **9. Debugging API Tests**

### Common Debugging Tips:
1. **Inspect Responses:** Log `response` and `data` for debugging.
   ```javascript
   console.log("Response:", response);
   console.log("Data:", data);
   ```
2. **Use Browser DevTools:** Track network activity in the Network tab.
3. **Validate Headers:** Ensure headers like `Content-Type` are set correctly.

---

## **10. Best Practices for API Testing**

1. **Parameterize Tests:** Use functions to pass dynamic inputs.
2. **Test Edge Cases:** Include tests for empty, invalid, and large inputs.
3. **Structure Tests:** Group related tests into functions or modules.
4. **Handle Rate Limits:** Add delays if the API enforces request throttling.

---

### Final Thoughts

Testing APIs directly with vanilla JavaScript is lightweight and effective, especially for quick results or when integrating APIs into front-end apps. By leveraging ES6 features, you can write concise and maintainable test scripts that run directly in the browser.

Use this notebook to start testing right away: [Scribbler Notebook for API Testing in JavaScript](https://app.scribbler.live/?jsnb=examples/API-Testing.jsnb). Also use Scribbler Notebook right away: [Scribbler Notebook for API Testing](https://app.scribbler.live/?jsnb=examples/API-Testing.jsnb).

Happy Testing! 🎉
