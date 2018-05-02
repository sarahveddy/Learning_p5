var gray = 0;
var diameter = 5;

function setup(){
  var canvas =  createCanvas(200, 200);
  
  //mousepressed() takes a function
  //handles mouse presses in the canvas only
  canvas.mousePressed(incDiameter);
}

function draw() {
  background(gray);
  ellipse(width/2, height/2, diameter, diameter);
}

//handles mouse presses in the entire window (including the canvas)
function mousePressed() {
  gray = gray + 10;
}

function incDiameter() {
  diameter = diameter + 5;
}

