
var dustbin1,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ballSprite,groundSprite;
var stick1,stick2;




function preload()
{
	dustbin=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)
	
	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	 	
	ground = Bodies.rectangle(width/2 , 690 , 800 ,10, {isStatic:true});
	World.add(world, ground);
    ball = new paper(50,500,50)
	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	background("pink");
	rect(ground.position.x,ground.position.y,800,10);
	ball.display();
    image(dustbin,600,450,200,250)
   }
  function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x:350,y:-480})
	   
	 }
   }
