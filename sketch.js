//JaeHyeon Nam
//Draw A Dog Exercise
//CS099
//Spring 2020
function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(255,224,140);
  fill(204,114,61);
  ellipse(255, 495, 250, 290);
  fill(242,150,97);
  ellipse(170, 200, 55, 85);
  ellipse(320, 200, 55, 85);
  stroke('black');
  strokeWeight(0.5);
  fill(242,150,97);
  circle(250, 300, 250);
  fill('black');
  circle(200,270, 30);
  circle(300,270, 30);
  noFill();
  arc(250, 385, 60, 50,6,10 ,HALF_PI, PI);
  noStroke();
  fill('black');
  rect(236, 320, 25, 25, 10);
  fill('brown');
  rect(70, 440, 45, 210);
  rect(70, 440, 365, 40);
  rect(420,440, 45, 210);
  fill(255,94,0);
  circle(99, 419, 40);
  circle(129, 419, 40);
  circle(389, 419, 40);
  circle(419, 419, 40);
  fill('gray');
  rect(360,410, 105, 30);
  rect(70,410, 105, 30);
}