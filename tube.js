class tube 
{
    constructor(x,y)
    {
        var options = {isStatic:true , density:20};
        this.body = Bodies.rectangle(x, y,10,130, options);
        this.width = 10;
        this.height = 130;
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        push();
        //translate(pos.x, pos.y);
        fill("black");
        rectMode(CENTER);
        rect(pos.x, pos.y, 10,130);
        pop();
    }
    
}