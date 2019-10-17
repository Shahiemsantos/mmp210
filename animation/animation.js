var r = 0;
var g = 100;
var b = 100;
var img;
var x = 220;
var y = 50;

var xSpeedMin = -5, xSpeedMax = 5;
var ySpeedmin = -5, ySpeedmax = 5;

function preload() {
	img = loadImage("goku.png");
}

function setup() {
	createCanvas(640, 360);

}

function draw() {
	background(r, g, b);
	if (frameCount % 30 == 0) {
		r = random(0, 255);
		g = random(0, 255);
		b = random(0, 255);

	}


	x += random(xSpeedMin, xSpeedMax);
	y += random(-5, 5);
	
	if (x > width) {
		xSpeedMax = 2;
		xSpeedMin = -5;
	}
	
	if (x < 0) {
		xSpeedMin = -2;
		xSpeedMax = 5;
	}
	
	if (y > height) {
		ySpeedMax = 2;
		ySpeedMin = -5;
	}
	
	if (y < 0) {
		ySpeedMin = -2
		ySpeedMax = 5
	}


	image(img, x, y, 150);

}
