// write your codes here
let xpos = 200;

let ballX = 200;
let ballY = 60;
let ballSize = 50;
let ballSpeedX = 2;
let ballSpeedY = 2;

// run once similar to "when green flag clicked"
function setup() {
    createCanvas(600, 400);
    background("skyblue"); // 220
}

// forever block
// function draw() {
//     // erase
//     background("skyblue"); // 220
//     circle(xpos, height/2, 50);

//     if ( keyIsDown(LEFT_ARROW) ) {  // UP_ARROW
//         xpos = xpos -5;
//     }
//     if ( xpos < 25 ) {
//         xpos = 25;
//     }
//     if ( keyIsDown(RIGHT_ARROW) ) {  
//         xpos = xpos +5;
//     }
//     if ( xpos > width-25 ) {  // DOWN_ARROW
//         xpos = width-25;
//     }
// }

// task 1
function draw() {
    background("steelblue");
    noStroke();
    fill(255); // white
    circle(ballX, ballY, ballSize);

    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;
}