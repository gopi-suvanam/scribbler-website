---
title: Advanced Image Manipulation Techniques in JavaScript using Fabric.js for XR
layout: post
categories: [XR, Libraries]
description: Fabric.js provides a rich set of features for advanced image manipulation in the browser. Whether you need to crop, resize, rotate, or apply filters, Fabric.js makes it easy to perform these operations with a simple API.
start_link: https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-website/Fabric-JS.jsnb
---

## Getting Started with Fabric.js

Fabric.js is a powerful and flexible JavaScript library that allows for advanced image manipulation directly within the browser. It provides an easy-to-use API for creating, manipulating, and rendering objects on a canvas. In this article, we'll explore some advanced image manipulation techniques using Fabric.js, including cropping, resizing, rotating, and applying filters. You can experiment with fabric.js in this notebook: []().

First, you need to include Fabric.js in your project. You can either download it or use a CDN.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Fabric.js Image Manipulation</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/4.5.0/fabric.min.js"></script>
    <style>
        canvas {
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <h1>Fabric.js Image Manipulation</h1>
    <canvas id="canvas" width="800" height="600"></canvas>
</body>
</html>
```

## Loading and Displaying an Image

Let's start by loading and displaying an image on the canvas.

```html
<script>
    const canvas = new fabric.Canvas('canvas');

    fabric.Image.fromURL('https://www.researchgate.net/profile/Irina-Gladkova/publication/253864235/figure/fig3/AS:668627082690571@1536424527359/The-image-shown-here-is-a-300-300-pixel-cropped-section-of-SEVIRI-Band-3-digital-counts.png', function(img) {
        img.set({
            left: 100,
            top: 100,
            angle: 0
        });
        canvas.add(img);
    });
</script>
```

This code initializes a Fabric.js canvas and loads an image from a URL, placing it on the canvas at specified coordinates.

## Cropping an Image

To crop an image, you can use the `cropX`, `cropY`, `width`, and `height` properties.

```html
<script>
    fabric.Image.fromURL('https://www.researchgate.net/profile/Irina-Gladkova/publication/253864235/figure/fig3/AS:668627082690571@1536424527359/The-image-shown-here-is-a-300-300-pixel-cropped-section-of-SEVIRI-Band-3-digital-counts.png', function(img) {
        img.set({
            left: 100,
            top: 100,
            angle: 0,
            cropX: 50,
            cropY: 50,
            width: 200,
            height: 200
        });
        canvas.add(img);
    });
</script>
```

This code crops the image to a 200x200 square starting from (50, 50) on the original image.

## Resizing an Image

Resizing can be done by setting the `scaleX` and `scaleY` properties.

```html
<script>
    fabric.Image.fromURL('https://www.researchgate.net/profile/Irina-Gladkova/publication/253864235/figure/fig3/AS:668627082690571@1536424527359/The-image-shown-here-is-a-300-300-pixel-cropped-section-of-SEVIRI-Band-3-digital-counts.png', function(img) {
        img.set({
            left: 100,
            top: 100,
            angle: 0,
            scaleX: 0.5,
            scaleY: 0.5
        });
        canvas.add(img);
    });
</script>
```

This resizes the image to half of its original size.

## Rotating an Image

Rotating an image is straightforward using the `angle` property.

```html
<script>
    fabric.Image.fromURL('https://www.researchgate.net/profile/Irina-Gladkova/publication/253864235/figure/fig3/AS:668627082690571@1536424527359/The-image-shown-here-is-a-300-300-pixel-cropped-section-of-SEVIRI-Band-3-digital-counts.png', function(img) {
        img.set({
            left: 100,
            top: 100,
            angle: 45
        });
        canvas.add(img);
    });
</script>
```

This rotates the image by 45 degrees.

## Applying Filters to an Image

Fabric.js supports various image filters, such as grayscale, sepia, and brightness. Here's how to apply a grayscale filter:

```html
<script>
    fabric.Image.fromURL('https://www.researchgate.net/profile/Irina-Gladkova/publication/253864235/figure/fig3/AS:668627082690571@1536424527359/The-image-shown-here-is-a-300-300-pixel-cropped-section-of-SEVIRI-Band-3-digital-counts.png', function(img) {
        img.filters.push(new fabric.Image.filters.Grayscale());
        img.applyFilters();
        canvas.add(img);
    });
</script>
```

For brightness adjustment, use:

```html
<script>
    fabric.Image.fromURL('https://www.researchgate.net/profile/Irina-Gladkova/publication/253864235/figure/fig3/AS:668627082690571@1536424527359/The-image-shown-here-is-a-300-300-pixel-cropped-section-of-SEVIRI-Band-3-digital-counts.png', function(img) {
        img.filters.push(new fabric.Image.filters.Brightness({ brightness: 0.05 }));
        img.applyFilters();
        canvas.add(img);
    });
</script>
```

You can chain multiple filters together:

```html
<script>
    fabric.Image.fromURL('https://www.researchgate.net/profile/Irina-Gladkova/publication/253864235/figure/fig3/AS:668627082690571@1536424527359/The-image-shown-here-is-a-300-300-pixel-cropped-section-of-SEVIRI-Band-3-digital-counts.png', function(img) {
        img.filters.push(
            new fabric.Image.filters.Grayscale(),
            new fabric.Image.filters.Brightness({ brightness: 0.05 })
        );
        img.applyFilters();
        canvas.add(img);
    });
</script>
```

## Applications of Image Manipulation with Fabric.js

Fabric.js's capabilities extend far beyond simple image loading and manipulation. Here are some practical applications of advanced image manipulation using Fabric.js:

#### 1. **Online Photo Editors**
Fabric.js can be used to build powerful online photo editors that allow users to upload, edit, and save images directly in the browser. Features such as cropping, resizing, rotating, and applying filters can be easily implemented.

#### 2. **Graphic Design Tools**
Create comprehensive graphic design tools where users can create and manipulate complex compositions, including text, shapes, and images. Fabric.js's object-oriented approach makes it easy to manage multiple elements on the canvas.

#### 3. **Interactive Storytelling**
Develop interactive storytelling applications where users can manipulate images to create visual narratives. This can be particularly useful for digital comics, e-books, and educational materials.

#### 4. **Customizable Product Previews**
For e-commerce websites, Fabric.js can be used to build customizable product previews. Users can upload their images (e.g., logos or photos) to see how they would look on various products like t-shirts, mugs, or phone cases.

#### 5. **Digital Art Creation**
Enable digital artists to create and edit their artwork directly in the browser. Artists can use Fabric.js to draw, paint, and manipulate images, with support for layers, brushes, and filters.

#### 6. **Interactive Infographics**
Fabric.js can be used to create interactive infographics that allow users to manipulate data visualizations. This can include resizing, rotating, and editing elements to better understand the information presented.

#### 7. **Educational Tools**
Develop educational tools that allow students to interact with images for learning purposes. For example, students can annotate images, highlight important areas, and apply filters to enhance their understanding of the subject matter.

#### 8. **Virtual Scrapbooks**
Create virtual scrapbooking applications where users can combine images, text, and decorative elements to create digital scrapbooks. Users can manipulate each element to design their pages creatively.

#### 9. **Game Development**
Fabric.js can be used in the development of 2D games where image manipulation is required. This includes sprite creation, animation, and dynamic changes to game assets based on user interactions.

#### 10. **Medical Imaging**
In medical applications, Fabric.js can be used to manipulate medical images such as X-rays or MRIs. This includes zooming, rotating, and applying filters to enhance image analysis and diagnosis.

## Example Application: Online Photo Editor

Here's an example of how you might implement some basic features of an online photo editor using Fabric.js:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Fabric.js Photo Editor</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/4.5.0/fabric.min.js"></script>
    <style>
        canvas {
            border: 1px solid black;
        }
        #controls {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Fabric.js Photo Editor</h1>
    <canvas id="canvas" width="800" height="600"></canvas>
    <div id="controls">
        <button id="rotate">Rotate</button>
        <button id="grayscale">Grayscale</button>
        <button id="brightness">Brightness</button>
    </div>
    <script>
        const canvas = new fabric.Canvas('canvas');

        // Load image
        fabric.Image.fromURL('https://via.placeholder.com/300', function(img) {
            img.set({
                left: 100,
                top: 100
            });
            canvas.add(img);

            // Rotate image
            document.getElementById('rotate').addEventListener('click', function() {
                img.set('angle', img.get('angle') + 45);
                canvas.renderAll();
            });

            // Apply grayscale filter
            document.getElementById('grayscale').addEventListener('click', function() {
                img.filters.push(new fabric.Image.filters.Grayscale());
                img.applyFilters();
                canvas.renderAll();
            });

            // Apply brightness filter
            document.getElementById('brightness').addEventListener('click', function() {
                img.filters.push(new fabric.Image.filters.Brightness({ brightness: 0.05 }));
                img.applyFilters();
                canvas.renderAll();
            });
        });
    </script>
</body>
</html>
```

In this example, the basic functionality for rotating an image and applying grayscale and brightness filters is implemented, demonstrating how Fabric.js can be used to create an online photo editor.
Experiment with Fabric.js here: [JavaScript Notebook for Fabric.js](https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-website/Fabric-JS.jsnb).

