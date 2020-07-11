class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length:30
        }
        this.pointB=pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
     //   options.length=len();
    }
   /* len(){
        var b=0,h=0;
        if(mouseX<300){
            b=300-mouseX
        }
        else if(mouseX>300){
            b=mouseX-300;
        }
        if(mouseY<300){
            h=300-mouseY;
        }
        else if(mouseY>300){
            h=mouseY-300;
        }
        console.log(length);
        length=Math.sqrt((b*b)+(h*h));
    }*/

     fly(){
        this.launcher.bodyA=null;
        }

    display(){
        if(this.launcher.bodyA){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}