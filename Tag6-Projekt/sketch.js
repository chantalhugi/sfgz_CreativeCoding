var gui;
var anz = 3;
var distanz = 3;
var teiler = 1;
let up = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  // createCanvas (1920, 1080);
  noFill();
  colorMode(RGB, 255, 255, 255, 1);
  gui = createGui('p5.gui');
  gui.addGlobals('anz', 'distanz');
  // only call draw when then gui is changed
//  noLoop();
}

function draw() {
if (up == 0){
 teiler = teiler + 0.5; // Bewegung
  if (teiler >10) {
    up = 1;

  }

}

else{
  teiler = teiler - 0.5; // Bewegung
  if (teiler < 1) {
    up = 0;

  }
}



  let h = map(mouseX, 0, width, 0, 360);
  let b = 1;

  randomSeed(9);

  background(0, 19, 55);

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


  // fill(b, 054, 100, 100);
    stroke('rgb(176,196,222)');
    beginShape();
    vertex(10, 900);
    bezierVertex(-500 + distanz * i, 800 - distanz * i, 500 + distanz * i, 10 - distanz * i, 2000 + distanz * i, 1000 - distanz * i);
    endShape()
*/

    stroke(255, 255, 255, 0.4);
    strokeWeight(4);
    beginShape();
    curveVertex(0 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 0 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
    curveVertex(-800 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 450 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
    curveVertex(200 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 250 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
    curveVertex(400 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 500 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
    curveVertex(600 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 220 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
    curveVertex(900 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 520 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
    curveVertex(1050 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 200 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
    curveVertex(1200 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 590 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
    curveVertex(1450 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 180 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
    curveVertex(1700 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 450 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
    curveVertex(2000 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 600 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
    endShape();




    stroke(255, 255, 255, 0.6);
    strokeWeight(6);
    beginShape();
    curveVertex(0 + random(-1 * distanz / 2, distanz / 2) + distanz * i - 10, 0 + random(-1 * distanz / 2, distanz / 2) - distanz * i - 10);
    curveVertex(-900 + random(-1 * distanz / 2, distanz / 2) + distanz * i - 10, 700 + random(-1 * distanz / 2, distanz / 5) - distanz * i - 10);
    curveVertex(200 + random(-1 * distanz / 2, distanz / 2) + distanz * i - 10, 450 + random(-1 * distanz / 2, distanz / 2) - distanz * i - 10);
    curveVertex(350 + random(-1 * distanz / 2, distanz / 2) + distanz * i - 10, 600 + random(-1 * distanz / 2, distanz / 2) - distanz * i - 10);
    curveVertex(650 + random(-1 * distanz / 2, distanz / 2) + distanz * i - 10, 350 + random(-1 * distanz / 2, distanz / 2) - distanz * i - 10);
    curveVertex(850 + random(-1 * distanz / 2, distanz / 2) + distanz * i - 10, 620 + random(-1 * distanz / 2, distanz / 2) - distanz * i - 10);
    curveVertex(1100 + random(-1 * distanz / 2, distanz / 2) + distanz * i - 10, 380 + random(-1 * distanz / 2, distanz / 2) - distanz * i - 10);
    curveVertex(1300 + random(-1 * distanz / 2, distanz / 2) + distanz * i - 10, 550 + random(-1 * distanz / 2, distanz / 2) - distanz * i - 10);
    curveVertex(1500 + random(-1 * distanz / 2, distanz / 2) + distanz * i - 10, 450 + random(-1 * distanz / 2, distanz / 2) - distanz * i - 10);
    curveVertex(1750 + random(-1 * distanz / 2, distanz / 2) + distanz * i - 10, 500 + random(-1 * distanz / 2, distanz / 2) - distanz * i - 10);
    curveVertex(2000 + random(-1 * distanz / 2, distanz / 2) + distanz * i - 10, 500 + random(-1 * distanz / 2, distanz / 2) - distanz * i - 10);
    endShape();



    welle(i)



  }
}



function welle (i){
push ()
translate (0, +200);

  stroke(255, 255, 255, 0.8);
  strokeWeight(8);
  beginShape();
  curveVertex(0 + random(-1 * distanz / 4, distanz / 2) + distanz * i, 0/teiler + random(+1 * distanz / 4, distanz / 2) - distanz * i);
  curveVertex(-900 + random(-1 * distanz / 4, distanz / 2) + distanz * i, 700/teiler + random(+1 * distanz / 4, distanz / 2) - distanz * i);
  curveVertex(600 + random(-1 * distanz / 4, distanz / 2) + distanz * i, 390/teiler + random(+1 * distanz / 4, distanz / 2) - distanz * i);
  curveVertex(1347 + random(-1 * distanz / 4, distanz / 2) + distanz * i, 700/teiler + random(+1 * distanz / 4, distanz / 2) - distanz * i);
  curveVertex(1920 + random(-1 * distanz / 4, distanz / 2) + distanz * i, 450/teiler + random(+1 * distanz / 4, distanz / 2) - distanz * i);
  curveVertex(2400 + random(-1 * distanz / 4, distanz / 2) + distanz * i, 600/teiler + random(+1 * distanz / 4, distanz / 2) - distanz * i);
  endShape();
pop ()

}



// bei teiler Windstarke einfügen von API
