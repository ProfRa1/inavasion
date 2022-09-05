var score = 0
function preload(){
   et = loadImage("aliens.png");
   cenario = loadImage("espaco.png");
   protagonista = loadImage("nave.png");
   blast = loadImage("tiro.png");
   vilao = loadImage("nevs.png");
}

function setup() {
 createCanvas(windowWidth, windowHeight);
 fundo = createSprite(width/2,height/2);
 fundo.addImage(cenario);
 nave = createSprite(100,height/2);
 nave.addImage(protagonista);
 nave.scale = 0.4;
 fundo.width = 1200

 nave.setCollider("rectangle",0,0,250,270);

 inimigos = new Group ();
 inimigos2 = new Group ();
 inimigos3 = new Group ();
 inimigos4 = new Group ();
 inimigos5 = new Group ();
 inimigos6 = new Group ();
 lasers = new Group();
 score = 0

}

function draw() {
    background("purple")
    spawnnaves();
     
  

    if(keyIsDown(RIGHT_ARROW)){
        nave.x = nave.x + 18;
    }
    if(keyIsDown(LEFT_ARROW)){
        nave.x = nave.x - 18;
    }
    if(keyIsDown(DOWN_ARROW)){
        nave.y = nave.y + 18;
        nave.rotation= nave.rotation+0.8
    }
    if(keyIsDown(UP_ARROW)){
        nave.y = nave.y - 18;
        nave.rotation= nave.rotation-0.8
    }

    if(lasers.isTouching(inimigos)){
    inimigos.destroyEach()
    score = score + 1
    }
    if(lasers.isTouching(inimigos2)){
    inimigos2.destroyEach()
    score = score + 1
    }
    if(lasers.isTouching(inimigos3)){
        inimigos3.destroyEach()
        score = score + 1
    }
    if(lasers.isTouching(inimigos4)){
        inimigos4.destroyEach();
        score = score + 1
    }
    if(lasers.isTouching(inimigos5)){
        inimigos5.destroyEach();
        score = score + 1
    }
    if(lasers.isTouching(inimigos6)){
        inimigos6.destroyEach();
        score = score + 1;
    }
    if(frameCount === 100){
        naveinimigas = createSprite(width,100);
        naveinimigas.addImage(vilao);
        naveinimigas.scale = 0.2;
        naveinimigas.velocityX = -9;
        naveinimigas.lifetime = width/9;
    }
  
 


    if(keyWentDown("space")){
    laser = createSprite(100,200);
    laser.addImage(blast);
    laser.scale = 0.05;
    laser.velocityX = 22;
    laser.lifetime = width/10;
    laser.x = nave.x;
    laser.y = nave.y;
    lasers.add(laser)
    }

    drawSprites();
    textSize(40);
    textFont('Magneto');
    fill("cyan")
    text("SpaceInavion", width/2-200,100);
    textSize(30);
    textFont('Magneto');
    fill("purple");
    text("Score: "+score, 100,90)
    // if(score >= 1){
    //     textSize(120)
    //     fill(255, 36, 0)
    //     text("Game Over", width/2-360,height/2)
    // }
}

function spawnnaves(){  
    
    if(frameCount%1000 === 0){
    naveinimigas = createSprite(width-100,100);
    naveinimigas.addImage(et);
    naveinimigas.y = Math.round(random(100,1000));
    naveinimigas.scale = 0.2;
    naveinimigas.velocityX = -9;
    naveinimigas.lifetime = width/5;
    naveinimigas.rotation = naveinimigas.rotation + 1;
    inimigos.add(naveinimigas);
    }


    if(frameCount%800 === 0){
        naveinimigas2 = createSprite(width-100,100);
        naveinimigas2.addImage(et);
        naveinimigas2.y = Math.round(random(100,1000));
        naveinimigas2.scale = 0.2;
        naveinimigas2.velocityX = -5;
        naveinimigas2.lifetime = width/5;
        inimigos2.add(naveinimigas2);
        naveinimigas2.tint = "yellow"
    }

    if(frameCount%500 === 0){
        naveinimigas3 = createSprite(width-100,100);
        naveinimigas3.addImage(et);
        naveinimigas3.y = Math.round(random(100,1000));
        naveinimigas3.scale = 0.2;
        naveinimigas3.velocityX = -5;
        naveinimigas3.lifetime = width/5;
        inimigos3.add(naveinimigas3);
        naveinimigas3.tint = "purple"
    }
    
    if(frameCount%400 === 0){
        naveinimigas4 = createSprite(width-100,100);
        naveinimigas4.addImage(et);
        naveinimigas4.y = Math.round(random(100,1000));
        naveinimigas4.scale = 0.2;
        naveinimigas4.velocityX = -5;
        naveinimigas4.lifetime = width/5;
        inimigos4.add(naveinimigas4);
        naveinimigas4.tint = "green"
    }

    if(frameCount%300 === 0){
        naveinimigas5 = createSprite(width-100,100);
        naveinimigas5.addImage(et);
        naveinimigas5.y = Math.round(random(100,1000));
        naveinimigas5.scale = 0.15;
        naveinimigas5.velocityX = -6;
        naveinimigas5.lifetime = width/5;
        inimigos5.add(naveinimigas5);
        naveinimigas5.tint = "white"
    }

    if(frameCount%200 === 0){
        naveinimigas6 = createSprite(width-100,100);
        naveinimigas6.addImage(et);
        naveinimigas6.y = Math.round(random(100,1000));
        naveinimigas6.scale = 0.12;
        naveinimigas6.velocityX = -12;
        naveinimigas6.lifetime = width/12;
        inimigos6.add(naveinimigas6);
        naveinimigas6.tint = "pink"
    }

}