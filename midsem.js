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
    stroke("blue");
    strokeWeight(8);
    triangle(width/2-50, 200, width/2, 200-80, width/2+50, 200);
    circle(width/2, height/2+70, 100);
}