var score;
var canvas;
var canvasHeight;
var canvasWidth;
var circleSize;
var countdown;
var button;
var circles = [];
var scoreElement; 
var score; 

//setup of p5 objects and events
function setup() {
  canvasHeight = 500;
  canvasWidth = 500;
  circleSize = 30;
  score = 0
  noStroke();
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.mouseClicked(checkForCircles);
  button = createButton('button');
  button.mousePressed(createCircle);
  scoreElement= createElement('p', "Score: " + score);
}

//draws to the canvas
function draw() {
  background(color(230, 230, 230));
  for(var i = 0; i<circles.length; i++){
    var workingCircle = circles[i];  
    fill(workingCircle.color);
    ellipse(workingCircle.X, workingCircle.Y, circleSize, circleSize);
    // fill(color('black'));
    // text(i, workingCircle.X, workingCircle.Y);
  }
}

//creates a new circle and adds it to the list
function createCircle(){
  var str1 = "hsl(";
  var hue = randomHue();
  var colorString = str1.concat(hue, ", 60%, 70%)");
  c = color(colorString);  
  var x = randomX();
  var y = randomY();
  var newCircle = {X:x, Y:y, color:c, hue:hue};
  circles.push(newCircle);
}

function removeCircle(index){
  circles.splice(index, 1);
}


//checks if there are warm colored circles
function checkForCircles(){
  for(var i = 0; i<circles.length; i++){
    var workingCircle = circles[i];
    if(circleHit(workingCircle) && warmColor(workingCircle)){
      removeCircle(i);
      addPoints(workingCircle);
    }
  }  
}

//checks if there is a given circle where the mouse is clicked
function circleHit(workingCircle){
  var r = circleSize/2; 
    if(mouseX > (workingCircle.X + r) || mouseX < (workingCircle.X - r)){
      //window.alert("no x hit!");
      return false;
    }
    else if(mouseY > (workingCircle.Y + r) || mouseY < (workingCircle.Y - r)){
      //window.alert("no y hit!");
      return false;
    }
    else if(Math.pow(mouseX - workingCircle.X, 2)+ 
            Math.pow(mouseY - workingCircle.Y, 2) > 
            Math.pow(r, 2)){
      return false; 
    }
    else{
      return true;
    }
}

//checks if the given circle is a warm color
function warmColor(workingCircle){
  if (workingCircle.hue > 121 && workingCircle.hue < 302){
    //window.alert("cool");
    return false;
  }
  else{
    //window.alert("warm");
    return true;
  }
}

function addPoints(circle){
  score++;
  scoreElement.html("Score: " + score);
}

//generates a random x coordinate on the canvas
function randomX(){
  var x = random(0+circleSize/2, canvasWidth-circleSize/2);
  //window.alert("X coord: " + x);
  return x;
}

//generates a random y coordinate on the canvas
function randomY(){
  var y = random(0+circleSize/2, canvasHeight-circleSize/2);
  //window.alert("Y coord: " + y);
  return y;
}

//generates a random hue for an HSL color value
function randomHue(){
   return Math.trunc(random(360));
}

// //generates a random circle size
// function randomSize(){

// }



 












