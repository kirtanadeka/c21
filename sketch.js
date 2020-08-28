var fixedRect, movingRect;

o1= createSprite(600, 200, 50, 80);
 o1.shapeColor="green";
 o2=createSprite(800,200,80,30);
 o2.shapeColor="green";
 o3= createSprite(100, 200, 50, 80);
 o3.shapeColor="green";
 o4=createSprite(80,200,80,30);
 o4.shapeColor="green";

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(o1,o4);

if(isTouching(movingRect, o3)){
  movingRect.shapeColor="blue";
  o3.shapeColor="blue";
}
else{
  movingRect.shapeColor="red";
  o3.shapeColor="red";
}
  bounceOff(movingRect,fixedRect);

  drawSprites();
}

