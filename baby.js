class baby
{
  constructor(x,y)
  {
    var options = {density:12 , restitution:0 , friction:2 , isStatic:false};
    this.body = Bodies.circle(x,y,1,options);
    World.add(world,this.body);
  }
  
  display()
  {
   push();
   ellipseMode(RADIUS);
   fill("black");
   ellipse(this.body.position.x,this.body.position.y,0.1);
   pop();
  }
}