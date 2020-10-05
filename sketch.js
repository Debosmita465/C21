var fixedRect, movingRect; 

function setup()
 {
    createCanvas(1200,800);

   fixedRect = createSprite(600, 400, 50, 50);
   fixedRect.shapeColor = "green"; 
  // fixedRect.velocityX = -2;
  // fixedRect.velocityY = -2;

    movingRect = createSprite(400,200,50,50);
     movingRect.shapeColor = "green";
     movingRect.velocityX = 2;
     movingRect.velocityY = 1;

     gameObject1 = createSprite(250,350,50,50);
     gameObject1.velocityX = 6;
     gameObject1.velocityY = -5;

     gameObject2 = createSprite(550,500,50,50);
     gameObject3 = createSprite(700,400,50,50);
 }

      function draw()
       {
          background(0,0,0);


       //  movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;
if(isTouching(movingRect,gameObject1)){
  movingRect.shapeColor = "red";
  gameObject1.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  gameObject1.shapeColor = "green";
}

bounceOff(movingRect,gameObject1);
   
   drawSprites();
       }
       