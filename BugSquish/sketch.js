let bug;
let bugs = [];
let time, score, startTime, endTime;
let bugAni;
let wall = [];

function preload() {
  bugs[0] = loadImage("dead roach-1.png");
  bugs[1] = loadImage("dead roach-2.png");
  bugs[2] = loadImage("dead roach-3.png");
  bugs[3] = loadImage("dead roach-4.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  score = 0;
  startTime = 30; 
  endTime = false;
  time = 30;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  background(220);
  textSize(30);
  text ("Time: " + time, 30, 50)
  text("Score: ", 30, 100);
  if (frameCount % 60 == 0 && time > 0) {
    time--;
  } else if (time == 0) {
    text ("Gameover", windowWidth/2, windowHeight/2);
  }
}


//roach still, roach move, roach die.
//IDK why they collide nor do i know how to make walls plz help
class roach{
  constructor(x, y, width, height, spriteSheet, animation){
    this.bug = new Sprite(x, y, width, height);
    this.bug.spriteSheet = spriteSheet;
    this.bug.anis.frameDelay = 2;
    this.bug.addAnis(animation);
    this.bug.changeAni('scuttle');
    this.bug.vel.x = 3;
    this.bug.vel.y = 0;
    if (this.bug.x >= 600){
      this.bug.vel.x = -3;
    }
  }
  squishBug(){
    if(mouseButton.presses()){
      this.bug.changeAni('squish');
    }
  }
 
}