const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,poog1,poog40269013,lwog1,lwog2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);


    ground = new Ground(600,height,1200,20)


    poog1 = new Poogy(810,350);
    poog40269013 = new Poogy(810,220);


    lwog1 = new Lwog(810,260,300,PI/2);
    lwog2 = new Lwog(810,180,300,PI/2);
 
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    poog1.display();
    poog40269013.display();
    lwog1.display();
    lwog2.display();
}