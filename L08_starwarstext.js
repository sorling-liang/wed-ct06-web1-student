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
    textSize(32);

    // this line must be in setup(), not preload() otherwise js error
    //soundsFX.loop(); // continuous play

    ypos = height;
}

// forever block
function draw() {
    background("black");
    translate( width/2, ypos );

    textAlign(CENTER, CENTER);
    text( "the beginning of the star wars story...", 0,0 );


    if ( keyIsDown(32) ) { // space
        soundsFX.play();
    }
    else if ( keyIsDown( DOWN_ARROW ) ) {
        soundsFX.stop();
    }
}