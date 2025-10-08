// write your codes here
let inputSomeText;
let button1;
let story = "long long long time ago...";

// run once similar to "when green flag clicked"
function setup() {
    createCanvas(600, 400);
    background("skyblue");

    // create a text input
    inputSomeText = createInput(story, "text");
    inputSomeText.position(50, 50);
    inputSomeText.size(350);

    // i will teach create a button
    button1 = createButton("Click on Me");
    button1.position(50, 100);
    button1.size(100, 50);
    button1.mousePressed(updateStory); // connection
}

function updateStory() {
    story = inputSomeText.value();

    textAlign(CENTER, CENTER);
    textSize(28);
    text(story, width/2, 250);
}

// forever block
function draw() {

}