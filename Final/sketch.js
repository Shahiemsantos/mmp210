var currentString;
var serial;
var serialAvailable
var portName = "COM5";
var sensorValue;


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

	serial.open("COM5");
}

function draw() {
	background(100);
	image(img, 0, 0, width, height);

	if (keyIsPressed) {
		if (keyCode == 80) {
			image(ryup, mouseX, 300, 200, 250);
		} else{image(ryus, mouseX, 300, 200, 250);}
		if (keyCode == 75) {
			image(ryuk, mouseX, 300, 200, 250);
		} else{image(ryus, mouseX, 300, 200, 250);}
		if (keyCode == 66) {
			image(ryub, 200, 300, 200, 250)
			image(ryuh, mouseX, 300, 150 + mouseX, 100 + mouseY);
		} else{image(ryus, mouseX, 300, 200, 250);}
		if (keyCode == 72) {
			image(aku, 0, 0, width, height);
		} else {
			image(ryus, mouseX, 300, 200, 250);
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
	sensorValue = currentString;
}
