let bug;
let bugs = [];
let time, score, startTime, endTime;

function setup() {
  createCanvas(windwowWidth, windowHeight);

  let animation = {
    scuttle: {row: 0, col: 0, frame: 3},
    squish: {row: 0, col: 4, frame: 1}, 
  }
  bugs.push(new roach(128,32,32,32, 'assets/dead roach.png', animation));
  
  score = 0;
  startTime = 30;
  endTime = false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  background(220);

  text("score =")
  
}

//this is your class called Slug, even though i drew a roach or smth, but this is so you can easily dulpicate the bug
//and have it appear on the screen a lot like the sprite thing. Just make a new slug in the setup function with the 
//same parameters that you see after constructor. or just look at the sprite movement program if you wanna copy.
//if you plan on using my roach drawing you can save the frames as a sprite sheet 
//roach still, roach move, roach die.
class roach {
  constructor(x,y,width,height, spriteSheet, animation) { 
    this.bug = new Bug (x,y,width,height);
    this.bug.spriteSheet = spriteSheet;
    this.bug.anis.frameDelay = 2;
    this.bug.addAnis(animation);
  }
}