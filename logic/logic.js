var img, ozmaldo, klaus;
var gif_loadImg, gif_createImg;

function preload() {
    img=loadImage("ozmaldo.jpg");
    ozmaldo=loadImage("ozmaldo2.jpg");
    klaus=loadImage("klaus.jpg");
  gif_loadImg = loadImage("klaus.gif");
  gif_createImg = createImg("klaus.gif");
}

function setup() {
    createCanvas(400,400);
	
}

function draw()  {
	background ("yellow")
    
	
     if( mouseX < width/2) {
        image (img, 0, 0 , width, height);
		 textSize(100);
		 textAlign( CENTER)
		fill("red");
		 text("Sorry kid", 200, 350);
		
    }
	
     if( mouseX > width / 2) {
        image ( ozmaldo, 0, 0, width, height);
        textSize(50);
		 textAlign( CENTER)
		fill("red");
		 text("I'm all out of treats", 200, 350);
    }
	
	if( mouseIsPressed && mouseX > width / 2) {
		image (klaus, 0, 0, width, height);
		textSize(20);
		 textAlign( CENTER)
		fill("skyBlue");
		 text("Guess you're getting these hands", 200, 350)
	}
}