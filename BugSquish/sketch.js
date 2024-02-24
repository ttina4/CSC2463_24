let bgImage, score, walking, squished, time, gameState, startTime, timerIsDone, bugGroup;
let walls = [];
let bugs = [];
let test;
let dir = [0, 90, 180, 270];
let speed = 2;

function preload() {
  //bgImage = loadImage("assets/background.jpg");
  bugs[0] = loadImage("assets/dead roach-1.png");
  bugs[1] = loadImage("assets/dead roach-2.png");
  bugs[2] = loadImage("assets/dead roach-3.png");
  bugs[3] = loadImage("assets/dead roach-4.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  score = 0;
  startTime = 30;
  timerIsDone = false;
  gameState = "start";
  bugGroup = new Group();
  walls = new Group();
  textFont('Comic Sans MS');
  rectMode(CENTER);
  textAlign(CENTER);
  borders();
}

function draw() {
  background(220);

  if (gameState == "start") {
    push();
    fill(255);
    rect(width / 2, height / 2, 100, 75);
    fill(0);
    text("squish the bugs\nclick to begin", width / 2, height / 2);
    pop();
    if (mouseIsPressed) {
      startTime = millis();
      makeBugs(20);
      gameState = "play";
    }
  } else if (gameState == "play") {
    push();
    time = timer();
    fill(255)
    textSize(width / 50);
    text("time left: " + (30 - time) + "\nscore: " + score, 60, 30);
    pop();
    if(bugGroup.length < 1){
      makeBugs(20);
    }
    
    bugGroup.collide(walls, teleport);
    bugGroup.displace(bugGroup);
    drawSprites();
    if (time >= 30) {
      gameState = "end";
    }
  } else if (gameState == "end") {
    push();
    fill(255);
    rect(width / 2, height / 2, 200, 100);
    fill(0);
    text("\ngame over!\nyou squished " + score + " bugs\npress space to play again\n", width / 2, height / 2 - 20);
    pop();

    if (keyIsPressed) {
      startTime = millis();
      if (keyCode === 32) {
        setup();
      }
    }
  }
}

function timer() {
  time = int((millis() - startTime) / 1000);
  return time;
}

function makeBugs(num) {
  for (let i = 0; i < num; i++) {

    let testBug = createSprite(random(100, width - 100), random(100, height - 100), 50, 50);
    testBug.scale = 1;
    testBug.isDead = false;
    testBug.rotation = random(dir);

    if (testBug.rotation === 0) {
      testBug.setSpeed(speed, 270);
    } else if (testBug.rotation === 90) {
      testBug.setSpeed(speed, 0);
    } else if (testBug.rotation === 180) {
      testBug.setSpeed(speed, 90);
    } else if (testBug.rotation === 270) {
      testBug.setSpeed(speed, 180);
    }

    walking = testBug.addAnimation("walk",
      bugs[0],
      bugs[1],
    );
    walking.frameDelay = 8;

    squished = testBug.addAnimation("squish",
      bugs[2]
    );

    testBug.onMouseReleased = function() {
      if (this.isDead === false) {
        this.changeAnimation("squish");
        this.setSpeed(0, 0);
        this.life = 100;
        score++;
        bugGroup.remove(this);
        this.isDead = true;
      }
    };
    bugGroup.add(testBug);
  }
}

function borders() {
  for (let i = 0; i < 4; i++) {
    let wall;
    if (i === 0) {
       wall = createSprite(width / 2, -100, 2000, 10);
    } 
    else if (i === 1) {
     wall = createSprite(width / 2, height + 100, 2000, 10);
    } 
    else if (i === 2) {
     wall = createSprite(-100, height / 2, 10, 2000);
    } 
    else if (i === 3) {
     wall = createSprite(height + 100, height / 2, 10, 2000);
    }
    wall.immovable = true;
    walls.add(wall);
  }
}

function teleport() {
  if (this.rotation === 90) {
    this.position.x = -50;
    this.position.y = random(20, height - 20);
  } 
  else if (this.rotation === 270) {
    this.position.x = width + 50;
    this.position.y = random(20, height - 20);
  } 
  else if (this.rotation === 180) {
    this.position.y = -50;
    this.position.x = random(20, width - 20);
  } 
  else if (this.rotation === 0) {
    this.position.y = height + 50;
    this.position.x = random(20, width - 20);
  }
}