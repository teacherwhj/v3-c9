var red;
var green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400); 
  
  red = createButton("RED");
  red.position(75,50);
  red.mousePressed(fRed);

  green = createButton("GREEN");
  green.position(220,50);
  green.mousePressed(fGreen);
}

function draw() {
  background(r,g,b);
}

function fRed(){
  r=255;
  g=0;
  b=0;

}

function fGreen(){
  r=0;
  g=255;
  b=0;

}

