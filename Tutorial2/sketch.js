

var drawLine = function(a){
  a.setup = function() {
    a.line(15, 25, 70, 90);
  };
};
var drawLineP5 = new p5(drawLine, 'drawLineContainer');

var yellowCanvas = function(b){
  b.setup = function(){
    b.createCanvas(600, 400);
    b.background(b.color('yellow'));
  };
  b.draw = function(){
    if (b.mouseIsPressed){
      b.fill(b.color('red'));
      b.ellipse(b.mouseX, b.mouseY, 50, 50);
    }
  };
}; 
var yellowCanvasP5 = new p5(yellowCanvas, 'yellowCanvasContainer');

var textNRedSquare = function(d){
  d.setup = function(){
    var redCanvas = d.createCanvas(200, 200);
    d.background(d.color('red'));
    redCanvas.parent('redSquareContainer');
  };
  d.draw = function(){
    if (d.mouseIsPressed){
      d.fill(d.color('yellow'));
      d.ellipse(d.mouseX, d.mouseY, 50, 50);
    }
  };
};
var textNRedSquareP5 = new p5(textNRedSquare, "textNRedSquareContainer")

var htmlCanvas = function(c){
  c.setup = function(){
    c.drawingContext.shadowOffsetX = 5;
    c.drawingContext.shadowOffsetY = -5;
    c.drawingContext.shadowBlur = 10;
    c.drawingContext.shadowColor = "black";
    c.background(200);
    c.ellipse(c.width/2, c.height/2, 50, 50);
  };
  c.draw = function(){
    if (c.mouseIsPressed){
      c.drawingContext.shadowColor = "blue";
      c.ellipse(c.mouseX, c.mouseY, 10, 10);
    }
  };
};
var htmlCanvasP5 = new p5(htmlCanvas, 'htmlCanvasContainer');

var drawImage = function(e){
  e.setup = function(){
    e.createCanvas(200, 200);
    e.background('rgba(0,255,0, 0.25)');
    e.loadImage('Images/cat.jpg', e.successCallback, e.failureCallback);
    //e.loadImage('Images/cat1.jpg', e.successCallback, e.failureCallback);
  };
  e.successCallback = function(img){
    e.image(img, 0, 0);
    e.fill('rgba(0,255,0, 0.25)'ß);
    e.text('image load success', 0, 100);
  };
  e.failureCallback = function(img){
    e.text('image load fail', 0, 100);
  };
};
var drawImageP5 = new p5(drawImage, 'drawImageContainer');


//old stuff
// var x = 0;
// var img;
// var myCanvas

// function preload(){
//   img = loadImage('Images/cat.jpg');
// }

// function setup() {
//   // put setup code here
  
//   // line(15, 25, 70, 90);
//   // //(x1, y1, x2, y2)
  
//   // background(100);
//   // //background colour black
  
//   //createCanvas(600, 400);
//   //background('yellow');
//   // //makes canvas 600 w X 400 h pixels
//   // //with a yellow background
 
//   // var redCanvas = createCanvas (500, 200);
//   // background('red');
//   // redCanvas.parent('redContainer');
//   // //uses a variable to store pointer to new canvas
//   // //parent() specifies id of the div to insert the canvas 
//   // var greenCanvas = createCanvas (200, 500);
//   // background('green');
//   // greenCanvas.parent('greenContainer');
//   // //calling createCanvas more then once in a sketch is ill advised
//   // //they overwrite each other even when the parent containers are different

//   // drawingContext.shadowOffsetX = 5;
//   // drawingContext.shadowOffsetY = -5;
//   // drawingContext.shadowBlur = 10;
//   // drawingContext.shadowColor = "black";
//   // background(200);
//   // ellipse(width/2, height/2, 50, 50); 
//   // //using native html canvas functionality using drawingContext 

//   // createCanvas(400, 240);
//   // background(color('yellow'));
//   // loadImage('Images/cat1.jpg', successCallback, failureCallback);

//   // createCanvas(400, 240);
//   // image(img, 0, 0);
//   // //using the preload function to load the image, we can now use image() without callback function

//   // createCanvas(400, 240);
//   // var img = loadImage('Images/cat.jpg');
//   // image(img, 0, 0);  
//   // //incorrect way to load and draw images, use callback or preload functions instead

//   // createCanvas(displayWidth, displayHeight);
//   // background(color('magenta'));
//   // //makes the canvas the width and height of the display

//   // createCanvas(windowWidth, windowHeight);
//   // background(color('blue'));
//   // //makes the canvas the width and height of the window

//   // myCanvas = createCanvas(100, 100);
//   // background(color('hsla(322, 100%, 50%, 0.23)'));
//   // //small transparent canvas with a variable name

// }



// // function successCallback(img) {
// //   image(img, 0, 0);
// // }
// // function failureCallback(img){
// //   ellipse(50, 50, 50, 50);
// // }
// // //callback functions : draws image if image loads, and draws an ellipse otherwise





// function draw() {
//   // put drawing code here
 
//   //ellipse(x, height/2, 20, 20);
//   //x = x + 1;
//   //draws an ellipse 1 pixel to 
//   //the right each time draw() is called
 
//   // if (mouseIsPressed){
//   //     fill(color('red'));
//   //     ellipse(mouseX, mouseY, 50, 50);
//   // }

//   // myCanvas.position(winMouseX - 50, winMouseY - 50);
//   // //moves the canvas around when you move the mouse
// }

// // function mouseClicked(){
// //     fill(color('blue'))
// //     ellipse(mouseX, mouseY, 50, 50);
// // } 








