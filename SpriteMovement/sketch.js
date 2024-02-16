//Use arrow keys for movement

let sprite;
let characters = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let animation = {
    stand: {row: 0, frames: 1},
    right: {row: 0, col: 1, frames: 8},
    up: {row: 6, frames: 6},
    down: {row: 5, col: 6, frames: 6},
    standUp: {row: 6, col: 3, frames: 1},
    standDown: {row: 5, col: 11, frames: 1},
  };

  characters.push(new Character(200,200,80,80,'assets/helmet.png', animation));
  characters.push(new Character(100,100,80,80, 'assets/robot.png', animation));
  characters.push(new Character(300,100,80,80, 'assets/round.png', animation));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() { 
  background(220);

  //Code to make sprite move and stop when press and release key
  characters.forEach((character) => {
    if (kb.pressing('arrowRight')){
      character.moveRight();
    } 
    else if (kb.pressing('arrowLeft')){
      character.moveLeft();
    }
    else if (kb.pressing('arrowUp')){
      character.moveUp();
    }
    else if (kb.pressing('arrowDown')){
      character.moveDown();
    }
    else if (kb.released('arrowUp')){
      character.stopUp();
    }
    else if (kb.released ('arrowDown')){
      character.stopDown();
    }
    else if (kb.released ('arrowLeft') || kb.released ('arrowRight')){
      character.stop();
    }
  })
  
}

//Making a Class, so you can have multiple characters
class Character{
  constructor(x, y, width, height, spriteSheet, animation){
    this.sprite = new Sprite(x, y, width, height);
    this.sprite.spriteSheet = spriteSheet;
    this.sprite.anis.frameDelay = 6;
    this.sprite.addAnis(animation);
    this.sprite.changeAni('stand');
  }
  //Makes the sprite stand still in different facing directions
  stop(){
    this.sprite.vel.y = 0;
    this.sprite.vel.x = 0;
    this.sprite.changeAni('stand');
  }

  stopUp(){
    this.sprite.vel.y = 0;
    this.sprite.vel.x = 0;
    this.sprite.changeAni('standUp');
  }

  stopDown(){
    this.sprite.vel.y = 0;
    this.sprite.vel.x = 0;
    this.sprite.changeAni('standDown');
  }

  //Makes the sprite move right
  moveRight(){
    this.sprite.changeAni('right');
    this.sprite.vel.x = 2; //speed and direction the sprite moves
    this.sprite.scale.x = 1; //changes sprite direction
    this.sprite.vel.y = 0; //makes sure the sprite is not moving diagonally
  }

  //Makes Sprite move left
  moveLeft(){
    this.sprite.changeAni('right');
    this.sprite.vel.x = -2; // moves opposite direction
    this.sprite.scale.x = -1; 
    this.sprite.vel.y = 0;
  }

  //Move sprite Up
  moveUp(){
    this.sprite.changeAni('up'); 
    this.sprite.vel.y = -2;
    this.sprite.vel.x = 0;
  } 

  //Move sprite down
    moveDown(){
    this.sprite.changeAni('down');
    this.sprite.vel.y = 2;
    this.sprite.vel.x = 0;
  }
}

//Code to Move the character with keys
function keyTypedO(){
  switch(key){
    case 'arrowRight':
      moveRight();
      break;
    case 'arrowLeft':
      moveLeft();
      break; 
    case'arrowUp':
      moveUp();
      break;
    case 'arrowDown':
      moveDown();
      break;
  }
}
