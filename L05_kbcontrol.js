// write your codes here
let size = 0;
let rectSize = 50;

// run once similar to "when green flag clicked"
function setup() {
    // get a blank drawing canvas
    createCanvas(600, 400);

    // set a gray background
    background(200);
}
// forever block
function draw() {
    noStroke();
    rect(100, 100, rectSize, rectSize);
}
// function mousePressed() {
//     size = 5;
//     // set a random color
//     fill( random(255), 0, random(255) );
// }
// function mouseDragged() {
//     size = size + 0.5;
//     circle(mouseX, mouseY, size);
// }
function keyPressed() {
    rectSize = 100;
}
function keyReleased() {
    rectSize = 50;
}