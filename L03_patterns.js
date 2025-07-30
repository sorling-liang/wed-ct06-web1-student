// let colorValue = 0; // start from black
// let counter = 0;
// let posX = 50;

function setup() {
    createCanvas(600, 400);
    background(220); // gray-tone
    noLoop(); // Stops continuous drawing
  }


// forever loop
function draw() {
      // Recap 1: Repeating Circles

      // Task 1: Colour Gradient

  // const diameter = 50; // value does not change
  // let xpos = 50;
  // let ypos = 50;
  // let greenValue = 0;

  // // Task 3: Row of Circles
  // for (let count=1; count<7; count++) {
  //   // fill(0,0,0); // black
  //   fill(0, greenValue, 0); // red, green, blue
  //   greenValue = greenValue + 40;

  //   // circle(50,50,50); 
  //   circle(xpos, ypos, diameter); // xpos, ypos, diameter
  //   xpos = xpos + 60; // go towards right side
  //   ypos = ypos + 60; // go towards bottom of the canvas
  // }

  // Task 4: Grid of Circles

  // find remainder
  for (let count=0; count<5; count++) {
     // this is repeated
     fill(0); // black color
     rect(50,50,50,50); // xpos, ypos, width, height;
  }

} // this is the last line



      // let diameter = 80;
      // let posx = 75;

      // for (let i=0; i<6; i++) {
      //   fill(0, i*50, 200); // red,green,blue
      //   circle(posx, 200, diameter);
      //   posx = posx + diameter + 10; // calculate the new position of x
      // }
      // background(220);
      // textSize(16);
      // text("counter: " + counter%500, 50, 50);
      // counter++;

      // Task 2: Colour Loop
      // fill( (colorValue%2) *255 );
      // circle(posX, 250, 100);
      // // colorValue = colorValue +1;
      // colorValue++; // shorthand
      // posX = posX + 105;
