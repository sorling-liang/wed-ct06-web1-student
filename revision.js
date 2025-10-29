// question 1
let posX, xSpeed;

function setup() {
    createCanvas(600, 400);
    background(200);
    posX = width/ 2;
    xSpeed = 5;

}

// repeat 60 times per one second
function draw() {
    fill('limegreen');
    circle(posX, height/2, 50);
    posX = posX + 50;
}

// question 2