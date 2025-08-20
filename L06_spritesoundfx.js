// write your codes here
let soundEffect, bgMusic, staticImage;

let xpos;
let ypos;

function preload() {
    // load any images or sounds here
    soundEffect = loadSound('assets/pop.mp3');
    bgMusic = loadSound('assets/bossaNova.mp3');

    staticImage = loadImage('assets/pico-a.png');
}

// run once similar to "when green flag clicked"
function setup() {
    createCanvas(400, 400);
    background("skyblue");

    xpos = width/2;
    ypos = height/2;
}

// forever block
function draw() {
    // empty
    fill("white");
    //   x  y  w    h
    rect(30,30,340,340);

    fill("black");
    rect(xpos, ypos, 35, 35);

    if (keyIsDown(RIGHT_ARROW)) {
        xpos = xpos + 1;
    }
    if (keyIsDown(LEFT_ARROW)) {
        xpos = xpos - 1;
    }
    
}