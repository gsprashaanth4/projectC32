class wall 
{
    constructor(x,y)
    {
        var options = {isStatic:true , density:20};
        this.body = Bodies.rectangle(x, y,1400,35, options);
        this.width = 1400;
        this.height = 35;
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        push();
        //translate(pos.x, pos.y);
        fill("black");
        rectMode(CENTER);
        rect(pos.x, pos.y, 1400,35);
        pop();
    }
    
}