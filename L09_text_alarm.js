// write your codes here
let xpos;
let velocityX;

// run once similar to "when green flag clicked"
function setup() {
    createCanvas(600, 400);
    background("skyblue");
    textSize(48);
    textAlign(CENTER, CENTER);

    xpos = width/2;
    velocityX = 0.6;
}

// forever block
function draw() {
    background("skyblue");

    translate( xpos, height/2 );
    text("Bounce!", 0, 0);
    
    xpos = xpos + velocityX;
}