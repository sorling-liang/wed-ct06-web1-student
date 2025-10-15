let xpos = 60;
let velocity = 15;
let names = [
    "walden",    "winston",    "darissa",    "guhaan",    "natalie",    "tommy"
];

function setup() {
    createCanvas(600,600);
    background("indigo");

    fill("white"); // text colour
    textSize(32);
    textAlign(CENTER, CENTER);
    let ypos = 100;
    for (let index=0; index<names.length; index++) {
        text(names[index], width/2, ypos);
        ypos = ypos + 50;
    }
}

function draw() {
    // background("indigo");
    // circle(xpos,50,50);
    // xpos = xpos + velocity;

    // if (xpos > width) {
    //     velocity = velocity * -1;
    // }
    // if (xpos < 0) {
    //     velocity = velocity * -1;
    // }
}