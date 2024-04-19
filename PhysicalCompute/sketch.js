let port, canvas, button, brightness, str;
let colorB = 0;  
let led = false;  
let isConnected = false; 

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  port = createSerial();

  button = createButton("Connect Arduino");
  button.size(200, 50);
  button.position(windowWidth/2 - 100, windowHeight/1.8);
  //button.center();
  button.style("font-family", "Courier New");
  button.mousePressed(connect);

  canvas.mousePressed(lightSwitch);
}

function draw() {
  brightness = map(colorB, 0, 1023, 255, 0);
  background(brightness);
  background('white');

  fill('black');
  circle(windowWidth/2, windowHeight/2, windowWidth/2);

  str = port.readUntil("\n");
  if (str.length > 0) {
    colorB = parseInt(str);
  }

  fill(255 - brightness);
  textAlign(CENTER);
  textFont('Courier New');
  textStyle(BOLD);

  textSize(40);
  text(`Brightness: ${colorB}`, windowWidth/2, windowHeight/2.2); 

  textStyle(ITALIC);
  textSize(20);
  text('Click on the canvas to turn off and on the LED', windowWidth/2, windowHeight/2);
}

function connect() {
  if (!port.opened()) {
    port.open('Arduino', 9600);
    button.html("Disconnect Arduino");
    isConnected = true;
  } else {
    port.close();
    button.html("Connect Arduino");
    isConnected = false;
  }
}

function lightSwitch() {
  led = !led;
  port.write(led ? '1' : '0'); 
}
