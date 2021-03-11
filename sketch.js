
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var roof,bob1,bob2,bob3,bob4,bob5,r1,r2,r3,r4,r5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(200,300,50);
	bob2=new Bob(300,300,50);
	bob3=new Bob(400,300,50);
	bob4=new Bob(500,300,50);
	bob5=new Bob(600,300,50);
	roof=new Roof(400,100,600,20);
	r1=new Rope(bob1.body,roof.body,-100*2,0);
	r2=new Rope(bob2.body,roof.body,-50*2,0);
	r3=new Rope(bob3.body,roof.body,0*2,0);
	r4=new Rope(bob4.body,roof.body,50*2,0);
	r5=new Rope(bob5.body,roof.body,100*2,0);
	Engine.run(engine);
  
}


function draw() {
  background("white");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();

  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ 
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1500,y:-1500}); 
	} 
} 



