class pig{
    constructor(x,y,w,h){
        var options={
            restitution:0.8,
            friction:0.3,
            density:1
        }
        this.body= Bodies.rectangle(x,y,w,h,options)
    this.w=w    
    this.h=h
        World.add(myworld,this.body)  
    }
    display(){
        var angle=this.body.angle
        push()
  translate(this.body.position.x,this.body.position.y);
  rotate(angle);
  rectMode(CENTER)
  strokeWeight(4)
  stroke("black")
fill("green");
rect(0,0,this.w,this.h);
pop()
    }
}