var currentString
var serial;
var portName = "COM4";
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
    image(ryus, sensorValue, 300, 200, 250);

}

function keypressed(key, keyCode) {
    if (keyCode == 80) {
        image(ryup, sensorValue, 300, 200, 250);
    } 
    if (keyCode == 75) {
        image(ryuk, sensorValue, 300, 200, 250);
    }
    if (keyCode == 75 && 80) {
        image(ryub, sensorValue, 300, 200, 250) &&
        image(hadoken, sensorValue + 5, 300, sensorValue, sensorValue);
    }
    if(keyCode == 72) {
        image(aku, 400, 300, 400, height);
    }
}

function serverConnected() {
    console.log('connected to server.');
}

function portOpen() {
    console.log('the serial port opened.')
}

function portClose() {
    console.log('The serial port closed.');
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
