---
title: Music Visualization with Shaders, Web Audio API and Perlin Noise
description: Using WebGL we generate visualization of audio in nice animation of Perlin Noise. We also show how GPU can be used from browser for high performance computation.
layout: post
---
This is a guest post by Kaustav Prasad. Kausatv is a final year B.Tech. student majoring in Engineering Physics with a minor in Computer Science at IIT Bombay. He is passionate about Scientific Computing, Fundamental Physics, and applying AI and Data Science to problems in healthcare and society. You can reach out to him at: [Linkedin](https://www.linkedin.com/in/kaustavprasad/). You can check his open work at [his GitHub profile](https://github.com/Anomaly42). 

The current article is on a project is has submitted as part of [Scribble Pad Hackathon](https://scribbler.live/2024/02/05/Scribble-Pad-IIT-B-Recap.html). The notebook can be accessed at: [https://github.com/Anomaly42/Scribbler_JavaScript_Hackathon_Submission](https://github.com/Anomaly42/Scribbler_JavaScript_Hackathon_Submission).

## Introduction
This project is an exploration into the practical applications of shader programming for creating dynamic and interactive visualizations. Developed using WebGL within JavaScript, it focuses on three major aspects: leveraging the GPU's parallel processing capabilities to manipulate pixel colors on the screen in real-time (illustrated with an interactive Julia Set), implementing Perlin Noise for creating complex, natural-looking textures, and using frequency binning to extract representative features from an audio clip. The end result is a blend of all of these components into a responsive, organic music visualizer that brings all music played within it to life!

## Part I: Shader Programming 101
Shader Programming refers to writing programs designed to run on the GPU, unlike most programs familiar to us, which are of course tailored to run on CPUs.
The amazing thing about GPUs is that they are designed to run a huge number of identical programs all at once on separate cores, which could likely be in the thousands.

To stay within the scope of this work, we will skip over most of the wonderful things shader programs can do, such as almost all of computer graphics, VFX, image processing, particle systems etc. and focus on the most basic way one can write a shader program:

Suppose that you are provided with a function you have to fill in. The inputs to the function are the x and y coordinates of a pixel on the screen, and the output you are supposed to give is the color corresponding to that pixel, i.e. you have to write the function f(x, y) -> color. When such a program is run on the GPU, the same function will be run in parallel for all pixels, and thus the result will be MUCH faster than executing the same program sequentially i.e. pixel-by-pixel on the CPU. Formally, such a program is called a fragment shader.

The Julia set (see here) is a complex set defined using the iteration of z^2 + c (starting from z = 0), where c is some complex number. If the iteration converges, it is part of the set. Additionally, we can assign colors to points not in the set depending on how slow they are to diverge; but most importantly, the color at a point depends only on its coordinate, thus the Julia Set is highly suitable for being made into a shader program.

## Implementation Details
We will use WebGL to render our shader programs using JavaScript. The actual program is written in GLSL. Using WebGL features such as uniforms, we can pass information from the JavaScript code (such as the mouse position) into the shader program to make it interactive. For more details on WebGL concepts, see this explainer.

Also, implementing this within a JS notebook (instead of, say, a python notebook) offers excellent interactivity, since the canvases defined within the JS notebook are basically child elements on the notebook, which enables us to find the canvas coordinates relative to the notebook coordinates and allow the mouse position based interactivity to work correctly.

![Julia Set](https://scribbler.live/scribblepad/ss/fig1.jpeg)
Fig 1: The Julia Set for a specific value of c. The set changes shape in real time based on the mouse position.

## Part II: Perlin Noise and Audio Frequency Binning
Another graphic we can make that fits the form f(x, y) -> color is Perlin Noise. Perlin Noise is basically a much more "organic" looking form of random noise (which, is, well, random). I will skip over how Perlin noise works and go straight to implementation; unlike the Julia Set shader program, I will adapt an existing implementation into my existing boilerplate WebGL code instead of making it from scratch. The Perlin Noise implementation is borrowed from this tutorial on perlin noise.

The (fragment) shader looks like the following. It consists of the noise() function implementing Perlin noise, and a turbulence function which is a wrapper around the noise() function to adjust its curl parameter. Finally the cloud function sets the curl as a function of time (time is obtained from the javascript code through a uniform variable) so that the output looks like a fluid.

Now here's the idea: we will take an audio clip, extract the weights of the different frequencies being played in the audio as a function of time using the Web Audio API, group those weights together, and use these weight values as parameters into the perlin noise display to build a music visualizer.

First, we obtain the audio clip: I am using the Deezer API to extract a 30 second preview of "Paint the Town Red". This method can of course be extended to multiple songs you can switch between.We can now process and plot the frequency weights in a nice visualization:

![Frequency Distribution](https://scribbler.live/scribblepad/ss/fig3.jpeg)
Fig 2: Visualization of the frequency distribution of the audio at a given time.


## Part III: Putting it all Together
We now extract parameters from the frequency weights, by first binning the frequencies into three groups (i.e. the weights of low, medium and high frequencies) each with a value between 0 and 255. We now use uniform variables to pass these parameters to the shader program. The low and high frequency parameters are assigned to change the colors while the middle frequency parameter is used to alter the "time elapsed" of the perlin noise, since there is a u_time uniform behaving as time in this fluid-like perlin noise setup, so altering that would amount to essentially forwarding and reversing time.

Of course, there is enormous potential for tweaking within this visualizer. One could look for different Perlin Noise inputs to achieve other forms of organic visualizations, or even interact with the visualizer by adding the mouse position as another parameter.

![Music Visualization Idle](https://scribbler.live/scribblepad/ss/fig2.jpeg)
Fig 3: The music visualizer in its idle state, as a dull red, lava lamp-like fluid.

![Visualization in Action](https://scribbler.live/scribblepad/ss/fig4.jpeg)
Fig 4: The music visualizer in action: the result is an interesting mix of fluid and cloud-like visuals flowing and changing colors according to the music being played.
