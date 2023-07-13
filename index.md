---
layout: full
homepage: true
disable_anchors: true
description: Notebook tool for experimenting in JavaScript
---

### Notebook tool for experimentation in JavaScript.
- Easy to use javascript experimentation tool.
- Runs without backend (node.js/npm/pip install/ngnix etc etc). I call this a "nodeless" app for two reasons - 1. it does not require node and npm to use.. 2. it does not require a server (I didnt want to use the word "serverless" as that word has been polluted by Amazon).
- Can be loaded from the web (i.e. behind a webserver) or from the file system (certain features like WebRTC might require a server)
- UI is similar/close to Jupyter Notebook (for the sake familiarity for python developers). Has a minimalistic UI to put focus on user generated code/content.
- It is light-weight as it uses minimal external libraries for styling : Codemirror for formatting the code area and Pico CSS for styling.
- Comes pre-loaded with Plotly, D3 and DI-Libs for power usage. More libaries/modules can be easily loaded using load_script or import_module functions.

<div class="row">
<div class="col-lg-6" markdown="1">

## Getting Started
{:.mt-lg-0}

1. Clone this repository (git clone or better still - download) on any machine and double-click index.html. That's it. No Ngnix, no npm, no node, no pip install, no apt-get install.
2. If you want to host the app online, you can put the folder in web directory of the server and use the link to index.html.
3. You can also try the git-hosted version (without downloading anything) here: [https://app.scribbler.live/#](https://app.scribbler.live/#)
4. A hello-world notebook: [https://app.scribbler.live/#./examples/Hello-world.jsnb](https://app.scribbler.live/#./examples/Hello-world.jsnb)
5. More examples will be added in the folder examples/ in the repository. Check the [Samples page](/documentation/samples.html) for links.
### Usecases
Scribbler can be used for:
- Scientific Computation
- Data Science/Machine Learning
- Dashboard Development
- Experimenting With new Code/Libraries
  
</div>
<div class="col-lg-6" markdown="1">

## Features
{:.mt-lg-0}
- The notebook consists of cells. Each cell will have user inputted html/code and an output. There is a menu at the top right corner of the cell (or above the cell in case of smaller screens).
- There are two types of cells: code and html. The type of cell can be toggled using a switch in the cell menu.
- To get the output of a cell press play ► button on the cell menu (or Cmd/Ctrl-Enter on keyboard after selecting the cell).
- For code cells input and output are both shown. For html cells, input is hidden and opens up if you click the output.
- The cell menu also has buttons for moving the cell up ↑, down ↓, adding a new cell ✛ and deleting the current cell ☓.
- A notebook can be downloaded as json (has a default extension of .jsnb). IT can be loaded back into the app. The notebook or only the output can also be downloaded as html.
- A .jsnb file can also be directly loaded into the app by suffixing the url of the file after "#" something like: https://decentralized-intelligence.com/jsnb/#link_to_file.jsnb. The url of the file should be accessible by the browser through GET method.
- D3JS (for data manipulation and charting), Plotly (for plots) and sister project [DI-Libs](https://github.com/gopi-suvanam/di-libs) are preloaded and can be used in the notebooks without seperately loading. They can also be reloaded using reload_script.


</div>
</div>

