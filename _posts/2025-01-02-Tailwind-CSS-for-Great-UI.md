---
title: A Beginner's Guide to Tailwind CSS, With Code Examples
description: Using the Tailwind CSS CDN is an excellent way to get started quickly, especially for small projects or prototypes.
layout: post
categories: Scribbler
start_link: https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Basic%20JavaScript/Tailwind-CSS.jsnb
---


Tailwind CSS is a utility-first CSS framework that allows developers to style their applications quickly by applying pre-defined utility classes directly in the markup. If you prefer not to use npm or a build tool, you can load Tailwind CSS directly from a CDN.  

This article demonstrates how to set up and use Tailwind CSS with a CDN for quick prototyping or small projects.  

---

## Why Use the CDN Version?  

- **Ease of Setup**: No need for a build process; just include a `<link>` in your HTML.  
- **Fast Prototyping**: Quickly experiment with Tailwind's classes without a full project setup.  
- **Portability**: Ideal for small projects, demos, or environments without Node.js.  

---

## Setting Up Tailwind CSS Using CDN  

### Step 1: Include Tailwind CSS  

Add the Tailwind CSS CDN link to your HTML `<head>` section:  

```html  
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>Tailwind CSS with CDN</title>  
    <!-- Tailwind CSS CDN -->  
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>  
<body class="bg-gray-100">  
    <h1 class="text-4xl font-bold text-center text-blue-600">Welcome to Tailwind CSS</h1>  
</body>  
</html>  
```  

This single script automatically sets up Tailwind CSS with its default configuration.  



---

## Examples  

### Basic Styling  

```html  
<div class="p-4 bg-blue-500 text-white rounded-lg">  
    Hello, Tailwind CSS!  
</div>  
```  

---

### Responsive Design  

```html  
<div class="p-4 bg-gray-200 md:bg-gray-400 lg:bg-gray-600">  
    Resize the window to see the background color change!  
</div>  
```  

---

### Hover and Focus States  

```html  
<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">  
    Hover Me  
</button>  
```  

---

### Flexbox Layout  

```html  
<div class="flex items-center justify-center h-screen bg-gray-100">  
    <div class="p-4 bg-white shadow rounded">Centered Content</div>  
</div>  
```  

---

### Grid Layout  

```html  
<div class="grid grid-cols-3 gap-4 p-4">  
    <div class="bg-red-500 p-4">1</div>  
    <div class="bg-blue-500 p-4">2</div>  
    <div class="bg-green-500 p-4">3</div>  
</div>  
```  

---

### Advanced Example: A Simple Card Component  

```html  
<div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">  
    <img class="w-full h-48 object-cover" src="https://via.placeholder.com/300x200" alt="Image">  
    <div class="p-4">  
        <h2 class="text-2xl font-bold text-gray-800">Tailwind CSS Card</h2>  
        <p class="text-gray-600 mt-2">  
            This is an example of a simple card built with Tailwind CSS.  
        </p>  
        <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">  
            Learn More  
        </button>  
    </div>  
</div>  
```  
[Experiment with Tailwind CSS yourself](https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Basic%20JavaScript/Tailwind-CSS.jsnb).
---

## Benefits and Limitations of the CDN Approach  

### **Benefits**  
- Quick setup for small projects.  
- No need for a build tool or additional dependencies.  

### **Limitations**  
- Limited configuration compared to a local setup.  
- Performance may not be as optimized as using tools like PurgeCSS to remove unused styles.  

---

## Classes and Features of Tailwind-CSS

Here’s a categorized list of commonly used **Tailwind CSS classes** across different functionalities. These classes make it easier to style elements with minimal custom CSS.  

---

### **1. Layout**  
#### **Box Model**
- `m-{size}`: Margin (`m-4`, `mt-2`, `mx-auto`, `my-4`).  
- `p-{size}`: Padding (`p-4`, `px-2`, `py-6`).  
- `space-{x|y}-{size}`: Space between children (`space-y-4`, `space-x-2`).  

#### **Width and Height**  
- `w-{size}`: Width (`w-full`, `w-1/2`, `w-96`).  
- `h-{size}`: Height (`h-full`, `h-screen`, `h-64`).  
- `min-w-{size}`, `max-w-{size}`: Min/Max width (`min-w-0`, `max-w-lg`).  
- `min-h-{size}`, `max-h-{size}`: Min/Max height (`min-h-screen`, `max-h-96`).  

#### **Display**  
- `block`, `inline-block`, `inline`, `flex`, `inline-flex`, `grid`, `inline-grid`, `hidden`.  

---

### **2. Flexbox and Grid**  
#### **Flexbox Utilities**  
- `flex`, `inline-flex`, `flex-{row|col|row-reverse|col-reverse}`: Flex directions.  
- `justify-{start|center|end|between|around|evenly}`: Alignment along main axis.  
- `items-{start|center|end|baseline|stretch}`: Alignment along cross axis.  
- `flex-wrap`, `flex-nowrap`, `flex-wrap-reverse`.  

#### **Grid Utilities**  
- `grid`, `grid-cols-{n}`: Grid layout (`grid-cols-3`, `grid-cols-auto`).  
- `gap-{size}`: Gap between rows/columns (`gap-4`, `gap-x-2`, `gap-y-6`).  
- `col-span-{n}`, `row-span-{n}`: Grid item spans (`col-span-2`, `row-span-3`).  

---

### **3. Typography**  
- `text-{size}`: Font size (`text-sm`, `text-lg`, `text-3xl`).  
- `font-{thin|light|normal|medium|semibold|bold|extrabold|black}`: Font weights.  
- `text-{color}`: Text color (`text-red-500`, `text-gray-800`).  
- `text-{left|center|right|justify}`: Text alignment.  
- `uppercase`, `lowercase`, `capitalize`.  
- `line-clamp-{n}`: Truncate text after `n` lines (requires plugin).  

---

### **4. Colors and Backgrounds**  
#### **Text Colors**  
- `text-{color}`: Text color (`text-blue-500`, `text-green-600`).  

#### **Background Colors**  
- `bg-{color}`: Background color (`bg-red-300`, `bg-gray-50`).  

#### **Borders**  
- `border-{size}`: Border width (`border`, `border-2`, `border-4`).  
- `border-{color}`: Border color (`border-blue-500`).  
- `rounded`, `rounded-{size}`: Border radius (`rounded-lg`, `rounded-full`).  

---

### **5. Spacing and Sizing**  
#### **Padding and Margin**  
- `p-{size}`, `m-{size}`: Universal padding/margin (`p-2`, `m-4`).  
- `px-{size}`, `py-{size}`: Horizontal/Vertical padding (`px-4`, `py-6`).  
- `mx-auto`: Center horizontally.  

#### **Width/Height**  
- `w-{size}`, `h-{size}`: Set width/height (`w-1/3`, `h-1/2`).  
- `max-w-{size}`, `max-h-{size}`: Max size (`max-w-xl`, `max-h-screen`).  

---

### **6. Effects and Decorations**  
#### **Shadows**  
- `shadow-{size}`: Box shadows (`shadow-sm`, `shadow-md`, `shadow-lg`).  
- `shadow-none`: Remove shadow.  

#### **Opacity**  
- `opacity-{value}`: Set opacity (`opacity-50`, `opacity-75`).  

#### **Hover/Focus States**  
- `hover:bg-{color}`: Hover background color.  
- `focus:outline-none`: Remove focus outline.  

#### **Ring (Focus Ring)**  
- `ring-{size}`, `ring-{color}`: Add focus ring (`ring-2`, `ring-blue-500`).  

---

### **7. Interactivity**  
- `cursor-{type}`: Cursor style (`cursor-pointer`, `cursor-not-allowed`).  
- `pointer-events-{none|auto}`: Enable/disable pointer events.  
- `select-{none|text|all|auto}`: Control text selection.  

---

### **8. Positioning**  
- `relative`, `absolute`, `fixed`, `sticky`.  
- `inset-{size}`: Top, right, bottom, left spacing (`inset-0`, `inset-y-4`).  
- `z-{value}`: Z-index (`z-0`, `z-50`, `z-auto`).  

---

### **9. Animations and Transitions**  
#### **Transitions**  
- `transition`, `transition-{property}`, `duration-{time}`, `ease-{type}`.  

#### **Animations**  
- `animate-{type}`: Preset animations (`animate-bounce`, `animate-spin`).  

---

### **10. Responsive Design**  
Tailwind supports responsive prefixes for utilities:  
- `sm`, `md`, `lg`, `xl`, `2xl`.  

Example:  
```html  
<div class="text-base sm:text-lg md:text-xl lg:text-2xl">Responsive Text</div>  
```  

---

This is a non-exhaustive list, but it provides a good overview of the breadth of classes in Tailwind CSS! For more details, refer to the [official Tailwind CSS documentation](https://tailwindcss.com/docs).

Experiment with Tailwind CSS today and experience the power of utility-first styling!  Use this notebook to experiment: [Scribbler Notebook for Tailwind CSS](https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Basic%20JavaScript/Tailwind-CSS.jsnb).
 
