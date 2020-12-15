const Engine = Matter.Engine;
const World = Matter. World;
const Bodies = Matter.Bodies;


var myengine,myworld;
var Box1,Box2;
var ground1;
function setup() {
  createCanvas(400,400);

  myengine = Engine.create();
  myworld = myengine.world;

  Box1 = new Box(200,300,50,50);
  Box2= new Box (240,100,50,100)
  ground1=new ground(200,390,400,20)
}

function draw() {
  background(0);  
  
  Engine.update(myengine);
 Box1.display();
Box2.display();
ground1.display();

}