var img;
var canvas;

function setup(){
  canvas = createCanvas(400, 400);
  img = createImg('https://vignette.wikia.nocookie.net/studio-ghibli/images/5/53/Totoro.jpg/revision/latest?cb=20180107143036')

  img.position(190, 50);
  img.size(200, 150);

  canvas.position(300, 50);
  canvas.mouseOver(uniHide);
  //
  canvas.mouseOut(function(){
    img.show();
  });
}

function draw(){
  noStroke();
  background(220, 180, 200);
  fill(180, 200, 40);
  strokeweight(6);
  stroke(180, 100, 240);
  for (var i = 0; i < width; i += 15){
    line( i, 0, i, height);
  }
}

function uniHide(){
  img.hide();
}




