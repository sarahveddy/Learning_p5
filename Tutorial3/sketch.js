function setup(){
  //store canvas pointer in a variable
  myCanvas = createCanvas(600, 400);
  
  //change the position of the canvas and give it a class
  myCanvas.position(300, 50);
  // position() overrides the default positioning of the element
  //by applying a CSS style position:absolute

  myCanvas.class("lemon");
  //this element holds a static state, and can be changed by calling its methods
  
  //make the canvas a child of an element with id 'myContainer'
  myCanvas.parent('myContainer');

  //creates a new div
  txt = createDiv('HTML string');
  txt.position(50, 50);




}

function draw(){
  background(220, 180, 200);
  ellipse(width/2, height/2, 100, 100);
  ellipse(width/4, height/2, 50, 50);
  //these elements are redrawn several times per second 
}






