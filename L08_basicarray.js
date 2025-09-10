// write your codes here
// let xpos = 200;
// let ypos = 180;
// let velocityX = 2;

// run once similar to "when green flag clicked"
function setup() {
    createCanvas(400, 400);
    background("black");
    fill("cyan"); // pen colour

    textSize(18);
    //                    x   y
    //text("p5.js library", 80, 200);

    let favFoods = ["fried chicken", "ice cream", "chocolates", "" ];
    console.log( favFoods.length ); // print the size of the list
    console.log( favFoods );

    let yValue = 80;
    for ( let index=0; index < favFoods.length; index++ ) {
        console.log( "I love " + favFoods[index] + "!!!" );
        //                                   x   y
        text( "I love "  + favFoods[index], 80, yValue );
        yValue = yValue + 55;
    }
}

function draw() {

}


// // forever block
// function draw() {
//     background(220);
//     noStroke();
//     rect( xpos, ypos, 50, 50 );

//     xpos = xpos + velocityX;

//     if ( xpos < 0 || xpos > width-50 ) {
//         fill( random(255), random(255), random(255) );
//         velocityX = velocityX * -1;
//     }
// }