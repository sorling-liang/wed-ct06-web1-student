// write your codes here
let soundsFX;
let ypos;

function preload () {
    soundsFX = loadSound("assets/star_wars_theme_8_bit.mp3")

}
function setup() {
    createCanvas(600, 1400);
    background(0);
    soundsFX.loop();
    fill("cyan");
    textSize(28);
    ypos = height;
}

function draw() {
    let textY = 0;
    background(0);
    translate( width/2, ypos );
    textAlign(CENTER, CENTER);
    //text("the beginning of the star wars story...", 0, 0);
    //text("AT EPISODE 4 IN THE YEAR 1995", 0, 50);
    
    let story = [
        "the beginning of the star wars story",
        "AT EPISODE 4 IN THE YEAR 1995",
        "knock knock",
        "the little pig opened the door",
        "the wolf huffed",
        "and puffed",
        "BOOM",
        "the house blew up",
        "the little pig was as dead as a doorknob",
        "the wolf ate him",
        "THE END"
    ]

    for (let index=0; index < story.length; index++) {
        text( story[index], 0, textY);
        textY = textY + 35;
    }

    if ( ypos < 0 ) {
        ypos = height;
    }

    ypos = ypos - 0.6;
    if (keyIsDown(32) ) {
        soundsFX.play();
    }
    else if ( keyIsDown( DOWN_ARROW ) ) {
        soundsFX.stop();
    }
}
/*
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

    ypos = height; // at the bottom
}

// forever block
function draw() {
    background("black"); // erase

    translate( width/2, ypos );
    scale( 1, 3 ); // pull text longer on Y

    textAlign(CENTER, CENTER);
    //text( "the beginning of the star wars story...", 0,0 );
    //text( "at episode 4 in the year 1995", 0, 35 );

    let textY = 0;
    let story = [
        "the beginning of the star wars story...",
        "at episode 4 in the year 1995",
        "the end. I hope you enjoyed this story.",
    ];

    for (let index=0; index < story.length; index++) {
        text( story[index], 0, textY );
        textY = textY + 35;
    }

    ypos = ypos - 0.6;

    if ( ypos < 0 ) {
        ypos = height;
    }

    if ( keyIsDown(32) ) { // space
        soundsFX.play();
    }
    else if ( keyIsDown( DOWN_ARROW ) ) {
        soundsFX.stop();
    }
}
*/