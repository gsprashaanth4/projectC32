class coin
{
    constructor(x,y)
    {
        var options = {isStatic:false , density:0.5 , restitution:0};
        this.body = Bodies.circle(x,y,12,options);
        this.Radius = 12
        this.image = loadImage("opp11.png");
        this.Visiblity = 225;
        World.add(world,this.body);
    }

    display()
    {
        if(this.body.speed < 9)
        {
            push();
            imageMode(CENTER);
            this.Visiblity = 225
            image(this.image, this.body.position.x, this.body.position.y, 24,24);
            pop();
        }else
        {
            push();
            World.remove(world, this.body);
            tint(225,this.Visiblity);
            if(this.Visiblity > -100)
            {
               this.Visiblity = this.Visiblity - 10;
            }
            image(this.image, this.body.position.x, this.body.position.y, 22, 22);
            pop();
        }
    }

    ks()
    {
        this.body.speed = 0;
    }

    
    out()
    {
            push();
            World.remove(world, this.body);
            tint(225,this.Visiblity);
            if(this.Visiblity > -100)
            {
               this.Visiblity = this.Visiblity - 5;
            }
            image(this.image, this.body.position.x, this.body.position.y, 25, 25);
            pop();
    }

    disk()
    {
        push();
        imageMode(CENTER);
        tint(225,this.Visiblity);
        this.Visiblity = 225;
        image(this.image, this.body.position.x, this.body.position.y, 25,25);
        World.add(world,this.body);
        pop(); 
    }
    
    
        
    score() 
    {
       
        if (this.Visiblity < 220 && score<126 && this.Visiblity < 225)
        {
          score = score + 1;
        }else
        {
            score = score;
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*display()
    {
        
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 25,25);
        pop();
    }
    */
}