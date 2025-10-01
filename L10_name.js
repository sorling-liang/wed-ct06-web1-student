// write your codes here
let bgColor = "skyblue";
let colorPicker;
let username = "Mr David";
let userInput;

// run once similar to "when green flag clicked"
function setup() {
    createCanvas(600, 600);
    background(bgColor);

    colorPicker = createColorPicker(bgColor);
    colorPicker.position( width/2-25, height/2+50 );

    userInput = createInput();
    userInput.position(          100, height/2+100)
    userInput.input(updateLabel);
}

function updateLabel() {
    username = userInput.value();
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
    text(username, width/2, 150);

    textAlign(RIGHT, CENTER);
    text("Your name:", )
}