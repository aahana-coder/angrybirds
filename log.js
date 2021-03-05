class log{

    constructor(x,y,w,h,a){
        var options={
            restitution:0.8,
            friction:1,
            density:1
        }
        this.body= Bodies.rectangle(x,y,w,h,options)
    this.w=w    
    this.h=h
    Matter.Body.setAngle(this.body,a)
        World.add(myworld,this.body)  
    }
    display(){
        var angle=this.body.angle
        push()
  translate(this.body.position.x,this.body.position.y);
  rotate(angle);
 strokeWeight(4)
  stroke("black")
fill(139,69,19);
rect(0,0,this.w,this.h);
pop()
    }
}