var currentString;
var serial;
var serialAvailable;
var portName = "COM3";
var sensorValue;
var button1 = 0;
var button2 = 0;
var button3 = 0;


var img, ryum, ryup, ryus, ryuk, ryub, ryuh, aku;

function preload() {
	img = loadImage("stage.png");
	ryum = loadImage("ryumove.png");
	ryus = loadImage("ryustance.png");
	ryup = loadImage("ryupunch.png");
	ryuk = loadImage("ryukick.png");
	ryub = loadImage("ryublast.png");
	ryuh = loadImage("hadoken.png");
	aku = loadImage("akuma.png");

}

function setup() {
	createCanvas(800, 600);
	serial = new p5.SerialPort();
	serial.on('connected', serverConnected);
	serial.on('open', portOpen);
	serial.on('data', serialEvent);
	serial.on('error', serialError);
	serial.on('close', portClose);

	serial.open("COM3");
}

function draw() {
	background(100);
	image(img, 0, 0, width, height);

	if (serialAvailable) {
		if (button1 == 1 && button2 == 1) {
			image(ryub, sensorValue / 10, 300, 200, 250)
			imageMode(CENTER)
			image(ryuh, sensorValue, 400, sensorValue, sensorValue);
			imageMode(CORNER)
		}
		else if (button1 == 1) {
			image(ryup, sensorValue, 300, 200, 250);
		}
		else if (button2 == 1) {
			image(ryuk, sensorValue, 300, 200, 250);
		} else { 
			image(ryus, sensorValue, 300, 200, 250)

		}

		if (button3 == 1) {
			image(aku, 0, 0, width, height);
		}
		
	} else {




		if (keyIsPressed) {
			if (keyCode == 80) {
				image(ryup, mouseX, 300, 200, 250);
			}
			if (keyCode == 75) {
				image(ryuk, mouseX, 300, 200, 250);
			}
			if (keyCode == 66) {
				image(ryub, mouseX / 10, 300, 200, 250)
				imageMode(CENTER)
				image(ryuh, mouseX, 400, mouseX, mouseY);
				imageMode(CORNER)
			}
			if (keyCode == 72) {
				image(aku, 0, 0, width, height);
			}
		} else {
			image(ryus, mouseX, 300, 200, 250)
		}
	}
}

function serverConnected() {
	console.log('connected to server.');
}

function portOpen() {
	console.log('the serial port opened.');
	serialAvailable = true
}

function portClose() {
	console.log('The serial port closed.');
	serialAvailable = false
}

function serialError() {
	console.log("error");
}

function serialEvent() {
	var currentString = serial.readLine();

	trim(currentString);

	if (!currentString) {
		return;
	}
	sensorValue = currentString.split(',')[0];
	button1 = currentString.split(',')[1];
	button2 = currentString.split(',')[2];
	button3 = currentString.split(',')[3];

}
