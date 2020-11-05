var survivalTime=0;


var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var invisibleGround;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);

  invisibleGround = createSprite(400,350,900,10);
  invisibleGround.visible = false;
}


function draw() {
  background("white");
  
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score :"+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime :"+survivalTime,100,50);
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8;
  
  
 if (frameCount % 80 === 0){
   var banana = createSprite(400,200,10,40);
    banana.y = Math.round(random(120,200));
   banana.velocityX = -6;
   banana.addImage(bananaImage);
   banana.scale=0.1;
   
   monkey.lifetime = 200 ;
 }
  
  if (frameCount % 300 === 0){
   var obstacle = createSprite(400,325,10,40);
   obstacle.velocityX = -6;
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.1
    obstacle.lifetime = 200;
  }
  monkey.collide(invisibleGround);

  drawSprites();
}






