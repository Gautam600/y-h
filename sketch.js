
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rectangle1,ground,rectangle2,rectangle3,ball;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rectangle1=new Rectangle(660,640,30,100);
	ground=new Ground(400,690,800,20);
	rectangle2=new Rectangle(540,640,30,100);
	rectangle3=new Rectangle(615,670,130,30);
	ball=new Paper(200,675,20);
	
	Engine.run(engine);

  
}


function draw() {

	Engine.update(engine);
  background(255,156,112);
 ground.display(); 
 rectangle1.display();
 rectangle2.display();
 rectangle3.display();
ball.display();
  drawSprites();
 
}
function keyPressed(){
    if(keyDown === UP_ARROW){
        Matter.Body.applyForce(ballObject.body,ballObject.body.position,{x:0,y:29});
    }
}


