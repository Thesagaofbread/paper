
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var left;
var right;
var ball;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(200,690,1200,20);
	right = new Ground(610,650,20,100);
	left = new Ground(450,650,20,100);
	
    var ball_options = {

     restitution: 0.95
     

	};
    
	ball = Bodies.circle(200,100,40, ball_options);
    World.add(world,ball);

	

  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,40);

  ground.show();
  
  right.show();
  left.show();

  Engine.update(engine);
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW){
	
	
	function hForce(){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
		}	
	
	
		function vForce(){
		matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
		}


		hForce();
		vForce();


 }

}






