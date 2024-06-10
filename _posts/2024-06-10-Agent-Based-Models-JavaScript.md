---
title: Agent-Based Models (ABMs) in JavaScript
description: Agent-based models (ABMs) have a wide range of applications across various fields. This article gives a outline of ABMs along with JavaScript code.
layout: post
categories: Scientific
start_link: https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Agent-Based-Models.jsnb
---

## Agent-Based Models

Agent-based models (ABMs) are computational models that simulate the actions and interactions of autonomous agents to assess their effects on the system as a whole. These agents can represent individuals, groups, or entities in various contexts, such as social sciences, economics, ecology, and many others. ABMs are particularly useful for studying complex systems where the behavior of the whole system emerges from the interactions of its parts.

**Key Components:**
1. **Agents:** These are the individual entities with their own behaviors and properties.
2. **Environment:** The space or context within which the agents operate and interact.
3. **Rules:** The set of rules that govern the behaviors of the agents and their interactions with each other and the environment.
4. **Interactions:** The ways in which agents interact with each other and the environment.

## Building an Agent-Based Model in JavaScript

Here's a step-by-step guide to building a simple agent-based model in JavaScript. We'll create a basic model where agents move randomly on a 2D grid.

### Step 1: Set Up the Environment

First, create an HTML file with a canvas element where agents will be displayed.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Agent-Based Model</title>
    <style>
        canvas {
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <canvas id="canvas" width="600" height="600"></canvas>
    <script src="abm.js"></script>
</body>
</html>
```

### Step 2: Initialize the Canvas

In a separate JavaScript file (`abm.js`), initialize the canvas and create the agent class.

```javascript
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

class Agent {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // Randomly move the agent
    move() {
        const dx = Math.floor(Math.random() * 3) - 1;
        const dy = Math.floor(Math.random() * 3) - 1;
        this.x = Math.max(0, Math.min(canvas.width, this.x + dx));
        this.y = Math.max(0, Math.min(canvas.height, this.y + dy));
    }

    // Draw the agent
    draw() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, 2, 2);
    }
}
```

### Step 3: Create and Update Agents

Create an array of agents and write a function to update and render them.

```javascript
const agents = [];
const numAgents = 100;

// Initialize agents with random positions
for (let i = 0; i < numAgents; i++) {
    const x = Math.floor(Math.random() * canvas.width);
    const y = Math.floor(Math.random() * canvas.height);
    agents.push(new Agent(x, y));
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const agent of agents) {
        agent.move();
        agent.draw();
    }
    requestAnimationFrame(update);
}

update();
```

### Step 4: Enhance the Model

You can enhance this basic model by adding more complex behaviors and interactions. For example:

- **Avoiding Collisions:** Prevent agents from overlapping.
- **Attraction/Repulsion:** Make agents attract or repel each other based on distance.
- **State Changes:** Allow agents to change states based on rules (e.g., healthy, infected, recovered in an epidemic model).

Here's an example of adding simple collision avoidance:

```javascript
class Agent {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 5;
    }

    // Randomly move the agent
    move() {
        let dx = Math.floor(Math.random() * 3) - 1;
        let dy = Math.floor(Math.random() * 3) - 1;
        
        let newX = this.x + dx;
        let newY = this.y + dy;

        // Prevent moving out of bounds
        newX = Math.max(0, Math.min(canvas.width - this.size, newX));
        newY = Math.max(0, Math.min(canvas.height - this.size, newY));

        // Avoid collisions
        for (const agent of agents) {
            if (agent !== this && this.isColliding(agent, newX, newY)) {
                return; // Don't move if it would cause a collision
            }
        }

        this.x = newX;
        this.y = newY;
    }

    // Check if this agent would collide with another agent at new coordinates
    isColliding(other, newX, newY) {
        return newX < other.x + other.size &&
               newX + this.size > other.x &&
               newY < other.y + other.size &&
               newY + this.size > other.y;
    }

    // Draw the agent
    draw() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}
```

Experiment with the code here: [Sample ABM Notebook](https://app.scribbler.live/?jsnb=github:gopi-suvanam/scribbler-examples/Agent-Based-Models.jsnb).

## Application of Agent-Base Models

Here are some brief applications of agent-based models (ABMs) across various fields:

### 1. Economics and Finance
- **Market Dynamics**: Simulate interactions of traders to understand market behaviors and price formation.
- **Wealth Distribution**: Model economic disparities and the effects of policies on wealth distribution.

### 2. Urban Planning and Transportation
- **Traffic Flow**: Optimize traffic management and reduce congestion by simulating vehicle and pedestrian movements.
- **Urban Development**: Analyze the impact of zoning laws and infrastructure on city growth.

### 3. Epidemiology and Public Health
- **Disease Spread**: Predict outbreaks and evaluate intervention strategies for infectious diseases.
- **Healthcare Utilization**: Improve resource allocation in healthcare systems.

### 4. Environmental Science
- **Ecosystem Dynamics**: Study species interactions and environmental impacts on ecosystems.
- **Resource Management**: Manage natural resources sustainably by modeling user behaviors.

### 5. Social Sciences
- **Social Norms**: Understand the emergence and evolution of social norms and cultural traits.
- **Conflict and Cooperation**: Study dynamics of political movements and group interactions.

### 6. Business and Marketing
- **Consumer Behavior**: Model decision-making processes and the impact of marketing strategies.
- **Supply Chain Management**: Optimize supply chains by simulating interactions between supply chain entities.

### 7. Education
- **Learning Dynamics**: Simulate classroom interactions to improve teaching methods and educational outcomes.

These applications showcase the versatility of ABMs in addressing complex, real-world problems across multiple disciplines.
