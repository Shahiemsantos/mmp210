

void setup() {
  // put your setup code here, to run once:
Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
int sensorValue = analogRead(A0);
Serial.print(sensorValue);
Serial.print(',');
Serial.print(buttonPin1);

delay(10);
}
