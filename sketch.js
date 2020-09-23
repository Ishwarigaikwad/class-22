//Physics Engine creation
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//In order to access bodies and world inside engine, we need variables

var myEngine, myWorld;

var ball,ground;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var ground_options = {
    isStatic : true
  }

  var ball_options = {
    restitution : 1.0
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(myWorld,ball);  

  ground = Bodies.rectangle(200,390,400,10,ground_options);
  World.add(myWorld,ground);  

  console.log(ball.position);
 
}

function draw() {
  background("skyblue");   
  Engine.update(myEngine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);

  ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20,20);


 
}