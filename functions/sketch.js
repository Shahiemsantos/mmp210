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

function setup() {
	createCanvas(800, 600);
}

function draw() {
	background(100);

	if (slideNumber == 0) {
	} else if (slideNumber == 5) {
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
	textAlign(CENTER, CENTER);
	text("previous", )

}

function mousePressed() {
	var d = dist(mouseX, mouseY, nextBtnX, nextBtnY);
	if (d < nextBtnSize / 2 && slideNumber < totalSlides - 1) {
		slideNumber++;
	}
}
