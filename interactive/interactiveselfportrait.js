g/* self porteait with variables */

var x = 320;
var y = 200;
var facesize = 400;

function setup() {
    createCanvas(640, 360, WEBGL);
}

function draw() {
    background(300);
    var r = 100
    var g = mouseX
    var b = mouseY
    fill(r, g, b)


    fill("red");
    sphere(100);

	
	 fill(r, b, g);
	 rotateY(mouseX / 100);
	 translate(150, 0, 100);
    sphere(50);
	translate(100, 0, 0);
    sphere(50);
	translate(100, 0, 0);
    sphere(50);
    translate(100, 0, 0);
    sphere(50);

}
	function mousePressed(){
    sphere(100);
		
	}
