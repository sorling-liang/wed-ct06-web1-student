// write your codes here
let soundEffect, bgMusic, staticImage
let xpos = 0;
let ypos = 0;
function preload() {
    soundEffect = loadSound('assests/pop.mp3')
    bgMusic = loadSound('assests/bossaNova.mp3')

    staticImage = loadImage('assests/pico-a.png')
}
function setup() {
    createCanvas(400, 400);
    background(200);
}

function draw() {
noFill();
rect(50, 50, 300, 300);
fill(110, 0, 210);
rect(xpos, ypos, 50, 50);
if(keyIsDown( RIGHT_ARROW )) {
    xpos = xpos + 1;
}
if (keyIsDown( LEFT_ARROW )) {
    xpos = xpos - 1;
}
if (keyIsDown( DOWN_ARROW )) {
    ypos = ypos + 1;
}
if (keyIsDown( UP_ARROW )) {
    ypos = ypos - 1;
}
xpos = constrain(xpos, 50, 350);
ypos = constrain(ypos, 50, 350);
}