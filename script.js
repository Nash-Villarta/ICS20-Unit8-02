function setup() {
  createCanvas(250, 250);
  print("Hello! This is a square and a circle");
}

function draw() {
  let a = color("green");
  let b = color("purple");
  background(220);
  fill(a);
  noStroke;
  rect(90, 20, 90, 90);
  fill(b);
  noStroke();
  circle(50, 160, 100);
  fill(100, 0, 0, 25);
  ellipse(100, 50, 50);
}
