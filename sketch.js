var car,wall,speed,weight,deformation;
var collision,i;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,100,200);

  car.velocityX = speed;
  wall.shapeColor = (80,80,80);

  i = 0;
}

function draw() {
  background(255,255,255);
  if(wall.x-car.x<wall.width/2+car.width/2){
    deformation = (0.5*weight*speed*speed)/22500;
    car.velocityX = 0;
    if(deformation<100){
      car.shapeColor = "green";
    }
    else if(deformation<180){
      car.shapeColor = "yellow";
    }
    else{
      car.shapeColor = "red";
    }
    collision = true;
  }
  if(collision===true){
    textSize(20);
    fill(0,0,0);
    car.collide(wall);
    if(deformation<100){
      text("your car is completely safe for driving",800,350);
    }
    else if(deformation<180){
      text("your car is pretty safe for driving",800,350);
    }
    else{
      text("your car is not safe for driving, please buy another one",800,350);
    }
  }
  textSize(20);
  fill(0,0,0);
  text("car speed:"+Math.round(speed)+" km/h",700,50);
  text("car weight:"+Math.round(weight)+"kg",600,90);   
  drawSprites();
}