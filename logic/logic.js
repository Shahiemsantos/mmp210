var img, ozmaldo, klaus;

function preload() {
    img=loadImage("ozmaldo.jpg");
    ozmaldo=loadImage("ozmaldo2.jpg");
    klaus=loadImage("klaus.jpg")
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
		 text("Sorry kid", 200, 300);
		
    }
	
     if( mouseX > width / 2) {
        image ( ozmaldo, 0, 0, width, height);
    }
	
	if( mouseIsPressed && Ozmaldo) {
		image (klaus, 0, 0, width, height);
	}
}