var currentString
var serial;
var portName= "COM4";
var sensorValue;
var x = 320;
var y = 200;
var facesize = 400;

function setup() {
    createCanvas(640, 360, WEBGL);
    	serial = new p5.SerialPort();
	serial.on('connected', serverConnected);
	serial.on('open', portOpen);
	serial.on('data', serialEvent);
	serial.on('error', serialError);
	serial.on('close', portClose);
	
	serial.open("COM4");
}

function draw() {
    background(300);
    var r = 100
    var g = mouseX
    var b = mouseY
    fill(r, g, b)


    fill("red");
    sphere(100);
var rot = map(sensorValue, 0, 1023, 0, 2*PI)
	
	 fill(r, b, g);
	 rotateY(rot);
	 translate(150, 0, 100);
    sphere(50);
	translate(100, 0, 0);
    sphere(50);
	translate(100, 0, 0);
    sphere(50);
    translate(100, 0, 0);
    sphere(50);

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