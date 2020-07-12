
class Ball {
    constructor(x, y,radius) {
var options={
                'restitution':0.6,
                'friction':1.0 ,
                'density':50.0,
                isStatic:false
            }
      this.body = Bodies.circle(x, y, radius/2.8, options);
      this.radius=radius;
      this.image=loadImage("sprites/paper.png");
      World.add(world, this.body);
    }
    display(){
     var pos= this.body.position;
   /*  pos.x=mouseX
     pos.y=mouseY  */
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image, 0, 0,this.radius,this.radius);
      pop();
    }
  }
  
  
