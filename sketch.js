var f1, f2
var background, backgroundimg

var backgroundimg
var firefighter
var firefighterimg
var fire
var fire1img
var fire2img
var fire3img
var fireAnimation
var score=0
var fireGroup
var PLAY = 1
var END = 0
var START = 2
var gameState=START
var screen = 0

var fireAudio
var waterBulletImage
var waterBullet
var waterBulletGroup

function preload() {
backgroundimg=loadImage("background.jpg")
firefighterimg = loadImage("firefighter.png")
//fire1img = loadImage("fire2.png")
fireAudio = loadSound("fireSound.mp3")
fireAnimation = loadAnimation("fire1.png", "fire2.png", "fire3.png")
waterBulletImage = loadImage("WaterBullet.png")
}

function setup() {
  var can = createCanvas(windowWidth,windowHeight); 
  can.mousePressed(mp)
  firefighter=createSprite(windowWidth/10-120,windowHeight-105,100,200);
  firefighter.addImage("firefighter image", firefighterimg)
  firefighter.scale = 0.2
  fireGroup=new Group();
  waterBulletGroup = new Group()
  //drawSprites()
}

function draw() {
  if(screen == 0) {
    startScreen();
  }
  else if(screen == 1) {
    gameScreen()
    drawSprites()
  }  
  else if(screen == 2) {
    endScreen()
  }
  if(gameState === PLAY) {
    firefighter.x = mouseX
    firefighter.y = mouseY
  if(keyDown("space")) {
    shootWater()
  
  if(waterBulletGroup.isTouching( fireGroup)) {
  //fireAnimation.visible=false;
    waterBulletGroup[0].destroy()
   // waterBulletGroup.get(0).destroy()
    fireGroup.get(0).destroy()
   // fire1img.visible=false;
    //fire1img.destroy();
    score = score+1

   

  }
}
  if(firefighter.isTouching(fireGroup)) {
    endScreen()
    gameState = END
    if(keyDown("space")) {
      screen = 0
    }
  }
//firefighter.debug = true
//waterBulletGroup.debug = true
//fireGroup.debug = true
}
}  


function startScreen() {
  background("Cyan")
  textSize(50)
  fill("black")
  textAlign(CENTER)
  text("WELCOME TO FIRE DEMOLITION!",width/2, height/2-100)

  textSize(35)
  fill("black")
  textAlign(CENTER)
  text("Read the rules before you start playing. They are very important!", width/2, height/2)

  textSize(25)
  fill("black")
  textAlign(CENTER)
  textSize(25)

  textSize(25)
  fill("black")
  textAlign(CENTER)
  text("Rules: In order to win, you must put out all the fires. Hold space to shoot water.But be careful! If you touch the fire then you will lose.",width/2,height/1.5+20);  
 
  textSize(25)
  fill("black")
  textAlign(CENTER)
  text("You can control the firefighter using your mouse. Whenever you're ready, press the space bar and click on the screen to start.",width/2,height/1.5+120)
  
  gameState = PLAY
  reset();
}
function gameScreen() {
  if(gameState===PLAY) {
    background(backgroundimg)
    textSize(25)
    fill("cyan")
    text("Score:"+score,windowWidth-200,windowHeight-50)
    spawnFire()
    /*if(keyDown("right_arrow")) {
      //prepos = position
      //position = "right"
      firefighter.x = firefighter.x+10
      }
    if(keyDown("left_arrow")) {
      firefighter.x = firefighter.x-10
    }
    if(keyDown("up_arrow")) {
      firefighter.y = firefighter.y-10
    }
    if(keyDown("down_arrow")) {
      firefighter. y = firefighter.y+10
    }
    if(firefighter.isTouching(fireGroup)) {
      fireGroup.get(0).destroy()
      }*/

}
}

function endScreen() {
background("red")
textSize(30)
fill("black")
textAlign(CENTER)
text("Game Over! Next time, try not to touch the fires.", windowWidth/2, windowHeight/2)
textSize(30)
fill("yellow")
textAlign(CENTER)
text("Press space key to try again.", windowWidth/2, windowHeight/2+100)
}






function spawnFire() {
  if(frameCount % 100 === 0) {
    fire = createSprite(windowWidth,windowHeight)
    fire.y = Math.round(random(windowHeight-600,windowHeight-400))
    fire.x = Math.round(random(10,windowWidth-10))
    fire.addAnimation("fireanimation", fireAnimation)
    fireGroup.add(fire)
    //waterBulletGroup.add(waterBullet)
    fire.depth=firefighter.depth
    firefighter.depth+=1
  }
}

function mp() {
if(screen == 0) {
  screen = 1
}
else if(screen == 2) {
  screen = 0
}
}

function reset() {
  score = 0
}
function shootWater() {
waterBullet = createSprite(firefighter.x, firefighter.y, 50, 50)
waterBullet.y = firefighter.y
waterBullet.addImage(waterBulletImage)
waterBullet.scale = 0.1
waterBullet.velocityX = 15

/*function createBullet() {

  var bullet= createSprite(base.x, base.y, 20,5);
  bullet.shapeColor="purple";

  if(position  === "right"){
    bullet.velocityX = 25; 
  }
  if(position  === "left"){
  bullet.velocityX = -25;
  }

  bulletGroup.add(bullet);
  bullet.setCollider("rectangle",0,0);
  bullet.debug = false;
  return bullet;
  
}
*/

}
