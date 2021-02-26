
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, ground, polygon;


function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;


  
  

  // TOWER1
  ground = new Ground(620,200,220,10);
  platform = new Ground(150, 305, 300, 170);

}

function draw() {
  background("Grey");    
  Engine.update(engine);

  

 
  ground.display();
  platform.display();
  
}

