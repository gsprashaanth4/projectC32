class stone
{
  constructor(x,y)
  {
    var options = {density:1 , restitution:0 , friction:2 , isStatic:false};
    this.body = Bodies.circle(x,y,13,options);
    World.add(world,this.body);
  }
  
  display()
  {
   push();
   ellipseMode(RADIUS);
   fill("black");
   ellipse(this.body.position.x,this.body.position.y,13);
   pop();
  }
}