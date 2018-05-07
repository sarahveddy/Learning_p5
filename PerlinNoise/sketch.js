
var t = 0; 
var c = 10000000;
y = 0;
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(color('yellow'));

}

function windowResize(){
  canvasResize(windowWidth, windowHeight);
}

function draw(){
  fill(color('black'));
  ellipse(noise(t)*windowWidth, noise(c)*windowHeight, 1, 1);
  c = c + .005;
  t = t + .005;
  y = y+1; 
  // if(y >= 500){
  //   y = 0; 
  // }
}
