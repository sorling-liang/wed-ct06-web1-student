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
    //background("steelblue");
    noStroke();
    
    circle(ballX, ballY, ballSize);

    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;

    if ( ballX > width-ballSize/2 ) {
        ballSpeedX = ballSpeedX * -1; // change direction
        fill( random(0,255), random(0,255), random(0,255) );
    }
    if ( ballX < 0+ballSize/2 ) {
        ballSpeedX = ballSpeedX * -1; // change direction
        fill( random(0,255), random(0,255), random(0,255) );
    }

    // write bounce for top and bottom edge
    if ( ballY > height ) {
        ballSpeedY = ballSpeedY * -1
        fill( random(0,255), random(0,255), random(0,255) );
    }

    if ( ballY < 0 ) {
        ballSpeedY = ballSpeedY * -1
        //     Red              GREEN         BLUE
        fill( random(0,255), random(0,255), random(0,255) );
    }

    ballSpeedX = constrain(ballSpeedX, -5, 5);
    ballSpeedY = constrain(ballSpeedY, -5, 5);
}