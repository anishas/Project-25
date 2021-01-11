
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1, ground, dustbin1 , dustbin2, dustbin3

function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(100,100,20);

	ground = new Ground(1000,690,2000,20);

	dustbin3 = new Dustbin(1080,670,150,20);

	dustbin1 = new Dustbin(1000,645,20,70);

	dustbin2 = new Dustbin(1160,645,20,70);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  ball1.display();
  ground.display();
  dustbin3.display();
  dustbin1.display();
  dustbin2.display();
 
  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
	}
}

