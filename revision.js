let xpos = 60;
let velocity = 5;

function setup() {
    createCanvas(600,400);
    background("indigo");
}

function draw() {
    background("indigo");
    circle(xpos,50,50);
    xpos = xpos + velocity;

    if (xpos > width) {
        velocity = ??
    }

}