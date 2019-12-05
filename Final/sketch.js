var currentString
var serial;
var portName= "COM4";
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
	
	serial.open("COM4");
}

function draw() {
    background(100);
    image(img, 0, 0, width, height);
    image(ryus, mouseX, 300, 200, 250);

}

function keypressed(key, keycode) {}
