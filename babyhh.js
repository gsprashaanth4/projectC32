class babyhh
{
  constructor(x,y)
  {
   var options = {density:100000 , restitution:1.1 , friction:2 , isStatic:true};
   this.body = Bodies.circle(x,y,3,options);
   this.r = 5;
   this.image = loadImage("holder.png");
   World.add(world,this.body);
  }
  
  display()
  {
   push();
   imageMode(CENTER);
   fill("black");
   image(this.image, this.body.position.x,this.body.position.y,20,20);
   pop();
  }
}