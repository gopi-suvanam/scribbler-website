---
layout: full
homepage: true
disable_anchors: true
description: Simple Interface for Experimenting in JavaScript. Developed for Open Source using Open Source.
title: Scribbler - JavaScript Notebook
---

### Experiment in JavaScript With Ease
Scribbler is a browser-based tool to experiment in JavaScript for scientific computation/new code development/visualization/data science. 
- Runs without backend. Can be loaded from the file system.
- Easy to use with a minimalistic UI.
- Can load thirdparty libraries dynamically.
  
![Scribbler Screenshot](Scribbler-SS.png)

> JavaScript is the language that never ceases to surprise you with its quirks and oddities.
> 
> ~ Anonymous

[Read Our Backstory Here](backstory.html).

[Participate in Discussion/Ask Questions/Answer Queries Here](https://github.com/gopi-suvanam/scribbler/discussions).

<div class="row">

<div class="col-lg-4 col-xs-12" > 
    <button style="width:200px;height:200px;border-radius:100px;margin:auto;color:white;background-color:#5f1e52">
    <a href="https://app.scribbler.live">Application</a></button></div>
    
<div class="col-lg-4 col-xs-12" > 
    <button style="width:200px;height:200px;border-radius:100px;margin:auto;color:white;background-color:#5f1e52">
        <a href="samples.html"> Gallery</a></button>
</div>

<div class="col-lg-4 col-xs-12" > 
    <button style="width:200px;height:200px;border-radius:100px;margin:auto;color:white;background-color:#5f1e52">
    <a href="https://discord.com/invite/uxNSsWunwU">Discord</a></button></div>

</div>


<div class="row">
<div class="col-lg-6" markdown="1">

## Getting Started
{:.mt-lg-0}

### Installing
No specific installation is required. [Download](https://github.com/gopi-suvanam/scribbler/archive/refs/heads/main.zip) or clone the [Github repo](https://github.com/gopi-suvanam/scribbler/) on any machine and open the index.html in the browser. That's it. No Ngnix, no npm, no node, no pip install, no apt-get install. To host the app online, put the folder in web directory of the server and use the link to index.html. You can also use the git-hosted version (without downloading anything) here: [https://app.scribbler.live/#](https://app.scribbler.live/#)

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

