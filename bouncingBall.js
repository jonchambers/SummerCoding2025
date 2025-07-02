let xPos
let yPos


let xSpeed = 2
let ySpeed = 2

let ballDiameter = 100

let ellipseColor 

let furby

function preload(){
 furby = loadImage('furby.png')
}

function setup(){
	createCanvas(windowWidth, windowHeight)
	xPos = windowWidth/2
	yPos = windowHeight/2
	background(0)
	imageMode(CENTER)
	//ellipseColor = color(255, 255, 255)
}

function draw(){
	background(0)
	fill(255)
	text('Bouncing Ball Screensaver', 100, 100)

	xPos = xPos + xSpeed
	yPos = yPos + ySpeed

	// fill(random(255), random(255), random(255) )
	// noStroke()
	ellipse(xPos, yPos, ballDiameter, ballDiameter)
	//image(furby, xPos, yPos, ballDiameter, ballDiameter )
	
	if(xPos >= windowWidth - ballDiameter/2 || xPos <= ballDiameter/2){
		xSpeed = xSpeed * -1
	
		//ellipseColor = color(random(255), random(255), random(255))
	}

	if(yPos >= windowHeight - ballDiameter/2  || yPos <= ballDiameter/2){
		ySpeed = ySpeed * -1
		
		//ellipseColor = color(random(255), random(255), random(255))
	}
}


function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
	background(0)
}










