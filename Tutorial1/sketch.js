function setup() {
  // put setup code here
  createCanvas(640, 480);
  //create window (width, height)

}

function draw() {
  // put drawing code here
  //ellipse(50, 50, 80, 80);
  //(center x, center y, width, height)
  if(mouseIsPressed){
  	fill(0);
  	//fill colour is black
  }
  else{
  	fill(225);
  	//fill colour is white
  }
  ellipse(mouseX, mouseY, 80, 80);

}