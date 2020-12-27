const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var box1,box2,box3,box4,box5,box6,box7,box8, box9;
var box10,box11,box12,box13,box14;
var box15,box16,box17,box18;
var slingshot;
var polygon;


var engine,world;

function preload(){

}
function setup(){
    createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(740,250,300,10)

    box1 = new Box(620,200,30,40)
    box2 = new Box(650,200,30,40)
    box3 = new Box(680,200,30,40)
    box4 = new Box(710,200,30,40)
    box5 = new Box(740,200,30,40)
    box6 = new Box(770,230,30,40)
    box7 = new Box(800,230,30,40)
    box8 = new Box(830,230,30,40)
    box9 = new Box(860,230,30,40)
    box10 = new Box(680,180,30,40)
    box11 = new Box(710,180,30,40)
    box12 = new Box(740,180,30,40)
    box13 = new Box(770,180,30,40)
    box14 = new Box(800,180,30,40)
    box15 = new Box(710,130,30,40)
    box16 = new Box(740,130,30,40)
    box17 = new Box(770,130,30,40)
    box18 = new Box(740,90,30,40)

    
   polygon = new Ball(200,200,50,50) 
   slingshot = new Slingshot(polygon.body,{x:200, y:150})
    
}
function draw(){
    background(0)


Engine.update(engine);

ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display()

polygon.display();
slingshot.display();

}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body)
    }}
