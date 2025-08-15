let bg;

function preload() {
    bg = loadImage('assets/Xy-grid-30px.png');
}
function setup() {
    createCanvas(480,360);
}
function draw() {
    image(bg,0,0,480,360);
    fill("red");
    stroke("skyblue");
    strokeWeight(8);
    triangle(width/2-50, height/2, width/2, height/2-80, width/2+50, height/2);
}