---
title: Heat Transfer Finite Element Simulations in JavaScript using FEAScript
description: Explore how FEAScript brings finite element analysis (FEA) for heat transfer problems directly into the browser with JavaScript.
categories: [Libraries, Scientific]
layout: post
start_link: https://app.scribbler.live/?jsnb=github:nikoscham/FEAScript-Scribbler-examples/solidHeatTransferScript/HeatConduction2DFin.jsnb
---
This is a guest blog by [Nikos Chamakos](#about-the-author).

## Introduction to Finite Element Analysis by FEAScript

Finite Element Analysis (FEA) has traditionally been the domain of specialized desktop software. But with **[FEAScript](https://feascript.com/)**, you can now run FEA simulations directly in the browser, powered by the Scribbler online compiler. This makes it easy to experiment, teach, and prototype without installing large, specialized software.

In this post, we'll walk through how FEAScript handles **heat transfer problems**. Specifically, we'll look at:

- Steady-state heat conduction through a wall (1D)
- Steady-state heat conduction in a fin (2D)

Both examples are implemented entirely in JavaScript using FEAScript.



## Prerequisites

This tutorial assumes basic familiarity with:

- Heat transfer principles and thermal conduction concepts
- Basic understanding of partial differential equations
- Fundamentals of finite element method (FEM)
- JavaScript programming

No prior experience with FEA software is required, as the examples provide all necessary code.

## FEAScript's Implementation of the Finite Element Method

FEAScript implements the finite element method using the following key components:

1. **Discretization**: The continuous domain is partitioned into a mesh of finite elements connected at points called nodes. The unknown field variable is solved for at these nodes.

2. **Basis Functions**: Within each element, the solution is approximated by basis functions (also called shape or interpolation functions). FEAScript uses standard polynomial basis functions (e.g., linear, quadratic) to define the behavior of the unknown between the nodes.

3. **Galerkin Method**: The governing partial differential equation is transformed into its weak (integral) form. The Galerkin method is then applied, which sets the weighted integral of the equation's residual to zero. The basis functions themselves are used as the weighting functions.

4. **Matrix Assembly**: Element-level matrices and vectors are computed and then assembled into a global system of equations.

5. **System Solution**: Multiple solver methods are available to solve the assembled linear system of equations:
   - Direct solvers (e.g., LU decomposition via `lusolve`): These find the exact solution in a single step (within machine precision) but are memory-intensive.
   - Iterative solvers (e.g. `jacobi` method): These start with a guess and progressively refine the solution until a convergence criterion is met. They typically require less memory but may take longer to compute.

## Steady-State Heat Conduction in a Wall

The first example models **steady-state heat conduction** across a 1D wall. The steady heat conduction in one dimension is described by the Laplace equation:

$$
\frac{d^2 T}{dx^2} = 0,
$$

where $T$ signifies the temperature values. This equation is used to find the temperature distribution within common engineering components like house walls.

### Boundary Conditions

This problem features two key boundary conditions:

- At $x = 0$ (inside wall surface): A convection boundary condition (Robin type) where heat transfer occurs between the wall and the room air, represented as:

  $$
  \frac{dT}{dx}|_{x=0}=-{\frac{h}{k}}(T-T_{in}),
  $$

  where $T_{\text{in}}$ is the indoor room temperature. We assume here that ${\frac{h}{k}} = 1 \text{ m}^{-1}$ and $T_{\text{in}} = 25^\circ\text{C}$.

- At $x = W$ (outside wall surface): A constant temperature (Dirichlet type) boundary condition, where temperature is fixed at the ambient outdoor temperature $(5^\circ\text{C})$.

### Setting up with FEAScript

To use FEAScript in Scribbler notebook, you must use the **`//> module`** directive at the beginning of your code cells. This tells Scribbler to treat the code as an ES module, which allows for import statements. According to the [Scribbler documentation on ES6 Libraries](https://scribbler.live/2024/12/26/Scribbler-with-ES-6-Libraries.html), this directive is essential for importing external ES modules like FEAScript. Below we present how to set up the FEAScript model:

```javascript
//> module
import { FEAScriptModel } from "https://core.feascript.com/dist/feascript.esm.js";

// Create and configure model
const model = new FEAScriptModel();
model.setSolverConfig("solidHeatTransferScript");
model.setMeshConfig({
  meshDimension: "1D", // One-dimensional mesh
  elementOrder: "linear", // Linear basis functions (2 nodes per element)
  numElementsX: 10, // Divide domain into 10 elements along x-direction
  maxX: 0.15, // Wall thickness in meters (0.15 m)
});

// Set solver method
model.setSolverMethod("jacobi"); // Jacobi iterative solver

// Apply boundary conditions
model.addBoundaryCondition("0", ["convection", 1, 25]); // Inside wall with convection to room at 25°C
// The value 1 represents the ratio of the heat transfer coefficient (h) to the thermal conductivity (k), measured in m^-1
model.addBoundaryCondition("1", ["constantTemp", 5]); // Outside wall at 5°C (winter conditions)

// Solve the problem
const { solutionVector, nodesCoordinates } = model.solve();
```

The results show how the temperature profile evolves through the thickness of the wall.

👉 [Full tutorial at FEAScript website](https://feascript.com/tutorials/HeatConduction1DWall.html)  
👉 [Scribbler notebook](https://app.scribbler.live/?jsnb=github:nikoscham/FEAScript-Scribbler-examples/solidHeatTransferScript/HeatConduction1DWall.jsnb)

## Steady-State Heat Conduction in a Fin

The second example tackles a 2D problem: **steady-state heat conduction** in a rectangular fin. The fin is attached to a hot surface and loses heat to the surrounding environment by convection. The steady heat conduction in two dimensions is described by the Laplace equation:

$$
\nabla^2 T(x,y) = 0,
$$

where $T$ signifies the temperature values.

### Boundary Conditions

The problem includes multiple types of boundary conditions:

- At the hot boundaries (bottom and right sides of the fin): Constant temperature (Dirichlet) boundary conditions of $200^\circ\text{C}$

- Along the line of symmetry: A symmetry (zero-flux Neumann) boundary condition for modeling half of the fin:
  $$\frac{\partial T}{\partial x}\bigg|_{x=0} = 0.$$

- Along the exposed surfaces: A convection (Robin) boundary condition modeling heat transfer to the ambient air at $20^\circ\text{C}$. Specifically, the convective cooling boundary condition is of the Robin type, expressed as:

  $$\frac{dT}{dy}\bigg|_{y=2}=-{\frac{h}{k}}(T-T_0),$$

  where $h$ is the heat transfer coefficient, $k$ is the thermal conductivity, and $T_0$ is the external temperature.
  We assume here that ${\frac{h}{k}} = 1 \text{ m}^{-1}$ and $T_0 = 20^\circ\text{C}$.

### Setting up with FEAScript

The FEAScript configuration for this 2D problem is demonstrated below:

```javascript
//> module
import { FEAScriptModel } from "https://core.feascript.com/dist/feascript.esm.js";

// Create and configure model
const model = new FEAScriptModel();
model.setSolverConfig("solidHeatTransferScript");
model.setMeshConfig({
  meshDimension: "2D", // Two-dimensional mesh
  elementOrder: "quadratic", // Quadratic basis functions (9 nodes per element)
  numElementsX: 8, // Divide domain into 8 elements along x-direction (length)
  numElementsY: 4, // Divide domain into 4 elements along y-direction (height)
  maxX: 4, // Domain length in meters: 4 m (fin length)
  maxY: 2, // Domain height in meters: 2 m (fin height)
});

// Set solver method
model.setSolverMethod("jacobi"); // Jacobi iterative solver

// Apply boundary conditions (boundaries numbered 0-3 counterclockwise from bottom)
model.addBoundaryCondition("0", ["constantTemp", 200]); // Bottom - hot boundary at 200°C
model.addBoundaryCondition("1", ["symmetry"]); // Left - symmetry line (half-fin model)
model.addBoundaryCondition("2", ["convection", 1, 20]); // Top - convection to air at 20°C
// The value 1 represents the ratio of the heat transfer coefficient (h) to the thermal conductivity (k), measured in m^-1
model.addBoundaryCondition("3", ["constantTemp", 200]); // Right - hot boundary at 200°C
```

The resulting simulation shows the temperature distribution across the fin, highlighting how heat dissipates into the environment. While FEAScript includes its own plotting capabilities based on Plotly.js for browser visualization, when working within Scribbler notebook, we can leverage Scribbler's integrated plotting tools (which also use Plotly under the hood). This integration makes FEAScript particularly powerful for educational purposes and rapid prototyping within the Scribbler environment.

👉 [Full tutorial at FEAScript website](https://feascript.com/tutorials/HeatConduction2DFin.html)  
👉 [Scribbler notebook](https://app.scribbler.live/?jsnb=github:nikoscham/FEAScript-Scribbler-examples/solidHeatTransferScript/HeatConduction2DFin.jsnb)

## Conclusions

FEAScript makes finite element analysis accessible to a wider audience, offering several key advantages:

- **No installation required** — runs directly in any modern browser.
- **Interactive learning** — ideal for teaching, tutorials, and hands-on experimentation.
- **Lightweight prototyping** — quickly test models before scaling up to larger solvers.
- **Easy visualization** — integrated plotting with Plotly provides immediate insight into results.

By bringing FEA to JavaScript, FEAScript empowers both engineers and students to experiment with simulations directly online, making advanced computational tools more approachable than ever. It's worth noting that while the heat transfer examples presented here are linear, FEAScript is also equipped to handle non-linear problems using the Newton-Raphson method, further extending its range of applications.

## About the Author

**Nikos Chamakos** is the developer of [FEAScript](https://feascript.com/), a JavaScript-based finite element simulation library. Passionate about numerical methods and simulations, aiming to make advanced computational tools more accessible. He currently works as a Research and Development Engineer at the Hellenic Research Centre for Metals SA (ELKEME) and holds a PhD in Chemical Engineering from the National Technical University of Athens, Greece.

- FEAScript Github: [github.com/FEAScript](https://github.com/FEAScript)
- Personal GitHub: [github.com/nikoscham](https://github.com/nikoscham)
- LinkedIn: [linkedin.com/in/nchamakos](https://www.linkedin.com/in/nchamakos/)
