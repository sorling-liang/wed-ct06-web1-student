// write your codes here

let shapeColor = "blue";

// when green flag clicked
function setup() {
    createCanvas(600, 400); // get a drawing paper
    background(200); // gray color
}

// forever block; repeatedly for 60 times per one second
function draw() {

}

function mousePressed() {
    shapeColor = "red";
}

function mouseReleased() {
    shapeColor = "blue";
}