// write your codes here
let inputNoun;
let inputVerb;
let inputAdjective;
let inputAdverb;
let inputPlace;

let button1;
let story = "long long long time ago...";

let templates;

// run once similar to "when green flag clicked"
function setup() {
    createCanvas(600, 600);
    background("skyblue");

    // create a text input
    inputNoun = createInput("e.g. dog", "text");
    inputNoun.position(width/2, 50);

    inputVerb = createInput("e.g. jump");
    inputVerb.position(width/2, 80);

    inputAdjective = createInput("e.g. tall");
    inputAdjective.position(width/2, 110);

    inputAdverb = createInput("e.g. loudly");
    inputAdverb.position(width/2, 140);

    inputPlace = createInput("e.g. Ang Mo Kio");
    inputPlace.position(width/2, 170);

    // i will teach create a button
    button1 = createButton("Generate Story");
    button1.position(width/2, 210);
    //button1.size(100, 50);
    button1.mousePressed(updateStory); // connection


    templates = [
        "The {adjective} {noun} is {verb} {adverb} at the {place}.",
        "One day, a {adjective} {noun} wanted to {verb} {adverb} in {place}",
        "Did you hear about the {adjective} {noun} that tried to {verb} {adverb} near {place}",
    ]; // array of values

    let selection = random(templates);
    console.log("selection: " + selection); // + string concatenation

    story = selection.replace("{adjective}", "tall");
    story = story.replace(    "{noun}",      "granny");
    story = story.replace(    "{verb}",      "dance");
    story = story.replace(    "{adverb}",    "beautifully");
    story = story.replace(    "{place}",     "principal's office");

    console.log("story is: " + story);
}

function updateStory() {
    console.log(inputNoun.value());
    console.log(inputVerb.value());
    console.log(inputAdjective.value());
    console.log(inputAdverb.value());
    console.log(inputPlace.value());
}

// forever block
function draw() {
    background("skyblue"); // erase
    fill("black");
    textAlign(RIGHT, CENTER);
    textSize(14);
    text("Enter a noun:",       width/2-20, 60);
    text("Enter a verb:",       width/2-20, 90);
    text("Enter an adjective:", width/2-20, 120);
    text("Enter an adverb:",    width/2-20, 150);
    text("Enter a place:",      width/2-20, 180);

    fill("white");
    noStroke();
    rect(50,300,500,200,25);
}