// write your codes here
let soundEffect, bgMusic, staticImage;

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
}

// forever block
function draw() {
    // empty
}