function setup() {
  createCanvas(1024, 768);

  noStroke();
}

function draw() {
  background(16,78,139);
  stroke(255);
  let a=34;
  let b=10;
  let c=2;

  fill(0,50);


  //kreis 1
  a+=21;
  strokeWeight(1+c);
  fill(b,140,209,70);
  ellipse(a,height/2,a,a);

  //kreis 2
  a+=34;
  strokeWeight(2+c);
  ellipse(a,height/2,a,a);

  //kreis 3
  a+=55;
  strokeWeight(3+c);
  ellipse(a,height/2,a,a);

  //kreis 4
  a+=89;
  strokeWeight(5+c);
  ellipse(a,height/2,a,a);

  //kreis 5
  a+=144;
  strokeWeight(8+c);
  ellipse(a,height/2,a,a);

  //kreis 6
  a+=233;
  strokeWeight(13+c);
  ellipse(a,height/2,a,a);

  //kreis 7
  a+=377;
  strokeWeight(21+c);
  ellipse(a,height/2,a,a);

  //kreis 8
  a+=610;
  strokeWeight(34+c);
  ellipse(a,height/2,a,a);

}
