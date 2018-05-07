
var add = function(a){
  a.setup = function(){
    a.createCanvas(600, 600);
  };
  a.draw = function(){
    a.background(color('yellow'));
    var mouse = a.createVector(mouseX, mouseY);
    var center = a.createVector(300, 300);
    mouse.add(center);
    a.translate(300, 300);
    a.line(0, 0, mouse.x, mouse.y);
  };
};
var addP5 = new p5(add, 'addContainer');

var sub = function(b){
  b.setup = function(){
    b.createCanvas(600, 600);
  };
  b.draw = function(){
    b.background(color('aqua'));
    var mouse = b.createVector(mouseX, mouseY);
    var center = b.createVector(300, 300);
    mouse.sub(center);
    b.translate(300, 300);
    b.line(0, 0, mouse.x, mouse.y);
  };
};
var addP5 = new p5(sub, 'subContainer');
