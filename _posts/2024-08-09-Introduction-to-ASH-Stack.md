---
title: Introducing the ASH Stack - A Modern Web Development Architecture
description: The ASH stack represents a modern and efficient approach to web development, combining the speed of static HTML with the flexibility of backend APIs and the interactivity of JavaScript. 
categories: JavaScript
layout: post
---

The web development landscape is in a state of continuous evolution, fueled by the relentless pursuit of speed, security, and scalability. In response to these demands, a innovative architecture has emerged: we call it the ASH (API-Static-HTML) stack. By harmoniously integrating the strengths of static HTML, JavaScript, and backend APIs, the ASH stack offers a robust solution for building fast, secure, and scalable web applications. This article delves into the ASH stack, exploring its core components, advantages, and optimal use cases, providing a comprehensive introduction to this exciting new approach in web development.

## What is the ASH Stack?

The ASH stack is an architectural approach to web development that consists of three primary components:

1. **API (A)**: The backend API is responsible for handling dynamic data, authentication, and server-side logic. It serves as the bridge between the frontend and the backend, enabling the application to perform complex tasks and interact with databases securely.

2. **Static (S)**: The frontend is composed of static HTML files that are served directly by a web server or a Content Delivery Network (CDN). These files represent the core structure and content of the website, providing the basis for fast initial page loads.

3. **HTML (H)**: Client-side JavaScript is used to update and manipulate the static HTML dynamically. This allows for a responsive and interactive user experience without the need to reload the entire page.


## Benefits of the ASH Stack

The ASH stack offers several key advantages over traditional monolithic and dynamic web architectures:

1. Faster Page Loads: Static HTML files ensure rapid page loads, improving user experience and SEO.

2. Faster Deployments: Decoupling the frontend and backend enables independent deployments, reducing deployment time and complexity.

3. Multiple UIs: The ASH stack supports multiple UIs and frameworks, allowing for flexibility and experimentation.

4. Better Security: Static HTML reduces the attack surface, while backend APIs handle sensitive data and authentication.

5. Scalability: The ASH stack enables horizontal scaling of the frontend and backend independently, improving resource utilization.

6. Ease of Maintenance: Separate frontend and backend codebases simplify updates, debugging, and maintenance.

7. Improved Collaboration: The ASH stack allows frontend and backend teams to work independently, promoting collaboration and efficiency.

8. Enhanced Flexibility: The ASH stack supports various backend technologies and frameworks, giving developers the freedom to choose the best tools for their needs.

9. Reduced Server Load: Static HTML files reduce the load on servers, minimizing the risk of downtime and improving overall performance.

10. Cost-Effective: The ASH stack can reduce infrastructure costs by minimizing server requirements and optimizing resource utilization.

## Use Cases for the ASH Stack

The ASH stack is versatile and well-suited to various types of web projects:

### 1. **Static Websites**
For blogs, portfolios, and marketing sites, the ASH stack offers an ideal solution. The use of static HTML files ensures fast page loads, which is crucial for user engagement and SEO. Additionally, the simplicity of static files makes it easy to maintain and update content.

### 2. **Web Applications**
Complex web applications can benefit from the ASH stack by leveraging backend APIs for dynamic data processing and logic. The separation of concerns allows for a more organized and scalable codebase, which is essential for large applications with intricate functionality.

### 3. **Progressive Web Apps (PWAs)**
The ASH stack is well-equipped to support Progressive Web App (PWA) features such as offline support, push notifications, and fast loading times. By serving static HTML and using JavaScript to manage interactions, developers can create PWAs that provide a native app-like experience on the web.

## ASH vs SPA

SPA (Single-Page Application):

1. JavaScript Framework: A JavaScript framework (e.g., React, Angular, Vue.js) manages the entire application.
2. Dynamic Rendering: The framework renders the application dynamically, updating the DOM in response to user interactions.
3. API: Backend APIs provide data and functionality, but the framework handles rendering and updates.

Key differences:

1. Rendering: ASH stack could use multiple HTML pages, while SPA uses single page dynamic rendering.
2. JavaScript Role: In ASH, JavaScript updates static HTML page, whereas in SPA, JavaScript manages the entire application.
3. Page Reloads: ASH stack typically requires page reloads for navigation, whereas SPA updates the DOM dynamically without reloads.
4. SEO: ASH stack is more SEO-friendly due to static HTML, while SPA requires additional efforts for SEO optimization.
5. Complexity: SPA typically requires more complex setup and management, while ASH stack is often simpler to implement.

Choose ASH stack when:

- You need a simple, fast, and SEO-friendly solution.
- Your application has mostly static content with some dynamic elements.

Choose SPA when:

- You need a highly interactive and dynamic user experience.
- Your application requires complex client-side logic and rendering.


## ASH vs JAM

### What is JAM Stack?
The JAM stack is a web development architecture that stands for:

- J: JavaScript
- A: APIs (Application Programming Interfaces)
- M: Markup (HTML, CSS, etc.)

The JAM stack is a modern approach to building web applications, focusing on:

1. JavaScript: Client-side rendering and dynamic functionality.
2. APIs: Backend services providing data and functionality, accessed via APIs.
3. Markup: Pre-built, static HTML, CSS, and other assets, served directly by a CDN or web server.

Key characteristics of the JAM stack:

- Decoupling of frontend and backend
- Static site generation (SSG) or server-side rendering (SSR)
- APIs handle dynamic data and logic
- JavaScript handles client-side rendering and interactions
- Markup is pre-built and served statically

Popular tools and frameworks associated with the JAM stack:

- React, Angular, Vue.js (JavaScript frameworks)
- Next.js, Gatsby, Hugo (Static site generators)
- GraphQL, REST APIs (API frameworks)

### Comparison
The ASH stack and JAM stack share similarities, but they have key differences:

Similarities:

1. Both use static HTML for the frontend
2. Both rely on JavaScript for client-side logic
3. Both use APIs for backend functionality

Differences:

1. Static Site Generation (SSG): JAM stack typically involves SSG tools like Gatsby, Next.js, or Hugo, which pre-build static HTML at build time. ASH stack doesn't require SSG; static HTML can be hand-written or generated dynamically.
2. Frontend Frameworks: JAM stack often employs frontend frameworks like React, Angular, or Vue.js, which are not necessary in the ASH stack.
3. API Integration: JAM stack usually involves tight integration between the frontend framework and the backend API, whereas ASH stack keeps the frontend and backend separate, with a focus on API-first development.
4. Deployment: JAM stack often relies on specific deployment strategies, like serverless functions or edge networks, whereas ASH stack can be deployed using traditional web servers or CDNs.
5. Complexity: JAM stack can be more complex due to the involvement of SSG tools, frontend frameworks, and tight API integration. ASH stack is generally simpler, with a focus on static HTML, JavaScript, and API calls.

In summary, while both stacks share similarities, the JAM stack is more opinionated and prescriptive, with a focus on SSG, frontend frameworks, and tight API integration. The ASH stack is more flexible and straightforward, emphasizing static HTML, JavaScript, and API-first development.





## Authentication In ASH Stack Using Basic Auth
In the ASH stack, Basic Auth can be used for authentication by including the username and password in the API requests from the static pages. Here's how:

1. Backend API: Configure the backend API to support Basic Auth. This typically involves setting up a middleware or handler that checks the Authorization header for a valid username and password.

2. Static Pages: Include the username and password in the API requests from the static pages using the Authorization header.

Here's an example using JavaScript and the fetch API:

Here's an example of how the backend API can return a JWT token after successful Basic Auth:

### Backend API (Node.js with Express)

```
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

const users = {
  'john': 'password123',
};

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.headers;

  if (!username || !password) {
    return res.status(401).send('Unauthorized');
  }

  if (users[username] !== password) {
    return res.status(401).send('Invalid credentials');
  }

  const token = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' });
  res.json({ token });
});

app.get('/protected', (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send('Unauthorized');
  }

  jwt.verify(token, 'secretKey', (err, decoded) => {
    if (err) {
      return res.status(401).send('Invalid token');
    }

    res.json({ message: `Hello, ${decoded.username}!` });
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

### Frontend (JavaScript)

```
fetch('/login', {
  headers: {
    Authorization: 'Basic ' + btoa('john:password123'),
  },
})
.then(response => response.json())
.then(data => {
  const token = data.token;

  fetch('/protected', {
    headers: {
      Authorization: token,
    },
  })
  .then(response => response.json())
  .then(data => console.log(data));
})
.catch(error => console.error(error));
```

In this example:

1. The backend API has a /login endpoint that accepts Basic Auth credentials.
2. If the credentials are valid, the backend generates a JWT token using the jsonwebtoken library and returns it to the client.
3. The client stores the JWT token and includes it in the Authorization header for subsequent requests to protected endpoints (e.g., /protected).
4. The backend verifies the JWT token using the jsonwebtoken library and grants access to the protected endpoint if the token is valid.

Note that this is a simplified example and you should consider using a more secure approach to store and handle JWT tokens in production. In this example, the backend API checks the Authorization header for a valid username and password. If valid, it allows access to the protected endpoint.

Note that Basic Auth sends credentials in plain text, so it's essential to use HTTPS to encrypt the requests. Also one can restrict origins for accessing the APIs.


### Authentication In ASH Stack Using OAuth

In the ASH stack, static pages can't directly handle OAuth authentication because they're, well, static! However, you can use a few workarounds to achieve OAuth authentication with static pages:

1. Client-side OAuth: Use JavaScript libraries like oauth-js or hello.js to handle OAuth flows directly in the browser. This approach has limitations, as it exposes client secrets and access tokens to the client-side.

2. Token-based authentication: Implement token-based authentication using JSON Web Tokens (JWT) or similar technologies. The backend API generates tokens, which are then stored in local storage or cookies. The static pages can then include these tokens in API requests for authentication.

3. Proxy server: Set up a proxy server (e.g., Node.js, Python) that handles OAuth authentication and token management. The static pages make requests to the proxy server, which then forwards authenticated requests to the backend API.


## References

1. [Displaying dynamic content on a Pages static site](https://cloud.gov/pages/knowledge-base/website-api/)
2. [Adding an API to a static site](https://www.raymondcamden.com/2016/03/01/adding-an-api-to-a-static-site)
3. [Understanding Jamstack: The Modern Web Development Architecture](https://www.linkedin.com/pulse/understanding-jamstack-modern-web-development-architecture-hhyhf/)
4. [Single-page application](https://en.wikipedia.org/wiki/Single-page_application)
