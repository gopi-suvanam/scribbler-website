---
title: Enhancing Scribbler with Top-Level Await Support
description: The support for top-level `await` in Scribbler JavaScript notebooks is a powerful enhancement that significantly improves the flexibility and usability of the tool.
layout: post
start_link: https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Top-Level-Await.jsnb
---
## Implementing Top-Level Await in Scribbler
_Implemented by [Dhruv Chaturvedi](#credits)_

In the ever-evolving world of programming tools, user convenience and functionality are paramount. The Scribbler JavaScript notebook tool has taken a significant step forward by introducing support for top-level `await`, a feature that enhances the flexibility and power of asynchronous programming in interactive notebooks. This article will delve into how this feature is implemented, the implications for synchronous and asynchronous code execution, and some important considerations to keep in mind.

Traditionally, JavaScript's `await` keyword is only valid inside `async` functions. This restriction posed a challenge for environments where users often want to execute asynchronous code at the top level. To overcome this, Scribbler has started supporting top-level `await`. To implement this feature Scribbler identifies cells containing top-level `await` and runs them within an immediately invoked asynchronous function (IIFE).

Here's an example of how this is achieved:

### Example Cell with Top-Level Await
```javascript
// This cell uses top-level await
const data = await fetchDataFromAPI();
scrib.show(data);
```

In the background, Scribbler transforms the above code to:
```javascript
(async () => {
    const data = await fetchDataFromAPI();
    scrib.show(data);
})();
```

By wrapping the cell's code in an IIFE, Scribbler allows the use of `await` at the top level, ensuring that the code runs correctly and asynchronously.

## Synchronous and Asynchronous Cell Execution

One of the key advantages of this approach is that cells without top-level `await` continue to execute synchronously, maintaining the same behavior as before. This means that users can write and execute synchronous JavaScript code without any changes or interruptions. However, cells with top-level `await` will now run asynchronously, allowing users to perform asynchronous operations seamlessly.

### Example Synchronous Cell
```javascript
// This cell runs synchronously
var value = 42;
scrib.show(value);
```

You can also add your own asynchronous code within the synchronous cells:

### Example Synchronous Cell with Async Function
```javascript
// This cell runs synchronously
var data = "Not loaded";
(async () => {
    const data = await fetchDataFromAPI();
})();
scrib.show(data); //This will get shown first as "Not loaded"
```

## Important Considerations while Using Top-Level Await

While the support for top-level `await` brings numerous benefits, there are some important considerations to keep in mind:

### Variable Scope: 
Variables defined with `var` inside an asynchronous cell will not be available outside that cell. This is due to the scoping rules of JavaScript when using IIFEs.

    #### Example with Var
    *Cell 1*
    ```javascript

        var someVar = await 2;
        scrib.show(someVar);

    ```
    Output: 2
    *Cell 2*
    ```javascript

        scrib.show(someVar)

    ```
    Output: _empty_

    In the above example, `someVar` is not accessible outside the IIFE. To work around this, define variables in regular cells if they need to be accessed globally.

    #### Workaround
    *Cell 1: Synchronous Cell*
    ```javascript
    // Define variable in a regular cell
    var globalVar;

    ```

    *Cell 2: Asynchronous Cell*
    ```javascript

        var globalVar = await 2;
        scrib.show(globalVar);

    ```
    Output: 2
    
    *Cell 3: Synchronous Cell*
    ```javascript

        scrib.show(globalVar)

    ```
    Output: 2
    
### Cell Output
The last expression of an asynchronous cell cannot be directly shown in the cell output due to the nature of asynchronous execution.

    #### Example Output Issue
    ```javascript
    	const data = await 2;
        data;  // This won't be shown as output
    
    ```

    To display the output, explicitly log /show it or return the value in a way that can be handled synchronously.

    #### Workaround for Output
    ```javascript
    
        const data = await 2;
        scrib.show(2);  // Explicitly log the data
    
    ```

## Experiment with Top-Level Await

The introduction of top-level `await` support in the Scribbler JavaScript notebook represents a transformative enhancement that greatly amplifies the tool's flexibility and usability. By enabling top-level asynchronous operations, users can now write more intuitive and streamlined code, directly integrating async operations such as API calls, file I/O, and timers without the need for cumbersome workarounds. This advancement not only simplifies the coding process but also broadens the scope of what can be efficiently accomplished within the notebook environment. As a result, developers can focus more on logic and functionality rather than on managing complex async function structures, making the Scribbler notebook an even more powerful and user-friendly platform for both learning and professional development.

By identifying and wrapping cells with top-level `await` in IIFEs, Scribbler seamlessly integrates asynchronous capabilities while preserving synchronous execution for regular cells. Although there are some side effects, such as variable scoping and output handling, these can be managed with simple workarounds. This new feature empowers users to write more expressive and efficient asynchronous code in an interactive notebook environment.

Experiment with top-level await in Scribbler using this notebook: [Notebook for Top-Level Await](https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Top-Level-Await.jsnb).

## Credits
This feature has been designed and implemented by Dhruv Chaturvedi. Dhruv is pursuing a bachelor's degree in Aerospace Engineering. He is focused on learning new paradigms, working on projects, and contributing to open-source. His interests lie in computational and modeling aspects of aerospace, such as Computational Fluid Dynamics, avionics, path and trajectory planning, and control systems. He also enjoys coding and practicing data structures and algorithms on LeetCode and GeeksforGeeks and making ML and LLM models.
More about Dhruv:
[Linkedin Profile](https://www.linkedin.com/in/dhruv-chaturvedi-a01610283/)
[Github Profile](https://github.com/DH-ai)

