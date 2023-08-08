---
title: JavaScript Libraries for Image Processing
layout: post
description: JavaScript ecosystem has a slew of powerful libraries for image processing in the browser. 
tags: javascript
---

There are several JavaScript libraries available for image processing. Here are some popular ones:

1. Canvas API: The built-in <canvas> element in HTML5 provides a powerful API for image manipulation, including pixel-level access and transformation functions.
   - Project Link: [Canvas API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
   - No CDN link required as it is a built-in HTML5 feature.

2. Fabric.js: A powerful and easy-to-use library for working with HTML5 canvas. It provides features like image filtering, cropping, resizing, and masking.
   - Project Link: [Fabric.js GitHub Repository](https://github.com/fabricjs/fabric.js)
   - CDN Link: `<script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/4.5.0/fabric.min.js"></script>`


3. p5.js: Originally designed for creative coding and visualization, p5.js also includes image manipulation functions such as filters, blending modes, and image transformation.
   - Project Link: [p5.js Website](https://p5js.org/)
   - CDN Link: `<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js"></script>`

4. CamanJS: A lightweight library that provides a simple API for applying filters and effects to images. It offers a variety of built-in filters and allows for custom filter creation.
   - Project Link: [CamanJS GitHub Repository](https://github.com/meltingice/CamanJS)
   - CDN Link: `<script src="https://cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.2/caman.full.min.js"></script>`

5. Jimp: A pure JavaScript image processing library that provides a wide range of features like cropping, resizing, rotating, applying filters, and more. It supports various image formats and is easy to integrate into Node.js applications.
   - Project Link: [Jimp GitHub Repository](https://github.com/oliver-moran/jimp)
   - CDN Link: `<script src="https://cdnjs.cloudflare.com/ajax/libs/jimp/0.16.1/jimp.min.js"></script>`

6. ImageJS: A comprehensive JavaScript library for image editing, analysis, and processing. It offers a wide range of features including cropping, resizing, filtering, blending, and more.
   - Project Link: [ImageJS GitHub Repository](https://github.com/image-js/image-js)
   - CDN Link: `<script src="https://cdn.jsdelivr.net/npm/image-js"></script>`


7. OpenCV.js: A JavaScript port of OpenCV, a popular computer vision library. OpenCV.js provides powerful image processing and computer vision algorithms, including face detection, feature detection, and image segmentation.
   - Project Link: [OpenCV.js GitHub Repository](https://github.com/opencv/opencv)
   - CDN Link: `<script async src="https://docs.opencv.org/master/opencv.js" onload="onOpenCvReady();" type="text/javascript"></script>`

8. PixiJS: Primarily known as a 2D rendering engine, PixiJS also includes functionality for image processing, such as blending modes, filters, and shaders.
   - Project Link: [PixiJS GitHub Repository](https://github.com/pixijs/pixi.js)
   - CDN Link: `<script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.3.3/pixi.min.js"></script>`

These libraries have varying levels of complexity and features, so you can choose the one that best suits your specific image processing needs. Feel free to visit the respective project links for detailed documentation, examples, and additional resources for each library.


### Code Examples for Image Processing

Here are code examples showcasing some basic image processing tasks using the mentioned JavaScript libraries:

#### Canvas API:

	const canvas = document.createElement('canvas');
	const context = canvas.getContext('2d');
	const image = new Image();
	image.src = 'image.jpg'; //Link to the image you would want to process
	
	image.onload = () => {
	  canvas.width = image.width;
	  canvas.height = image.height;
	  context.drawImage(image, 0, 0);
	
	  // Example: Applying a grayscale filter
	  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
	  const data = imageData.data;
	
	  for (let i = 0; i < data.length; i += 4) {
	    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
	    data[i] = avg;
	    data[i + 1] = avg;
	    data[i + 2] = avg;
	  }
	
	  context.putImageData(imageData, 0, 0);
	
	  // Render the modified image on the page
	  document.body.appendChild(canvas);
	};

#### Fabric.js

	const canvas = new fabric.Canvas('canvas');
	
	fabric.Image.fromURL('image.jpg', (img) => { //Link to the image you would want to process
	  img.filters.push(new fabric.Image.filters.Grayscale());
	  img.applyFilters();
	
	  canvas.add(img);
	});

#### p5.js

	function setup() {
	  createCanvas(400, 400);
	  loadImage('image.jpg', (img) => { //Link to the image you would want to process
	    img.filter(GRAY);
	
	    image(img, 0, 0);
	  });
	}

#### CarmanJS

	Caman('#canvas', 'image.jpg', function () { //Link to the image you would want to process
	  this.greyscale();
	
	  this.render();
	});

#### Jimp

const Jimp = require('jimp');

	Jimp.read('image.jpg', (err, image) => { //Link to the image you would want to process
	  if (err) throw err;
	  image
	    .greyscale()
	    .write('output.jpg');
	});
	
#### ImageJS

	const img = new Image();
	
	img.onload = () => {
	  const image = new ImageJS.Image();
	  image.load(img);
	
	  // Example: Applying a blur filter
	  image.blur(5);
	
	  // Render the modified image on the page
	  const canvas = document.createElement('canvas');
	  canvas.width = image.width;
	  canvas.height = image.height;
	  image.render(canvas);
	  document.body.appendChild(canvas);
	};
	
	img.src = 'image.jpg'; //Link to the image you would want to process

#### OpenCV.js

	const src = cv.imread('canvasInput');
	const dst = new cv.Mat();
	
	// Example: Applying a Canny edge detection
	cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
	cv.Canny(dst, dst, 50, 150);
	
	// Render the modified image on the page
	cv.imshow('canvasOutput', dst);
	src.delete();
	dst.delete();
	
#### PixUS

	const app = new PIXI.Application({ width: 800, height: 600 });
	document.body.appendChild(app.view);
	
	PIXI.Loader.shared.add('image', 'image.jpg').load(() => {  //Link to the image you would want to process
	  const sprite = new PIXI.Sprite(PIXI.Loader.shared.resources.image.texture);
	
	  // Example: Applying a blur filter
	  sprite.filters = [new PIXI.filters.BlurFilter()];
	
	  app.stage.addChild(sprite);
	});


