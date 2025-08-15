let bg;

function preload() {
    bg = loadImage('assets/Xy-grid-30px.png');
}
function setup() {
    createCanvas(480,360);
}
function draw() {
    Image(bg,0,0,480,360);
}