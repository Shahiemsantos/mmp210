function setup() {
    createCanvas(640,360);
}

function draw()  {
    background("yellow");
    fill("#CC9E52")
    noStroke();
    ellipse(320,200,300,300); // face
    
    fill("white")
    ellipse(235,175,50,50)
      ellipse(395,175,50,50)
    
          fill("black")
    ellipse(235,175,30,30)
      ellipse(395,175,30,30)
    
    
    
    stroke("Black");
    fill(0,125)
    strokeWeight(5);

    rect(190,150,100,60); // left lens
    rect(350,150,100,60); // right lens
    
    
    fill("White")
    arc(320,300,80,80,0,PI);
}