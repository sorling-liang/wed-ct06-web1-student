// question 1
/*
let posX, xSpeed;

function setup() {
    createCanvas(600, 400);
    posX = width/ 2;
    xSpeed = 5;
}

// repeat 60 times per one second
function draw() {
    background("lightblue");
    fill('limegreen');
    circle(posX, height/2, 50);
    posX = posX + xSpeed;
    
}
*/
// question 2
let pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];
let yPos;

function setup(){
    createCanvas(200, 1300);
    background("black");

    fill("pink");
    // Task: Align the text to the center using textAlign
    textAlign(CENTER, CENTER);
    // Task: set font size to 20 using textSize
    textSize(20);
    
    yPos = 100;
    for(let index=0; index< pokemons.length; index++) {
        text(pokemons[index], width/2, yPos);
        yPos = yPos + 35;
    }
}

// forever loop
function draw() {
   
}