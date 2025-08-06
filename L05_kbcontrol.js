// write your codes here
let size = 0;
let rectSize = 50;

// run once similar to "when green flag clicked"
function setup() {
    // get a blank drawing canvas
    createCanvas(200, 200);

    // set a gray background
    background(200);
}
// forever block
function draw() {
    background(200); // clear the drawing paper
    //noStroke();

    // draw a shape
    // rect(100, 100, rectSize, rectSize);
    if (key === 'c') {
        // circle diameter: 200
        circle(width/2, height/2, 200);
    }
    if (key === 's') {
        // square
        rect(50, 50, )
    }    
    if (key === 't') {
        // triangle( x1,y1,  x2,y2,  x3,y3 )
        //           0,200,  100,0,  200,200
    }
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