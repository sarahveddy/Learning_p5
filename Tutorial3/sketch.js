var img;
var canvas;



function setup(){
  canvas = createCanvas(400, 400);

  //creates an html image with src "https:..."
  //unlike using image(), this doesn't have to be loaded or drawn every frame in draw()
  img = createImg("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg");
  img.position(190, 50);
  img.size(200, 200);
  canvas.position(300, 50);
}

function draw(){
  noStroke();
  background(color('blue'));
  //fill(color("yellow"));
  strokeWeight(6);
  stroke(180, 100, 240);
  for(var i = 0; i < width; i += 15){
    line(i, 0, i, height);
  }
}






