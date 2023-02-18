//Create a reference for canvas 
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
//Give specific height and width to the car image
green_car=75;
green_car=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x=5;
greencar_y=225;

function add() {
	//upload car, and background images on the canvas.
	function add(){
		background_imgtag= new image();
		background_imgtag.onload= uploadBackground;
		background_imgtag.src= background_image;

		greencar_imgtag= new image();
		greencar_imgtag.onload= uploadgreencar;
		greencar_imgtag.src= greencar_image;
	}
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawimage(background_imgtag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
ctx.drawimage(greencar_imgtag, 0, 0, greencar.width, greencar.height);
	
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

function up()
{
	//Define function to move the car upward
	if(greencar_y >=0);
	greencar_y=greencar_y -10;
	console.log("when up arrow is pressed, *="  + greencar_x + " y=" +greencar_y);
	uploadBackground;
	uploadgreencar;
}

function down()
{
	//Define function to move the car downward
	if(greencar_y >=-10);
	greencar_y=greencar_y +10;
	console.log("when down arrow is pressed, *="  + greencar_x + " y=" +greencar_y);
	uploadBackground;
	uploadgreencar;
}

function left()
{
	//Define function to move the car left side
	if(greencar_x <=10);
	greencar_x=greencar_x -10;
	console.log("when left arrow is pressed, *="  + greencar_x + " x=" +greencar_y);
	uploadBackground;
	uploadgreencar;
}

function right()
{
	//Define function to move the car right side
	if(greencar_x <=-10);
	greencar_x=greencar_x +10;
	console.log("when right arrow is pressed, *="  + greencar_x + " x=" +greencar_y);
	uploadBackground;
	uploadgreencar;
}
