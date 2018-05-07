var canvasWidth;
var canvasHeight; 
var mover;
function setup(){
  canvasWidth = windowWidth;
  canvasHeight = windowHeight;
  createCanvas(canvasWidth, canvasHeight);
  background(color('yellow'));
  mover = new Mover();
}

function draw(){
  // background(color('yellow'));
  mover.update();
  mover.checkEdges();
  mover.display();
  //ellipse(mover.location.x, mover.location.y, 50, 50);

}

// function mouseMoved(){
//   mover.velocity = createVector(mouseX, mouseY);
// }

function Mover(){
  this.location = createVector(canvasWidth/2, canvasHeight/2);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(-0.001, 0.01);
  this.velocity.limit(10);

  this.update = function(){
    this.acceleration = p5.Vector.random2D();
    this.velocity.add(this.acceleration);
    this.velocity.limit(10);
    this.location.add(this.velocity);
  };
  this.display = function(){
    noStroke();
    fill(175);
    ellipse(this.location.x, this.location.y, 16, 16);
  };
  this.checkEdges = function(){
    if(this.location.x > canvasWidth){
      this.location.x = 0;
    }
    else if(this.location.x < 0){
      this.location.x = canvasWidth;
    }
    
    if(this.location.y > canvasHeight){
      this.location.y = 0;
    }
    else if(this.location.y < 0){
      this.location.y = canvasHeight;
    }
  };
}

