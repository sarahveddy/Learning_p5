var capture;

function setup(){
  createCanvas (200, 200);
  
  //create a capture and set size
  capture = createCapture(VIDEO);
  capture.size(200, 200);

}

function draw(){
  //capture position is drawn at mouseX
  capture.position(mouseX, 0);

  //image is drawn on the canvas, but inverted
  image(capture, 0, 0, 200, 200);
  filter(INVERT);
}
