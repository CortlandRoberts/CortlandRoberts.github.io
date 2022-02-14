let r;
let g;
let b;
let x;
let y;
let front;
let back;
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(12);
   background("black")
  stroke('ivory');
  text("x: " + mouseX,10,20); // displays the mouse's x location
	text("y: " + mouseY,10,40); // displays the mouse's y location
}

function draw() {
   r = random(255);
  g = 0;
  b = random(255);
  x = random(width);
  y = random(height);
  //Draws the D
  line(30, 250, r, 250);
  stroke(r);
  line(85, 300, 85, 250);
  stroke(r);
  line(85, 300, 30, 300);


  //This Draws A
  stroke(220, r, g);
  line(r, 300, 170, 250);
  stroke(255);
  line(100, 300, 170, 250);


  //This draws the T
  line(250, 250, 370, 250);
  stroke(r, g, b);
  line(320, 250, 320, 300);




  //This Draws the A
  stroke(220, r, g);
  line(400, 300, 500, r);
  stroke(r, g, b);
  line(600, 300, 500, r);


  //Here i am creating a random function that makes dots accross the screen
  strokeWeight(5);
  noStroke()
  ellipse(x, y, 50);

  if(frameCount > 0){
   stroke(r, g, b);
    line(front, back, x, y);
    fill("green");
    let d = dist(front, back, x, y);
  }
  front = x;
  back = y;
  fill(r, g, b, 50);
  circle(x, y, 10);


}
