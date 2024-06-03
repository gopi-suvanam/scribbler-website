---
title: Using Scribbler for Unit Testing Web Apps With Mocha and Chai
start_link: https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Unit-Testing.jsnb
categories: [Scribbler, Libraries]
description: Scribbler is a powerful tool for unit testing JavaScript code, APIs, and libraries. Its interactive environment, combined with the ability to dynamically load testing frameworks and libraries, makes it an ideal choice for developers.
---

## Introduction to Unit Testing

Scribbler is a versatile JavaScript notebook tool that allows developers to seamlessly integrate HTML and JavaScript in a single, interactive document. This makes it an excellent platform for unit testing JavaScript code, APIs, and libraries. In this article, we'll explore how Scribbler can be used to effectively perform unit tests, ensuring the reliability and correctness of your web applications.

Unit testing is a software testing technique where individual units or components of a software are tested in isolation from the rest of the application. The primary goal is to validate that each unit of the software performs as expected. Unit tests are typically automated and help in detecting errors early in the development cycle, thereby improving code quality and reducing the cost of bug fixes.

## Why Use Scribbler for Unit Testing?

Scribbler offers several advantages for unit testing:

1. **Interactive Environment**: Scribbler's interactive cells allow for immediate feedback and iterative development, which is ideal for testing and debugging.
2. **Seamless Integration**: With support for both HTML and JavaScript, Scribbler makes it easy to test front-end components that rely on the DOM, as well as pure JavaScript functions.
3. **Dynamic Library Loading**: Scribbler can dynamically load JavaScript libraries using CDNs, making it straightforward to incorporate testing frameworks like Mocha and Chai without complex setup.

### Testing JavaScript Code

Testing JavaScript code typically involves writing unit tests for individual functions or modules. In Scribbler, you can write tests that verify the behavior of your functions under different conditions. For example, you might test a utility function that performs mathematical operations, string manipulations, or data transformations.

### Testing APIs

When it comes to testing APIs, Scribbler's ability to execute asynchronous code is particularly useful. You can write tests that make HTTP requests to your API endpoints and verify that they return the correct responses. This is essential for ensuring the reliability of your backend services.

### Mocking

In unit testing, it’s often necessary to simulate the behavior of complex objects or external services. Mocking is a technique used to create fake implementations of these dependencies, allowing you to test your code in isolation. Scribbler can incorporate mocking libraries to facilitate this process, ensuring your tests remain focused and accurate.

### Testing Libraries

Scribbler is also suitable for testing third-party libraries or your own reusable components. By writing unit tests for these libraries, you can ensure that they behave as expected in different scenarios. This is particularly useful when you are developing or maintaining open-source projects.


## Setting Up the Testing Environment

To perform unit testing in Scribbler, you need to set up a testing environment that includes a test framework (like Mocha) and an assertion library (like Chai). These tools provide the necessary functions to define and run tests, as well as to assert the expected outcomes.
Once you have written your tests in Scribbler, running them is straightforward. Mocha, for example, will automatically find and execute your tests, providing a detailed report of the results. The interactive nature of Scribbler means you can immediately see which tests pass or fail, and make necessary adjustments in real time.


### Mocha

Mocha is a feature-rich JavaScript test framework that runs tests asynchronously. It provides a simple way to structure tests using a behavior-driven development (BDD) style. One important configuration option for Mocha in Scribbler is `cleanReferencesAfterRun`. By setting this option to `false`, you can reuse the same Mocha instance for multiple test runs without losing the context of previous tests.

### Chai

Chai is an assertion library that works seamlessly with Mocha. It offers a variety of assertion styles (such as `should`, `expect`, and `assert`) to make your tests more readable and expressive.


## Code Examples

To perform unit tests, we'll use Mocha and Chai, two popular JavaScript libraries for testing. Mocha is a test framework that runs tests asynchronously, while Chai is an assertion library that makes it easier to write readable tests.

### Loading Libraries

We'll use CDNs to load Mocha and Chai. Here's how you can dynamically load these libraries in Scribbler:

```html
<!-- HTML Cell -->
<div id="mocha"></div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/9.2.2/mocha.min.css">
```

```javascript
// JavaScript Cell
scrib.loadScript('https://cdnjs.cloudflare.com/ajax/libs/mocha/9.2.2/mocha.min.js').then(() => {
    mocha.setup('bdd'); // Setup Mocha with BDD interface
    return scrib.loadScript('https://cdnjs.cloudflare.com/ajax/libs/chai/4.3.4/chai.min.js');
}).then(() => {
    // Chai is now loaded and can be used
    window.expect = chai.expect;
});
```

### Writing Tests

Now that Mocha and Chai are loaded, we can write some tests. Let's create a simple function and write tests for it.

```javascript
// JavaScript Cell
function add(a, b) {
    return a + b;
}

// Define our tests
describe('Addition Function', function() {
    it('should return 4 when adding 2 and 2', function() {
        expect(add(2, 2)).to.equal(4);
    });

    it('should return 0 when adding -2 and 2', function() {
        expect(add(-2, 2)).to.equal(0);
    });
});

// Run the tests
mocha.run();
```

### Displaying Results

Mocha automatically appends the test results to the HTML element with the id `mocha`. So, we need to ensure there's an element with that id.

```html
<!-- HTML Cell -->
<div id="mocha"></div>
```

When you run the JavaScript cell containing the tests, Mocha will execute them and display the results within the `#mocha` div.

## Example: Testing a Web Application Component

Let's extend this to test a simple web application component. Assume we have a function that validates an email address:

```javascript
// JavaScript Cell
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Define our tests
describe('Email Validation', function() {
    it('should return true for a valid email', function() {
        expect(isValidEmail('test@example.com')).to.be.true;
    });

    it('should return false for an invalid email', function() {
        expect(isValidEmail('invalid-email')).to.be.false;
    });
});

// Run the tests
mocha.run();
```

## Conclusion

Scribbler provides a flexible and interactive environment for unit testing web applications. By leveraging CDNs to load Mocha and Chai, we can quickly set up a testing environment without the need for npm. This approach is perfect for quick prototypes, demonstrations, or educational purposes. 

Scribbler's ability to integrate HTML and JavaScript in a single document, combined with its dynamic loading of libraries, makes it a powerful tool for web developers and educators alike. Give it a try and see how it can simplify your testing workflows! Experiment using this notebook: [Unit Testing Notebook](https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Unit-Testing.jsnb).
