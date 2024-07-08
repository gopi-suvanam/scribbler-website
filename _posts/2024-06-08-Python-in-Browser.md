---
title: Python in the Browser with Pyodide
description: Pyodide opens up a world of possibilities by bringing Python's capabilities to the browser. 
start_link: https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Python-in-Browser.jsnb
layout: post
---

## Python in Browser

Running Python in the browser has historically been a challenge due to the inherent differences between Python and JavaScript, the language of the web. However, with the advent of WebAssembly (Wasm), it has become possible to compile and run non-JavaScript languages, including Python, directly in the browser. One of the most significant projects that enable this is Pyodide. Pyodide is a Python distribution for the browser and Node.js, based on WebAssembly. It allows you to run Python and install Python packages in the browser, bringing the powerful data science libraries to the web.

Pyodide was created by Mozilla and is now maintained by the community. It aims to bring the scientific Python stack to the browser by compiling Python and its scientific libraries, such as NumPy, Pandas, Matplotlib, and more, to WebAssembly. This allows for running Python code directly in the browser, providing a seamless experience for Python developers who want to leverage the capabilities of the web.

Use this notebook to experiment: [Notebook for Using Python in Browser](https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Python-in-Browser.jsnb).

## Setting Up Pyodide

To get started with Pyodide, you need to include the Pyodide script in your HTML file. Here’s a basic setup:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Pyodide Example</title>
    <script src="https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js"></script>
</head>
<body>
    <h1>Running Python in the Browser with Pyodide</h1>
    <script type="text/javascript">
        async function loadPyodideAndPackages() {
            let pyodide = await loadPyodide();
            await pyodide.loadPackage("numpy");
            return pyodide;
        }

        loadPyodideAndPackages().then((pyodide) => {
            // Now you can use Pyodide and NumPy
            pyodide.runPython(`
                import numpy as np
                arr = np.array([1, 2, 3])
                print(arr)
            `);
        });
    </script>
</body>
</html>
```

## Running Python Code

With Pyodide loaded, you can run Python code directly in the browser. Here’s a more detailed example that demonstrates loading NumPy and performing some operations:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Pyodide with NumPy Example</title>
    <script src="https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js"></script>
</head>
<body>
    <h1>Using NumPy with Pyodide</h1>
    <script type="text/javascript">
        async function runPythonCode() {
            let pyodide = await loadPyodide();
            await pyodide.loadPackage("numpy");

            let pythonCode = `
                import numpy as np
                arr = np.array([1, 2, 3, 4, 5])
                arr = arr * 2
                arr.tolist()
            `;

            let result = pyodide.runPython(pythonCode);
            console.log(result);
        }

        runPythonCode();
    </script>
</body>
</html>
```

## Using Additional Python Packages

Pyodide supports many popular Python packages. You can load and use these packages similarly to NumPy. Here’s an example using Pandas:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Pyodide with Pandas Example</title>
    <script src="https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js"></script>
</head>
<body>
    <h1>Using Pandas with Pyodide</h1>
    <script type="text/javascript">
        async function runPythonCode() {
            let pyodide = await loadPyodide();
            await pyodide.loadPackage("pandas");

            let pythonCode = `
                import pandas as pd
                data = {'Name': ['John', 'Anna', 'Peter', 'Linda'],
                        'Age': [28, 24, 35, 32]}
                df = pd.DataFrame(data)
                df
            `;

            let result = pyodide.runPython(pythonCode);
            console.log(result.to_html());
        }

        runPythonCode();
    </script>
</body>
</html>
```

## Interactive Data Visualization

Pyodide also supports data visualization libraries like Matplotlib. Here’s an example of creating a simple plot:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Pyodide with Matplotlib Example</title>
    <script src="https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js"></script>
</head>
<body>
    <h1>Plotting with Matplotlib and Pyodide</h1>
    <div id="plot"></div>
    <script type="text/javascript">
        async function runPythonCode() {
            let pyodide = await loadPyodide();
            await pyodide.loadPackage(["numpy", "matplotlib"]);

            let pythonCode = `
                import numpy as np
                import matplotlib.pyplot as plt
                import io
                import base64
                x = np.linspace(0, 10, 100)
                y = np.sin(x)
                plt.plot(x, y)
                buf = io.BytesIO()
                plt.savefig(buf, format='png')
                buf.seek(0)
                img_str = base64.b64encode(buf.read()).decode('utf-8')
                img_str
            `;

            let result = pyodide.runPython(pythonCode);
            document.getElementById('plot').innerHTML = `<img src="data:image/png;base64,${result}" />`;
        }

        runPythonCode();
    </script>
</body>
</html>
```

## Applications of Python in the Browser with Pyodide

1. **Interactive Data Science and Visualization**:
   - **Jupyter Notebooks**: Enhance with interactive widgets and in-browser code execution.
   - **Data Dashboards**: Create real-time, dynamic dashboards for data manipulation and visualization.
   - **Educational Tools**: Develop platforms for teaching data science and machine learning interactively.

2. **Scientific Computing and Research**:
   - **Simulations and Modeling**: Run complex simulations directly in the browser for easy sharing and collaboration.
   - **Bioinformatics**: Interactive genomic data analysis tools for in-browser computations and visualizations.

3. **Interactive Learning Platforms**:
   - **Code Practice Sites**: Platforms for practicing Python coding with real-time feedback.
   - **Tutorials and Documentation**: Interactive examples and live code snippets for better learning and understanding.
   
Whether you're building data science applications, educational tools, or simply exploring the integration of Python and JavaScript, Pyodide provides a robust and versatile solution. With support for a wide range of Python packages and the ability to run Python code alongside JavaScript, Pyodide is a powerful tool for modern web development. Experiment with Pyodide using this notebook: [Python in JavaScript using Pyodide]().
