function setup(){
    createCanvas(600, 400);
    background(220);
}

function draw(){
    fill(255, 0, 0);
    //       x   y  width, height
    ellipse(300,100,100,80);
    
    // Todo: Challenge 3 Traffic Light
    fill("indigo");
    ellipse(300,200,100,80);

    fill("hotpink");
    ellipse(300,300,100,80);
}