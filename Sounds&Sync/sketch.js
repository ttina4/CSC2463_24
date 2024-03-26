let pluck = new Tone.PluckSynth().toDestination(); 
pluck.type = 'sine'; 

//pluck.harmonicity.value = 2; 
//pluck.volume.value = -6; 

let synth = new Tone.Synth().toDestination();
synth.type = 'sine';
synth.harmonicity.value = 2;

function preload() {
  vf = loadImage('assets/vending_music.png');
  can = loadImage('assets/vending_musicC.png');
}

function setup() {
  createCanvas(861, 648);
}

function draw() {
  background(vf);
  
  textAlign(CENTER);
  textFont('Courier New');
  textStyle(BOLD);
  textSize(20);
  text("click for a soda", width/4, height/2);

  if (mouseIsPressed === true) {
    background(can);

    textFont('Courier New');
    textStyle(BOLD);
    textSize(20);
    text("click for a soda", width/4, height/2);
  } 
  
}

  function mousePressed(){
    synth.triggerAttackRelease("C6", 0.1); 
    pluck.triggerAttackRelease("D3", 2);
  }

  

