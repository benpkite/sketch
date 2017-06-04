// Constants
var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2, c1, c2, c3, c4, c5;
var mic;
var x, y;
var mic;

function setup() {
  createCanvas (520,680)
  mic = new p5.AudioIn ();
  mic.start();

 c1 = color(93, 98, 125);
  c2 = color(136, 102, 99);
  c3 = color(133, 121, 86);
  c4 = color(98, 124, 89);
  c5 = color(109, 110, 110);
  
}

function draw() {
  background(0);
  var vol = mic.getLevel();
  
  vol = map(vol, 0, 1, 0.25, 6);
  
  var sH = height / 5;
  setGradient(0, sH * 0, width, sH, c1, c2, Y_AXIS);
  setGradient(0, sH * 1, width, sH, c2, c3, Y_AXIS);
  setGradient(0, sH * 2, width, sH, c3, c4, Y_AXIS);
  setGradient(0, sH * 3, width, sH, c4, c5, Y_AXIS);
  setGradient(0, sH * 4, width, sH, c5, c5, Y_AXIS);

fill(0,0,0,20);
  noStroke(); 
ellipse(260,340,vol*240,500);

fill(0,0,0,25);
  noStroke();  
ellipse(260,340,vol*180,500);

fill(0,0,0,30);
  noStroke();  
ellipse(260,340,vol*125,470);

//fill(0,0,0,20);
  //noStroke();  
 //ellipse(130, 180, 125, vol*500);

  console.log(vol);
}

function setGradient(x, y, w, h, c1, c2, axis ) {

  noFill();

  if (axis == Y_AXIS) {  
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
}

