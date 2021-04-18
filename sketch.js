var hr,mn,sc;
var hrAngle,mnAngle,scAngle;
function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
  
}

function draw() {
  background("black");  
  translate(200,200)
  rotate(-90)
  hr=hour();
  mn=minute();
  sc=second();

  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);

  push()
  rotate(scAngle)
  stroke("red")
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  push()
  rotate(mnAngle)
  stroke("green")
  strokeWeight(7)
  line(0,0,75,0)
  pop()

  push()
  rotate(hrAngle)
  stroke("white")
  strokeWeight(7)
  line(0,0,50,0)
  pop()
  drawSprites();
}