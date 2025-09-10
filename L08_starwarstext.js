// write your codes here
let soundsFX;

function preload() {
    soundsFX = loadSound("assets/star_wars_theme_8_bit.mp3");
    soundsFX.loop(); // continuous play
}

// run once similar to "when green flag clicked"
function setup() {
    createCanvas(600, 400);
    background("skyblue");
}

// forever block
function draw() {
    if ( keyIsDown(32) ) { // space
        soundsFX.play();
    }
    else if ( keyIsDown(DOWN_ARROW) ) {
        soundsFX.stop();
    }
}