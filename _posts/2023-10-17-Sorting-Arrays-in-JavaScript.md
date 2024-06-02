---
title: Sorting Arrays in JavaScript
description: We discuss alogorithms (code in JavaScript) for sorting - the process of arranging elements of an array in a numerically order.
layout: post
start_link: https://app.scribbler.live/?jsnb=./examples/Sorting_Arrays_in_JavaScript.jsnb
categories: [Scientific, JavaScript]
---
[Jump to Scribbler Notebook](https://app.scribbler.live/?jsnb=./examples/Sorting_Arrays_in_JavaScript.jsnb)

## Sorting
Sorting is the process of arranging elements in a specific order, often numerically or alphabetically, for easier search, retrieval, or analysis. There are three broad algorithms we will discuss using JavaScript code:


1. **Bubble Sort:** Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

2. **Quick Sort:** Quick Sort is a fast and efficient divide-and-conquer sorting algorithm that selects a 'pivot' element, partitions the array into smaller subarrays, and recursively sorts those subarrays.

3. **Merge Sort:** Merge Sort is a stable, divide-and-conquer sorting algorithm that splits an array into two halves, recursively sorts them, and then merges the sorted halves back together.

In summary, Bubble Sort is simple but inefficient for large lists, Quick Sort is fast on average but can have worst-case issues, and Merge Sort is consistent and efficient but consumes extra memory. The choice of sorting algorithm depends on the specific use case and dataset characteristics. These sorting algorithms are provided as functions that take an array as input and return a sorted version of that array. You can call these functions with your unsorted arrays to sort them.

### Bubble Sort

Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. 
- Bubble Sort is a simple comparison-based sorting algorithm. 
- It works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items, and swapping them if they are in the wrong order. 
- The pass through the list is repeated until no swaps are needed, indicating that the list is sorted. 
- It has a time complexity of O(n^2) in the worst and average cases, making it inefficient for large lists, but it is easy to understand and implement. 
- It's not commonly used in practice for large datasets due to its poor time complexity.
    
```
    function bubbleSort(arr) {
        let n = arr.length;
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < n - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    // Swap arr[i] and arr[i + 1]
                    let temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
        return arr;
    }
    
    const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
    const sortedArray = bubbleSort(unsortedArray);
    console.log(sortedArray);
```

### Quick Sort


- Quick Sort is a divide-and-conquer sorting algorithm. 
- It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.
- The sub-arrays are then sorted recursively.
- The pivot selection and partitioning process make it very efficient for average-case sorting, with an average time complexity of O(n log n).
- However, in the worst case (e.g., if the pivot is always the smallest or largest element), it can degrade to O(n^2).
```
	function quickSort(arr) {
	    if (arr.length <= 1) return arr;
	    
	    const pivot = arr[0];
	    const left = [];
	    const right = [];
	    
	    for (let i = 1; i < arr.length; i++) {
	        if (arr[i] < pivot) {
	            left.push(arr[i]);
	        } else {
	            right.push(arr[i]);
	        }
	    }
	    
	    return quickSort(left).concat(pivot, quickSort(right));
	}
	
	const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
	const sortedArray = quickSort(unsortedArray);
	console.log(sortedArray);
```


### Merge Sort

- Merge Sort is another divide-and-conquer sorting algorithm.
- It divides the unsorted list into n sub-lists, each containing one element, and repeatedly merges sub-lists to produce new sorted sub-lists.
- This process continues until there is only one sub-list remaining, which is the sorted list.
- It has a stable time complexity of O(n log n) in the worst, average, and best cases, making it a consistent and efficient sorting algorithm.
- It requires additional memory to store the sub-lists during the merging process, which can be a drawback in resource-constrained environments.
```
	function mergeSort(arr) {
	    if (arr.length <= 1) {
	        return arr;
	    }
	
	    // Split the array in half
	    const middle = Math.floor(arr.length / 2);
	    const left = arr.slice(0, middle);
	    const right = arr.slice(middle);
	
	    // Recursively sort and merge the halves
	    return merge(mergeSort(left), mergeSort(right));
	}
	
	function merge(left, right) {
	    let result = [];
	    let leftIndex = 0;
	    let rightIndex = 0;
	
	    // Compare elements and merge them in sorted order
	    while (leftIndex < left.length && rightIndex < right.length) {
	        if (left[leftIndex] < right[rightIndex]) {
	            result.push(left[leftIndex]);
	            leftIndex++;
	        } else {
	            result.push(right[rightIndex]);
	            rightIndex++;
	        }
	    }
	
	    // Concatenate any remaining elements from both lists
	    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
	}
	
	const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
	const sortedArray = mergeSort(unsortedArray);
	console.log(sortedArray);
```

In this code:

1. `mergeSort` recursively divides the array into two halves until each sublist contains one element.

2. `merge` is responsible for merging two sorted sublists into one sorted sublist. It iterates through both sublists, comparing elements, and adding them to the result in ascending order.

The result is a sorted array. You can call `mergeSort` with your unsorted arrays to sort them.
