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
    background(200); // erase the drawing
    // fill(shapeColor);
    noStroke();
    fill(0); // gray, transparency
    circle(mouseX, mouseY, diameter); // xpos, ypos, diameter;
}

function mousePressed() {
    // use random() for color values
    // shapeColor = color( random(255), random(255), random(255) );
    // diameter = diameter + 10;
    // if (diameter > 500) diameter = 100;
}

function mouseReleased() {
    // shapeColor = "blue";
}