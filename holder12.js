class holder12 
{
   constructor(bodyA,bodyB)
   {
    var options = {bodyA:bodyA,bodyB:bodyB,stiffness:0.9,length:1}
    this.chain1 = Constraint.create(options);
   
    World.add(world,this.chain1);
   }
    
  display()
  {
   var pointA = this.chain1.bodyA.position;
   var pointB = this.chain1.bodyB.position;
   
   push();
   strokeWeight(2);
   //stroke("gold");
   stroke(38,246,0);
   line(pointA.x,pointA.y,pointB.x,pointB.y);
   pop();
  }
}