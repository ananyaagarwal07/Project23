var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1000, 500);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true, friction:1});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 485, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	redb = Bodies.rectangle(width/2,ground.position.y-15,200,20);
	World.add(world,redb);
	redl = Bodies.rectangle(width/2-100,ground.position.y-55,20,100);
	World.add(world,redl);
	redr = Bodies.rectangle(width/2+100,ground.position.y-55,20,100);
	World.add(world,redr);

	red1 = createSprite(width/2,ground.position.y-15,200,20);
	red2 = createSprite(width/2-100,ground.position.y-55,20,100);
	red3 = createSprite(width/2+100,ground.position.y-55,20,100);
	red1.shapeColor = color("red");
	red2.shapeColor = color("red");
	red3.shapeColor = color("red");
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);    
  }
}