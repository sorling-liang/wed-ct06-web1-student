// write your codes here

let shapeColor = "blue";
let diameter = 100;

// when green flag clicked
function setup() {
    createCanvas(600, 400); // get a drawing paper
    background(200); // gray color
}

// forever block; repeatedly for 60 times per one second
function draw() {
    fill(shapeColor);
    circle(100, 100, diameter); // xpos, ypos, diameter;
}

function mousePressed() {
    shapeColor = "red";
    diameter = diameter + 10;
    if (diameter > 500) diameter = 100;
}

function mouseReleased() {
    shapeColor = "blue";
}