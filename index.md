---
layout: full
homepage: true
disable_anchors: true
description: Simple Interface for Experimenting in JavaScript. Developed for Open Source using Open Source.
title: Scribbler - JavaScript Notebook
---

## Experiment in JavaScript With Ease

Scribbler is a browser-based tool to experiment in JavaScript for scientific computation/new code development/visualization/data science. 
<div class="row">
<div class="col-lg-6" markdown="1">
- Runs without backend. Can be loaded from the file system.
- Easy to use with a minimalistic UI.
- Can load thirdparty libraries dynamically.
</div>

<div class="col-lg-6" markdown="1">
- Ctrl-Enter for running the cell.
- Alt/Option-enter for inserting new cell.
- Toggle "code" to "html" for html content.
</div>
</div>
<div style="margin:30px">
<img src='Scribbler-SS.png' style="margin:auto;"/>
</div>

> JavaScript is the language that never ceases to surprise you with its quirks and oddities.
> 
> ~ Anonymous



<div class="row" style="marging:10px">

<div class="col-lg-4 col-xs-12" style="text-align: center;"> 
    <button style="width:200px;height:200px;border-radius:100px;margin:30px;color:white !important;background-color:#fede02">
    <a style="color:#555 !important" href="https://app.scribbler.live">Try Scribbler</a></button></div>
    
<div class="col-lg-4 col-xs-12"  style="text-align: center;" > 
    <button style="width:200px;height:200px;border-radius:100px;margin:30px;color:white !important;background-color:#fede02">
        <a style="color:#555 !important" href="samples.html">Explore Gallery</a></button>
</div>

<div class="col-lg-4 col-xs-12"   style="text-align: center;"> 
    <button style="width:200px;height:200px;border-radius:100px;margin:30px;color:white !important;background-color:#fede02">
    <a style="color:#555 !important" href="https://discord.com/invite/uxNSsWunwU">Join Discord</a></button></div>

</div>
<div style="text-align:center;width:100%">
<h1>Explore and experiment with JavaScript, get instant output to text and iterate.</h1>
</div>

<div class="row">
<div class="col-lg-6" markdown="1">



## Getting Started
{:.mt-lg-0}

### Installing
No specific installation is required. You can use the git-hosted version (without downloading anything) here: [https://app.scribbler.live/](https://app.scribbler.live/). Alternatively, you can [download](https://github.com/gopi-suvanam/scribbler/archive/refs/heads/main.zip) or clone the [Github repo](https://github.com/gopi-suvanam/scribbler/) on any machine and host it in webserver. To host the app online, put the folder in web directory of the server and use the link to index.html. That's it. No no npm, no node, no pip install, no apt-get install. 

### Hello-World

> JavaScript: The only language where you can write the "Hello world" code in one line or in 1000.
> 
> ~ Anonymous

Easy to start:
    
    show("Hello World")
        
Simple interface for array manipulation and charting:

    //Plots a sin graph
    range(0,10,0.01).map(Math.sin).plot() 
    
### Example Notebooks
A hello-world notebook: [https://app.scribbler.live/#./examples/Hello-world.jsnb](https://app.scribbler.live/#./examples/Hello-world.jsnb). More examples are added in the folder examples/ in [Scribbler repository](https://github.com/gopi-suvanam/scribbler/tree/main/examples). Check the [Samples page](samples.html) for links.
  
</div>
<div class="col-lg-6" markdown="1">

## Features
{:.mt-lg-0}

### Cells
The notebook consists of cells. Each cell will have user inputted html/code and an output. There is a menu at the top right corner of the cell (or above the cell in case of smaller screens). There are two types of cells: code and html. The type of cell can be toggled using a switch in the cell menu. For code cells input and output are both shown. For html cells, input is hidden and opens up if you click the output.

### Actions
To get the output of a cell press play ► button on the cell menu (or Cmd/Ctrl-Enter on keyboard after selecting the cell). The cell menu also has buttons for moving the cell up ↑, down ↓, adding a new cell ✛ and deleting the current cell ☓.

### Saving
A notebook can be downloaded as json (has a default extension of .jsnb). IT can be loaded back into the app. The notebook or only the output can also be downloaded as html.

### Loading
A .jsnb file can also be directly loaded into the app by suffixing the url of the file after "#" something like: https://app.scribbler.live/#link_to_file.jsnb. The url of the file should be accessible by the browser through GET method.
</div>

</div>


<div class="row" markdown="1" style="background-color:#2d4c6c;color: #dedede;">
<table>
    <tbody>
        <tr>
            <td >
                <h3>Need for a Simple Interface to do Experiments</h3>
            </td>
            <td >
                - Scribbler addresses the need for a JavaScript experimentation interface similar to Jupyter Notebook for Python.
                - Existing solutions lack the ability to be freely downloaded or embedded elsewhere, unlike Jupyter Notebook or Google Colabs for Python.
                - Scribbler was developed as an open-source, backend-free solution, enabling JavaScript experimentation without requiring Node.js or a server.
            </td>
        </tr>
        <tr>
            <td >
                <h3>Notebook Without Backend</h3>
            </td>
            <td >
               - Scribbler aims to be a "nodeless" app, usable directly in the browser without additional backend technologies.
- This simplicity allows for easy hosting on platforms like GitHub Pages, eliminating the need for server hosting.
- JavaScript's efficiency in running in the browser ensures smooth operation of Scribbler without the need for backend code.
            </td>
        </tr>
        <tr>
            <td >
                <h3>Use Cases</h3>
            </td>
            <td markdown="1">
               The versatility of JavaScript and its extensive library ecosystem opens up limitless possibilities for Scribbler's applications, including.
            - Scientific simulations
            - Decentralized computing and finance 
            - Numerical analysis
            - Charting tools
            - Interactive data science and machine learning experiments
            - Generative AI
            - Financial applications
            </td>
        </tr>
    </tbody>
</table>










To engage with the Scribbler community and explore its potential further, individuals are invited to participate in events like the Yellow Scribes Hackathon.

Happy experimenting!

</div>




