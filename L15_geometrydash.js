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

    drawSpike(840, 880, 600, 670);
}

function drawSpike(x1, x2, y1, orange2) {
    // probably green colour
    // triangle()
    fill("lime");
    let x3 = (x1 + x2) /2;
    triangle(x1, y2, x2, y2, x3, y1);
}