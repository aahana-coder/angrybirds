class bird{
    constructor(x,y,w,h){
        var options={
            restitution:0.8,
            friction:1,
            density:1.5
        }
        this.body= Bodies.rectangle(x,y,w,h,options)
    this.w=w    
    this.h=h
        World.add(myworld,this.body)  
    }
    display(){
        var angle=this.body.angle
       this.body.position.x=mouseX
       this.body.position.y=mouseY
        push()
  translate(this.body.position.x,this.body.position.y);
  rotate(angle);
  rectMode(CENTER)
  strokeWeight(4)
  stroke("black")
fill("red");
rect(0,0,this.w,this.h);
pop()
    }
}