function setup() {
    createCanvas(640,360);
}

function draw()  {
    background("yellow");
    fill("#CC9E52")
    noStroke();
    ellipse(320,200,300,300); // face
    
    
    stroke("Black");
    fill(0,125)
    strokeWeight(5);
     ellipse(235,175,40,50)
      ellipse(395,175,40,50)
    rect(190,150,100,60); // left lens
    rect(350,150,100,60); // right lens
    
    
    fill("White")
    arc(320,300,80,80,0,PI);
}