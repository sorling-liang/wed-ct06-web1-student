// write your codes here

// run once similar to "when green flag clicked"
function setup() {
    createCanvas(600, 400);
    background("skyblue");

}

// forever block
function draw() {
    let xpos = 50;
    let colorval = 0;

    for (let count=0; count<5; count++ ) {
        fill(colorval);
        rect(xpos,50,50,50);
        xpos = xpos+60;
        colorval = colorval + 50;
    }
}