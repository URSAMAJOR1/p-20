var bgImg
var catImg1
var catImg2
var catImg3
var mouseImg1
var mouseImg2
var mouseImg3
var catImg4
var mouseImg4

function preload() {

bgImg = loadImage ("images/garden.png")
catImg1 =   loadAnimation("images/cat1.png")

catImg2 = loadAnimation ("images/cat2.png", "images/cat3.png")

catImg3=loadAnimation("images/cat4.png");

mouseImg1 = loadAnimation ("images/mouse1.png")
mouseImg2 =  loadAnimation ("images/mouse2.png")
mouseImg3 = loadAnimation ("images/mouse3.png")
mouseImg4=loadAnimation("images/mouse4.png");
}




function setup(){
  createCanvas (1000,500)
  cat=createSprite(650,390,10,10)
  //addAnimation("label",imgVariable)
  
cat.addAnimation("catSitting",catImg1)
cat.scale=0.2
  mouse=createSprite(200,390,10,10)
  mouse.addAnimation("mouseStanding",mouseImg1)
mouse.scale=0.09

cat.debug=true;
mouse.debug=true;
mouse.setCollider("rectangle",0,0,10,10);
cat.setCollider("circle",0,0,5);

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
      
    drawSprites();

    if(cat.x<0){
      cat.x=1000;
      cat.velocityX=-2;

     
    }

    if(cat.x===650){
      cat.addAnimation("catSitting",catImg1)
  cat.changeAnimation("catSitting")
  cat.velocityX=0;
  
    }


    // if(cat.isTouching(mouse)){
    //   cat.velocityX=0;
    //   mouse.visible=false;
    // }

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){

cat.velocityX=0;
   mouse.visible=false;
   cat.addAnimation("catLast",catImg3)
  cat.changeAnimation("catLast")

  mouse.addAnimation("mouseLast",mouseImg4)
  mouse.changeAnimation("mouseLast")

   
}

}






function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
  cat.velocityX=-5
  cat.addAnimation("catrunning",catImg2)
  cat.changeAnimation("catrunning")
  mouse.addAnimation("mouseTeasing",mouseImg3)
  mouse.changeAnimation("mouseTeasing")
}

}
