---
title: Introduction to Moment.js for Time Manipulation in JavaScript with Code Examples
start_link: https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Basic%20JavaScript/Moment-js-Examples.jsnb
description: Moment.js is a powerful library for working with dates and times in JavaScript. 
categories: libraries
layout: post
---

Moment.js is a JavaScript library used for parsing, validating, manipulating, and formatting dates. It simplifies working with dates and times, making it an essential tool for projects where date manipulation is required.

Although Moment.js is no longer actively maintained and has been replaced by modern JavaScript date libraries like **Day.js** and **Luxon**, it is still widely used in legacy projects.

This article provides an introduction to Moment.js, along with code examples. We'll use a CDN to include the library.

---

## **Getting Started with Moment.js**

To include Moment.js in your project via CDN, add the following script tag to your HTML file:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
```

Once included, the `moment` object will be available globally in your JavaScript code.

---

## **Basic Features of Moment.js**

### **1. Formatting Dates**
You can format dates using the `format()` method. Moment.js provides tokens to define custom date formats.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moment.js Example</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
</head>
<body>
    <script>
        const now = moment();
        console.log("Default Format:", now.format()); // Default ISO format
        console.log("Custom Format:", now.format("MMMM Do YYYY, h:mm:ss a")); // e.g., January 4th 2025, 2:30:15 pm
        console.log("Short Date:", now.format("MM/DD/YYYY")); // e.g., 01/04/2025
    </script>
</body>
</html>
```

---

### **2. Parsing Dates**
Moment.js can parse date strings into Moment objects, making them easier to manipulate.

```javascript
const date1 = moment("2025-01-04", "YYYY-MM-DD");
console.log(date1.format("MMMM Do, YYYY")); // January 4th, 2025

const date2 = moment("04/01/2025", "DD/MM/YYYY");
console.log(date2.format("MMMM Do, YYYY")); // January 4th, 2025
```

---

### **3. Relative Time**
Moment.js can display dates relative to the current time.

```javascript
const now = moment();
const past = moment("2024-12-31", "YYYY-MM-DD");
const future = moment("2025-01-10", "YYYY-MM-DD");

console.log("Days Ago:", past.fromNow()); // e.g., "4 days ago"
console.log("In Days:", future.fromNow()); // e.g., "in 6 days"
```

---

### **4. Adding and Subtracting Time**
Manipulate dates by adding or subtracting days, months, or years.

```javascript
const today = moment();

const nextWeek = today.clone().add(7, "days");
console.log("Next Week:", nextWeek.format("MMMM Do, YYYY"));

const lastMonth = today.clone().subtract(1, "months");
console.log("Last Month:", lastMonth.format("MMMM Do, YYYY"));
```

---

### **5. Difference Between Dates**
You can calculate the difference between two dates.

```javascript
const startDate = moment("2025-01-01");
const endDate = moment("2025-01-10");

console.log("Days Difference:", endDate.diff(startDate, "days")); // 9
console.log("Hours Difference:", endDate.diff(startDate, "hours")); // 216
```

---

### **6. Validating Dates**
Moment.js allows you to check if a date is valid.

```javascript
const validDate = moment("2025-01-04", "YYYY-MM-DD", true);
const invalidDate = moment("2025-13-40", "YYYY-MM-DD", true);

console.log("Is Valid Date:", validDate.isValid()); // true
console.log("Is Invalid Date:", invalidDate.isValid()); // false
```

---

## **Common Use Cases**

### **1. Formatting Timestamps**
You can convert Unix timestamps into readable formats.

```javascript
const timestamp = 1672531200; // Unix timestamp (seconds)
const formattedDate = moment.unix(timestamp).format("MMMM Do, YYYY, h:mm:ss a");
console.log("Formatted Date:", formattedDate); // January 1st, 2023, 12:00:00 am
```

### **2. Time Zone Conversion**
Moment.js has a plugin, `moment-timezone`, for working with time zones.

Include the CDN for the plugin:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.43/moment-timezone.min.js"></script>
```

Example usage:
```javascript
const time = moment.tz("2025-01-04 14:00", "America/New_York");
console.log("New York Time:", time.format("MMMM Do, YYYY, h:mm:ss a"));

const localTime = time.clone().tz("Asia/Kolkata");
console.log("Converted to IST:", localTime.format("MMMM Do, YYYY, h:mm:ss a"));
```

---

## **Limitations of Moment.js**
1. **Large Size**: Moment.js is heavier compared to modern alternatives.
2. **Mutable API**: Moment.js objects are mutable, which can cause issues in functional programming.
3. **Deprecated**: No new features are being added; consider alternatives like Day.js, Luxon, or date-fns.

---

## Note from Scribbler Team

Moment.js, a popular JavaScript library for date and time management, has been widely used (12 million downloads/week) and has contributed significantly to improving date and time handling on the web. However, its design is outdated (created in 2011) and hasn't kept pace with the modern JavaScript ecosystem. Despite its widespread use, the developers have prioritized stability over adding new features to avoid breaking existing projects.

We still recommend using Moment.js because of its features. But you can try alternatives:


1. **[Day.js](https://day.js.org/)**  
   A lightweight library (2KB) with a Moment.js-like API. It’s highly performant and supports plugins.

2. **[Luxon](https://moment.github.io/luxon/)**  
   A modern library built by one of the Moment.js maintainers, offering immutable objects and better support for time zones and localization.

3. **[date-fns](https://date-fns.org/)**  
   A modular library offering a collection of over 200 functions for date manipulation. Each function can be imported individually.

4. **[Temporal API](https://tc39.es/proposal-temporal/)**  
   A new standard for date and time handling in JavaScript. Still in the proposal stage, but widely regarded as the future of date handling.

5. **[js-joda](https://js-joda.github.io/js-joda/)**  
   A JavaScript port of the Joda-Time library with a focus on immutable date and time objects.

6. **[Spacetime](https://spacetime.how/)**  
   A small library (16KB) for working with time zones and dates. It's simple and designed for browser environments.

Each of these libraries has its unique strengths, and the choice depends on your project’s requirements, such as file size, feature set, or mutability support.
