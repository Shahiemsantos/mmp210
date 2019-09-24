/* self porteait with variables */

var x = 320
var y = 200
var facesize = 400;
    
function setup() {
    createCanvas(640,360);
}
x = mouseX;
y = mouseY;

function draw()  {
    background("yellow");
    fill("#CC9E52")
    noStroke();
    ellipse(mouseX,mouseY,facesize, facesize/2); // face
    
    //eyes
    fill("white")
    ellipse(x-85,framecountY-25,
        facesize/8,facesize/8)
    ellipse(x+75,framecountY-25,
        facesize/8,facesize/8)
    
    //pupil
          fill("black")
    ellipse(x-85,y-25,
            facesize/13,facesize/13)
      ellipse(x+75,y-25,
            facesize/13,facesize/13)
    
    
    
    stroke("Black");
    fill(0,125)
    strokeWeight(5);

    //Glass
    rect(190,150,100,60); // left lens
    rect(350,150,100,60); // right lens
    
    //Mouth
    fill("White")
    arc(320,300,80,80,0,PI);
    
    //Feet
    fill("black")
     ellipse(x-75,y+150,
        facesize/4,facesize/4)
    ellipse(x+75,y+150,
        facesize/4,facesize/4)
}

