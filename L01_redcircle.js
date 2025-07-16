function setup(){
    createCanvas(600, 400);
    background(0);
}

function draw(){
    fill(255, 100, 100);
    //       x   y  width, height
    fill(0, 255, 0); // green
    ellipse(300,100,100,80);
    
    // Todo: Challenge 3 Traffic Light
    fill("magenta");
    ellipse(300,200,100,80);

    fill("pink");
    ellipse(300,300,100,80);
}