let colorValue = 0; // start from black

function setup() {
    createCanvas(800, 400);
    background(220); // gray-tone
    // noLoop(); // Stops continuous drawing
  }

// forever loop
function draw() {

  fill(colorValue);
  circle(250,50, 200);
  colorValue = colorValue +1;
  // colorValue++;

  // let diameter = 80;
  // let posx = 75;

  // // Recap 1: Repeating Circles
  // for (let i=0; i<6; i++) {
  //   fill(0, i*50, 200); // red,green,blue
  //   circle(posx, 200, diameter);
  //   posx = posx + diameter + 10; // calculate the new position of x
  // }


  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles

} // this is the last line