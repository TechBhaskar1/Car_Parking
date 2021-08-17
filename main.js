canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")

car_height=160;
car_width=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

carX=10;
carY=320;

function add() {
	background_imgTag = new Image(); 
	background_imgTag.onload = uploadBackground; 
	background_imgTag.src = background_image; 

	car_imgTag = new Image(); //defining a variable with a new image
	car_imgTag.onload = uploadgreencar; // setting a function, onloading this variable
	car_imgTag.src = greencar_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(car_imgTag,carX,carY,car_width,car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
    if(carY	>=0)
    {
		carY-=10;
        uploadBackground();
        uploadgreencar();
    }
	if(carX==520 && carY==130 || carY==120)
	{
		ctx.font = "bold small-caps 65px Arial";
		ctx.fillText("you parked the car",280,330);
	}
}

function down(){
    if(carY<=500)
    {
        carY +=10;
        uploadBackground();
        uploadgreencar();
    }
}

function left(){
    if(carX>=0)
    {
        carX -=10;
        uploadBackground();
        uploadgreencar();
    }
}

function right(){
    if(carX<=700)
    {
        carX +=10;
        uploadBackground();
        uploadgreencar();
    }
}
