---
title: Sugarscape Agent-Based Model in JavaScript
layout: post
description: The Sugarscape model is a powerful tool for understanding complex social dynamics through simple rules. Implementing such a model in JavaScript allows for interactive and visual exploration of these dynamics.
categories: Scientific
start_link: https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Sugarscape.jsnb
---

## Sugarscape Model
The Sugarscape model, originally developed by Joshua M. Epstein and Robert Axtell, is a classic agent-based model used to study social phenomena such as wealth distribution, trade, and migration. Replicating the Sugarscape model in JavaScript involves setting up a grid environment, creating agents with certain properties, and defining rules for their movement and interactions.
We have looked at what Agent-Based models are in the article [Agent-Based Models (ABMs) in JavaScript](https://scribbler.live/2024/06/10/Agent-Based-Models-JavaScript.html). Here’s a detailed overview of ABM - the Sugarscape model, and its components:
The Sugarscape model is a well-known agent-based model developed by Joshua M. Epstein and Robert Axtell to explore the dynamics of social systems. It serves as an illustrative framework for studying various socio-economic phenomena, such as wealth distribution, trade, migration, and the evolution of social networks. Here’s a detailed overview of the Sugarscape model and its components:

### Overview of the Sugarscape Model

#### Basic Concepts
1. **Environment**: The Sugarscape is a grid-based landscape where each cell has a certain amount of sugar, which agents (individuals) can consume. The amount of sugar in each cell can regenerate over time.
2. **Agents**: Agents represent individuals who move across the grid to collect sugar. Each agent has attributes such as vision (how far they can see), metabolism (how much sugar they consume per time step), and accumulated sugar.

### Model Dynamics

#### Initialization
- **Landscape Setup**: The grid cells are initialized with varying amounts of sugar. Some regions are rich in sugar, while others are poor.
- **Agent Setup**: Agents are randomly placed on the grid. Each agent is initialized with random vision and metabolism values, and a starting amount of sugar.

#### Agent Behavior
1. **Movement**: Agents move across the grid to the cell within their vision that has the most sugar.
2. **Sugar Consumption**: Agents consume sugar from their current cell. The amount consumed depends on their metabolism.
3. **Death and Reproduction**: If an agent’s sugar level drops to zero, the agent dies. Agents can also reproduce based on certain conditions, such as having a sufficient amount of sugar.

### Extensions and Variations

#### Wealth Distribution
- **Objective**: Study how initial endowments, vision, and metabolism affect wealth distribution over time.
- **Findings**: The model often results in a Pareto-like distribution of wealth, with a few agents accumulating most of the sugar.

#### Trade and Exchange
- **Trade Mechanism**: Introduce rules for trading sugar between agents. Agents can negotiate trades based on their needs and surplus.
- **Impact**: Trading can lead to more efficient distribution of resources and impact overall wealth distribution.

#### Migration and Cultural Transmission
- **Migration**: Agents can move to new locations based on environmental changes, leading to patterns of migration.
- **Cultural Traits**: Agents can carry and transmit cultural traits, allowing the study of cultural evolution and diffusion.

#### Pollution and Resource Depletion
- **Environmental Degradation**: Introduce pollution as a byproduct of agent activities. Pollution can affect the regeneration rate of sugar and overall landscape health.
- **Sustainability**: Study the long-term sustainability of agent populations under different environmental policies.

## Implementation of Sugarscape Model in JavaScript

Here's a step-by-step guide to implementing a simple version of the Sugarscape model in JavaScript:

### Step 1: Set Up the Environment

Create an HTML file with a canvas element where the agents and the landscape will be displayed.

```html

    <style>
        canvas {
            border: 1px solid black;
        }
    </style>

    <canvas id="canvas" width="600" height="600"></canvas>

```

### Step 2: Initialize the Canvas and Landscape

In a separate JavaScript file (`sugarscape.js`), initialize the canvas and create the Sugarscape landscape.

```javascript
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const gridSize = 50;
const cellSize = canvas.width / gridSize;

// Initialize Sugarscape grid with random sugar values
const sugarGrid = [];
for (let i = 0; i < gridSize; i++) {
    sugarGrid[i] = [];
    for (let j = 0; j < gridSize; j++) {
        sugarGrid[i][j] = Math.floor(Math.random() * 4);
    }
}

// Draw the Sugarscape grid
function drawGrid() {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const sugar = sugarGrid[i][j];
            ctx.fillStyle = `rgb(${sugar * 63}, ${sugar * 63}, 0)`;
            ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
        }
    }
}
```

### Step 3: Create the Agent Class

Define the agent class with properties and behaviors for moving and collecting sugar.

```javascript
class Agent {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sugar = 20;  // Initial sugar endowment
        this.metabolism = Math.floor(Math.random() * 3) + 1;  // Sugar consumed per step
        this.vision = Math.floor(Math.random() * 3) + 1;  // How far the agent can see
	  
	          this.age = 0;
        this.maxAge = Math.floor(Math.random() * 50) + 50;  // Agents live between 50 and 100 steps
    }

    // Move the agent to the location with the most sugar within its vision
     move() {
        let bestX = this.x, bestY = this.y, maxSugar = sugarGrid[this.x][this.y];
        for (let dx = -this.vision; dx <= this.vision; dx++) {
            for (let dy = -this.vision; dy <= this.vision; dy++) {
                const newX = (this.x + dx + gridSize) % gridSize;
                const newY = (this.y + dy + gridSize) % gridSize;
                if (sugarGrid[newX][newY] > maxSugar) {
                    bestX = newX;
                    bestY = newY;
                    maxSugar = sugarGrid[newX][newY];
                }
            }
        }
        this.x = bestX;
        this.y = bestY;
        this.sugar += sugarGrid[this.x][this.y];
        sugarGrid[this.x][this.y] = 0;
        this.sugar -= this.metabolism;
        if (this.sugar <= 0) this.die();
    }

    // Handle agent death (remove from simulation)
    die() {
        const index = agents.indexOf(this);
        if (index > -1) {
            agents.splice(index, 1);
        }
    }
  
      // Handle agent reproduction
    reproduce() {
        const childX = (this.x + Math.floor(Math.random() * 3) - 1 + gridSize) % gridSize;
        const childY = (this.y + Math.floor(Math.random() * 3) - 1 + gridSize) % gridSize;
        agents.push(new Agent(childX, childY));
    }

    // Draw the agent
    draw() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x * cellSize, this.y * cellSize, cellSize, cellSize);
    }
}
```

### Step 4: Initialize and Update Agents

Create an array of agents, initialize them, and write functions to update and render the simulation.

```javascript
const agents = [];
const numAgents = 100;

// Initialize agents with random positions
for (let i = 0; i < numAgents; i++) {
    const x = Math.floor(Math.random() * gridSize);
    const y = Math.floor(Math.random() * gridSize);
    agents.push(new Agent(x, y));
}


//Regenerate Sugar
const maxSugar = 4; // Maximum amount of sugar in any cell
const regenRate = 1; // Amount of sugar regenerated per time step

function regenerateSugar() {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            sugarGrid[i][j] = Math.min(sugarGrid[i][j] + regenRate, maxSugar);
        }
    }
}



function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    for (const agent of agents) {
        agent.move();
        agent.draw();
    }
    requestAnimationFrame(update);
}

update();
```

### Step 5: Enhance the Model

You can further enhance the model by adding more complex behaviors and interactions, such as:

- **Reproduction:** Agents reproduce based on certain conditions, adding offspring to the simulation.
- **Trading:** Agents trade sugar with each other based on predefined rules.
- **Social Structures:** Implement social networks or hierarchies among agents.

Here's an example of adding reproduction:

```javascript
class Agent {
    constructor(x, y) {
        // ... (previous properties)
        this.age = 0;
        this.maxAge = Math.floor(Math.random() * 50) + 50;  // Agents live between 50 and 100 steps
    }

    // Move the agent to the location with the most sugar within its vision
    move() {
        // ... (previous move logic)
        
        this.age++;
        if (this.age >= this.maxAge) {
            this.die();
        } else if (Math.random() < 0.01) {  // Small probability of reproduction
            this.reproduce();
        }
    }

    // Handle agent reproduction
    reproduce() {
        const childX = (this.x + Math.floor(Math.random() * 3) - 1 + gridSize) % gridSize;
        const childY = (this.y + Math.floor(Math.random() * 3) - 1 + gridSize) % gridSize;
        agents.push(new Agent(childX, childY));
    }
}
```

By following these steps, you can create a basic version of the Sugarscape model in JavaScript. This provides a foundation for further exploration and enhancement, allowing you to study various social and economic phenomena through agent-based modeling. You can experiment with Sugarscape in this notebook: [Sugarscape Model in JavaScript Notebook](https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Sugarscape.jsnb).
