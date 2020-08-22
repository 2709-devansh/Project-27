var roof;
var bob1, bob2, bob3, bob4, bob5, bob6, bob7;
var rope1, rope2, rope3, rope4, rope5, rope6, rope7;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1350,670);

	engine = Engine.create();
	world = engine.world;

	roof = new ground(675,200,500,30);

	bob1 = new paper(495,450,30);
	bob2 = new paper(555,450,30);
	bob3 = new paper(615,450,30);
	bob4 = new paper(675,450,30);
	bob5 = new paper(735,450,30);
	bob6 = new paper(795,450,30);
	bob7 = new paper(855,450,30);

	rope1 = new rope(bob1.body,roof.body,-bob1.radius*6,0);
	rope2 = new rope(bob2.body,roof.body,-bob2.radius*4,0);
	rope3 = new rope(bob3.body,roof.body,-bob3.radius*2,0);
	rope4 = new rope(bob4.body,roof.body,-bob4.radius*0,0);
	rope5 = new rope(bob5.body,roof.body,-bob5.radius*-2,0);
	rope6 = new rope(bob6.body,roof.body,-bob6.radius*-4,0);
	rope7 = new rope(bob7.body,roof.body,-bob7.radius*-6,0);

	Engine.run(engine);  
}

function draw() {
  background("turquoise");  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob7.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  rope7.display();
  drawSprites(); 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-200});
	}
}


