// write your codes here
let soundEffect, bgMusic, staticImage;

let xpos;
let ypos;

let secondguy;
let secondguyX, secondguyY;

function preload() {
    // load any images or sounds here
    soundEffect = loadSound('assets/pop.mp3');
    bgMusic = loadSound('assets/bossaNova.mp3');

    staticImage = loadImage('assets/pico-a.png');
    secondguy = loadImage('assets/penguin2-b.svg');
}

// run once similar to "when green flag clicked"
function setup() {
    createCanvas(400, 400);
    background("skyblue");

    xpos = width/2;
    ypos = height/2;

    bgMusic.loop(); // continuously play
}

// forever block
function draw() {
    background("skyblue");
    // load picture onto the canvas
    image(staticImage, xpos, ypos, 110, 133);

    image(secondguy, secondguyX, secondguyY, 109, 126);


    // a key to move left
    if (keyIsDown(65)) {
        secondguyX = secondguyX -5;
    }
    // d key to move right
    if (keyIsDown(68)) {
        secondguyX = secondguyX +5;
    }    xpos = constrain(xpos, 0, 400-110);


    // w key to move up
    if (keyIsDown(87)) {
        secondguyY = secondguyY -5;
    }
    // s key to move down
    if (keyIsDown(83)) {
        secondguyY = secondguyY +5;
    }
    secondguyY = constrain(secondguyY, 0, height);


    if (keyIsDown(RIGHT_ARROW)) {
        xpos = xpos + 1;
    }
    else if (keyIsDown(LEFT_ARROW)) {
        xpos = xpos - 1;
    }
    else if (keyIsDown(32)) {
        // space key pressed
        soundEffect.play(); // play the sound
    }
    xpos = constrain(xpos, 0, 400-110);


    if (keyIsDown(UP_ARROW)) {
        ypos = ypos -1;
    }
    else if (keyIsDown(DOWN_ARROW)) {
        ypos = ypos +1;
    }    
    ypos = constrain(ypos, 30, 340);
}