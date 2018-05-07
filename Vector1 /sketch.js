var canvasWidth;
var canvasHeight; 
var mover;
function setup(){
  canvasWidth = 600;
  canvasHeight = 600;
  createCanvas(canvasWidth, canvasHeight);
  background(color('yellow'));
  mover = new Mover();
}

function draw(){
  mover.update();
  mover.checkEdges();
  mover.display();
  //ellipse(mover.location.x, mover.location.y, 50, 50);

}

function Mover(){
  this.location = createVector(canvasWidth/2, canvasHeight/2);
  this.velocity = createVector(random(-2, 2), (-2, 2));

  this.update = function(){
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
    else if(this.location.y < 0){
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

