let triangleY = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  triangleY = random(500)
  rectMode(CENTER)
  print(triangleY)
}

function draw() {
  // if(mouseX > width/2 && mouseY > height/2){
  //     triangleY = height
  //     background(137, 130, 194)
  //    }else{
  //     background(30, 200, 150)
  //     triangleY = 0
  // }
  
  if(dist(mouseX, mouseY, width/2, height/2) < 10){
      triangleY = height
      background(137, 130, 194)
     }else{
      background(30, 200, 150)
      triangleY = 0
  }
  
  // background(random(255), random(255), random(255))
  // //noCursor()
  stroke(29, 50, 80)//color of outlines
  strokeWeight(5)
  point(200, 100)
  
  stroke(199, 50, 80)//color of outlines
  strokeWeight(5)
  line(0,0, width/2, height/2)
  
  
  //styles for the sun
  fill(130, 194, 134) //green fill
  ellipse(mouseX, mouseY, 30, 30)
  
  noStroke()//getting rid of outlines
  //styles for the house
  fill(204, 51, 204) //pink fill
  rect(100, 300, 100, 50)
  triangle(250,50, 350, 200,390, triangleY)
  

}