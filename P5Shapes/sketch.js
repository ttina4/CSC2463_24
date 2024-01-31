var topLeft;
var topRight;
var bottomRight;
var bottomLeft;

function setup() {
  createCanvas(1100, 900);

  topLeft = createGraphics(550, 300);
  topRight = createGraphics(550, 300);
  bottomRight = createGraphics(550, 520);
  bottomLeft = createGraphics(550, 520);
}

function draw() {
  drawTopLeft();
  drawTopRight();
  drawBottomRight();
  drawBottomLeft();

  image(topLeft, 0,0);
  image(topRight, 550, 0);
  image(bottomRight, 550, 300);
  image(bottomLeft, 0, 300);

}

//Example 1 (neon green circle and square)
function drawTopLeft() {
  topLeft.background(color('#00ff00'));

  topLeft.circle(130, 150, 220);
  topLeft.square(290, 35, 230);

  topLeft.strokeWeight(3);
}

//Example 3 (pac-man)
function drawTopRight() {
  topRight.background(0);

  topRight.noStroke();

  let y = color(250,249,81);
  let r = color(234, 65, 44);
  let b = color(8,70,244);

  topRight.fill(y);
  topRight.arc(125, height/6, 225, 225, 3.92, 2.36);

  topRight.fill(r);
  topRight.arc(410, height/6, 225, 225, PI, 0);
  topRight.rect(297.5,height/6, 225, 112.5);

  topRight.strokeWeight(10);
  topRight.stroke(255);

  topRight.fill(b);
  topRight.circle(355, height/6, 55);
  topRight.circle(465, height/6, 55);
}

//Example 4 (centered circle and star)
function drawBottomRight() {
  bottomRight.background(20, 11, 137);

  let c = color(4,124,4);
  let d = color(252,8,7);

  bottomRight.strokeWeight(5);
  bottomRight.stroke(255);

  bottomRight.fill(c);
  bottomRight.circle(width/4, 250, 250);

  bottomRight.fill(d);

  bottomRight.beginShape();
  bottomRight.vertex(width/4, 130); //top vertex (1)
  bottomRight.vertex(301, 220); //inner right top (2)
  bottomRight.vertex(390, 220); //outer right top (3)
  bottomRight.vertex(320, 265); //inner right bottom (4)
  bottomRight.vertex(340, 345); //outer right bottom (5)
  bottomRight.vertex(width/4, 296); //bottom inner vertex (6)
  bottomRight.vertex(211, 345); //outer left bottom (7)
  bottomRight.vertex(230, 265); //inner left bottom (8)
  bottomRight.vertex(160, 220); //outer left top (9)
  bottomRight.vertex(249, 220); //inner left top (10)
  bottomRight.endShape(CLOSE);
}

//Example 2 (triple circle)
function drawBottomLeft() {
  bottomLeft.background(255);

  bottomLeft.noStroke();

  let r = color(255, 0, 0, 75);
  let g = color(0, 255, 0, 75);
  let b = color(0, 0, 255, 75);

  bottomLeft.fill(r);
  bottomLeft.circle(width/4, 190, 260);
  bottomLeft.fill(g);
  bottomLeft.circle(350, 330, 260);
  bottomLeft.fill(b);
  bottomLeft.circle(190, 330, 260);
}