function setup(){
  //store canvas pointer in a variable
  myCanvas = createCanvas(600, 400);
  //change the position of the canvas and gives it a class
  myCanvas.position(300, 50);
  myCanvas.class("lemon");
  //this element holds a static state, and can be changed by calling its methods


}

function draw(){
  background(220, 180, 200);
  ellipse(width/2, height/2, 100, 100);
  ellipse(width/4, height/2, 50, 50);
  //these elements are redrawn several times per second 
}






