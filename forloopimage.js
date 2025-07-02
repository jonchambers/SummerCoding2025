
let furby

function preload(){
 furby = loadImage('furby5.png')

}

function setup(){
	createCanvas(windowWidth, windowHeight)
 	rectMode(CENTER)
 	imageMode(CENTER)
	for(let i = 0; i<100; i++){
 		image(furby, random(windowWidth), random(windowHeight), 30, 30)
 	}

}

function draw(){
	// if(keyIsPressed == true){
	// 	background(160, 230, 88)
	// }else{
	// 	background(230, 160, 88)
	// }


 	
	textSize(20)
	fill(0)
	text('For Loops!!!', 100, 80)
	for(let i =0; i < windowWidth; i = i+10){
		line(i, 0, i, windowHeight)
	}

	for(let i = 0; i<windowHeight; i = i+10){
		line(0, i, windowWidth, i)
	}

	image(furby, mouseX, mouseY, 200, 200, 50, 50)
	
}


function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}






