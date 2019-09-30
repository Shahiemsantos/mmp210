/* self porteait with variables */

var x = 320;
var y = 200;
var facesize = 400;

function setup() {
    createCanvas(640, 360, WEBGL);
    normalMaterial();
    cam = createCamera();
    rectMode(CENTER);
}

function draw() {
    background(300);
    var r = 0
    var g = mouseX
    var b = mouseY
    fill(r, g, b)
   
    rect(30, 20, x - 55 + frameCount * 2, 25);
    fill(g, r, b)
    rect(30, 60, x - 55 + frameCount * 2, 25);
    fill(b, r, g)
    rect(30, -30, x - 55 + frameCount * 2, 25);
    fill(r, b, g)
rect(30, -80, x - 55 + frameCount * 2, 25);


    fill("red");
    sphere(100 + frameCount / 5);
	
	 rotateY(mouseX / 100);
	translate(-200, 200, 100);
    sphere(10 + frameCount / 5);


    cam.move(0, 0, frameCount / 1000);

}
