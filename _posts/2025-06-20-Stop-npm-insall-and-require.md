---
title: It's 2025. Stop Doing `npm install` and `require()`
layout: post
categories: JavaScript
description: It's 2025 — stop using `require()` and `npm install`. Embrace native ESM, modern package managers like Bun or pnpm, and build faster, cleaner JavaScript apps.
start_link: https://app.scribbler.live/#./examples/ES-Modules.jsnb
---

**By now, if you're still writing `require()` and blindly running `npm install`, you're not just stuck in the past — you're actively slowing down your team, bloating your apps, and missing out on the modern JavaScript ecosystem.**

---

## 🚨 The Legacy Baggage: `npm install` and `require()`

Let’s be honest:
For years, `npm install` and `require()` were staples of every JavaScript project. They powered the Node.js revolution and made package management and module loading easy (ish) in an otherwise chaotic ecosystem.

But it’s 2025. You’re building on a **vastly more mature platform**, and we’ve learned a few things:

* `require()` is **CommonJS**, and that’s **not what the browser wants**.
* `npm install` pulls in **gigabytes of often-unused code**, silently accumulating tech debt.
* Node-style module resolution makes **bundling and tree-shaking harder**.
* Tooling has moved on — you haven’t.

---

## ✅ What You Should Be Doing Instead

### 1. **Use ECMAScript Modules (ESM)** — Not `require()`

```js
// ❌ Old and busted
const express = require('express');

// ✅ New hotness
import express from 'express';
```

ES Modules are:

* **Native to the browser**
* Fully supported in Node.js (since v14+ LTS)
* **Statically analyzable** (better for bundlers and type checkers)
* A must if you're building anything meant for the modern frontend

If you’re still using `require()`, you’re fighting the ecosystem.

---

### 2. **Use `bun`, `pnpm`, or `yarn` Workspaces** — Not Vanilla `npm`

`npm install` is fine for toy apps. But in real projects?

* `bun install` is *lightning fast* and uses native code.
* `pnpm` enforces **real dependency deduplication** and better monorepo workflows.
* `yarn` with workspaces still holds strong for large codebases.

`npm` is still improving, but it’s **not the best choice** anymore if performance, determinism, and disk usage matter.

---

### 3. **Use Native URL Imports and CDNs (Where It Makes Sense)**

You no longer have to install everything locally. For frontend projects:

```js
// In modern browsers or Deno
import React from 'https://esm.sh/react';
```

This works:

* With **zero install step**
* Great for **demos, prototyping, serverless, and edge environments**
* Pairs perfectly with tools like **Deno**, **Bun**, and even some Vite setups

No more `node_modules`. No more `package.json` bloat. Just use what you need.

---

### 4. **Know When to Ditch the Build Step Entirely**

It’s 2025. You can write native ESM, import URLs, and deploy instantly. If your app has no need for JSX, TypeScript, or SCSS, you might not even need a bundler.

Tools like:

* **Deno**
* **Bun**
* **Vite** (with ESBuild under the hood)
* **Cloudflare Workers / Vercel Edge Functions**

...let you **skip the heavy lifting** and get to production faster, with better performance.

---

## 🧨 Still Using CommonJS? You're Breaking the Ecosystem

The longer you hold on to CommonJS and manual installs, the harder it is to:

* Interop with modern libraries
* Optimize performance
* Run code at the edge
* Ship to browser-native environments

Modern tooling is **ESM-first**, **tree-shakeable**, and optimized for speed. Holding on to `require()` and `npm install` is like writing jQuery plugins in a React world.

---

## 👊 TL;DR — Stop Doing This:

```bash
npm install lodash
```

```js
const _ = require('lodash');
```

---

## ✅ Do This Instead:

```bash
bun add lodash  # or pnpm add lodash
```

```js
import _ from 'lodash';
```

Or better yet, don’t add it at all — just use native APIs or URL imports if you're targeting the browser.

---

## Final Thought

It’s 2025. We’re building apps that run at the edge, deploy in milliseconds, and expect instant load times. We don’t have time for 500MB `node_modules` folders, or module systems designed in 2010.

**Use ESM. Use smarter package managers. Move forward.**

Your future self — and your CI/CD pipeline — will thank you.

