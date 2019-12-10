const int buttonPin = 2;
const int buttonPin2 = 3;
const int buttonPin3 = 4;

int buttonState = 0;
int buttonState2 = 0;
int buttonState3 = 0;

void setup() {
  // put your setup code here, to run once:
Serial.begin(9600);
pinMode(buttonPin, INPUT);
pinMode(buttonPin2, INPUT);
pinMode(buttonPin3, INPUT);


}

void loop() {
  // put your main code here, to run repeatedly:
  buttonState = digitalRead(buttonPin);
  buttonState2 = digitalRead(buttonPin2);
  buttonState3 = digitalRead(buttonPin3);
  
int sensorValue = analogRead(A0);
Serial.println(sensorValue);
delay(10);
}
