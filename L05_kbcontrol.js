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

    // draw a shape
    // rect(100, 100, rectSize, rectSize);
    // if (key === 'c') {
    //     // circle diameter: 200
    //     circle(width/2, height/2, 200);
    // }
    // if (key === 's') {
    //     // square
    //     rect(50, 50, 100, 100);
    // }    
    // if (key === 't') {
    //     // triangle( x1,y1,  x2,y2,  x3,y3 )
    //     triangle(0,200,  100,0,  200,200);
    // }

    textSize(64); // font size
        // text          x  y
    text(key,     300, 70);
    text(keyCode, 300, 140);
}

// function keyPressed() {
//     rectSize = 100;
// }
// function keyReleased() {
//     rectSize = 50;
// }