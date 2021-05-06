var mouse
var chese
var background
var mouses
var cheses
var backgrounds
var edges
var gameState = "play"
var score = 0
var timer = 30
var chesegrp
var sound

function preload(){
background=loadImage("house.jpg")
mouse=loadImage("mouse.png")
chese=loadImage("cheese.png")
sound = loadSound("sound.wav")
}
function setup(){
    createCanvas(600,600)
backgrounds=createSprite(300,300,600,600)
backgrounds.addImage(background)
backgrounds.scale=4

mouses=createSprite(300,300,10,10)
mouses.addImage(mouse)
mouses.scale=.2

edges=createEdgeSprites()

chesegrp = new Group()

}
function draw(){
    if( gameState === "play"){
    
    timer = timer - 0.05
   
    if(keyDown (UP_ARROW)){
        mouses.velocityY=mouses.velocityY-3
    }
    if(keyDown(DOWN_ARROW)){
        mouses.velocityY=mouses.velocityY+3
    }
    if(keyDown(LEFT_ARROW)){
        mouses.velocityX=mouses.velocityX-3
    }
    if(keyDown(RIGHT_ARROW)){
        mouses.velocityX=mouses.velocityX+3
    }
    
    if(mouses.isTouching(chesegrp)){
        chesegrp.destroyEach()
        score=score+1
        mouse.scale = mouse.scale + 0.05
        sound.play()
    }

    mouses.collide(edges)
    cheese()
    drawSprites() 
    textSize(20)
    fill("black")
    text("Score:"+score,500,20)
    text("Timer:"+ Math.round(timer), 500,50)
    if(timer<0){
        gameState="end"
    }
}
    if(gameState==="end"){
        mouse.velocityX = 0 
        mouse.velocityY = 0
    }

}

function cheese(){
    if (frameCount%80===0){
        cheses=createSprite(300,500,10,10)
        cheses.addImage(chese)
        cheses.scale=.1
        cheses.x=random(10,590)
        cheses.y=random(10,590)
        cheses.lifetime = 50
        chesegrp.add(cheses)
    }
}