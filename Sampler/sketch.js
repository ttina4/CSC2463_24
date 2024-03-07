let soundFX = new Tone.Players ({
      bird : "assets/birdchirp.mp3",
      cat : "assets/catmeow.mp3",
      keyboard : "assets/keyboard.mp3",
      water : "assets/waterdroplet.mp3"
}).toDestination();

let button1, button2, button3, button4, slider, delayTime;
let color = '#4287f5';

var delay = new Tone.FeedbackDelay("8n", 0.5);
var distort = new Tone.Distortion(.1).toDestination();

soundFX.connect(delay);
delay.connect(distort);
soundFX.connect(gain);

function keyPressed() {
  if (key === '1') 
  {
    soundFX.player("bird").start();
  } 
  
  else if (key === '2') 
  {
    soundFX.player("cat").start();
  } 
  
  else if (key === '3') 
  {
    soundFX.player("keyboard").start();
  } 
  
  else if (key === '4')
  {
    soundFX.player("water").start();
  }
}

function setup() {
  createCanvas(530, 600);

  button1 = createButton("bird");
  button1.style('background-color', color);
  button1.size(100, 50);
  button1.position(50, height/1.8);
  button1.mousePressed( () => play('bird') );

  button2 = createButton("cat");
  button2.size(100, 50);
  button2.position(160, height/1.8);
  button2.mousePressed( () => play('cat') );

  button3 = createButton("keyboard");
  button3.size(100, 50);
  button3.position(270, height/1.8);
  button3.mousePressed( () => play('keyboard') );

  button4 = createButton("water");
  button4.size(100, 50);
  button4.position(380, height/1.8);
  button4.mousePressed( () => play('water') );

  delay.delayTime.value = 0;
  slider = createSlider(0,1,0,0.1);
  slider.position(width/2.5, height/1.45);
  slider.style("background", color);
  
  slider.mouseReleased( () => {
    delayTime = slider.value();
    delay.delayTime.value = (1 - delayTime);
  });
}

function play(sound) {
  soundFX.player(sound).start();
}

function draw() {
  background(220);
  text("Press buttons to play sounds or", width/2, height/2.7);
  text("Press 1, 2, 3, 4 to play sounds", width/2, height/2.3);
  text("Move the slider to add distortion/echo to sounds", width/2, height/2);
  textSize(20);
  textAlign(CENTER);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
