var x = 0;

function setup() {
  // put setup code here
  
  // line(15, 25, 70, 90);
  // //(x1, y1, x2, y2)
  
  // background(100);
  // //background colour black
  
  // createCanvas(600, 400);
  // background('yellow');
  // //makes canvas 600 w X 400 h pixels
  // //with a yellow background
 
  
  var redCanvas = createCanvas (500, 200);
  background('red');
  redCanvas.parent('redContainer');
  //uses a variable to store pointer to new canvas
  //parent() specifies id of the div to insert the canvas 
  var greenCanvas = createCanvas (200, 500);
  background('green');
  greenCanvas.parent('greenContainer');
  //calling createCanvas more then once in a sketch is ill advised
  //they overwrite each other even when the parent containers are different

  

}

function draw() {
  // put drawing code here
 
  //ellipse(x, height/2, 20, 20);
  //x = x + 1;
  //draws an ellipse 1 pixel to 
  //the right each time draw() is called



}