var gui;

var anz = 5;
var distanz = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);

  noFill();
  gui = createGui('p5.gui');
  gui.addGlobals('anz', 'distanz');
  // only call draw when then gui is changed
  noLoop();
}

function draw() {
  let h=map(mouseX,0,width,0,360);
  background(h,79,119);
  strokeWeight(1);
  let b=10;

  for (let i = -5; i <= anz; i++) {


  fill(b,108, 166, 205);
  stroke('#CCFFFF');
  beginShape();
  vertex(-10, 700);
  bezierVertex(-1000+distanz * i, 900+distanz * i, 1000+distanz * i, 100+distanz * i, 2000+distanz * i, 700+distanz * i);
  endShape(CLOSE)



  fill(b, 054,	100,	139);
  stroke('rgb(176,196,222)');
  beginShape();
  vertex(-5, 700);
  bezierVertex(900+distanz * i, 300+distanz * i, 800+distanz * i, -100+distanz * i, 2000+distanz * i, 700+distanz * i);
  endShape(CLOSE)


}
}
