function setup() {
    createCanvas(1200, 400);
    background(220);
    // noLoop(); // Stops continuous drawing
  }
  
function draw() {
  let diameter = 80;
  let x = 75;

  // Recap 1: Repeating Circles
  for (let i=0; i<15; i++) {
    circle(x,200, diameter);
    x = x + diameter + 10;
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