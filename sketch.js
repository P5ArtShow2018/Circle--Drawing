function setup() {
  createCanvas(1000,1000)
  background(200,150,300)
}

function draw() {
 fill(0,255,0)
  ellipse(500,500,500)
  fill(255,0,0)
  ellipse(400,400,400)
  fill(0,0,255)
  ellipse(300,300,300)
  fill(0,255,0)
  ellipse(200,200,200)
  fill(255,0,0)
  ellipse(150,150,150)
  fill(0,0,255)
  ellipse(90,90,90)
  fill(mouseX,mouseY,mouseX,mouseY)
  ellipse(mouseX,mouseY,mouseX,mouseY)
}