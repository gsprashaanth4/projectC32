class shoot
{
  constructor(x,y)
  {
    var options = {density:1 , restitution:0 , friction:2 , isStatic:true};
    this.body = Bodies.circle(x,y,13,options);
    this.radius = 13;
    this.image = loadImage("coin2.png");
    this.Visiblity = 225;
    World.add(world,this.body);
  }
  
  display()
  {
   push();
   imageMode(CENTER);
   image(this.image, this.body.position.x,this.body.position.y,23,23);
   pop();
  }

  
  take()
  {
    push();
    World.remove(world, this.body);
    tint(225,this.Visiblity);
    if(this.Visiblity > -100)
    {
       this.Visiblity = this.Visiblity - 5;
    }
    image(this.image, this.body.position.x, this.body.position.y, 22, 22);
    pop();

  }
  
}