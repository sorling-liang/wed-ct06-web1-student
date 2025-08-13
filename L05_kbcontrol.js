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
    background(200); // clear the drawing paper
    //noStroke();

    textSize(48); // font size
        // text     x  y
    text(key,     50, 20);
    text(keyCode, 50, 80);
}

// function keyPressed() {
//     rectSize = 100;
// }
// function keyReleased() {
//     rectSize = 50;
// }