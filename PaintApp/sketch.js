function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225);
}

/*function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}*/

function draw() {

  noStroke();

  let r = color("#ea412c");
  let o = color("#ef8734");
  let y = color("#fff84a");
  let g = color("#77f23b");
  let lb = color("#74f9fc");
  let db = color("#0044f7");
  let p = color("#e95dfa");
  let b = color("#774315");
  let w = color(255);
  let bl = color(0);

  fill(r);
  let rsq = square(0, 0, 50);

  fill(o);
  let osq = square(0, 50, 50);

  fill(y);
  square(0, 100, 50);

  fill(g);
  square(0, 150, 50);

  fill(lb);
  square(0, 200, 50);

  fill(db);
  square(0, 250, 50);

  fill(p);
  square(0, 300, 50);

  fill(b);
  square(0, 350, 50);

  fill(w);
  square(0, 400, 50);

  fill(bl);
  square(0, 450, 50);

  if (mouseIsPressed)
  {
    stroke(bl);
    strokeWeight(3);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
  else if (rsq.mouseIsPressed)
  {
    stroke(r);
  }

}