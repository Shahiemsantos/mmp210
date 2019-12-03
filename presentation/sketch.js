/*final project presentation
11.19.19

sensor
interation
theme
*/
var slideNumber = 0;
var totalSlides = 5;

var nextBtnX = 700;
var nextBtnY = 500;
var nextBtnSize = 50;

var prevBtnX = 100;
var prevBtnY = 500;
var prevBtnW = 100;
var prevBtnH = 50;

var img, ryum;

function preload() {
	img = loadImage("stage.png");
	ryum = loadImage("ryumove.png");
	ryus = loadImage("ryustance.png");
	ryup = loadImage("ryupunch.png");
	ryuk = loadImage("ryukick.png");
}

function setup() {
	createCanvas(800, 600);
}

function draw() {
	background(100);
	image(img, 0, 0, width, height);

	if (slideNumber == 0) {
		fill(255);
		textSize(50);
		text("Slide 1", 350, 100);
		image(ryum, mouseX, 300, 200, 250);

	} else if (slideNumber == 1) {
		fill(255);
		textSize(50);
		text("Slide 2", 350, 100);

		if (mouseIsPressed) {
			image(ryup, mouseX, 300, 200, 250);
		} else {
			image(ryus, mouseX, 300, 200, 250);
		}


	} else if (slideNumber == 2) {
		fill(255);
		textSize(50);
		text("Slide 3", 350, 100);

		if (mouseIsPressed) {
			image(ryuk, mouseX, 300, 200, 250);
		} else {
			image(ryum, mouseX, 300, 200, 250);
		}
	} else if (slideNumber == 3) {
		fill(255);
		textSize(50);
		text("Slide 4", 350, 100);
	} else if (slideNumber == 4) {
		fill(255);
		textSize(50);
		text("Slide 5", 350, 100);
	}

	fill(255);
	noStroke();
	ellipse(nextBtnX, nextBtnY, nextBtnSize);
	fill(0);
	textSize(20);
	textAlign(CENTER, CENTER);
	text("Next", nextBtnX, nextBtnY);

	fill(255);
	noStroke();
	rect(prevBtnX, prevBtnY, prevBtnW, prevBtnH);
	fill(0);
	textSize(20);
	textAlign(LEFT, TOP);
	text("previous", prevBtnX + 10, prevBtnY + 10);

}

function mousePressed() {
	var d = dist(mouseX, mouseY, nextBtnX, nextBtnY);
	console.log(d);
	if (d < nextBtnSize / 2 && slideNumber < totalSlides - 1) {
		slideNumber++;
	}

	if (mouseX > prevBtnX &&
		mouseX < prevBtnX + prevBtnW &&
		mouseY > prevBtnY &&
		mouseY < prevBtnY + prevBtnH &&
		slideNumber > 0) {
		slideNumber--;

	}
}

function keypressed(key, keycode) {}
