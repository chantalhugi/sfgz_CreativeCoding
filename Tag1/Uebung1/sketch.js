var circleX = 0;

function draw() {
circleX = circleX + 1;
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0,104,139);
  noFill();

  stroke(233,150,122);


  fill(141,238,238);
  strokeWeight(10);
  ellipse(300,300,590,590);
  ellipse(300,300,590,590);

  noFill();
  strokeWeight(4);
  ellipse(300,300,75,75);

  strokeWeight(6);
  ellipse(300,300,204,204);



  strokeWeight(8);
  ellipse(300,300,424,424);



  strokeWeight(8);
  stroke(139,28,98);
  line(0, 0, 600, 600);
  line(300, 0, 0, 300);
  line(300, 0, 600, 300);
  line(0, 300, 300, 600);
  line(300, 0, 600, 300);
  line(300, 600, 600, 300);
  line(600,  0, 0, 600);
  line(300, 0, 300, 600);
  line(0, 300, 600, 300);

  noFill();
  strokeWeight(4);
  square(273, 273, 56);

  strokeWeight(6);
  square(225, 225, 150);

  strokeWeight(8);
  square(150, 150, 300);

  strokeWeight(10);
  square(5, 5, 590);


}
