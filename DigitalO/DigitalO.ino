/**
One button blinks 3 times, the other blinks 5
**/

const int buttonPin1 = 2; 
const int buttonPin2 = 4; 
const int ledPin1 = 12;    
const int ledPin2 = 13;   

int buttonState1 = 0;    
int buttonState2 = 0;    

void setup() {
  pinMode(ledPin1, OUTPUT); 
  pinMode(ledPin2, OUTPUT); 
  pinMode(buttonPin1, INPUT); 
  pinMode(buttonPin2, INPUT);
}

void loop() {
  buttonState1 = digitalRead(buttonPin1);
  buttonState2 = digitalRead(buttonPin2);

  if (buttonState1 == HIGH) {
    blinkLED(ledPin1, 3);
  }

  if (buttonState2 == HIGH) {
    blinkLED(ledPin2, 5);
  }
}

void blinkLED(int pin, int times) {
  for (int i = 0; i < times; i++) {
    digitalWrite(pin, HIGH);   
    delay(500);                
    digitalWrite(pin, LOW);   
    delay(500);   
  }
}
