class babyh
{
  constructor(x,y)
  {
   var options = {density:100000 , restitution:1.1 , friction:2 , isStatic:true};
   this.body = Bodies.circle(x,y,3,options);
   World.add(world,this.body);
  }
  
  display()
  {
   push();
   ellipseMode(RADIUS);
   fill("black");
   ellipse(this.body.position.x,this.body.position.y,3);
   pop();
  }
}