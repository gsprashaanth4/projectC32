const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;

var engine;
var world;

var bg;

var PLAY = 1;
var END = 2;
var gameState = PLAY;


var mouseTime = 0;
var shootCount = 0;
var time = 0;
var score = 0;
var command = 0;

var mC;

var reset;

function preload()
{
  bg = loadImage("bg2.0.jpg");
}

function setup()
{
 createCanvas(1000,650);
 
 engine = Engine.create();
 world = engine.world; 
  
 baby1 = new babyh(230,300);
 baby2 = new baby(110,300); 
 baby3 = new baby(120,300); 
 baby4 = new baby(130,300); 
 baby5 = new baby(140,300); 
 baby6 = new baby(150,300);
 baby7 = new baby(160,300); 
 baby8 = new baby(170,300); 
 baby9 = new baby(180,300); 
 baby10 = new baby(190,300);   
 baby11 = new baby(200,300);
 baby12 = new baby(210,300); 
 baby13 = new baby(220,300); 
 baby14 = new baby(230,300); 
 baby15 = new baby(240,300); 
 baby16 = new baby(250,300);
 baby17 = new baby(260,300); 
 baby18 = new baby(270,300); 
 baby19 = new baby(280,300); 
 baby20 = new babyh(270,300);    
 
 var score = 0; 
 
 baby21 = new babyh(730,300);
 baby22 = new baby(610,300); 
 baby23 = new baby(620,300); 
 baby24 = new baby(630,300); 
 baby25 = new baby(640,300); 
 baby26 = new baby(650,300);
 baby27 = new baby(660,300); 
 baby28 = new baby(670,300); 
 baby29 = new baby(680,300); 
 baby30 = new baby(690,300);   
 baby31 = new baby(700,300);
 baby32 = new baby(710,300); 
 baby33 = new baby(720,300); 
 baby34 = new baby(730,300); 
 baby35 = new baby(740,300); 
 baby36 = new baby(750,300);
 baby37 = new baby(760,300); 
 baby38 = new baby(770,300); 
 baby39 = new baby(780,300); 
 baby40 = new babyh(770,300);   
 
 baby41 = new babyh(480,200);
 baby42 = new baby(480,200); 
 baby43 = new baby(480,200); 
 baby44 = new baby(430,200); 
 baby45 = new baby(440,200); 
 baby46 = new baby(450,200);
 baby47 = new baby(460,200); 
 baby48 = new baby(470,200); 
 baby49 = new baby(480,200); 
 baby50 = new baby(490,200);   
 baby51 = new baby(500,200);
 baby52 = new baby(510,200); 
 baby53 = new baby(520,200); 
 baby54 = new baby(530,200); 
 baby55 = new baby(540,200); 
 baby56 = new baby(550,200);
 baby57 = new baby(560,200); 
 baby58 = new baby(570,200); 
 baby59 = new baby(580,200); 
 baby60 = new babyh(520,200);     
 
 baby61 = new babyh(260,100);
 baby62 = new baby(210,100); 
 baby63 = new baby(220,100); 
 baby64 = new baby(230,100); 
 baby65 = new baby(240,100); 
 baby66 = new baby(250,100);
 baby67 = new baby(260,100); 
 baby68 = new baby(270,100); 
 baby69 = new baby(280,100); 
 baby70 = new baby(290,100);   
 baby71 = new baby(300,100);
 baby72 = new baby(310,100); 
 baby73 = new baby(320,100); 
 baby74 = new baby(330,100); 
 baby75 = new baby(340,100); 
 baby76 = new baby(350,100);
 baby77 = new baby(360,100); 
 baby78 = new baby(370,100); 
 baby79 = new baby(380,100); 
 baby80 = new babyh(300,100);     

 baby81 = new babyh(710,100);
 baby82 = new baby(710,100); 
 baby83 = new baby(720,100); 
 baby84 = new baby(730,100); 
 baby85 = new baby(740,100); 
 baby86 = new baby(750,100);
 baby87 = new baby(760,100); 
 baby88 = new baby(770,100); 
 baby89 = new baby(780,100); 
 baby90 = new baby(790,100);   
 baby91 = new baby(700,100);
 baby92 = new baby(710,100); 
 baby93 = new baby(720,100); 
 baby94 = new baby(730,100); 
 baby95 = new baby(740,100); 
 baby96 = new baby(750,100);
 baby97 = new baby(760,100); 
 baby98 = new baby(770,100); 
 baby99 = new baby(780,100); 
 baby100 = new babyh(750,100);
 
 hold1 = new babyhh(385,410);
 hold2 = new babyhh(615,410); 
  
 sh1 = new shoot(500,350); 
 sh2 = new shoot(150,100);
 sh3 = new shoot(150,150);
 sh4 = new shoot(150,200);
 sh5 = new shoot(150,250); 
  
 c1 = new coin(250,120);
 c2 = new coin(750,120);
 c3 = new coin(280,10); 
 c4 = new coin(730,10);
 c5 = new coin(500,150);

 w1 = new wall(300,630);

 t1 = new tube(168,580);
 t2 = new tube(131,580);
  
 holder1 = new holder12(baby1.body, baby2.body);
 holder2 = new holder12(baby2.body, baby3.body); 
 holder3 = new holder12(baby3.body, baby4.body); 
 holder4 = new holder12(baby4.body, baby5.body); 
 holder5 = new holder12(baby5.body, baby6.body); 
 holder6 = new holder12(baby6.body, baby7.body);
 holder7 = new holder12(baby7.body, baby8.body); 
 holder8 = new holder12(baby8.body, baby9.body); 
 holder9 = new holder12(baby9.body, baby10.body); 
 holder11 = new holder12(baby10.body, baby11.body);
 holder22 = new holder12(baby11.body, baby12.body);
 holder33 = new holder12(baby12.body, baby13.body); 
 holder44 = new holder12(baby13.body, baby14.body); 
 holder55 = new holder12(baby14.body, baby15.body); 
 holder66 = new holder12(baby15.body, baby16.body);
 holder77 = new holder12(baby16.body, baby17.body); 
 holder88 = new holder12(baby17.body, baby18.body); 
 holder99 = new holder12(baby18.body, baby19.body);  
 holder111 = new holder12(baby19.body, baby20.body);
  
 holder222 = new holder12(baby21.body, baby22.body);
 holder333 = new holder12(baby22.body, baby23.body); 
 holder444 = new holder12(baby23.body, baby24.body); 
 holder555 = new holder12(baby24.body, baby25.body); 
 holder666 = new holder12(baby25.body, baby26.body); 
 holder777 = new holder12(baby26.body, baby27.body);
 holder888 = new holder12(baby27.body, baby28.body); 
 holder999 = new holder12(baby28.body, baby29.body); 
 holder1111 = new holder12(baby29.body, baby30.body); 
 holder2222 = new holder12(baby30.body, baby31.body);
 holder3333 = new holder12(baby31.body, baby32.body); 
 holder4444 = new holder12(baby32.body, baby33.body); 
 holder5555 = new holder12(baby33.body, baby34.body); 
 holder6666 = new holder12(baby34.body, baby35.body); 
 holder7777 = new holder12(baby35.body, baby36.body);
 holder8888 = new holder12(baby36.body, baby37.body); 
 holder9999 = new holder12(baby37.body, baby38.body); 
 holder11111 = new holder12(baby38.body, baby39.body);  
 holder22222 = new holder12(baby39.body, baby40.body); 
 
 holder33333 = new holder12(baby41.body, baby42.body);
 holder44444 = new holder12(baby42.body, baby43.body); 
 holder55555 = new holder12(baby43.body, baby44.body); 
 holder66666 = new holder12(baby44.body, baby45.body); 
 holder77777 = new holder12(baby45.body, baby46.body); 
 holder88888 = new holder12(baby46.body, baby47.body);
 holder99999 = new holder12(baby47.body, baby48.body); 
 holder111111 = new holder12(baby48.body, baby49.body); 
 holder222222 = new holder12(baby49.body, baby50.body); 
 holder333333 = new holder12(baby50.body, baby51.body);
 holder444444 = new holder12(baby51.body, baby52.body); 
 holder555555 = new holder12(baby52.body, baby53.body); 
 holder666666 = new holder12(baby53.body, baby54.body); 
 holder777777 = new holder12(baby54.body, baby55.body); 
 holder888888 = new holder12(baby55.body, baby56.body);
 holder777777 = new holder12(baby56.body, baby57.body); 
 holder999999 = new holder12(baby57.body, baby58.body); 
 holder1111111 = new holder12(baby58.body, baby59.body);  
 holder2222222 = new holder12(baby59.body, baby60.body); 
 
 holder3333333 = new holder12(baby61.body, baby62.body);
 holder4444444 = new holder12(baby62.body, baby63.body); 
 holder5555555 = new holder12(baby63.body, baby64.body); 
 holder6666666 = new holder12(baby64.body, baby65.body); 
 holder7777777 = new holder12(baby65.body, baby66.body); 
 holder8888888 = new holder12(baby66.body, baby67.body);
 holder9999999 = new holder12(baby67.body, baby68.body); 
 holder11111111 = new holder12(baby68.body, baby69.body); 
 holder22222222 = new holder12(baby69.body, baby70.body); 
 holder33333333 = new holder12(baby70.body, baby71.body);
 holder44444444 = new holder12(baby71.body, baby72.body); 
 holder55555555 = new holder12(baby72.body, baby73.body); 
 holder66666666 = new holder12(baby73.body, baby74.body); 
 holder77777777 = new holder12(baby74.body, baby75.body); 
 holder88888888 = new holder12(baby75.body, baby76.body);
 holder99999999 = new holder12(baby76.body, baby77.body); 
 holder111111111 = new holder12(baby77.body, baby78.body); 
 holder222222222 = new holder12(baby78.body, baby79.body);  
 holder333333333 = new holder12(baby79.body, baby80.body); 

 holder444444444 = new holder12(baby82.body, baby83.body); 
 holder555555555 = new holder12(baby83.body, baby84.body); 
 holder666666666 = new holder12(baby84.body, baby85.body); 
 holder777777777 = new holder12(baby85.body, baby86.body); 
 holder888888888 = new holder12(baby86.body, baby87.body);
 holder999999999 = new holder12(baby87.body, baby88.body); 
 holder1111111111 = new holder12(baby88.body, baby89.body); 
 holder2222222222 = new holder12(baby89.body, baby90.body); 
 holder3333333333 = new holder12(baby90.body, baby91.body);
 holder4444444444 = new holder12(baby91.body, baby92.body); 
 holder5555555555 = new holder12(baby92.body, baby93.body); 
 holder6666666666 = new holder12(baby93.body, baby94.body); 
 holder7777777777 = new holder12(baby94.body, baby95.body); 
 holder8888888888 = new holder12(baby95.body, baby96.body);
 holder9999999999 = new holder12(baby96.body, baby97.body); 
 holder11111111111 = new holder12(baby97.body, baby98.body); 
 holder22222222222 = new holder12(baby98.body, baby99.body);  
 holder33333333333 = new holder12(baby99.body, baby100.body);
 holder3333333333333 = new holder12(baby81.body, baby82.body);
 
 
  const mouse = Mouse.create(canvas.elt);
  const options = {mouse:mouse}
  
  mC = Matter.MouseConstraint.create(engine,options);
  World.add(world,mC);
 
  mouse.pixelRatio = pixelDensity();
  
  sl1 = new slingshot(sh1.body,{x:500,y:410});

}

function draw()
{
  Engine.update(engine);
  
  background(bg);
  
if(gameState === PLAY) 
 {
  baby1.display();
  baby2.display(); 
  baby3.display(); 
  baby4.display(); 
  baby5.display(); 
  baby6.display();
  baby7.display(); 
  baby8.display(); 
  baby9.display(); 
  baby10.display();   
  baby11.display();
  baby12.display(); 
  baby13.display(); 
  baby14.display(); 
  baby15.display(); 
  baby16.display();
  baby17.display(); 
  baby18.display(); 
  baby19.display(); 
  baby20.display();       

  baby21.display();
  baby22.display(); 
  baby23.display(); 
  baby24.display(); 
  baby25.display(); 
  baby26.display();
  baby27.display(); 
  baby28.display(); 
  baby29.display(); 
  baby30.display();   
  baby31.display();
  baby32.display(); 
  baby33.display(); 
  baby34.display(); 
  baby35.display(); 
  baby36.display();
  baby37.display(); 
  baby38.display(); 
  baby39.display(); 
  baby40.display();      
  
  baby41.display();
  baby42.display(); 
  baby43.display(); 
  baby44.display(); 
  baby45.display(); 
  baby46.display();
  baby47.display(); 
  baby48.display(); 
  baby49.display(); 
  baby50.display();    
  baby51.display();
  baby52.display(); 
  baby53.display(); 
  baby54.display(); 
  baby55.display(); 
  baby56.display();
  baby57.display(); 
  baby58.display(); 
  baby59.display(); 
  baby60.display(); 
  
  w1.display();

  baby61.display();
  baby62.display(); 
  baby63.display(); 
  baby64.display(); 
  baby65.display(); 
  baby66.display();
  baby67.display(); 
  baby68.display(); 
  baby69.display(); 
  baby70.display();   
  baby71.display();
  baby72.display(); 
  baby73.display(); 
  baby74.display(); 
  baby75.display(); 
  baby76.display();
  baby77.display(); 
  baby78.display(); 
  baby79.display(); 
  baby80.display();     
 
  baby81.display();
  baby82.display(); 
  baby83.display(); 
  baby84.display(); 
  baby85.display(); 
  baby86.display();
  baby87.display(); 
  baby88.display(); 
  baby89.display(); 
  baby90.display();   
  baby91.display();
  baby92.display(); 
  baby93.display(); 
  baby94.display(); 
  baby95.display(); 
  baby96.display();
  baby97.display(); 
  baby98.display(); 
  baby99.display(); 
  baby100.display();

  t1.display();
  t2.display();
 
  holder3333333333333.display();
 
   for (var i = 0; i < 710; i=i+20) 
   {
     push();
     strokeWeight(2);
     stroke("gold");
     line(500,i,500,i+10);
     pop();
   } 

   c1.display();
   c2.display();
   c3.display();
   c4.display();
   c5.display();  
  
   sh1.display();
   sh2.display();
   sh3.display();
   sh4.display();
   sh5.display();
  
   c1.score();
   c2.score();
   c3.score();
   c4.score();
   c5.score();

   holder1.display();
   holder2.display(); 
   holder3.display(); 
   holder4.display(); 
   holder5.display(); 
   holder6.display();
   holder7.display(); 
   holder8.display(); 
   holder9.display(); 
   holder11.display();
   holder22.display();
   holder33.display(); 
   holder44.display(); 
   holder55.display(); 
   holder66.display();
   holder77.display(); 
   holder88.display(); 
   holder99.display();  
   holder111.display();
    
   holder222.display();
   holder333.display(); 
   holder444.display(); 
   holder555.display(); 
   holder666.display(); 
   holder777.display();
   holder888.display(); 
   holder999.display(); 
   holder1111.display(); 
   holder2222.display();
   holder3333.display(); 
   holder4444.display(); 
   holder5555.display(); 
   holder6666.display(); 
   holder7777.display();
   holder8888.display(); 
   holder9999.display(); 
   holder11111.display();  
   holder22222.display(); 
   
   holder33333.display()
   holder44444.display() 
   holder55555.display() 
   holder66666.display() 
   holder77777.display() 
   holder88888.display()
   holder99999.display() 
   holder111111.display(); 
   holder222222.display(); 
   holder333333.display();
   holder444444.display(); 
   holder555555.display(); 
   holder666666.display(); 
   holder777777.display(); 
   holder888888.display();
   holder777777.display(); 
   holder999999.display(); 
   holder1111111.display();  
   holder2222222.display(); 
   
   holder3333333.display();
   holder4444444.display(); 
   holder5555555.display(); 
   holder6666666.display(); 
   holder7777777.display(); 
   holder8888888.display();
   holder9999999.display(); 
   holder11111111.display(); 
   holder22222222.display(); 
   holder33333333.display();
   holder44444444.display(); 
   holder55555555.display(); 
   holder66666666.display(); 
   holder77777777.display(); 
   holder88888888.display();
   holder99999999.display(); 
   holder111111111.display(); 
   holder222222222.display();  
   holder333333333.display(); 
  
   holder444444444.display(); 
   holder555555555.display(); 
   holder666666666.display(); 
   holder777777777.display(); 
   holder888888888.display();
   holder999999999.display(); 
   holder1111111111.display(); 
   holder2222222222.display(); 
   holder3333333333.display();
   holder4444444444.display(); 
   holder5555555555.display(); 
   holder6666666666.display(); 
   holder7777777777.display(); 
   holder8888888888.display();
   holder9999999999.display(); 
   holder11111111111.display(); 
   holder22222222222.display();  
   holder33333333333.display();
   holder3333333333333.display();  
   
  sl1.display();
  
  hold1.display(); 
  hold2.display(); 
 
  getTime();

  if(time === 1)
  {
    fill("white");
    text("It is good to sleep now (using API calls)" , 515, 635);
  }

  if(time === 2)
  {
    fill("white");
    text("It is not healthy to watch screen this early (using API calls)" , 515, 635);
  }

  if(time === 3)
  {
    fill("white");
    text("Good Morning (using API calls)" , 515, 635);
  }

  if(time === 4)
  {
    fill("white");
    text("Good Afernoon (using API calls)" , 515, 635);
  }
  
  if(time === 5)
  {
    fill("white");
    text("Good evening (using API calls) " , 515, 635);
  }

  if(time === 6)
  {
    fill("white");
    text("Good Night (using API calls)" , 515, 635);
  }

  if(command < 1)
  { 
    push();
    fill("white");
    textSize(15);
    text("press SPACE key to start", 50, 50);
    pop();
  }
  
  fill("white");
  textSize(15);
  text("hit the balls to score",820,50);

  if(command > 0 && shootCount < 9) 
  {
    push();
    fill("white");
    textSize(12);
    text("press SPACE key to load next shooter", 50, 50);
    pop();
  }

  if(shootCount > 8)
  {
    push();
    fill("white");
    textSize(15);
    text("Game Over", 50, 50);
    pop();
  }

  if(shootCount === 0)
  {
    sl1.attach(sh1.body);
  }
  
  fill("white");
  text("score: " + score , 10, 635);
  

  if(shootCount > 8)
  {
    setTimeout(() => {gameState = END;}, 6000);                                       
  }
 }
 
 if(gameState === END)
 {
    push();
    textSize(25);
    fill("white"); 
    text(" Your score: " + score , 415, 260);
    pop();

    push();
    textSize(20);
    fill("white");
    text("please reload the page to play again", 340, 335);
    pop();

    w2 = new wall(300,630);
    w2.display();

    //setTimeout(() => {restart();}, 1000);
 }
}

function mousePressed()
{
   if(this.sl1.bodyA === sh1.body)
   {
     Matter.Body.setPosition(sh1.body, {x: mouseX , y: mouseY});
   }   
}

function mouseReleased()
{
   push(); 
   setTimeout(() => {sl1.fly();}, 40);
   pop();
   setTimeout(() => {shootCount = shootCount+1;}, 0);
}

function keyPressed()
{
    if(keyCode === 32)
    {
       
       if(command < 1)
       {
          command = command+1;
       }      

      
      if(shootCount === 2)
      {
        mouseTime = 0;
        sl1.attach(sh2.body);
      }

      if(shootCount === 4)
      {
        mouseTime = 0;
        sl1.attach(sh3.body);
      }

      if(shootCount === 6)
      {
        mouseTime = 0;
        sl1.attach(sh4.body);
      }

      if(shootCount === 8)
      {
        mouseTime = 0;
        sl1.attach(sh5.body);
      }

      
      if(this.sl1.bodyA = sh1.body)
      {
        Matter.Body.setStatic(sh1.body,false);
         
      }
    
      if(this.sl1.bodyA = sh2.body)
      {
        Matter.Body.setStatic(sh2.body,false);
      }  
      
      if(this.sl1.bodyA = sh3.body)
      { 
        Matter.Body.setStatic(sh3.body,false);
      }   
      
      if(this.sl1.bodyA = sh4.body)
      {
        Matter.Body.setStatic(sh4.body,false);
      }    
      
      if(this.sl1.bodyA = sh5.body)
      {
        Matter.Body.setStatic(sh5.body,false);
      }    
   }
} 

async function getTime()
{
  var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var respJSON = await response.json();
  
  var datetime = respJSON.datetime;
  var hour1 = datetime.slice(11,13);
  var hour2 = datetime.slice(14,16);
  var hour3 = datetime.slice(17,19);

  var hour = hour1 + hour2 + hour3;
  
  if(hour > 000000 && hour < 040000 )
  {
    time = 1; 
  }

  if(hour > 040000 && hour < 060000)
  {
    time = 2;
  }

  if(hour > 060000 && hour < 120000)
  {
    time = 3;
  }

  if(hour > 120000 && hour < 160000)
  {
    time = 4;
  }

  if(hour > 160000 && hour < 220000)
  {
    time = 5;
  }

  if(hour > 220000 && hour < 240000)
  {
    time = 6;
  }
}

/*
function restart()
{
  Matter.Body.setPosition(sh1.body, {x:500, y:300});
  Matter.Body.setPosition(sh2.body, {x:150, y:350});
  Matter.Body.setPosition(sh3.body, {x:150, y:500});
  Matter.Body.setPosition(sh4.body, {x:150, y:450});
  Matter.Body.setPosition(sh5.body, {x:150, y:400});

  Matter.Body.setPosition(c1.body, {x:250, y:280});  
  Matter.Body.setPosition(c2.body, {x:750, y:280});
  Matter.Body.setPosition(c3.body, {x:280, y:100});
  Matter.Body.setPosition(c4.body, {x:730, y:100});
  Matter.Body.setPosition(c5.body, {x:500, y:210});

  sl1.attach(sh1.body);

  c1.ks();
  c2.ks();
  c3.ks();
  c4.ks();
  c5.ks();

  shootCount = 0;
  score = 0; 
  gameState = PLAY;
}
*/
