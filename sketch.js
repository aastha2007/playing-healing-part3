const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

function preload(){

}
function setup(){
  createCanvas(1400,800)
  engine=Engine.create();
  world=engine.world;
  wall1=new Maze(700,750,300,PI/4)
  wall2=new Maze(100,100,300,PI/5)
  dr=new Doctor(200,200)
  v1=new Virus(150,300,50)

}
function draw(){
  background("pink")
  Engine.update(engine);
  textSize(15);
  text(mouseX+" ,"+mouseY,700,400);
  wall1.display();
  wall2.display();
  dr.display();
  v1.display();
}
