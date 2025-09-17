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

function setup() {
    createCanvas(400, 600);
    background(220);
}

// forever loop
function draw() {
    background(220);

    // show a clock
    let hourNumber = hour(); // 24-hour clock
    let minuteNumber = minute();
    let secondNumber = second();

    //let timeNow = ??????

    textAlign(CENTER, CENTER);
    textSize(48);
    text( secondNumber, width/2, height/2 );
}