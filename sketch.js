const Engine =Matter.Engine
const Bodies=Matter.Bodies;
const World=Matter.World;
var myengine
var myworld
var box1,box2,ground1,pig1,log1,box3,box4,pig2,log2,bird1



function setup() {
createCanvas(1200,400)           
myengine=Engine.create()
myworld=myengine.world

box1=new box(700,320,70,70)
box2=new box(920,320,70,70 )

ground1=new ground(600,400,1200,20)
pig1=new pig(810,320,50,50)


log1=new log(810,260,300,20,PI) 


box3=new box(700,240,70,70)
box4=new box(920,240,70,70)
pig2=new pig(810,260,50,50)
log2=new log(810,180,300,20,PI)
bird1=new bird(100,100,50,50)
}

function draw() {           
background("black")
Engine.update(myengine)
box1.display()
box2.display()
ground1.display()
pig1.display()
log1.display()
box3.display()  
    pig2.display()
    box4.display()
    bird1.display()
log2.display()
}