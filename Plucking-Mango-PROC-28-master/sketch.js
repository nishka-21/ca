
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var can1,can2,can3,can4,can5,can6,can7,can8,can9,can10;
var world,boy;
var launchingForce=100;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 

	can1=new can(900,500,30);
  can2=new can(1000,500,30);
	can3=new can(1100,500,30);
	can4=new can(1200,500,30);
	can5=new can(950,430,30);
	can6=new can(1050,430,30);
	can7=new can(1150,430,30);
	can8=new can(1000,370,30);
	can9=new can(1100,370,30);
	can10=new can(1050,299,30);
	

	treeObj=new tree(700,250);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:235,y:420})
  // var render = Render.create({
  //   element: document.body,
  //   engine: engine,
  //   options: {
  //     width: 1300,
  //     height: 600,
  //     wireframes: false
  //   }
  // });
	
	Engine.run(engine);
 // Render.run(render);
}

function draw() {

  background(230);
  //frameRate(2)
 // Engine.update(engine)
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  //Engine.update(engine)
  

  treeObj.display();
  stoneObj.display();
  can1.display();
  can2.display();
  can3.display();
  can4.display();
  can5.display();
  can6.display();
  can7.display();
  can8.display();
  can9.display();
  can10.display();
  stoneObj.display();

  groundObject.display();
  launcherObject.display();
  detectollision(stoneObj,can1);
  detectollision(stoneObj,can2);
  detectollision(stoneObj,can3);
  detectollision(stoneObj,can4);
  detectollision(stoneObj,can5);
  detectollision(stoneObj,can6);
  detectollision(stoneObj,can7);
  detectollision(stoneObj,can8);
  detectollision(stoneObj,can9);
  detectollision(stoneObj,can10);
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectollision(lstone,lcan){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  canBodyPosition=lcan.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, canBodyPosition.x, canBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lcan.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lcan.body,false);
    }

  }