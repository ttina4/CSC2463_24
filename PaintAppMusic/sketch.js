//Press mouse to draw and press 'c' to clear drawing

var paintbrush;
let save, ss, am, paintM, paint, bgM, bg;

am = new Tone.AMSynth().toDestination(); 

paintM = ["C5","C5","G5","G5","A5","A5","G5","F5","F5","E5","E5",
          "D5","D5","C5","G5","G5","F5","F5","E5","E5","D5",
          "G5","G5","F5","F5","E5","E5","D5"
        ];
bgM = ["C4","F4","C4","D4","B4","C4",
        "G4","C4","C4","F4","C4","G4",
        "C4","F4","C4","G4"
      ];
ss = "C6";

function preload() {
  paint = new Tone.Sequence(function(time, note) {
    am.triggerAttackRelease(note, 0.01);
  }, paintM, '7n');

  bg = new Tone.Sequence(function(time, note) {
    am.triggerAttackRelease(note, 0.01);
  }, bgM, '4n');

  Tone.Transport.bpm.value = 90;
  Tone.Transport.start();
}

function bgMusic() {
  bg.start();
  paint.stop();
}

function paintMusic() {
  paint.start();
}

function paintMusicStop() {
  paint.stop();
}

function setup() {
  save = createCanvas(windowWidth, windowHeight);
  background(245);
  paintbrush = color(0, 0, 0);
  bgMusic();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function selection() {
  strokeWeight(2);
  stroke(255);
  
  fill(color("#ea412c"));
  square(0, 0, 50);

  fill(color("#ef8734"));
  square(0, 50, 50);

  fill(color("#fff84a"));
  square(0, 100, 50);

  fill(color("#77f23b"));
  square(0, 150, 50);

  fill(color("#74f9fc"));
  square(0, 200, 50);

  fill(color("#0044f7"));
  square(0, 250, 50);

  fill(color("#e95dfa"));
  square(0, 300, 50);

  fill(color("#774315"));
  square(0, 350, 50);

  fill(color(255));
  square(0, 400, 50);

  fill(color(0));
  square(0, 450, 50);

}

function mousePressed() {
  if (mouseX < 50) {
    if (mouseY < 50) {
      paintbrush = color("#ea412c");
      am.triggerAttackRelease("C8", 0.01);
    }
    else if (mouseY < 100) {
      paintbrush = color("#ef8734");
      am.triggerAttackRelease("B7", 0.01);
    }
    else if (mouseY < 150) {
      paintbrush = color("#fff84a");
      am.triggerAttackRelease("A7", 0.01);
    }
    else if (mouseY < 200) {
      paintbrush = color("#77f23b");
      am.triggerAttackRelease("G7", 0.01);
    }
    else if (mouseY < 250) {
      paintbrush = color("#74f9fc");
      am.triggerAttackRelease("F7", 0.01);
    }
    else if (mouseY < 300) {
      paintbrush = color("#0044f7");
      am.triggerAttackRelease("E7", 0.01);
    }
    else if (mouseY < 350) {
      paintbrush = color("#e95dfa");
      am.triggerAttackRelease("D7", 0.01);
    }
    else if (mouseY < 400) {
      paintbrush = color("#774315");
      am.triggerAttackRelease("C7", 0.01);
    }
    else if (mouseY < 450) {
      paintbrush = color(255);
      am.triggerAttackRelease("B6", 0.01);
    }
    else if (mouseY < 500) {
      paintbrush = color(0);
      am.triggerAttackRelease("A6", 0.01);
    }
  }
}

function draw() {
  selection();

  textAlign(CENTER);
  textFont('Courier New');
  textStyle(BOLD);
  textSize(22);
  text("Draw with a single line to play twinkle twinkle little star\nPress 'C' to clear the canvas\n(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", windowWidth/2, windowHeight/25);

  if (mouseIsPressed) {
    push();
    paintMusic();
    stroke(paintbrush);
    strokeWeight(7);
    line(pmouseX, pmouseY, mouseX, mouseY);
    pop();
  } else {
    paintMusicStop();
  }
}

//Press C to clear the drawings
function keyPressed() {
  if (key = 'c' || key == 'C')
  {
    am.triggerAttackRelease(ss, 0.1);
    fill(245);
    noStroke();
    rect(0, 0, width, height);
  }
}