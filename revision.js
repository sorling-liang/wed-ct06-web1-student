let xpos = 60;
let velocity = 15;

function setup() {
    createCanvas(600,400);
    background("indigo");
}

function draw() {
    background("indigo");
    circle(xpos,50,50);
    xpos = xpos + velocity;

    if (xpos > width) {
        velocity = velocity * -1;
    }
    if (xpos < 0) {
        velocity = velocity * -1;
    }
}