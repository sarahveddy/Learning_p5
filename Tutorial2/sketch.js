var x = 0;
var img;
var myCanvas

function preload(){
  img = loadImage('Images/cat.jpg');
}

function setup() {
  // put setup code here
  
  // line(15, 25, 70, 90);
  // //(x1, y1, x2, y2)
  
  // background(100);
  // //background colour black
  
  //createCanvas(600, 400);
  //background('yellow');
  // //makes canvas 600 w X 400 h pixels
  // //with a yellow background
 
  // var redCanvas = createCanvas (500, 200);
  // background('red');
  // redCanvas.parent('redContainer');
  // //uses a variable to store pointer to new canvas
  // //parent() specifies id of the div to insert the canvas 
  // var greenCanvas = createCanvas (200, 500);
  // background('green');
  // greenCanvas.parent('greenContainer');
  // //calling createCanvas more then once in a sketch is ill advised
  // //they overwrite each other even when the parent containers are different

  // drawingContext.shadowOffsetX = 5;
  // drawingContext.shadowOffsetY = -5;
  // drawingContext.shadowBlur = 10;
  // drawingContext.shadowColor = "black";
  // background(200);
  // ellipse(width/2, height/2, 50, 50); 
  // //using native html canvas functionality using drawingContext 

  // createCanvas(400, 240);
  // background(color('yellow'));
  // loadImage('Images/cat1.jpg', successCallback, failureCallback);

  // createCanvas(400, 240);
  // image(img, 0, 0);
  // //using the preload function to load the image, we can now use image() without callback function

  // createCanvas(400, 240);
  // var img = loadImage('Images/cat.jpg');
  // image(img, 0, 0);  
  // //incorrect way to load and draw images, use callback or preload functions instead

  // createCanvas(displayWidth, displayHeight);
  // background(color('magenta'));
  // //makes the canvas the width and height of the display

  // createCanvas(windowWidth, windowHeight);
  // background(color('blue'));
  // //makes the canvas the width and height of the window

  myCanvas = createCanvas(100, 100);
  background(color('hsla(322, 100%, 50%, 0.23)'));
  //transparent

}

// function successCallback(img) {
//   image(img, 0, 0);
// }
// function failureCallback(img){
//   ellipse(50, 50, 50, 50);
// }
// //callback functions : draws image if image loads, and draws an ellipse otherwise





function draw() {
  // put drawing code here
 
  //ellipse(x, height/2, 20, 20);
  //x = x + 1;
  //draws an ellipse 1 pixel to 
  //the right each time draw() is called
 
  // if (mouseIsPressed){
  //     fill(color('red'));
  //     ellipse(mouseX, mouseY, 50, 50);
  // }

  myCanvas.position(winMouseX - 50, winMouseY - 50);
}

// function mouseClicked(){
//     fill(color('blue'))
//     ellipse(mouseX, mouseY, 50, 50);
// } 








