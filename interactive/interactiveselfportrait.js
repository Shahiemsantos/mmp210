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
    rotateY(mouseX / 100);
    fill("green")
    sphere(100, 200, 200);

    fill("red")
    sphere(100);

}
