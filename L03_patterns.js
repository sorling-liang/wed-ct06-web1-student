let diameter = 80;
let x = 75;

function setup() {
    createCanvas(800, 400);
    background(220); // gray-tone
    // noLoop(); // Stops continuous drawing
  }

// forever loop
function draw() {

  // Recap 1: Repeating Circles
  for (let i=0; i<8; i++) {
    circle(x, 200, diameter);
    x = x + diameter + 10; // calculate the new position of x
  }


  // circle(x,200, diameter);
  // x = x + diameter + 10;
  // circle(x,200, diameter);
  // x = x + diameter + 10;
  // circle(x,200, diameter);

  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}