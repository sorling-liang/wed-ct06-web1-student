// write your codes here
let bgColor = "skyblue";
let colorPicker;

// run once similar to "when green flag clicked"
function setup() {
    createCanvas(600, 600);
    background(bgColor);

    colorPicker = createColorPicker();
    colorPicker.position( width/2-25, height/2+50 );
}

// forever block
function draw() {
    background( colorPicker.value() );
    fill("white");
    //                    rounded
    rect(100,100,400,155, 25);
    fill("black");
    textSize(32);
    //          X      Y
    textAlign(CENTER, CENTER);
    text("Your name", width/2, 150);
}