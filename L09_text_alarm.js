// write your codes here
// let xpos;
// let velocityX;

// // run once similar to "when green flag clicked"
// function setup() {
//     createCanvas(600, 400);
//     background("skyblue");
//     textSize(48);
//     textAlign(CENTER, CENTER);

//     xpos = width/2;
//     velocityX = 2;
// }

// // forever block
// function draw() {
//     background("skyblue");

//     translate( xpos, height/2 );
//     text("Bounce!", 0, 0);

//     xpos = xpos + velocityX;

//     // combine 2 ifs, into a OR condition
//     if (xpos > width || xpos < 0) {
//         velocityX = velocityX * -1;
//     }
// }

let soundfx;
let bgColor = 220;
let counter = 5;

let objectId; // for creating interval timer
let secondId; // for blinking bg

function preload() {
   soundfx = loadSound("assets/bossaNova.mp3");
}

function setup() {
    createCanvas(400, 600);
    background(bgColor);
}

// forever loop
function draw() {
    background(bgColor);

    // show a clock
    let hourNumber = hour(); // 24-hour clock
    hourNumber = nf(hourNumber, 2); // format the number to a 2-digit number
    
    let minuteNumber = minute();
    minuteNumber = nf(minuteNumber, 2);

    let secondNumber = second();
    secondNumber = nf(secondNumber, 2);

    let timeNow = hourNumber + ":" + minuteNumber + ":" + secondNumber;

    textAlign(CENTER, CENTER);
    textSize(48);
    fill("black");
    text( timeNow, width/2, height/2 );

    let pi = 3.141591234567;
    pi = nf(pi, 1, 3); // 3 decimal places
    textSize(24);
    fill("red"); // text color
    text( "Countdown Timer:", width/2, height/2+ 50);
    text( counter, width/2, height/2+ 100);
    textSize(18);
    text( "Click me to start the time.", width/2, height/2+ 150);

    // if (keyIsDown(32)) {
    //     soundfx.play();
    // } 
    // else if (keyIsDown(DOWN_ARROW)) {
    //     soundfx.stop();
    // } 
}

function keyPressed() {
    // if (keyCode === UP_ARROW) {
    //     bgColor = color( random(255), random(255), random(255) );
    // }
}

function mousePressed() {
    objectId = setInterval( doSomething, 1000 ); // milliseconds
    //clearInterval( objectId );
}

function doSomething() {
    counter--; // shorthand   counter = counter - 1;
    counter = constrain(counter, 0, 5); // lesson 7 bouncing ball

    if (counter === 0) {
        clearInterval( objectId ); // remove object
        soundfx.play(); // play the music
        secondId = setInterval( blinkBG, 500 );
    }
}

let blinkCounter = 0;

function blinkBG() {
    blinkCounter++;

    if (blinkCounter === 5) {
        clearInterval( secondId ); // remove object

    }
}