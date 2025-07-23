let colorValue = 0; // start from black
let counter = 0;
let posX = 50;
function setup() {
    createCanvas(800, 400);
    background(220); // gray-tone
    // noLoop(); // Stops continuous drawing
  }

// forever loop
function draw() {
      // Recap 1: Repeating Circles

      // Task 1: Colour Gradient
      // let diameter = 80;
      // let posx = 75;

      // for (let i=0; i<6; i++) {
      //   fill(0, i*50, 200); // red,green,blue
      //   circle(posx, 200, diameter);
      //   posx = posx + diameter + 10; // calculate the new position of x
      // }
      background(220);
      textSize(16);
      text("counter: " + counter%500, 50, 50);
      counter++;

      // Task 2: Colour Loop
      fill((colorValue%2)*255);
      circle(posX,250, 200);
      // colorValue = colorValue +1;
      colorValue++; // shorthand
      posX = posX + 100;


  // Task 3: Row of Circles

  // Task 4: Grid of Circles

} // this is the last line