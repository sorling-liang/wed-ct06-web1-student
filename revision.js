// question 1
let posX, xSpeed;

function setup() {
    createCanvas(600, 400);
    
    posX = width/ 2;
    xSpeed = 5;

}

// repeat 60 times per one second
function draw() {
    background("lightblue");
    fill('limegreen');
    circle(posX, height/2, 50);
    posX = posX + xSpeed;
    
}

// question 2