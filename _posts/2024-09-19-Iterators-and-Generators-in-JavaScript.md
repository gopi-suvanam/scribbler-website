---
description: Iterators and generators provide flexible ways to manage sequences of data, allowing developers to pause and resume execution and handle complex control flows.
start_link: https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Generators-Vs-Iterators.jsnb
layout: post
categories: JavaScript
title: Understanding Iterators and Generators in JavaScript
---

JavaScript offers powerful ways to control the flow of data through **iterators** and **generators**. These features allow developers to iterate over collections like arrays or even custom objects efficiently, and to create more complex data pipelines. In this article, we’ll explore how iterators and generators work in JavaScript, and show how they can be useful through code examples.


## 1. **What are Iterators?**

In JavaScript, an **iterator** is an object that provides a method called `next()` which returns the next item in a sequence. Each call to `next()` produces an object with two properties:
- **value**: the next value in the sequence.
- **done**: a boolean indicating whether the iteration is complete.

An iterator can be created for any iterable, such as arrays, strings, or custom objects.

### Example: Array Iterator
Here’s how to create an iterator for an array:

```javascript
const arr = [10, 20, 30];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

In the above code:
- Each call to `next()` returns the next element in the array.
- When there are no more elements, `done` becomes `true` and `value` becomes `undefined`.

---

## 2. **Creating Custom Iterators**

You can create custom iterators by implementing the `next()` method directly inside an object. This can be useful when you need to iterate over custom data structures.

### Example: Custom Iterator

```javascript
const customIterable = {
  data: [1, 2, 3],
  index: 0,
  
  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return { value: this.data[this.index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

const iterator = customIterable[Symbol.iterator]();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

In this example, we define a custom iterable object. The `Symbol.iterator` method returns an iterator that can be used to loop through the data.

---

## 3. **What are Generators?**

A **generator** in JavaScript is a special type of function that can pause its execution and resume later. This is different from normal functions, which execute until completion. Generators provide more control over function execution and data generation, especially when dealing with potentially infinite sequences.

A generator function is written using the `function*` syntax, and it yields values using the `yield` keyword.

### Example: Basic Generator

```javascript
function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = simpleGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

Here, the `simpleGenerator` function yields values one by one each time `next()` is called. When all values are yielded, `done` becomes `true`.

---

## 4. **Iterating over Generators**

Generators are iterable by nature, meaning you can use them directly in a `for...of` loop. This allows for easy iteration without manually calling `next()`.

### Example: Iterating Over Generator

```javascript
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

for (let value of numberGenerator()) {
  console.log(value); // Output: 1, 2, 3
}
```

The `for...of` loop automatically calls the `next()` method on each iteration, retrieving values until the generator is done.

---

## 5. **Infinite Generators**

Generators are especially useful for creating **infinite sequences**, where you don’t know how many items will be generated in advance.

### Example: Infinite Generator

```javascript
function* infiniteSequence() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const gen = infiniteSequence();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
```

This generator will keep yielding incrementing numbers indefinitely, and you can control how many times you want to iterate through it by calling `next()` or using it in a controlled loop.

---

## 6. **Generator Function with Arguments**

Generators can also take arguments, which can modify the behavior of the generator dynamically.

### Example: Generator with Arguments

```javascript
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

const gen = range(5, 10);

for (let value of gen) {
  console.log(value); // Output: 5, 6, 7, 8, 9, 10
}
```

In this example, the generator takes `start` and `end` values as arguments and yields numbers in that range.

---

## 7. **Generator Control: Pausing and Resuming Execution**

One of the key features of generators is that they can **pause** and **resume** execution, making them highly flexible for scenarios like async programming or data streams.

### Example: Pausing and Resuming Execution

```javascript
function* controlFlow() {
  console.log('Started');
  yield 'Paused';
  console.log('Resumed');
  yield 'Completed';
}

const gen = controlFlow();
console.log(gen.next()); // Logs: "Started", returns: { value: 'Paused', done: false }
console.log(gen.next()); // Logs: "Resumed", returns: { value: 'Completed', done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

The generator function `controlFlow` pauses after logging "Started", and resumes when `next()` is called again, allowing control over the function’s flow.

---

## 8. **Advanced Use Case: Generators for Async Programming**

Generators can also be used for managing asynchronous code, though modern JavaScript prefers `async/await` for this purpose. Still, they are foundational to libraries like **co** and helped shape modern async patterns.

### Example: Generator Handling Async Code

```javascript
function* asyncFlow() {
  const data1 = yield new Promise((resolve) => setTimeout(() => resolve('First data'), 1000));
  console.log(data1);
  
  const data2 = yield new Promise((resolve) => setTimeout(() => resolve('Second data'), 1000));
  console.log(data2);
}

const gen = asyncFlow();

gen.next().value.then((data1) => {
  gen.next(data1).value.then((data2) => {
    gen.next(data2);
  });
});
```

In this example, `yield` pauses execution until the promise is resolved, making it possible to handle asynchronous actions in a more linear, readable way. Generators, with their ability to yield values lazily and resume execution, are powerful tools for creating infinite sequences, managing async operations, and building advanced custom iterables.

