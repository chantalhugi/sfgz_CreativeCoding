
let yoff = 1.0; // 2nd dimension of perlin noise

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL);
//  background('#d5e3e3');

}

function draw() {

  let h=map(mouseX,0,width,200,300);
  background(h,10,50);


  let stepsy = 500;


  fill('#10adba');
  stroke('#E0FFFF');
  strokeWeight(2);
  // We are going to draw a polygon out of the wave points
  beginShape();

  let xoff = 0; // Option #1: 2D Noise
  // let xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 10) {
    for (let y = 0; y <height; y+= stepsy) {

    // Option #1: 2D Noise
    let y = map(noise(xoff, yoff), 0, 1, 200, 300);

    // Option #2: 1D Noise
    // let y = map(noise(xoff), 0, 1, 200,300);

    // Set the vertex
    vertex(x, y+y);
    // Increment x dimension for noise
    xoff += 0.1;


  }
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}
