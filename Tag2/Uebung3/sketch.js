function setup(){
    createCanvas(400, 400);

}

function draw(){
    clear();
    for(let i=5;i<height;i+=10){ //aeussere Schleife Schleifenzähler wird für y Position benutzt
        for(let j=5;j<width;j+=10) { //innere Schleife Schleifenzähler wird für x Position benutzt
            ellipse(j, i, 10, 10);
        }
    }
    noLoop();
}