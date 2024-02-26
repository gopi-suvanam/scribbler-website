
# Beauty in chaors
This project has been submitted as an entry to [Scribble Pad Hackthon](https://scribbler.live). Check out the notebook [here](https://app.scribbler.live).
<br> This is a guestpost by [Samanth Martis](#about-author).
## Introduction!

We aim to generate some popular chaos-attractors on a website using an html5 canvas! No external libraries, no frameworks, just pure simple javascript! We plot a dynamic equation as it's state changes over time, tracing were it has been to be beautiful patterns!


## Aim: Why are we doing this?

The purpose of this whole project is not to push the frontiers of science, per se. The purpose of the project is to generate interest in Chaos Theory and mathematics. When presented with the choice of a topic, I immediately knew I had to build this because of an experience I had many years ago where a game showed me the beauty of differential equations and the intricate patterns you could generate. 
The purpose of this project, in the most simple terms, is to look cool. When someone see's the canvas render, say, the Lorenz Attractor, only if they're captivated by its beauty(or coolness ^v^ ), they will wonder 'Whoa, how is this done? How do I make this?!'
The purpose of this project is to generate that initial spark of interest by appearing so good that you want to do it yourself!



## Implementation: How do we do this?



### Canvas
In one word, canvas. In two words, HTML5 Canvas (HTML is 4 words but who's counting). 
The html canvas is used to render graphics and animations. There are also entire games running just on a canvas.
But we go nowhere near that level of complexity. This project is DECIEVINGLY simple. 

Me can generate simple lines as shown in the figure:
\<image1>

We can also change direction and draw lines again!
\<image2>

Thats it! We're done!
No really, that's all you need to know!
Rest is just making it all look cool.

### Attractors

Attractors are a states to which a dynamic system tends towards to. 'Stable states' (Not mathematically correct, but gets the idea across). For a pendulum, the state where the bob is at the bottommost position and isn't moving anymore is it's attractor. It's a point attractor. 
Similarly there are other Attractors, eg: Ring Attractor, Torus Attractor, etc. 
But we're focusing on Strange Attractor(s).

The lorenz attractor is one such example of a strange attractor!
You can personally try it out in the website [here](https://sam-martis.github.io/ChaosTheoryAttractors/)!

Each of the strange attractors here follows a set of differential equations. We just keep track of the pen by updating the position of the pen (depending on what the differential equations require) each frame and then draw it on the canvas!
It's so different than drawing a line. Here we're just drawing multiple lines- their positions and output being a function of its x-coordinate, y-coordinate, z-coordinate and time!

![Stuff](https://wikimedia.org/api/rest_v1/media/math/render/svg/7928004d58943529a7be774575a62ca436a82a7f)
The above are differential equations for the lorenz attractor. As for the constants, these are the ones I use!

```python

# dadb stands for da/db
dxdt = (x, y, z) => {
	return 10 * (y - x);
};
dydt = (x, y, z) => {
	return x * (28 - z) - y;
};
dzdt = (x, y, z) => {
	return x * y - (8 * z) / 3;
};
```



Here is the Chen attractor:
![Chen Attractor](/scribblepad/ChaosTheoryAttractors/images/ChenAttractor.png)

And here is the Lorenz attractor!
![Lorenz Attractor](/scribblepad/ChaosTheoryAttractors/images/LorenzAttractor.png)


## Use: How to interact with the website!

Try the website  [https://sam-martis.github.io/ChaosTheoryAttractors/](https://sam-martis.github.io/ChaosTheoryAttractors/)
You can find all needed instructions on the github repository! 
[https://github.com/Sam-MARTis/ChaosTheoryAttractors](https://github.com/Sam-MARTis/ChaosTheoryAttractors)

As of the writing of this article, there are 3 chaos attractors (increased from the 2 that were present during the project demonstration). There will be many more in the future as I learn newer ways to render them!

Go ahead! Try the website! Click the link and link on Lorenz!




>## About Author
><img src='/scribblepad/ChaosTheoryAttractors/images/samanth.jpeg' style="height:250px"></img>
>Samanth Martis a First-year BTech undergraduate in Aerospace Engineering in IIT Bombay! He is a huge fan of code and loves to try out new things to satisfy that curiosity! Fun fact, He had only known Javascript for a month before he wrote this program! Three websites and many Canvas Artworks later, he is now learning WebGl for 3D rendering and Unity Game Engine in the goal of making 'cool' simulations that will get even the most uninterested person to say 'hmm, not bad'.
>Check out his [Github](https://github.com/Sam-MARTis)! There are many more cool repos there! Ex: [Fractal Generator!](https://sam-martis.github.io/Fractal-Generator/) Reach out to him on [Linkedin](https://www.linkedin.com/in/samanth-martis-5309ab293/)
