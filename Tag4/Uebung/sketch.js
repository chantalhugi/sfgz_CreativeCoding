//var gui;

//var anz = 5;
//var distanz = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
//  gui = createGui('p5.gui');
//  gui.addGlobals('anz', 'distanz');
//  noLoop();
stroke(255, 255, 255);
strokeWeight(0.1);
 background(10, 79, 119);

}


let x = [0, 100, 200, 300, 400, 700, 1200];
let y = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let shiftY=0;



function draw() {
    translate(0,shiftY);
    beginShape();
    //curveVertex(0, y[0]);
        for (let i = 0; i < x.length; i++) {

            curveVertex(x[i], y[i]);
            //vertex(x[i], y[i]);
            x[i] += random(-1,1); //neu initialisierung
            y[i] += random(-1,1); //neu initialisierung
        }
    //curveVertex(width, y[y.length-1]);
    endShape();
    shiftY+=0.2;

    if(shiftY > height){
      shiftY=0;
    }
}
