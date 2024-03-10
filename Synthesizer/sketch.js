let synth, sin, sawwooth;
let num = 0.2;
let slider; 

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

  slider = createSlider(0.01, 1,0.1,0.01);
  slider.position(220, 350)
  slider.mouseReleased(()=>{
    num = slider.value();
  })
  
}

/*ok, so I told you this when you were napping on the couch, but I don't think you will remember. I don't know how to use the Envelope feature nor do I know all the other ones. 
The slider only changes the length of your tone, idk how to make it change anything else. My code is a bit weird. Make changes as needed. 
Im sorry, you won't turn this in tonight. Gnight. I hope your stomach doesn't hurt when you wake up. */

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
    synth.triggerAttackRelease("C4", num);
  }
}

function Sine() {
  synth.oscillator.type = "sine";
}

function Saw() {
  synth.oscillator.type = "sawtooth";
}
