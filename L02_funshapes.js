/*
Task 1: Add the setup() function
*/
let x = 50;
function setup() {
  //           w     h
  createCanvas(600, 400);
  background(240); // 0 to 255 gray tone

}

function draw() {
    background(240); // 0 to 255 gray tone

  // Challenge 1: An eye using ellipse() function
  // fill("hotpink");
  // ellipse(300, 200, 250, 180);
  fill("Lavender");
  stroke("indigo");
  strokeWeight(15);
  circle(x, 70, 150);
  x = x + 1;
  // Challenge 2: A face using circle() function

  // Challenge 3: A house using rect() function

  // Challenge 4: A rocketship using triangle() function

  // Challenge 5: A square face using quad() function

  // Challenge 6: Add some colours to the drawings in the above challenges

  // Challenge 7: Create a funny Pokemon
}