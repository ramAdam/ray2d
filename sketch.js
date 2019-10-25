
let wall;
let ray ;
function setup() {
  
  wall = new Boundary(300, 100, 300, 300);
  ray = new Ray(100, 200);
  createCanvas(400, 400);

  
}

function draw() {
  background(0);
  ray.show();
  ray.lookat(mouseX, mouseY);
  wall.show();

  pt = ray.cast(wall);
  // console.log(pt);
  if(pt){
    fill(255);
    ellipse(pt.x, pt.y, 8, 8);
  }
}