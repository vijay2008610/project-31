var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=200
var score = 0;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  World = engine.world;
  ground = new Ground (width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80){
    divisions.push(new Division (k , height-divisionHeight/2,10,divisionHeight));
  }
    for (var j = 40;j <=width; j=j+50){
  plinkos.push(new Plinko(j,75));
}
for (var j = 15; j <=width-10; j=j+50){
  plinkos.push(new Plinko(j,175));
}
}
function draw() {
background("black");
  textSize(20);
  //text("Score :"+score,20,30);

  Engine.update(engine);
  ground.display();

  if (frameCount%60===0){
    particles.push(newParticles(random(width/2-10,width/2+10),10,10));
    score++;
  }
for (var j =0;j <particles.length; j++){
  particles[j].display();
}
for (var k =0;k <divisions.length; k++){
  divisions[k].display();
}
}