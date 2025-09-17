// write your codes here
let soundsFX;
let ypos;

function preload() {
    soundsFX = loadSound("assets/star_wars_theme_8_bit.mp3");
}

// run once similar to "when green flag clicked"
function setup() {
    createCanvas(600, 400);
    background("black");
    fill("cyan");
    textSize(48);

    // this line must be in setup(), not preload() otherwise js error
    //soundsFX.loop(); // continuous play

    ypos = height; // at the bottom
}

// forever block
function draw() {
    background("black");

    textAlign(CENTER, CENTER);
    text( "the beginning of the star wars story...", 0,0 );
    text( "at episode 4 in the year 1995", 0, 50 );

    ypos = ypos - 1;

    if ( keyIsDown(32) ) { // space
        soundsFX.play();
    }
    else if ( keyIsDown( DOWN_ARROW ) ) {
        soundsFX.stop();
    }
}