// write your codes here
let inputNoun;
let button1;
let story = "long long long time ago...";

// run once similar to "when green flag clicked"
function setup() {
    createCanvas(600, 600);
    background("skyblue");

    // create a text input
    inputNoun = createInput("e.g. dog", "text");
    inputNoun.position(width/2, 50);

    // i will teach create a button
    button1 = createButton("Generate Story");
    button1.position(width/2, 100);
    button1.size(100, 50);
    button1.mousePressed(updateStory); // connection
}

function updateStory() {
    console.log(inputNoun.value());
}

// forever block
function draw() {
    background("skyblue"); // erase
    fill("black");
    textAlign(RIGHT, CENTER);
    textSize(14);
    text("Enter a noun:", width/2-20, 60);
}