var img, ozmaldo, klaus;

function preload() {
    img=loadImage("klaus.jpg");
}

function setup() {
    createCanvas(400,400);
	
}

function draw()  {
	background ("yellow")
    
	
        image (img, 0, 0 , width, height);
		 textSize(20);
		 textAlign( CENTER)
		fill("white");
		 text("When you are challenged by your demons", 200, 50);
	text("Face them head on", 200, 350)
		
   
	
}