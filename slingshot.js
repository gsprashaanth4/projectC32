class slingshot
{
    constructor(bodyA, pointB)
    {
        var options = {bodyA: bodyA, pointB: pointB, stiffness: 0.2, length: 10 };
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    attach(body)
    {
      this.sling.bodyA = body;
    }
    
    fly()
    {
      this.sling.bodyA = null;
    }

    display()
    {
        
        
        if(this.sling.bodyA)
        {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            push();
            stroke(48,22,8);
            
            if(pointA.y < 400) 
            {
                push();
                strokeWeight(6);
                stroke("darkblue");
                line(pointA.x, pointA.y - 10, pointB.x-115, pointB.y);
                line(pointA.x, pointA.y - 10, pointB.x+115, pointB.y);
                pop();

                push();
                strokeWeight(1.2);
                stroke("white");
                line(pointA.x, pointA.y - 10, pointB.x-115, pointB.y);
                line(pointA.x, pointA.y - 10, pointB.x+115, pointB.y);
                pop();
                
            }else
            {
                push();
                strokeWeight(6);
                stroke("darkblue")
                line(pointA.x, pointA.y + 10, pointB.x-115, pointB.y);
                line(pointA.x, pointA.y + 10, pointB.x+115, pointB.y);
                pop();

                push();
                strokeWeight(1.2);
                stroke("white");
                line(pointA.x, pointA.y + 10, pointB.x-115, pointB.y);
                line(pointA.x, pointA.y + 10, pointB.x+115, pointB.y);
                pop();
            }
            pop();
        }
    }
    
}