let colorValue = 0; // start from black
let counter = 0;

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

      // Task 2: Colour Loop
      fill(colorValue, 0, 0);
      circle(250,250, 200);
      // colorValue = colorValue +1;
      colorValue++; // shorthand


  // Task 3: Row of Circles

  // Task 4: Grid of Circles

} // this is the last line