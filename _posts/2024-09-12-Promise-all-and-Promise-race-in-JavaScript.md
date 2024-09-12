---
title: Understanding `Promise.all` and `Promise.race` in JavaScript
description: Promise.all and Promise.race() are crucial when handling multiple asynchronous operations in JavaScript serving different purposes.
start_link: https://app.scribbler.live/?jsnb=https://examples.scribbler.live/Promise.all-VS-Promise.race.jsnb
categories: JavaScript
layout: post
---

JavaScript's `Promise` API provides powerful tools to handle asynchronous operations. Two essential methods in this API are `Promise.all()` and `Promise.race()`. These methods allow you to work with multiple promises concurrently and help manage their resolution or rejection. In this article, we'll explore these methods and provide code examples to demonstrate their usage.

## What is a Promise?

A `Promise` is an object representing the eventual completion or failure of an asynchronous operation. A promise can have three states:
- **Pending**: The initial state, where the promise has neither been fulfilled nor rejected.
- **Fulfilled**: The operation completed successfully.
- **Rejected**: The operation failed.

Now, let's dive into `Promise.all()` and `Promise.race()`.

## `Promise.all()`

The `Promise.all()` method takes an iterable (usually an array) of promises and returns a new promise that resolves when all the promises in the iterable resolve or rejects when any of them rejects.

### Key Characteristics:
1. Resolves when all promises resolve.
2. Rejects if any promise rejects.
3. The result is an array of resolved values.

### Use Cases:
- When you need to perform multiple asynchronous tasks and ensure they all complete before proceeding.
- When the completion of one task depends on the completion of others.

### Example:

```javascript
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Task 1 completed'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Task 2 completed'), 500));
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Task 3 completed'), 1500));

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log('All promises resolved:', results);
  })
  .catch((error) => {
    console.error('At least one promise rejected:', error);
  });
```

In this example, `Promise.all()` waits for all three promises to resolve. Once all promises are resolved, the array of their values (`['Task 1 completed', 'Task 2 completed', 'Task 3 completed']`) is logged. If any promise were to reject, it would immediately invoke the `.catch()` block.

### Handling Rejection:

If one of the promises in `Promise.all()` rejects, the whole chain is rejected.

```javascript
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Task 1 completed'), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject('Task 2 failed'), 500));
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Task 3 completed'), 1500));

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log('All promises resolved:', results);
  })
  .catch((error) => {
    console.error('At least one promise rejected:', error); // Logs: 'Task 2 failed'
  });
```

## `Promise.race()`

The `Promise.race()` method takes an iterable of promises and returns a new promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects.

### Key Characteristics:
1. Resolves or rejects as soon as the first promise is settled (resolved or rejected).
2. The result is from the first settled promise.

### Use Cases:
- When you need to wait for only the fastest (or first) of multiple asynchronous operations.
- When you want to perform a timeout on a promise by racing it against a timer.

### Example:

```javascript
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Task 1 completed'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Task 2 completed'), 500));
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Task 3 completed'), 1500));

Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log('First promise resolved:', result); // Logs: 'Task 2 completed'
  })
  .catch((error) => {
    console.error('First promise rejected:', error);
  });
```

Here, `Promise.race()` resolves as soon as the fastest promise (`promise2` in this case) is resolved. The other promises still run, but their outcomes are irrelevant to the race.

### Handling Rejection:

If the first promise to settle is a rejection, `Promise.race()` will reject immediately.

```javascript
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Task 1 completed'), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject('Task 2 failed'), 500));
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Task 3 completed'), 1500));

Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log('First promise resolved:', result);
  })
  .catch((error) => {
    console.error('First promise rejected:', error); // Logs: 'Task 2 failed'
  });
```

In this case, since `promise2` rejects first, the `.catch()` block is executed.

## Key Differences Between `Promise.all()` and `Promise.race()`

| Feature          | `Promise.all()`                                | `Promise.race()`                           |
|------------------|------------------------------------------------|--------------------------------------------|
| Resolve behavior | Resolves when **all** promises resolve          | Resolves when **any one** promise resolves |
| Reject behavior  | Rejects when **any one** promise rejects        | Rejects when **the first** promise rejects |
| Return value     | Array of all resolved values                    | Value of the first resolved/rejected promise |
| Use case         | Ensures all tasks are completed before proceeding | Prioritize the first completed task        |


Use `Promise.all()` when you need all promises to complete, and `Promise.race()` when you need only the first promise to settle, regardless of its outcome. By mastering these methods, you can better manage complex asynchronous workflows in your applications.

