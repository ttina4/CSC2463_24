let synth, sin, sawwooth, slider, pitchSlider;
let num = 0.2; 

/*const synthesize = new Tone.PolySynth(Tone.Synth);
const bend = new Tone.PitchShift();

bend.pitch = 0;
synth.connect(bend);
bend.toDestination();

let notes = {
  'a': "C4",
  's': "D4",
  'd': "E4",
  'f': "F4",
  'g': "G4",
  'h': "A4",
  'j': "B4",
  'k': "C5"
}*/

function setup() {
  createCanvas(600, 600);
  synth = new Tone.Synth({
    oscillator: {
      type: "sine"
    }
  }).toDestination();

  sin = createButton("Sine");
  sin.position(200,300);
  sin.mousePressed(Sine);

  sawwooth = createButton("Sawtooth");
  sawwooth.position(300, 300);
  sawwooth.mousePressed(Saw);

  slider = createSlider(0.1, 2, 0.1, 0.1);
  slider.position(220, 350);
  slider.mouseReleased(()=>{
    num = slider.value()
  });
  
  /*pitchSlider = createSlider(0.1, 2, 0.1, 0.1);
  pitchSlider.position(220, 390);
  pitchSlider.mouseReleasedS(()=>{
    bend.pitch = pitchSlider.value()
  }); */

}

function draw() {
  background(220);
  fill(0);
  textAlign(CENTER);
  textSize(20);
  text(
    "Use keys 1-8 to play a tone. \n Click between Oscillations and \n Use the slider to change the reverb",
    300,
    200
  );
}

function keyPressed() {
  if (keyCode == 49) {
    synth.triggerAttackRelease("C4", num);
  } else if (keyCode == 50) {
    synth.triggerAttackRelease("D4", num);
  } else if (keyCode == 51) {
    synth.triggerAttackRelease("E4", num);
  } else if (keyCode == 52) {
    synth.triggerAttackRelease("F4", num);
  } else if (keyCode == 53) {
    synth.triggerAttackRelease("G4", num);
  } else if (keyCode == 54) {
    synth.triggerAttackRelease("A4", num);
  } else if (keyCode == 55) {
    synth.triggerAttackRelease("B4", num);
  } else if (keyCode == 56) {
    synth.triggerAttackRelease("C5", num);
  }
} 

function Sine() {
  synth.oscillator.type = "sine";
}

function Saw() {
  synth.oscillator.type = "sawtooth";
}
