---
title: Text Manipulation with Regex in JavaScript
description: Regex in JavaScript is a versatile tool that enables developers to manipulate text with precision and efficiency.
layout: post
categories: JavaScript
start_link: https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Regex-Text-Manipulation.jsnb
---

[Jump to Regex Notebook](https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Regex-Text-Manipulation.jsnb)

## What is Regex?

Regular Expressions, or **Regex**, are powerful tools used for pattern matching and text manipulation. In JavaScript, Regex allows developers to perform complex search and replace operations efficiently, validate inputs, and transform text with ease. This article explores how to harness the power of Regex for text manipulation in JavaScript.

Regex is a sequence of characters that form a search pattern. This pattern can be used to match strings or find substrings in a text. In JavaScript, Regex is implemented via the `RegExp` object, or by using Regex directly within string methods like `.match()`, `.replace()`, `.search()`, and `.split()`.

### Why Use Regex?

Regex can:
- **Find patterns** in a string (e.g., email validation, URL extraction).
- **Replace text** based on patterns (e.g., censoring sensitive words).
- **Split strings** more flexibly than simple delimiters (e.g., multiple delimiter support).
- **Validate data** such as phone numbers, passwords, or formats.

### Basic Regex Syntax

Before diving into the code, here are a few essential Regex symbols:

| Symbol  | Description                                  |
|---------|----------------------------------------------|
| `.`     | Matches any character except newline         |
| `*`     | Matches 0 or more of the preceding character |
| `+`     | Matches 1 or more of the preceding character |
| `?`     | Matches 0 or 1 of the preceding character    |
| `\d`    | Matches any digit (equivalent to `[0-9]`)    |
| `\w`    | Matches any word character (alphanumeric)    |
| `\s`    | Matches any whitespace character             |
| `^`     | Matches the start of a string                |
| `$`     | Matches the end of a string                  |
| `[]`    | Matches any character in the brackets        |
| `|`     | OR operator                                  |
| `()`    | Groups multiple expressions                  |

### Using Regex in JavaScript

In JavaScript, Regex is either written directly inside `/.../` or instantiated using the `RegExp` constructor:

```js
let regex = /pattern/;
let regexObj = new RegExp('pattern');
```

## Practical Applications of Regex in JavaScript

### 1. Validating User Input

One common use case is validating email addresses. Regex can define a pattern for typical email structures:

```js
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
let email = "example@example.com";

console.log(emailPattern.test(email)); // true
```

Here:
- `^` ensures the string starts with alphanumeric or certain special characters.
- The `@` symbol is a literal match.
- The `.` is escaped (`\.`) to match an actual dot.

### 2. Searching and Extracting Substrings

If you want to extract specific parts from a string, Regex is your go-to tool. For example, let's extract all numbers from a string:

```js
let text = "My phone numbers are 123-456-7890 and 987-654-3210.";
let numbers = text.match(/\d{3}-\d{3}-\d{4}/g);

console.log(numbers); // ["123-456-7890", "987-654-3210"]
```

The pattern `\d{3}-\d{3}-\d{4}` finds any sequence that fits the format of three digits, a hyphen, three more digits, another hyphen, and four digits.

### 3. Replacing Text

Regex can also be used to replace specific patterns of text. Suppose we want to redact sensitive numbers:

```js
let sensitiveInfo = "My credit card number is 1234-5678-9012-3456.";
let redacted = sensitiveInfo.replace(/\d{4}-\d{4}-\d{4}-\d{4}/g, "****-****-****-****");

console.log(redacted); // "My credit card number is ****-****-****-****."
```

Here, `replace()` uses the pattern to find all credit card numbers and replaces them with a redacted version.

### 4. Splitting Strings with Regex

You can split a string into an array based on patterns using `split()`. For example, splitting a sentence by any punctuation:

```js
let sentence = "Hello! How are you doing? Let's meet up.";
let words = sentence.split(/[.!?]/);

console.log(words); // ["Hello", " How are you doing", " Let's meet up", ""]
```

The pattern `[.!?]` splits the sentence whenever it encounters a period, exclamation point, or question mark.

### 5. Removing Unwanted Characters

You can use Regex to remove unwanted characters, such as spaces or special symbols from strings:

```js
let messyText = "Thi$ i$ a #text with & weird ch@racters!";
let cleaned = messyText.replace(/[^a-zA-Z0-9 ]/g, "");

console.log(cleaned); // "This is a text with weird characters"
```

The pattern `[^a-zA-Z0-9 ]` matches anything that isn't an alphanumeric character or a space, and replaces it with an empty string, effectively removing all unwanted characters.

## Flags and Advanced Patterns in Regex

### Flags
Regex supports different **flags** that modify how the pattern behaves:
- `g` (global) – searches for all matches, not just the first one.
- `i` (ignore case) – makes the search case-insensitive.
- `m` (multiline) – makes the `^` and `$` anchor work across multiple lines.

For example:

```js
let caseInsensitivePattern = /hello/i;
console.log(caseInsensitivePattern.test("Hello")); // true
```

### Lookaheads and Lookbehinds

For more complex operations, you can use lookahead and lookbehind assertions. Lookaheads ensure that certain patterns follow your match:

```js
let text = "Price: $100";
let match = text.match(/\$\d+(?=\s)/);

console.log(match[0]); // "$100"
```

This pattern matches a dollar sign followed by digits only if they are followed by a space (`(?=\s)`).

Similarly, lookbehinds check for patterns that precede a match:

```js
let text = "abc123";
let match = text.match(/(?<=abc)\d+/);

console.log(match[0]); // "123"
```

Here, `(?<=abc)` ensures that digits are matched only if they are preceded by "abc".

### Conclusion

Whether you're validating user input, performing search-and-replace operations, or cleaning up messy data, Regex provides the power to handle even the most complex text processing tasks. 

By mastering the various Regex patterns and JavaScript's built-in support, you can elevate your text manipulation capabilities and simplify many otherwise complex operations.


[*Start experimenting with Regex in your JavaScript code today!*](https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Regex-Text-Manipulation.jsnb)
