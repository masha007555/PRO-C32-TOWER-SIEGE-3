const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var ground1,ground2,ground3;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,
block11,block12,block13,block14,block15,block16,block17,block18,block19,
block20,block21,block22,block23,block24,block25;
var score = 0;
var backgroundImg;

function preload(){
  getBackground();
}

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(650,310,270,12);
  ground2=new Ground(1000,225,210,12);
  ground3=new Ground(600,390,1200,20);

  block1=new Box(560,275,30,40);
  block2=new Box(590,275,30,40);
  block3=new Box(620,275,30,40);
  block4=new Box(650,275,30,40);
  block5=new Box(680,275,30,40);
  block6=new Box(710,275,30,40);
  block7=new Box(740,275,30,40);
  block8=new Box1(590,235,30,40);
  block9=new Box1(620,235,30,40);
  block10=new Box1(650,235,30,40);
  block11=new Box1(680,235,30,40);
  block12=new Box1(710,235,30,40);
  block13=new Box2(620,195,30,40);
  block14=new Box2(650,195,30,40);
  block15=new Box2(680,195,30,40);
  block16=new Box3(650,155,30,40);
  block17=new Box(940,205,30,40);
  block18=new Box(970,205,30,40);
  block19=new Box(1000,205,30,40);
  block20=new Box(1030,205,30,40);
  block21=new Box(1060,205,30,40);
  block22=new Box2(970,165,30,40);
  block23=new Box2(1000,165,30,40);
  block24=new Box2(1030,165,30,40);
  block25=new Box1(1000,125,30,40);

  hexagon=new Polygon(200,200,20);

  sling=new SlingShot(hexagon.body,{x:180,y:190});
}

function draw() {
  //background("red");
  if (backgroundImg){
    background(backgroundImg);
  }else{
    background(170,50,20);
    stroke("black");
    strokeWeight(2);
    fill("YELLOW");
    textSize(30);
    fill("WHITE");
    text("LOADING...",200,370);
    text("NOTE:- If any image did not appear then refresh the game",400,370);
  }

  Engine.update(engine);
  
  ground1.display();
  ground2.display();
  ground3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  
  hexagon.display();

  sling.display();

  block1.Bscore();
  block2.Bscore();
  block3.Bscore();
  block4.Bscore();
  block5.Bscore();
  block6.Bscore();
  block7.Bscore();
  block8.Pscore();
  block9.Pscore();
  block10.Pscore();
  block11.Pscore();
  block12.Pscore();
  block13.Gscore();
  block14.Gscore();
  block15.Gscore();
  block16.Yscore();
  block17.Bscore();
  block18.Bscore();
  block19.Bscore();
  block20.Bscore();
  block21.Bscore();
  block22.Gscore();
  block23.Gscore();
  block24.Gscore();
  block25.Pscore();

  // if (background(170,50,20)){
  //   text("LOADING...",560,200);
  // }

  stroke("black");
  strokeWeight(2);
  fill("YELLOW");
  textSize(30);
  text("Use space bar to bring the Hexagon back to it's place",250,30);
  text("Score: "+score,1000,30);
}

function mouseDragged(){
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(hexagon.body,{x:100,y:200});
    sling.attacher(hexagon.body);
  }
}

async function getBackground(){
  //var responce = await fetch("http://worldtimeapi.org/api/timezone/America/Cordoba");
  var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  //var responce = await fetch("http://worldclockapi.com/api/json/est/now");
  var responceJSON = await responce.json();

  var datetime = responceJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour);

  if (hour>=06 & hour<=18){
    bg = ("day.jpg");
  }else{
    bg = ("night.jpg");
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}