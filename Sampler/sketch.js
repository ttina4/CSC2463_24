
let soundFX;

function preload() {
  soundFX = new Tone.Players ({
      
  }).toDestination(); //audio goes to speakers
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
