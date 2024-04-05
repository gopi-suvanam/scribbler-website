---
title: Docs
description: Features and How-to of Scribbler
show_in_menu: true
---


## Installation


### Download
One of the standout features of Scribbler.Live is its hassle-free setup. Users can conveniently download or clone the tool directly from GitHub and immediately start using it by hosting the folder in webserver and opening the link. This eliminates the need for any intricate installation processes, making it easily accessible to anyone. This means that users can effortlessly put the tool behind a web server to serve it statically, without any requirement for a backend framework such as Node.js or Python. By leveraging the simplicity of static serving, Scribbler ensures smooth and efficient usage.

### GitHub Pages Hosted Version
Scribbler also offers a convenient option of usage through GitHub Pages. Users can access the hosted version of the tool at https://app.scribbler.live, where they can enjoy all the features and benefits without the need for self-hosting. This allows for easy sharing and collaboration, making Scribbler a versatile tool for various team sizes and locations.

## Sandboxed Environment
- The Scribbler notebook operates within a sandboxed iframe environment. This restricts certain functionalities, such as accessing specific browser APIs, external resources where CORS (Cross-Origin Resource Sharing) is restricted, and cookies.
- To enable these features, click on the icon ⤯ located at the top-right corner above the notebook. Upon confirmation, the notebook will reload without the sandbox, granting access to the restricted functionalities.

## Cells
### Cell Types and Structure
At the heart of interactive notebooks lies the concept of cells. The entire notebook is divided into cells, each serving a specific purpose. There are two primary cell types: HTML and code (JavaScript). HTML cells allow for the creation of dynamic content using HTML markup, while code cells are designed for executing JavaScript code.

### Input and Output Blocks
Code cells consist of two essential blocks: an input block and an output block. When a code cell is executed or "played," the code within the input block is run, and the resulting output is displayed below the code. This structure enables an interactive and iterative coding process, allowing users to see the immediate impact of their code.

### Displaying Output
In code cells, the output block displays the result of the last evaluated expression. However, it's essential to avoid displaying very large outputs, such as extensive arrays or function declarations, to maintain readability and optimize notebook performance.

### Status Indicators for Code Cells
To provide insight into the execution sequence and time taken, code cells feature a status indicator in the output block. The status displays a number indicating the order in which the cell was executed and the time it took to run. In case of an error, the status block remains blank, offering a quick indication that further investigation may be necessary.

### HTML Cell Editing and Execution
HTML cells allow users to create rich and interactive content using HTML markup. To edit the HTML, users can double-click on the output of the cell, enabling direct modifications. The output of HTML is updated when the cell is "played". This workflow ensures that the content stays up to date and reflects any edits made. HTML cells can have <style> tags also inside them.

### Manipulating Cells
Scribbler provides flexibility in managing cells within the notebook. Users can easily add, delete, and rearrange cells to customize the flow and structure of their code. This feature allows for an iterative development process, facilitating experimentation and refining ideas.

### Accessing HTML Elements
A powerful capability of Scribbler is the ability to access elements created in HTML cells from code cells. This can be achieved using JavaScript methods such as document.getElementById or document.querySelector. Additionally, users can leverage the popular jQuery library by loading or importing it into the notebook, granting access to convenient $() syntax (refer to "Using external libraries").

## Cell Menu
Located conveniently in the corner of each cell, the cell-menu provides a wide array of options to streamline workflow and maximize productivity. By understanding and leveraging these operations, users can tailor their notebook to their specific needs and preferences.

### Toggling Cell Types
One of the primary functions of the cell-menu is the ability to toggle the cell type between code and HTML. This feature empowers users to switch seamlessly between writing and executing JavaScript code and creating dynamic HTML content. By simply toggling to the desired cell type from the cell-menu, users can adapt their notebook to accommodate different coding and content creation tasks.

### Running/Playing Cells
The cell-menu includes a "play" button (►) that enables users to execute the code within a code cell or display the rendered HTML content. By clicking this button, users can quickly and effortlessly run the code or view the generated output, facilitating an interactive and iterative development process. This real-time feedback loop enhances debugging and ensures accurate results. A cell can also be played using the keyboard shortcuts - Shift-Enter or Cntrl-Enter.

### Rearranging Cells
To optimize the organization and flow of the notebook, the cell-menu offers options to move cells up (↑) or down (↓). This functionality allows users to adjust the sequence of cells, ensuring logical order and coherence within the notebook. By simply selecting the appropriate directional button from the cell-menu, users can rearrange cells effortlessly, promoting a smooth and intuitive experience.

### Adding and Deleting Cells
To adapt the notebook's structure and accommodate evolving requirements, the cell-menu provides options to add new cells or delete existing ones. By selecting the "Add Cell" button (✛), users can easily insert a new cell below the current cell, facilitating the addition of new content or code. Conversely, the "Delete Cell" button (☓) empowers users to remove unnecessary or redundant cells, maintaining a clean and concise notebook structure. Cell can be added using Option/Alt-Enter.

## File Menu - Loaing and Saving

### Saving Notebooks in Browser
To preserve the current work, users can save the notebook in the Browser storage. By selecting the "Save" option from File menu, the current notebook is saved in the Browser. This capability enables easy backup and persistency across sessions. Note that if Browser data is cleared the notebooks will be deleted as well.

### Opening Notebooks From the Browser
Scribbler allows users to open a notebook saved in the browsers through the File->Open menu.

### Downloading Notebooks as .jsnb Files
To preserve and share their current work, users can download the notebook as a .jsnb file. By selecting the "Download" option, the current notebook is saved as a .jsnb file on the local machine. This capability enables easy backup, offline access, and sharing with others.

### Opening Local .jsnb Files
Scribbler allows users to open .jsnb files directly from their local machines. By selecting the "Load" option, users can browse their file system and choose the desired .jsnb file. This functionality simplifies the process of accessing existing notebooks and fosters a smooth workflow.

### GitHub Integration:
Scribbler offers seamless integration with GitHub. Users can load a file from a GitHub repository or push a file to a GitHub repository directly from the notebook interface. Upon selecting the GitHub option, an authentication dialogue will appear, requesting an access token, username/owner name, repository, and file path. It's important to note that the access token is not stored in the backend and is solely used for authenticating GitHub API calls. This integration simplifies collaboration, version control, and enables efficient teamwork.

### Exporting as HTML
Scribbler provides the ability to export the current notebook as an HTML file. By selecting the "Download as HTML" option, the notebook is saved as an HTML file on the local machine. HTML cells will be displayed as rendered HTML, while code cells will display both the code and the output as HTML. This export option is particularly useful for sharing notebooks with individuals who do not have access to the notebook interface but still need to view the content.

### Downloading Output as HTML
In scenarios where only the output of the notebook is required, users can download the output as an HTML file. By selecting the "Download only output as HTML" option, the current notebook's output is saved as an HTML file on the local machine. This feature allows users to extract and share the results of their notebook without including the underlying code.

### Downloading Code as a JavaScript File
For users who wish to extract the code in their notebooks, Scribbler offers the option to download the code as a single JavaScript file. By selecting the "Download as JS" option, the code in cells is saved as a standalone JavaScript file. This capability facilitates code reuse, archiving, and further development outside the notebook environment.

## Edit Menu
### Inserting Code Cells
To add additional code blocks to the notebook, users can insert a blank code-type cell at the end of the current notebook. This feature empowers users to continue their coding workflow and experiment with new code snippets. By selecting the "Insert Code Cell" option, a new code cell is added, ready for users to write and execute JavaScript code.

### Inserting HTML Cells
By selecting the "Insert HTML Cell" option, a blank HTML-type cell is inserted at the end of the current notebook. This feature provides users with the flexibility to add rich media, interactive elements, or structured content to their notebooks.

### Inserting Style Cells
To enhance the visual presentation and styling of HTML content within the notebook, users can insert a style cell. This unique cell type consists of a blank HTML-type cell with <style> tags already included. By selecting the "Insert Style Cell" option, users can effortlessly add a style cell at the end of the current notebook. This feature enables users to apply custom styles, modify existing styles, or create CSS rules specifically tailored to their notebook's content.

### Options
You can open options dialogue box to edit the options of the notebook. Currently you can set "Run the code when the file is loaded". If this is clicked, when the notebook is opened all the code cells in the notbook are played as soon as the notebook is loaded. This is useful when building an interactive application using Scribbler.

## URL Structure
### GitHub Pages Deployment
Scribble is deployed on GitHub Pages - the URL for the same is: [https://app.scribbler.live](https://app.scribbler.live). This URL serves as the main link for accessing the deployed app. Users can open this link in their web browser to interact with the notebook directly on the website.

### Downloaded App
When the Scribbler App file is downloaded and saved locally, the URL will be in the format: file://path/index.html. Users can access the downloaded notebook by opening the local file in their web browser. This option allows for offline access and the ability to work on the notebook without an internet connection.

### Linking with Anchors
Users can attach an anchor to the main link to specify a particular file to be loaded into the notebook. For example, appending "#./examples/Hello-world.jsnb" to the main link (https://app.scribbler.live/) will result in the file "Hello-world.jsnb" being loaded into the notebook. The file must be publicly available to be loaded in this fashion.

### GitHub File Loading
GitHub files can be loaded using a shorter notation: "github:user-name/repo/path-of-file". For instance, the file "Hello-world.jsnb" from the repository owned by "gopi-suvanam" can be linked as: https://app.scribbler.live#github:gopi-suvanam/jsnb/examples/Hello-world.jsnb. If the repository is public, Scribbler will attempt to retrieve the file and load it into the notebook. In case of a private repository, a GitHub authentication dialogue will appear to ensure proper access.

### Sharing and Collaboration
When a file is loaded from or pushed to GitHub, the URL updates to reflect the loaded file's path. This updated URL can be shared with others, simplifying collaboration. By sharing the URL, collaborators can easily access the notebook and work together seamlessly.

## Embedding
The link with the anchor tag and file path can be embedded in other applications/websites directly using iframe. For example to embed the Hello-world notebook one can use the code: 
```html
	<iframe src="https://app.scribbler.live/#./examples/Hello-world.jsnb" height="400" width="100%" style="width:100%;border: thin solid black;" allowfullscreen="" frameborder="0"></iframe>
```
This displays the menu, code input and the output. If you want to see only the output use this code instead:
```html
	<iframe src="https://app.scribbler.live/sandbox.html#./examples/Hello-world.jsnb" height="400" width="100%" style="width:100%;border: thin solid black;" allowfullscreen="" frameborder="0" sandbox="allow-scripts allow-top-navigation-by-user-activation allow-popups"></iframe>
```
- To embed a notebook directly from GitHub, use the following syntax:
```html
<iframe id="sandbox" style="width:100%;height:100%" src ="https://app.scribbler.live/sandbox.html?jsnb=github:user/repository/path-to-file"></iframe>
```
- Please exercise caution and embed a notebook in your page only if you trust its content and source.
- You can also use `sandbox="allow-scripts"` to embed the notebook in a sandboxed environment.
This runs the notebook in a sandboxed environment.
- If you want the code of the notebook to run when the notebook is loaded in the embedded page, click "Run the code when the file is loaded" in Edit->Options menu.

## Special Functions

These are some inbuilt functions of Scribbler to make coding simple.

### scrib.show(..)
The scrib.show() function is a powerful tool that displays an object in the output cell. It is important to note that when using scrib.show(), the displayed content should not be excessively large to avoid truncation. This function allows users to visualize and inspect objects conveniently within the notebook environment.

### scrib.currCell()
The scrib.currCell() function returns the element corresponding to the output of the current code cell. It provides users with direct access to the output element, enabling further customization or manipulation as needed. It's worth noting that these functions may behave differently when called from within asynchronous code due to the asynchronous nature of their execution.

### scrib.getDom(id):
The get_dscrib.getDomom() function is a shorthand notation for window.getElementById. It allows users to access DOM elements easily by providing the element's ID. By leveraging get_dom(), users can retrieve specific elements and interact with them within their code cells.

### scrib.waitForDom(id)
The scrib.waitForDom() function is an asynchronous version of get_dom(). It allows users to wait for a specific DOM element to become available and resolves to the element once it is accessible. This is particularly useful when a DOM element is being created asynchronously by another activity. Users can utilize wait_for_dom() in combination with promises or within async functions to ensure proper synchronization and handling of DOM elements.

### scrib.uploadFile()
The load_file() function opens the file browser and resolves to the contents of a selected file. This function enables users to read and access the contents of files directly within the notebook. By leveraging load_file(), users can seamlessly integrate external data or leverage the content of external files within their notebooks. The function is asynchronous and resolves to the contents of the file. 

### scrib.downloadString()
The downloadString function provides an easy way to download a string as a file. It takes three parameters: 1. string to be downloaded. 2. exportName - the name of the file. 3. char_set - the character set (utf-8 etc).

### scrib.loadScript(url)
The scrib.uploadFile() function is used to load an external JavaScript file from a specified URL. For example, users can load libraries such as jQuery by calling load_script("https://code.jquery.com/jquery-3.6.3.min.js"). This capability allows users to incorporate additional functionality or external libraries into their notebook environment effortlessly. The function by default loads the script asynchronously. To load the script synchronously use: load_script(url,false).



## Keyboard Shortcuts
These shortcuts work when a code cell is in focus:

Ctrl-Enter/Cmd-Enter: Run the current cell
Shift-Enter': Run the current cell and go to next cell
Alt-Enter/Option-Enter: Insert new cell
Alt-D/Option-D: Delete the current cell (no undo at the moment, so be careful)
Alt/Option-Up Arrow: Move the cell up
Alt/Option-Up Down: Move the cell down
These shortcuts are global

Alt-R/Option-R: Run all the cells
Ctrl-G: Import from/Push to GitHub
Ctrl-S: Download the jsnb to local machine
Ctrl-O: Load a jsnb from local machine



## Using External Libraries

Scribbler provides the flexibility to leverage external libraries, enhancing the functionality and empowering users to access a wide range of resources. We will explore two specially built functions for utilizing external libraries: load_script() and import_module(). Additionally, we will discuss the dynamic import feature of ES6 modules and highlight the preloaded libraries D3 and Plotlyjs, along with the DI-Labs sister project. By leveraging these capabilities, users can expand the capabilities of their notebooks, access powerful data manipulation and visualization tools, and tap into a vast ecosystem of libraries and resources.

### Loading Scripts with load_script()
The load_script() function is designed to load external scripts into interactive notebooks. By providing the URL of the desired script, such as load_script("https://code.jquery.com/jquery-3.6.3.min.js") to load JQuery, users can effortlessly incorporate libraries and functionality into their notebooks. This function simplifies the process of integrating external resources, enabling users to harness the power of popular JavaScript libraries.

### Importing ES6 Modules with import_module()
The import_module() function offers a convenient way to load ES6 modules within interactive notebooks. Users can specify the module's file location as the "module" parameter and define the desired features using a dictionary called "features". The keys within the "features" dictionary are loaded from the module and exposed globally, allowing users to access and utilize specific functionalities. This capability enhances the modularity and extensibility of interactive notebooks, enabling seamless integration of ES6 modules.

### Dynamic Import with ES6 Modules
Interactive notebooks also support the dynamic import feature of ES6 modules. Users can utilize the import() function to load modules dynamically, specifying the URL of the module to be loaded. For example, import("https://unpkg.com/jquery@3.3.1/dist/jquery.min.js") loads the JQuery library dynamically into the notebook. This feature provides flexibility and on-demand loading of modules, enabling users to access specific functionalities when needed.

### Preloaded Libraries and DI-Labs
D3 and Plotlyjs libraries are preloaded in Scribbler, offering powerful data visualization capabilities. Additionally, the DI-Labs sister project provides an easy-to-use interface for working with data, including plotting, array manipulation, and scientific computing. Users can explore the provided example at https://decentralized-intelligence.com/jsnb/#/jsnb/examples/AMM-Simulation.jsnb to gain insights into the potential of DI-Labs and its integration within interactive notebooks.





	
	
