var gui;

var anz = 5;
var distanz = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  gui = createGui('p5.gui');
  gui.addGlobals('anz', 'distanz');
  // only call draw when then gui is changed
  noLoop();
}

function draw() {

    let h = map(mouseX, 0, width, 0, 360);
    let b = 1;

  background(h, 79, 119);
  strokeWeight(1);


  for (let i = 2; i <= anz; i++) {


    fill(b, 108, 166, 205);
    stroke('#CCFFFF');
    beginShape();
    vertex(-10, 900);
    bezierVertex(1000 + distanz * i, 200 + distanz * i, 1000 + distanz * i, 100 + distanz * i, 3000 + distanz * i, 1200 + distanz * i);
    endShape(CLOSE)

    fill(b, 230, 230, 250);
    stroke('#CCFFFF');
    beginShape();
    vertex(10, 900);
    bezierVertex(-500 + distanz * i, 200 + distanz * i, 0 + distanz * i, 0 + distanz * i, 2000 + distanz * i, 2000 + distanz * i);
    endShape(CLOSE)


    fill(b, 054, 100, 139);
    stroke('rgb(176,196,222)');
    beginShape();
    vertex(10, 900);
    bezierVertex(-500 + distanz * i, 800 + distanz * i, 500 + distanz * i, 10 + distanz * i, 2000 + distanz * i, 1000 + distanz * i);
    endShape(CLOSE)



  }
}
