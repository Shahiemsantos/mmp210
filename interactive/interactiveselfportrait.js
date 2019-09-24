/* self porteait with variables */

var x = 320
var y = 200
var facesize = 400;
    
function setup() {
    createCanvas(640,360,WEBGL);
}

function draw()  {
  background(200);
    fill("red");
    rotateY(mouseX/1000);
    
  sphere(100);
}