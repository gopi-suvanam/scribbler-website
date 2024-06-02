---
title: Using Web Workers and Paralle.js for Parallel Computing in JavaScript
layout: post
description: This article discussed leveraging Web Workkers for parallel programming. It also gives examples of using Paralle.js library.
start_link: https://app.scribbler.live/?jsnb=./examples/Parallel-JS-Examples.jsnb
categories: JavaScript, Libraries
---

## What are Web Workers?

JavaScript, traditionally a single-threaded language, can leverage web workers to perform parallel computations and background tasks without blocking the main UI thread. Web workers enable developers to take advantage of multi-core processors and distribute computational tasks across separate threads, enhancing performance and responsiveness in web applications. In this article, we'll explore how to use web workers for parallel computing in JavaScript, covering their benefits, implementation, and best practices.

Web workers are a feature of modern web browsers that allow JavaScript code to run in parallel threads separate from the main UI thread. By offloading heavy computations to web workers, developers can prevent blocking the UI, improve responsiveness, and utilize multi-core CPUs more effectively.

There are two types of web workers:
- **Dedicated Workers**: These run in a dedicated background thread, providing a fully isolated execution environment.
- **Shared Workers**: These can be accessed by multiple scripts running in different windows or tabs, enabling communication and shared state between them.

### Benefits of Using Web Workers

- **Improved Performance**: Offloading CPU-intensive tasks to web workers prevents the main thread from becoming unresponsive, leading to smoother user experiences.
- **Parallel Processing**: Web workers enable concurrent execution of tasks, leveraging multi-core processors for faster computations.
- **Responsive UI**: By running tasks in the background, web workers ensure that the UI remains interactive and responsive to user input.
- **Isolation and Security**: Web workers run in a sandboxed environment, enhancing security by preventing direct access to the DOM and other sensitive APIs.

## Implementing Web Workers

### 1. Creating a Dedicated Worker

```javascript
// Create a new dedicated worker from an external script
const worker = new Worker('worker.js');

// Send data to the worker for processing
worker.postMessage({ numbers: [1, 2, 3, 4] });

// Receive results from the worker
worker.onmessage = function(event) {
  console.log('Result from worker:', event.data);
};
```

### 2. Inside the Worker Script (`worker.js`)

```javascript
// Listen for incoming messages from the main thread
self.onmessage = function(event) {
  const numbers = event.data.numbers;

  // Perform heavy computations (e.g., summing numbers)
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  // Send results back to the main thread
  self.postMessage(sum);
};
```

### Best Practices and Considerations

- **Transferable Objects**: Use `transferable` objects (e.g., `ArrayBuffer`, `ImageData`) for efficient data transfer between main thread and workers.
- **Minimize Communication**: Minimize data transfers between main thread and workers to avoid performance overhead.
- **Error Handling**: Handle errors and exceptions in web workers to prevent silent failures.
- **Browser Support**: Ensure browser compatibility by checking for web worker support (most modern browsers support web workers).


## Parallel Computing Example with Web Workers

To demonstrate a more complex example of using web workers for parallel computing in JavaScript, let's consider a scenario where multiple worker threads are employed to perform simultaneous calculations on different portions of a large dataset. This approach maximizes CPU utilization and improves overall performance by distributing the workload across multiple threads. We'll implement a solution using dedicated workers to calculate statistics (such as mean, median, and standard deviation) for different segments of an array concurrently.


In this example, we'll create a main script that spawns multiple dedicated workers to calculate statistics for different parts of a large dataset (array). Each worker will process a subset of the data independently, and the main script will aggregate the results once all workers have completed their tasks.

### Main Script (`main.js`)

```javascript
// Create an array of data to process (e.g., numbers)
const data = Array.from({ length: 1000000 }, () => Math.random() * 100);

// Define the number of workers to use
const numWorkers = 4;
const segmentSize = Math.ceil(data.length / numWorkers);

// Array to hold references to worker instances
const workers = [];

// Function to handle messages from workers
function handleWorkerMessage(event) {
  const { index, result } = event.data;
  console.log(`Worker ${index} completed:`, result);

  // Store or process the result as needed
  // Example: Aggregate results, update UI, etc.
}

// Spawn multiple workers and assign tasks
for (let i = 0; i < numWorkers; i++) {
  const start = i * segmentSize;
  const end = start + segmentSize;
  const segmentData = data.slice(start, end);

  // Create a new worker and assign a task
  const worker = new Worker('worker.js');
  worker.postMessage({ index: i, data: segmentData });

  // Listen for messages from the worker
  worker.onmessage = handleWorkerMessage;

  // Store worker reference
  workers.push(worker);
}

// Function to handle completion of all workers
function handleAllWorkersCompleted() {
  console.log('All workers have completed their tasks.');
  // Perform final aggregation or cleanup here
}

// Track number of completed workers
let completedWorkers = 0;

// Listen for completion of each worker
workers.forEach((worker, index) => {
  worker.onmessage = function(event) {
    handleWorkerMessage(event);
    completedWorkers++;

    // Check if all workers have completed
    if (completedWorkers === numWorkers) {
      handleAllWorkersCompleted();
    }
  };
});
```

### Worker Script (`worker.js`)

```javascript
// Function to calculate statistics for a subset of data
function calculateStatistics(data) {
  const sum = data.reduce((acc, curr) => acc + curr, 0);
  const mean = sum / data.length;

  // Calculate median
  const sortedData = data.sort((a, b) => a - b);
  const median = sortedData.length % 2 === 0
    ? (sortedData[sortedData.length / 2 - 1] + sortedData[sortedData.length / 2]) / 2
    : sortedData[Math.floor(sortedData.length / 2)];

  // Calculate standard deviation
  const variance = data.reduce((acc, curr) => acc + Math.pow(curr - mean, 2), 0) / data.length;
  const stdDev = Math.sqrt(variance);

  return { mean, median, stdDev };
}

// Listen for messages from the main thread
self.onmessage = function(event) {
  const { index, data } = event.data;

  // Perform calculations on the received data
  const result = calculateStatistics(data);

  // Send the result back to the main thread
  self.postMessage({ index, result });
};
```

### Explanation

- **Main Script (`main.js`)**:
  - Creates a large array (`data`) containing random numbers.
  - Spawns multiple dedicated workers (`numWorkers`) to process segments of the array concurrently.
  - Each worker receives a subset of the data (`segmentData`) to process independently.
  - Listens for messages from workers and handles the results accordingly.
  - Tracks the completion of all workers to perform final aggregation or cleanup.

- **Worker Script (`worker.js`)**:
  - Defines a function (`calculateStatistics`) to compute statistics (mean, median, standard deviation) for a given array (`data`).
  - Listens for messages from the main thread containing the index and data segment to process.
  - Calculates statistics for the received data segment using the `calculateStatistics` function.
  - Sends the computed result back to the main thread.

## Parallel Processing Using Parallel.js

There are JavaScript libraries and frameworks (e.g., TensorFlow.js, Parallel.js) that provide higher-level abstractions for parallel processing in web workers. These tools simplify the management of parallel tasks and data distribution across workers, making it easier to leverage parallelism in web applications.


Parallel.js provides a convenient abstraction for parallel processing using web workers in the browser. Instead, it leverages web workers to perform concurrent computations across multiple threads, which can improve performance for certain types of tasks by offloading them from the main JavaScript execution thread.

Here's how Parallel.js works and what it offers:

1. **Web Workers for Parallelism:**
   Parallel.js utilizes web workers to achieve parallelism in the browser. Web workers allow JavaScript code to run in separate background threads, enabling concurrent execution of tasks without blocking the main UI thread.

2. **Task Distribution:**
   With Parallel.js, you can define tasks (such as map, reduce, or custom functions) that operate on data elements. These tasks are automatically distributed across available web worker threads, allowing computations to be performed in parallel.

3. **Simplified API:**
   Parallel.js provides a simplified API that resembles JavaScript's Array methods (e.g., `map`, `reduce`, `filter`), making it easy to parallelize common operations on arrays or data sets.

4. **Thread Management:**
   Parallel.js abstracts away the complexity of managing web workers and communication between threads. It handles the creation, execution, and coordination of tasks across worker threads transparently.


### Example Using Paralle.js

   ```javascript
	const task = x => {
	  // Perform computation on data
	  return x*x;
	};
	
	const data = [1, 2, 3, 4, 5];
	const parallel = new Parallel(data);
	parallel.map( task).then(scrib.show);
   ```

However, it's important to understand that while Parallel.js enables concurrent execution of tasks across multiple web worker threads, the actual level of parallelism and resource utilization (e.g., CPU cores) is ultimately determined by the browser's threading model and JavaScript engine.
Check this notebook for experimentation: [Parallel.js Example Notebook](https://app.scribbler.live/?jsnb=./examples/Parallel-JS-Examples.jsnb).
## Calculating Value of PI using Monte Carlo Simulation with Parallel.js

To implement a parallel [Monte Carlo simulation for estimating the value of π (pi)](https://scribbler.live/2024/04/09/Monte-Carlo-Simulation-in-JavaScript.html) using [Parallel.js](https://github.com/parallel-js/parallel.js/blob/master/README.md), we can distribute the simulation tasks across multiple web workers to perform independent trials concurrently. Each worker will generate random points within a square and count the number of points that fall inside a quarter circle inscribed within the square. By aggregating the results from all workers and applying the Monte Carlo method formula, we can estimate π. 

Here's how you can implement this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parallel Monte Carlo Pi Estimation</title>
    <script src="https://cdn.jsdelivr.net/npm/paralleljs/lib/parallel.js"></script>
</head>
<body>
    <script>
        // Function to perform Monte Carlo simulation for estimating π
         function monteCarloPi(numPoints) {
            let insideCount = 0;

            // Generate random points and count points inside the quarter circle
            for (let i = 0; i < numPoints; i++) {
                const x = Math.random(); // Random x-coordinate between 0 and 1
                const y = Math.random(); // Random y-coordinate between 0 and 1
                if (x * x + y * y <= 1) {
                    insideCount++;
                }
            }

            // Estimate π using Monte Carlo method
            const estimatedPi = (4 * insideCount) / numPoints;
            return estimatedPi;
        }

        // Function to perform parallel Monte Carlo simulation across multiple workers
    	async function parallelMonteCarloPi(numPoints, numWorkers) {


            // Divide the total number of points among workers
            const pointsPerWorker = Math.ceil(numPoints / numWorkers);

            // Create a new Parallel instance
            const dataPoints=Array.from({ length: numWorkers }, () => pointsPerWorker);
            const parallel = new Parallel(dataPoints);
            
            // Array to hold results from each worker
            const  results=await parallel.map(monteCarloPi);
            
            return(results.reduce((sum, value) => sum + value, 0) / results.length);
        }

        // Usage: Estimate π using parallel Monte Carlo simulation
        const numPoints = 1000000; // Total number of random points
        const numWorkers = 4; // Number of parallel workers

        parallelMonteCarloPi(numPoints, numWorkers).then(console.log);
    </script>
</body>
</html>
```

In this example:

- The `monteCarloPi` function performs a Monte Carlo simulation for estimating π using a specified number of random points. It counts the number of points that fall within a quarter circle inscribed in a unit square and calculates the estimated value of π based on the ratio of points inside the circle to the total number of points.

- The `parallelMonteCarloPi` function distributes the Monte Carlo simulation tasks across multiple web workers using Parallel.js. It divides the total number of points (`numPoints`) among `numWorkers` workers, with each worker independently performing a portion of the simulation.

- Each worker's result (number of points inside the circle) is aggregated using `parallel.reduce()`, and the estimated value of π is calculated based on the combined results from all workers.

- Adjust the values of `numPoints` and `numWorkers` based on your requirements. Increasing the number of workers (`numWorkers`) can improve parallelism and performance, especially for larger numbers of random points.

This implementation demonstrates how to leverage Parallel.js for parallel computing in the browser to estimate the value of π (pi) using Monte Carlo simulation. By distributing the simulation tasks across multiple web workers, we can take advantage of parallel processing to efficiently perform independent trials and estimate π with improved performance.
