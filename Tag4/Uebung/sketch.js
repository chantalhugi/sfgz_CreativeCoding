var gui;

var anz = 3;
var distanz = 1;

function setup() {
 createCanvas(windowWidth, windowHeight);
// createCanvas (1920, 1080);
  noFill();
  colorMode(RGB, 255, 255, 255, 1);
  gui = createGui('p5.gui');
  gui.addGlobals('anz', 'distanz');
  // only call draw when then gui is changed
  noLoop();
}

function draw() {

    let h = map(mouseX, 0, width, 0, 360);
    let b = 1;

    randomSeed(9);


  background(h, 79, 119);

//  translate(0, -200)

  for (let i = 2; i <= anz; i++) {


  //  fill(b, 108, 166, 200);


    /*
    beginShape();
    vertex(-10, 900);
    bezierVertex(1000 + distanz * i, 200 - distanz * i, 1000 + distanz * i, 100 - distanz * i, 3000 + distanz * i, 1200 - distanz * i);
    endShape()

  //  fill(b, 230, 230, 150);
    stroke('#CCFFFF');
    beginShape();
    vertex(10, 900);
    bezierVertex(-500 + distanz * i, 200 - distanz * i, 0 + distanz * i, 0 - distanz * i, 2000 + distanz * i, 2000 - distanz * i);
    endShape()


  //  fill(b, 054, 100, 100);
    stroke('rgb(176,196,222)');
    beginShape();
    vertex(10, 900);
    bezierVertex(-500 + distanz * i, 800 - distanz * i, 500 + distanz * i, 10 - distanz * i, 2000 + distanz * i, 1000 - distanz * i);
    endShape()
*/

stroke(255, 255, 255, 0.7);
strokeWeight(8);
beginShape();
curveVertex(0, 0 +random (- 1 * distanz/2, distanz/2) - distanz * i);
curveVertex(0, 450 +random (- 1 * distanz/2, distanz/5) - distanz * i);
curveVertex(200, 250 +random (- 1 * distanz/2, distanz/2) - distanz * i);
curveVertex(400, 500 +random (- 1 * distanz/2, distanz/2) - distanz * i);
curveVertex(600, 220 +random (- 1 * distanz/2, distanz/2) - distanz * i);
curveVertex(900, 520 +random (- 1 * distanz/2, distanz/2) - distanz * i);
curveVertex(1050, 200 +random (- 1 * distanz/2, distanz/2) - distanz * i);
curveVertex(1200, 590 +random (- 1 * distanz/2, distanz/2) - distanz * i);
curveVertex(1450, 180 +random (- 1 * distanz/2, distanz/2) - distanz * i);
curveVertex(1700, 450 +random (- 1 * distanz/2, distanz/2) - distanz * i);
curveVertex(2000, 600 +random (- 1 * distanz/2, distanz/2) - distanz * i);
endShape();




stroke(255, 255, 255, 0.5);
strokeWeight(6);
beginShape();
curveVertex(0, 0 +random (- 1 * distanz/2, distanz/2) - distanz * i);
curveVertex(0, 650 +random (- 1 * distanz/2, distanz/5) - distanz * i);
curveVertex(150, 400 +random (- 1 * distanz/2, distanz/2) - distanz * i);
curveVertex(350, 600 +random (- 1 * distanz/2, distanz/2) - distanz * i);
curveVertex(650, 350 +random (- 1 * distanz/2, distanz/2) - distanz * i);
curveVertex(850, 620 +random (- 1 * distanz/2, distanz/2) - distanz * i);
curveVertex(1100, 380 +random (- 1 * distanz/2, distanz/2) - distanz * i);
curveVertex(1300, 550 +random (- 1 * distanz/2, distanz/2) - distanz * i);
curveVertex(1500, 400 +random (- 1 * distanz/2, distanz/2) - distanz * i);
curveVertex(1750, 500 +random (- 1 * distanz/2, distanz/2) - distanz * i);
curveVertex(2100, 600 +random (- 1 * distanz/2, distanz/2) - distanz * i);
endShape();




stroke(255, 255, 255, 1);
strokeWeight(10);
beginShape();
curveVertex(0, 0 +random (+ 1 * distanz/5, distanz/5) - distanz * i);
curveVertex(0, 600 +random (+ 1 * distanz/5, distanz/5) - distanz * i);
curveVertex(600, 390 +random (+ 1 * distanz/5, distanz/5) - distanz * i);
curveVertex(1347, 700 +random (+ 1 * distanz/5, distanz/5) - distanz * i);
curveVertex(1920, 450 +random (+ 1 * distanz/5, distanz/5) - distanz * i);
curveVertex(2400, 600 +random (+ 1 * distanz/5, distanz/5) - distanz * i);
endShape();





  }
}
