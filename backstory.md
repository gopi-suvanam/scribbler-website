---
title: Backstory
description: Motivation for building Scribbler and the Roadmap
---

## Need for a Simple Interface to do Experiments
Scribbler has been built to satisfy a need for doing experimentation. [Jupyter Notebook](https://jupyter.org/) is very popular amongst python developers and data scientists for experimentation. It gives a simple interface for experimenting in python for testing code or for experimental analysis. Jupyter Notebook provides this application by running what is known as a “kernel” in the backend and giving back the results to the ui for display. It is an open source and free to use tool. Thus it has become extremely popular. As it is in Python, it requires installation of python environment and the libraries to use the tool. There are fully hosted alternatives like Google Colabs, where one can experiment in Python without installing anything.

There is no similar tool for Javascript. There are online tools like jsfiddle/codepen etc but none that can be downloaded and used as a free tool or embedded on other solutions. There are a few solutions like [Observable HQ](https://observablehq.com/), [Jbook](https://jbook.qiushiyan.dev/) and IJavaScript. But none of them have a usage anywhere close to Jupyter Notebook. The first one of these (Obeservable HQ) is not an open source product but it is an online platform. Hence it comes with limitations like not being free and not being modifiable. The second one (jbook) is a nifty tool and it is the closest to what I was looking for. But it requires nodejs to run, that’s a put off for me. The third one (IJavascript) puts javascript kernel in Jupyter Notebook. This ensures Javascript is used in the same familiar interface of Jupyter. But this requires both node.js and Python to run.

## Notebook Without Backend
Pure Javascript and JS libraries can ideally run without the need for a backend code like node.js or Python. Javascript is built to run by default in the browser. Optimization of the browser tech by Chromium (i.e. V8) and Firefox has ensured Javascript in the browser is fast and efficient. Thus we can build a good notebook tool using just front end technologies. I call this a “nodeless” app for two reasons - 1. it does not require node.js and npm to use.. 2. it does not require a server (I didnt want to use the word “serverless” as that word has been polluted by Amazon). Backend can still be used for saving the notebooks to the cloud and for collaboration.

I’ve been looking for such a solution for quite sometime mainly to test out some of the open source JS libraries and also for building some new open source projects. As I couldn’t find any solution I have built a simple tool to run javascript in notebooks. I call it Scribbler (so much for creativity). It is available as an open source solutions — free to use and modify. The source code is here. It does not require any backend technology. Users can download and use it in the file system or host it in webserver to use it on the internet. I have used Github Pages to host it. As it does not require backend, I need not buy/host a server to do that (ain’t it beautiful?). 

## Usecases
JavaScript can be used for a variety of experimentation. I've learnt a lot about Dynamic systems while using Scribbler to do [simulations](https://app.scribbler.live/#./examples/Dynamic-Simulation.jsnb). It has also helped me in understanding some concepts of [decentralized finance](https://app.scribbler.live/#./examples/AMM-Simulation.jsnb). I've also used Scribbler to solve some equations using [numeric methods](https://app.scribbler.live/#./examples/Numerical-Analysis-Recipes.jsnb). Given the dynamic nature of JavaScript and its close integration with the UI, one can use it for building [charting/dahsboarding tools](https://app.scribbler.live/#./examples/Crypto-Currency-TimeSeries.jsnb). Scribbler can infact be even used for [data science and machine learning](https://app.scribbler.live/#./examples/Decentralized-ML-Model-Storage.jsnb). 

JavaScript has a vibrant community with a wide range of libraries available. Thus the usecases of Scribbler are limitless. I hope as more people start using Scribbler, there will be more and more applications including interactuve data science, Generative AI, scientific simulations, financial/economic applications, decentralized computing etc. 

Happy experimenting!!

PS: For those wishing to join the community of Scribbler you can attend a Hackathon by applying here: [Yellow Scribes Hackathon](https://forms.gle/LjvV7W2jBq8n8Qzh6)
