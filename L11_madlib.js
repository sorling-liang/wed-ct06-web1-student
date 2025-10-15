// write your codes here
let inputNoun;
let inputVerb;
let inputVerb;
let inputAdverb;
let inputplace;

let button1;
let story = "long long long time ago...";

// run once similar to "when green flag clicked"
function setup() {
    createCanvas(600, 600);
    background("skyblue");

    // create a text input
    inputNoun = createInput("e.g. dog", "text");
    inputNoun.position(width/2, 50);

    inputVerb = createInput("e.g. jump");
    inputVerb.position(width/2, 80);

    // i will teach create a button
    button1 = createButton("Generate Story");
    button1.position(width/2, 210);
    button1.size(100, 50);
    button1.mousePressed(updateStory); // connection
}

function updateStory() {
    console.log(inputNoun.value());
    console.log(inputVerb.value());
}

// forever block
function draw() {
    background("skyblue"); // erase
    fill("black");
    textAlign(RIGHT, CENTER);
    textSize(14);
    text("Enter a noun:", width/2-20, 60);
    text("Enter a verb:", width/2-20, 90);
    text("Enter a adjective:", width/2-20, 120);
    text("Enter a adverb:", width/2-20, 150);
    text("Enter a place:", width/2-20, 180);
}