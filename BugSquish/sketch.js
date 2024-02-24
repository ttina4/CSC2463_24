let score, walk, dead, time, gameState, startTime, timerIsDone, bugGroup;
let walls = [];
let bugs = [];
let dir = [0, 90, 180, 270];
let speed = 2;

function preload() {
  bugs[0] = loadImage("assets/dead roach-1.png.png");
  bugs[1] = loadImage("assets/dead roach-2.png.png");
  bugs[2] = loadImage("assets/dead roach-3.png.png");
  bugs[3] = loadImage("assets/dead roach-4.png.png");
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
  textAlign(CENTER);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  background(220);

  if (gameState == "start") {
    push();
    textSize(30);
    text("Squish roaches\n\nClick to start", width / 2, height / 2);
    pop();

    if (mouseIsPressed) {
      startTime = millis();
      makeBugs(10);
      gameState = "play";
    }

  } else if (gameState == "play") {
    push();
    time = timer();
    textSize(30);
    text("Time: " + (30 - time) + "\nScore: " + score, 100, 60);
    pop();

    if(bugGroup.length < 19){
      makeBugs(10);
    }
    
    bugGroup.collide(walls, teleport);
    bugGroup.displace(bugGroup);
    drawSprites();

    if (time >= 30) {
      gameState = "end";
    }

  } else if (gameState == "end") {
    push();
    textSize(30);
    text("You killed " + score + " bugs.\nClick to play again.\n", width / 2, height / 2 - 20);
    pop();

    if (mouseIsPressed) {
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

    let roach = createSprite(random(100, width - 100), random(100, height - 100), 128, 128);
    roach.isDead = false;
    roach.rotation = random(dir);

    if (roach.rotation === 0) {
      roach.setSpeed(speed, 270);
    } else if (roach.rotation === 90) {
      roach.setSpeed(speed, 0);
    } else if (roach.rotation === 180) {
      roach.setSpeed(speed, 90);
    } else if (roach.rotation === 270) {
      roach.setSpeed(speed, 180);
    }

    walk = roach.addAnimation("walk",
      bugs[1],
      bugs[2]
    );
    walk.frameDelay = 8;

    dead = roach.addAnimation("dead",
      bugs[3]
    );

    roach.onMouseReleased = function() {
      if (this.isDead === false) {
        this.changeAnimation("dead");
        this.setSpeed(0, 0);
        this.life = 100;
        score++;
        bugGroup.remove(this);
        this.isDead = true;
      }
    };
    bugGroup.add(roach);
  }
}

function borders() {
  for (let i = 0; i < 4; i++) {
    let wall;
    if (i === 0) {
       wall = createSprite(width, -100, windowWidth, 10);
    } 
    else if (i === 1) {
     wall = createSprite(width, height + 100, windowWidth, 10);
    } 
    else if (i === 2) {
     wall = createSprite(-100, height, 10, windowHeight);
    } 
    else if (i === 3) {
     wall = createSprite(1500, height, 10, windowHeight);
    }
    wall.immovable = true;
    walls.add(wall);
  }
}

function teleport() {
  if (this.rotation === 90) {
    this.position.x = 50;
    this.position.y = random(0, windowHeight - 20);
  } 
  else if (this.rotation === 270) {
    this.position.x = width + 50;
    this.position.y = random(0, windowHeight - 20);
  } 
  else if (this.rotation === 180) {
    this.position.y = 50;
    this.position.x = random(0, windowWidth - 20);
  } 
  else if (this.rotation === 0) {
    this.position.y = height + 50;
    this.position.x = random(0, windowWidth - 20);
  }
}