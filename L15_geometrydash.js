// write your codes here

// write 2 functions
// canvas must be black
// width: 1000, height: 700

// p5.js
// dont have collisions
// dont have clones
// dont have broadcast

function setup() {
    createCanvas(1000, 700);
    background("black");
}

function draw() {
    background("black");
    fill("red");
    rect(0, 675, 1000, 25); // floor

    // draw player
    fill("blue");
    rect(width/2, height/2, 50, 50);
}

function drawSpike() {
    // probably green colour
}