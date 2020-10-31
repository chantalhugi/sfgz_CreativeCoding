var gui;
var windstaerke = 0;
let distanz = 15;

var teiler = 3;
let up = 5;

let input, button;

let key = '06e280b15621fb57f14de8e91c05e79e'; // https://weatherstack.com/product -- dein key!

// API einbinden //

function setup() {
  createCanvas(windowWidth, windowHeight);
  let url = 'https://api.weatherstack.com/current?access_key=' + key + '&query=Zürich'; //Achtung gratis key unterstützt SSL nicht
  loadJSON(url, gotWeather);

  noFill();
  colorMode(RGB, 255, 255, 255, 1);


  gui = createGui('p5.gui');
  gui.addGlobals('windstaerke');

  // Button für Ortseingabe //

  input = createInput();
  input.position(20, height - 50);
  button = createButton('Ort eingeben und staunen!');
  button.position(input.x + input.width + 10, height - 50);
  button.mousePressed(reloadJson);

}

function draw() {
  background(0, 44, 107);
  randomSeed(9);

  // Bewegung nach oben //

  if (up == 0) {
    teiler = teiler + 0.1;
    if (teiler > 20) {
      up = 1;

    }

    // Bewegung nach unten //

  } else {
    teiler = teiler - 0.1;
    if (teiler < 8) {
      up = 0;

    }
  }

  // Wellen (verpackt) //

  for (let i = 2; i <= windstaerke; i++) {

    welle(i)
    welle4(i)
    welle2(i)
    welle5(i)
    welle3(i)

  }
}
// Wellen Angaben //

function welle(i) {
  push()
  translate(0, +650);
  stroke(190, 220, 250, 1);
  strokeWeight(1);
  beginShape();
  curveVertex(0 + random(-1 * distanz / 4, distanz / 2) + distanz * i, 0 / teiler + random(+1 * distanz / 4, distanz / 2) - distanz * i);
  curveVertex(-900 + random(-1 * distanz / 4, distanz / 2) + distanz * i, 700 / teiler + random(+1 * distanz / 4, distanz / 2) - distanz * i);
  curveVertex(600 + random(-1 * distanz / 4, distanz / 2) + distanz * i, 390 / teiler + random(+1 * distanz / 4, distanz / 2) - distanz * i);
  curveVertex(1347 + random(-1 * distanz / 4, distanz / 2) + distanz * i, 700 / teiler + random(+1 * distanz / 4, distanz / 2) - distanz * i);
  curveVertex(1920 + random(-1 * distanz / 4, distanz / 2) + distanz * i, 450 / teiler + random(+1 * distanz / 4, distanz / 2) - distanz * i);
  curveVertex(2400 + random(-1 * distanz / 4, distanz / 2) + distanz * i, 600 / teiler + random(+1 * distanz / 4, distanz / 2) - distanz * i);
  endShape();
  pop()

}

function welle3(i) {
  push()
  translate(0, +700);
  stroke(190, 220, 250, 1);
  strokeWeight(2);
  beginShape();
  curveVertex(0 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 0 / teiler * 2 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
  curveVertex(-800 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 100 / teiler * 2 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
  curveVertex(0 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 250 / teiler * 2 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
  curveVertex(200 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 500 / teiler * 2 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
  curveVertex(550 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 220 / teiler * 2 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
  curveVertex(850 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 520 / teiler * 2 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
  curveVertex(1050 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 200 / teiler * 2 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
  curveVertex(1200 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 590 / teiler * 2 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
  curveVertex(1450 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 180 / teiler * 2 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
  curveVertex(1700 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 450 / teiler * 2 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
  curveVertex(2000 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 600 / teiler * 2 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
  endShape();
  pop()

}

function welle2(i) {
  push()
  translate(0, +600);
  stroke(190, 220, 250, 1);
  strokeWeight(1.5);
  beginShape();
  curveVertex(0 + random(-1 * distanz / 5, distanz / 2) + distanz * i - 10, 0 / teiler + random(-1 * distanz / 5, distanz / 2) - distanz * i - 10);
  curveVertex(-600 + random(-1 * distanz / 5, distanz / 2) + distanz * i - 10, 350 / teiler + random(-1 * distanz / 5, distanz / 5) - distanz * i - 10);
  curveVertex(100 + random(-1 * distanz / 5, distanz / 2) + distanz * i - 10, 500 / teiler + random(-1 * distanz / 5, distanz / 2) - distanz * i - 10);
  curveVertex(350 + random(-1 * distanz / 5, distanz / 2) + distanz * i - 10, 600 / teiler + random(-1 * distanz / 5, distanz / 2) - distanz * i - 10);
  curveVertex(650 + random(-1 * distanz / 5, distanz / 2) + distanz * i - 10, 350 / teiler + random(-1 * distanz / 5, distanz / 2) - distanz * i - 10);
  curveVertex(850 + random(-1 * distanz / 5, distanz / 2) + distanz * i - 10, 620 / teiler + random(-1 * distanz / 5, distanz / 2) - distanz * i - 10);
  curveVertex(1100 + random(-1 * distanz / 5, distanz / 2) + distanz * i - 10, 380 / teiler + random(-1 * distanz / 5, distanz / 2) - distanz * i - 10);
  curveVertex(1300 + random(-1 * distanz / 5, distanz / 2) + distanz * i - 10, 550 / teiler + random(-1 * distanz / 5, distanz / 2) - distanz * i - 10);
  curveVertex(1500 + random(-1 * distanz / 5, distanz / 2) + distanz * i - 10, 450 / teiler + random(-1 * distanz / 5, distanz / 2) - distanz * i - 10);
  curveVertex(1750 + random(-1 * distanz / 5, distanz / 2) + distanz * i - 10, 500 / teiler + random(-1 * distanz / 5, distanz / 2) - distanz * i - 10);
  curveVertex(2000 + random(-1 * distanz / 5, distanz / 2) + distanz * i - 10, 500 / teiler + random(-1 * distanz / 5, distanz / 2) - distanz * i - 10);
  endShape();
  pop()


}

function welle4(i) {
  push()
  translate(0, +850);
  stroke(190, 220, 250, 1);
  strokeWeight(1);
  beginShape();
  curveVertex(0 + random(-1 * distanz / 2, distanz / 2) + distanz * i - 10, 0 / teiler + random(-1 * distanz / 2, distanz / 2) - distanz * i - 10);
  curveVertex(-700 + random(-1 * distanz / 2, distanz / 2) + distanz * i - 10, 300 / teiler + random(-1 * distanz / 2, distanz / 5) - distanz * i - 10);
  curveVertex(100 + random(-1 * distanz / 2, distanz / 2) + distanz * i - 10, 500 / teiler + random(-1 * distanz / 2, distanz / 2) - distanz * i - 10);
  curveVertex(350 + random(-1 * distanz / 2, distanz / 2) + distanz * i - 10, 600 / teiler + random(-1 * distanz / 2, distanz / 2) - distanz * i - 10);
  curveVertex(650 + random(-1 * distanz / 2, distanz / 2) + distanz * i - 10, 350 / teiler + random(-1 * distanz / 2, distanz / 2) - distanz * i - 10);
  curveVertex(850 + random(-1 * distanz / 2, distanz / 2) + distanz * i - 10, 620 / teiler + random(-1 * distanz / 2, distanz / 2) - distanz * i - 10);
  curveVertex(1100 + random(-1 * distanz / 2, distanz / 2) + distanz * i - 10, 380 / teiler + random(-1 * distanz / 2, distanz / 2) - distanz * i - 10);
  curveVertex(1300 + random(-1 * distanz / 2, distanz / 2) + distanz * i - 10, 550 / teiler + random(-1 * distanz / 2, distanz / 2) - distanz * i - 10);
  curveVertex(1500 + random(-1 * distanz / 2, distanz / 2) + distanz * i - 10, 450 / teiler + random(-1 * distanz / 2, distanz / 2) - distanz * i - 10);
  curveVertex(1750 + random(-1 * distanz / 2, distanz / 2) + distanz * i - 10, 500 / teiler + random(-1 * distanz / 2, distanz / 2) - distanz * i - 10);
  curveVertex(2000 + random(-1 * distanz / 2, distanz / 2) + distanz * i - 10, 500 / teiler + random(-1 * distanz / 2, distanz / 2) - distanz * i - 10);
  endShape();
  pop()


}

function welle5(i) {
  push()
  translate(0, +880);
  stroke(190, 220, 250, 1);
  strokeWeight(2.8);
  beginShape();
  curveVertex(0 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 0 / teiler * 2 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
  curveVertex(-1300 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 1000 / teiler * 2 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
  curveVertex(20 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 150 / teiler * 2 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
  curveVertex(500 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 500 / teiler * 2 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
  curveVertex(700 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 20 / teiler * 2 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
  curveVertex(1000 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 520 / teiler * 2 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
  curveVertex(1250 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 100 / teiler * 2 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
  curveVertex(1500 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 590 / teiler * 2 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
  curveVertex(1950 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 70 / teiler * 2 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
  curveVertex(2100 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 450 / teiler * 2 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
  curveVertex(2500 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 100 / teiler * 2 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
  curveVertex(3000 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 700 / teiler * 2 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
  curveVertex(5000 + random(-1 * distanz / 3, distanz / 3) + distanz * i, 150 / teiler * 2 + random(-1 * distanz / 3, distanz / 3) - distanz * i);
  endShape();
  pop()

}

// Angaben API //

function gotWeather(weather) {
  windstaerke = weather.current.wind_speed; // Angaben in km!
  console.log(distanz)

}

function reloadJson() {
  let ort = input.value();
  let url = 'https://api.weatherstack.com/current?access_key=' + key + '&query=' + ort;
  loadJSON(url, gotWeather);
}
