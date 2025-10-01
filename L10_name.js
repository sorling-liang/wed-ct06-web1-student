// write your codes here
let bgColor = "skyblue";
let colorPicker;
let username = "Mr David";
let userInput;
// challenge
let yourage = 15;
let ageInput;

// run once similar to "when green flag clicked"
function setup() {
    createCanvas(600, 600);
    background(bgColor);

    colorPicker = createColorPicker(bgColor);
    colorPicker.position( width/2, height/2+50 );

    userInput = createInput();
    userInput.position( width/2, height/2+100)
    userInput.input(updateLabel);

    ageInput = createInput(yourage, "number");
    ageInput.position( width/2, height/2+150);
    ageInput.input(updateYourAge);
}

function updateLabel() {
    username = userInput.value();
}

function updateYourAge() {
    yourage = ageInput.value();
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
    text(yourage, width/2, 190);

    textSize(20);
    // display label for fields
    textAlign(RIGHT, CENTER);
    text("Choose background:", width/2-10, height/2+60)
    text("Your name:",         width/2-10, height/2+110)
    text("Your age:",         width/2-10, height/2+160)

}