function setup() {
  createCanvas(800, 800);
  background(255);
  strokeWeight(2);
  stroke(0);
  noFill();

}

function draw() {
  let stepsx = 200;

  for (var x = 200; x<height; x+= steps) {

  beginShape();
  vertex(0, 0);
  vertex(200, 0);
  vertex(200, 400);
  vertex(x, 400);
  endShape(CLOSE);

  fill('#1979a9');
  triangle(0, 400, 100, 200, 200, 400);
  triangle(0, 0, 100, 200, 200, 0);

  fill('#CEF6EC');
  triangle(0, 400, 100, 300, 200, 400);
  triangle(0, 0, 100, 100, 200, 0);

  fill('#042f66');
  triangle(0, 100, 100, 200, 0, 300);
  triangle(200, 100, 100, 200, 200, 300);

  line(0, 200, 200, 200);
  line(100, 100, 100, 300);
}

}
