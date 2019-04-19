const brain = require("brain.js");

const network = new brain.NeuralNetwork();

network.train([
    {input: {Rvalue: 1, Gvalue: 1, Bvalue: 1}, output: {light: 1}},
    {input: {Rvalue: 0, Gvalue: 0, Bvalue: 0}, output: {dark: 0}}
]);

const result = network.run({Rvalue: .58, Gvalue: .47, Bvalue: .52});

console.log(result);

// {input: {height: 60, weight: 150}, output: {adult: 1}},
//     {input: {height: 30, weight: 60}, output: {child: 0}}
//     {input: {Rvalue: 255, Gvalue: 0, Bvalue: 0}, output: {hue: 1}},
//     {input: {Rvalue: 0, Gvalue: 0, Bvalue: 255}, output: {hue: .5}},
//     {input: {Rvalue: 0, Gvalue: 155, Bvalue: 0}, output: {hue: 0}}
## make that work for an actually webkitConvertPointFromPageToNode. add input into html with some sort of color selector. 
<input type="color" value="#ff0000" />
<div id="example"> Example text</div>
//make a css file, link it. give html page a body and font. #example{ padding: 100px; background: #ff0000; color: white; font-size: 36px}..... add event listener. when you click on the input the event listener should change your background based on the input
//body{ font-family: Arial, Helvetica, sans-serif;}