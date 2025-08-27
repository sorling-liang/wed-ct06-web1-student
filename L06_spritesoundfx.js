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
    image(staticImage, xpos, ypos, 110, 133);

    // // empty
    // fill("white");
    // //   x  y  w    h
    // rect(30,30,340,340);

    // fill("black");
    // rect(xpos, ypos, 35, 35);

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
    // ypos = constrain(ypos, 30, 340);
}