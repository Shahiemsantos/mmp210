var r = 0;
var g = 0;
var b = 0;
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
    background(r, g, b);
     translate(width / 2, height / 2);
   
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
	
	if (x > 500) {
		xSpeedMax = 3;
		xSpeedMin = -5;
	}
	
	if (x <100) {
		xSpeedMin = -3;
		xSpeedMax = 5;
	}
	
	if (y > 200) {
		ySpeedMax = 3;
		ySpeedMin = -5;
	}
	
	if (y < 250) {
		ySpeedMin = -3
		ySpeedMax = 5
	}


	image(img, x, y, 100, 200);

}
