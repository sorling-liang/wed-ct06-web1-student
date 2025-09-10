// write your codes here
let soundsFX;
let ypos;

function preload() {
    soundsFX = loadSound("assets/star_wars_theme_8_bit.mp3");
    //soundsFX.loop(); // continuous play
}

// run once similar to "when green flag clicked"
function setup() {
    createCanvas(600, 400);
    background("black");
    fill("cyan");

    ypos = height;
    textAlign(CENTER, CENTER);
}

// forever block
function draw() {
    background("black");
    translate( 150, ypos);
    scale(1,3);
    text( "the beginning of the star wars story...", 0,0 );
    ypos = ypos - 0.6;




    if ( keyIsDown(32) ) { // space
        soundsFX.play();
    }
    else if ( keyIsDown( DOWN_ARROW ) ) {
        soundsFX.stop();
    }
}