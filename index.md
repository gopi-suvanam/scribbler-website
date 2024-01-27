---
layout: full
homepage: true
disable_anchors: true
description: Simple Interface for Experimenting in JavaScript. Developed for Open Source using Open Source.
title: Scribbler - JavaScript Notebook
---

### Experiment in JavaScript With Ease

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

![Scribbler Screenshot](Scribbler-SS.png)

> JavaScript is the language that never ceases to surprise you with its quirks and oddities.
> 
> ~ Anonymous



<div class="row" style="marging:10px">

<div class="col-lg-4 col-xs-12" > 
    <button style="width:200px;height:200px;border-radius:100px;margin:auto;color:white !important;background-color:#fede02">
    <a style="color:#555 !important" href="https://app.scribbler.live">Try Scribbler</a></button></div>
    
<div class="col-lg-4 col-xs-12" > 
    <button style="width:200px;height:200px;border-radius:100px;margin:auto;color:white !important;background-color:#fede02">
        <a style="color:#555 !important" href="samples.html">Explore Gallery</a></button>
</div>

<div class="col-lg-4 col-xs-12" > 
    <button style="width:200px;height:200px;border-radius:100px;margin:auto;color:white !important;background-color:#fede02">
    <a style="color:#555 !important" href="https://discord.com/invite/uxNSsWunwU">Join Discord</a></button></div>

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

## Team
<div class="row">
<div class="col-lg-6" markdown="1">

### Gopi Suvanam
{:.mt-lg-0}
![Gopi](gopi.jpeg)
Gopi is an entrepreneur in the Fintech and AI/ML space, with a rich experience of eighteen years. He is a Co-Founder and Director of [G-Square Solutions](https://g-square.in), a fast-growing fintech start-up offering AI and analytics services to Financial Institutions. He has an MBA from the [IIM, Ahmedabad](https://www.iima.ac.in/), and a B.Tech degree in Computer Science from the [IIT Madras](https://www.iitm.ac.in/). Before starting his journey as an entrepreneur, he worked with Deutsche Bank as Vice President in the global markets division in London and New York City. He has also served as a visiting faculty in finance in various institutions including his alma mater IIM-A. Gopi authored a book on liberal economics ([Liberty & Prosperity](https://vernonpress.com/book/1266)). He is passionate about [emerging technologies, macro economics, geo-libertarianism, and decentralization](https://decentralized-intelligence.com).
</div>

<div class="col-lg-6" markdown="1">
    
### Vinukumar Ranganathan
{:.mt-lg-0}
![Vinu](vinu.jpeg)
Vinu is an idea person. He has 10+ years of experience in the Enterprise (B2B) and Consumer (B2C) space in multiple roles. He has an MS from the [Univertsity of California, Berkley](https://www.berkeley.edu/), and a B.Tech degree from the [IIT Madras](https://www.iitm.ac.in/). He has immense experience as a Product Manager, Client servicing, Pre-Sales, Sales, and Programmer. He has worked as a Product Manager in [Zynga Games](https://www.zynga.com/) and Netcore soltions. He enjoys his role as a Product Manager as it is a challenging and fulfilling role. He has also worked in the nonprofit sector (3 years) with a focus on education. His expertise includes setting up pilots (new product/business) and streamlining the process for scale in various industries ranging from internet, mobile, banking, education & engineering.


  
</div></div>




