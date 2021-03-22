var mario, ground, marioIMG, bg, enemyIMG,inground

function preload() {
  groundIMG = loadImage("images/ground2.png")
  bg = loadImage("images/bg.png")
  enemyIMG = loadAnimation("images/obstacle1.png", "images/obstacle2.png", "images/obstacle3.png", "images/obstacle4.png")
  marioIMG = loadAnimation("images/mario00.png", "images/mario01.png", "images/mario02.png", "images/mario03.png")
}
function setup() {
  createCanvas(600, 350);
  mario = createSprite(50,264,20,50)
  mario.addAnimation("mario",marioIMG)
  mario.scale = 1.5
  
  ground = createSprite(200,330,400,20);
  ground.addImage("ground",groundIMG);
  ground.x = ground.width /2;
  ground.velocityX = -(2);
  
  ingroud = createSprite(200,300,400,10)
  ingroud.visible=false
}
function draw() {
  background(bg);
  if(ground.x < 0){
    ground.x = ground.width/2
  }
  mario.collide(ingroud)
  if(keyDown("space")){
    mario.velocityY=-10
  }
  mario.velocityY=mario.velocityY + 0.5
  drawSprites();
}
