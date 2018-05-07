
var add = function(a){
  a.setup = function(){
    var canvas = a.createCanvas(600, 600);
  };
  a.draw = function(){
    a.background(a.color('yellow'));
    var mouse = a.createVector(a.mouseX, a.mouseY);
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
    b.background(b.color('aqua'));
    var mouse = b.createVector(b.mouseX, b.mouseY);
    var center = b.createVector(300, 300);
    mouse.sub(center);
    b.translate(300, 300);
    b.line(0, 0, mouse.x, mouse.y);
  };
};
var addP5 = new p5(sub, 'subContainer');

var mult = function(c){
  c.setup = function(){
    c.createCanvas(600, 600);
  };
  c.draw = function(){
    c.background(c.color('red'));
    var mouse = c.createVector(c.mouseX, c.mouseY);
    var center = c.createVector(300, 300);
    mouse.mult(.5);
    c.translate(300, 300);
    c.line(0, 0, mouse.x, mouse.y);
  };
};
var multP5 = new p5(mult, 'multContainer');

var div = function(d){
  d.setup = function(){
    d.createCanvas(600, 600);
  };
  d.draw = function(){
    d.background(d.color('grey'));
    var mouse = d.createVector(d.mouseX, d.mouseY);
    var center = d.createVector(300, 300);
    mouse.div(.5);
    d.translate(300, 300);
    d.line(0, 0, mouse.x, mouse.y);
  };
};
var divP5 = new p5(div, 'multContainer');