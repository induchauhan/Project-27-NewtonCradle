class Bob
{
    constructor(x,y,radius,angle)
    {
        var options = {
            'isStatic':false,
            'restitution': 1,
            'friction':0.1,
            'density':3
        }
        this.radius=radius;   
        this.x=x;
        this.y=y;
        this.body= Bodies.circle(this.x,this.y,this.radius, options); 
        World.add(world,this.body);

    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius,this.radius);
        pop();
      }
}