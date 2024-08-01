---
title: Scribbler - A Powerful Tool for JavaScript Testing and Experimentation
description: Scribbler is a powerful and versatile tool for JavaScript testing and experimentation. Its live results, code modification, cell movement, DOM interaction, support for external libraries, GitHub integration, and documentation features make it an ideal platform for developers looking to quickly test ideas, debug code, and collaborate with others.
layout: post
categories: [Scribbler,JavaScript]
---

In the fast-paced world of web development, having a tool that facilitates immediate feedback, experimentation, and collaboration is invaluable. Scribbler, a browser-based JavaScript notebook, excels in these areas, offering a unique platform for testing and experimenting with JavaScript code. This article explores how Scribbler can be utilized for JavaScript testing, focusing on live results, code modification, cell movement and reorganization, interaction with the DOM, loading external libraries, sharing notebooks through GitHub, and the feature of documentation.

## Live Results, Code Modification and Immediate Feedback

One of Scribbler's standout features is its ability to provide live results. As you write or modify JavaScript code, the results are displayed immediately. This real-time feedback loop is crucial for testing and debugging, as it allows developers to see the impact of their changes instantly. Whether you're experimenting with a new algorithm, fine-tuning a function, or testing the behavior of a script, Scribbler's live execution environment helps streamline the development process by eliminating the need for continuous context switching between the code editor and browser.

Scribbler is designed with experimentation and rapid prototyping in mind, providing an intuitive interface that allows developers to modify code on the fly and see the results immediately. This functionality is especially valuable for testing different approaches, comparing outcomes, and refining logic—all without the need for a complex development environment setup.

### Real-Time Code Modification and Results

In Scribbler, you can write and edit code directly in the notebook's cells. As you make changes, the results update in real-time, allowing you to see the impact of your modifications instantly. This live feedback loop is crucial for iterative development, as it enables quick testing and refinement of code. For example, if you're experimenting with different algorithms, you can tweak the code and observe how each change affects the output, helping you determine the most efficient or effective solution.

### Output Display Using `scrib.show`

Scribbler provides a convenient way to display output using the `scrib.show` function. This function can be used to render outputs explicitly in a cell, making it easier to visualize and interpret results. For instance:

```javascript
const result = [1, 2, 3, 4].map(x => x * 2);
scrib.show(result);
```

In this example, `scrib.show(result)` explicitly displays the array `[2, 4, 6, 8]` as the output of the cell. This function is particularly useful when you want to highlight specific results or visualize complex data structures.

### Implicit Display of Last Expression

In addition to using `scrib.show`, Scribbler automatically displays the result of the last expression evaluated in a cell. This feature simplifies the workflow, as you don't always need to explicitly print or show results. For example:

```javascript
const sum = (a, b) => a + b;
sum(3, 5);
```

In this case, the result `8` (from `sum(3, 5)`) will be displayed as the output of the cell. This implicit display is a quick way to check the outcomes of computations or functions without additional code.

### Error Handling and Debugging

When errors occur, Scribbler provides feedback directly in the cell output, making it easy to identify and address issues. If a syntax error or runtime exception occurs, a message is displayed, indicating the nature of the error. This immediate feedback helps in quickly diagnosing and fixing problems.

For more detailed error information, you can inspect the browser's console. The console provides a comprehensive view of error stack traces, variable states, and other debugging information, which can be invaluable for understanding complex issues or deep debugging.

### Flexibility in Cell Execution

In Scribbler, code is organized into cells, which can contain JavaScript, HTML, or CSS. These cells can be easily moved and reorganized, providing a flexible structure for your code. This capability is particularly useful when experimenting with different code segments or reorganizing the flow of a script. You can drag and drop cells to reorder them, which helps in structuring your code logically and improving readability. This modular approach also aids in isolating specific parts of your code for focused testing.

One of Scribbler's key features is the ability to run cells in any order and multiple times. Unlike traditional linear scripts, where code execution follows a strict top-to-bottom sequence, Scribbler allows you to execute cells independently. This flexibility enables:

1. **Isolated Testing**: You can test specific parts of your code without running the entire notebook, which is useful for focusing on individual components or functions.
2. **Multiple Executions**: Cells can be executed multiple times, which is useful for refining and re-testing changes. For instance, if you're fine-tuning a function, you can repeatedly run its cell to test different inputs and outputs.
3. **Non-Linear Development**: You can develop and test code in a non-linear fashion. For example, you can define a function in one cell and test it in another, jumping between cells as needed.



## Interaction with the DOM

Scribbler's integration with HTML and CSS cells allows for seamless interaction with the DOM (Document Object Model). You can create, manipulate, and experiment with HTML elements directly within the notebook. This is especially useful for front-end developers who need to test UI components, animations, or interactions. By combining JavaScript and HTML cells, you can build and test complete web pages or components within the Scribbler environment. The immediate visual feedback helps in refining the user interface and ensuring that the DOM manipulations work as expected.

To access and manipulate the DOM (Document Object Model) using JavaScript, you can use various methods provided by the `document` object. Here's a basic example demonstrating how to select elements, modify their properties, and create new elements in the DOM:

### Example: Accessing and Modifying the DOM

Suppose you have the following code in HTML cell

```html

  <div id="main">
    <h1 class="title">Welcome to the DOM Manipulation Example</h1>
    <p id="description">This paragraph will be changed by JavaScript.</p>
    <button id="changeTextBtn">Change Text</button>
    <ul id="list">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>

```

In the corresponding JavaScript cell, you can interact with the DOM as follows:

```javascript
// 1. Selecting elements
const titleElement = document.querySelector('.title');
const descriptionElement = document.getElementById('description');
const listElement = document.getElementById('list');
const changeTextBtn = document.getElementById('changeTextBtn');

// 2. Modifying element content and attributes
titleElement.textContent = 'DOM Manipulation with JavaScript';
descriptionElement.textContent = 'This text has been changed using JavaScript.';

// 3. Adding a new element to the DOM
const newItem = document.createElement('li');
newItem.textContent = 'Item 4';
listElement.appendChild(newItem);

// 4. Adding an event listener to a button
changeTextBtn.addEventListener('click', () => {
  descriptionElement.textContent = 'You clicked the button!';
});

// 5. Manipulating styles
titleElement.style.color = 'blue';
titleElement.style.fontSize = '2em';
```



## Loading External Libraries

For many testing and experimentation scenarios, using external libraries is essential. Scribbler supports the inclusion of external JavaScript libraries, allowing you to extend its functionality. You can load libraries like jQuery, Lodash, D3.js, or any other JavaScript library by simply including their CDN links. This capability is crucial for testing library-specific features, prototyping with advanced tools, or experimenting with third-party APIs. The ease of loading external libraries makes Scribbler a versatile platform for exploring various JavaScript ecosystems and frameworks.

In Scribbler, you can load external libraries dynamically using functions like `scrib.loadScript(url, async)` or JavaScript's `import()` function for ES6 modules. Here are examples of both approaches:

### 1. Using `scrib.loadScript(url, async)`

The `scrib.loadScript(url, async)` function is a utility provided by Scribbler to load external JavaScript files dynamically. The `async` parameter determines whether the script should be loaded asynchronously.


```javascript
// URL of the external library (jQuery in this case)
const jQueryURL = 'https://code.jquery.com/jquery-3.6.0.min.js';

// Load the script dynamically
await scrib.loadScript(jQueryURL, true);
```

In this example:
- `scrib.loadScript(jQueryURL, true)` loads the jQuery library asynchronously.
- Scribbler supports top-level await for ease of use, so asynchronous functions can be called using await. Please check details here: [Enhancing Scribbler with Top-Level Await Support](https://scribbler.live/2024/05/29/Top-Level-Await-Supported-in-Scribbler.html).

### 2. Using Dynamic `import()` for ES6 Modules

For ES6 modules, you can use the dynamic `import()` function, which returns a promise that resolves to the module. This method is useful for importing modern JavaScript libraries that support ES6 module syntax.


First, ensure the library supports ES6 modules and is available via a module-compatible CDN.

```javascript
// URL of the external module (Lodash in this case)
const lodashURL = 'https://cdn.jsdelivr.net/npm/lodash-es/lodash.js';

// Dynamically import the ES6 module
window._=await import(lodashURL);
```

In this example:
- `import(lodashURL)` dynamically imports the Lodash module from the specified URL.
- Scribbler supports top-level await for ease of use, so asynchronous functions can be called using await.

### Key Considerations
- **Async Loading**: Both methods load the scripts asynchronously, ensuring that the rest of your code doesn't block while waiting for the scripts to load.
- **Error Handling**: Always include error handling (`.catch()`) to manage potential issues during script loading, such as network errors or incorrect URLs.
- **Module Compatibility**: Ensure the external library you want to load supports the desired method (ES6 modules for `import()`).


## Sharing Notebooks Through GitHub

Collaboration is a key aspect of modern development workflows, and Scribbler facilitates this by allowing notebooks to be shared through GitHub. By saving your Scribbler notebook as a Markdown file, you can easily upload it to a GitHub repository. This feature not only provides a version-controlled backup of your work but also enables others to view, fork, and contribute to your notebooks. Sharing through GitHub makes it easy to collaborate with team members, share findings with the community, or showcase your work. Additionally, GitHub's integration with GitHub Pages allows you to publish your Scribbler notebooks as static web pages, making them accessible to a broader audience.

Pushing your Scribbler notebook to GitHub involves a few steps, including creating a GitHub repository, generating an authentication key, and using Scribbler's built-in Git functionality. Here's a detailed guide on how to do it:

### Step 1: Create a GitHub Repository

1. **Log in to GitHub**:
   - Go to [GitHub](https://github.com) and log in to your account.

2. **Create a New Repository**:
   - Click on the **New** button, usually found on the left side of the GitHub home page or under your profile drop-down menu.
   - Fill in the repository details:
     - **Repository name**: Enter a name for your repository (e.g., `scribbler-notebooks`).
     - **Description** (optional): Add a description for the repository.
     - **Public or Private**: Choose whether the repository should be public (accessible to everyone) or private (only accessible to you and collaborators).
   - Click **Create repository**.

### Step 2: Generate a Personal Access Token (PAT)

To push changes to GitHub, you'll need an authentication key, which is typically a Personal Access Token (PAT). This token replaces the need for your GitHub password in Git operations.

1. **Go to Settings**:
   - Click on your profile picture in the upper-right corner and select **Settings**.

2. **Access Developer Settings**:
   - In the left sidebar, navigate to **Developer settings**.

3. **Generate New Token**:
   - Click on **Personal access tokens** and then on **Tokens (classic)**.
   - Click **Generate new token**.
   - Provide a **Note** (e.g., "Scribbler Notebook Access") and select the required **scopes**. For pushing to a repository, you generally need:
     - `repo` (Full control of private repositories, if private)
   - Click **Generate token**.

4. **Copy the Token**:
   - Copy the generated token. This is your key, and you'll need it to authenticate Scribbler with GitHub. **Keep it safe and private**, as it has the same permissions as your GitHub account.

### Step 3: Push to GitHub from Scribbler

1. **Open the Git Panel in Scribbler**:
   - In Scribbler, navigate to `File -> Git`. This will open the Git integration panel.

2. **Enter Git Information**:
   - **Key**: Paste the Personal Access Token (PAT) you generated earlier.
   - **User Name**: Enter your GitHub username.
   - **Repository Name**: Enter the name of the GitHub repository you created (e.g., `scribbler-notebooks`).
   - **Path of File**: Specify the path where your notebook should be saved in the repository (e.g., `notebooks/my-notebook.md`).

3. **Push to GitHub**:
   - Once all the information is filled in, click the **Push to Git** button. This action will commit the current state of your Scribbler notebook to the specified GitHub repository and path.




### Inline Documentation Support

Documentation is an integral part of any development process, and Scribbler supports this through HTML cells. You can write comprehensive documentation alongside your code in these cells, which can include text, images, links, and more. This feature is invaluable for explaining the purpose of your code, describing the testing scenarios, or providing context for your experiments. By combining code and documentation in one place, Scribbler helps in maintaining clear and accessible project documentation, making it easier for others to understand and use your work.


