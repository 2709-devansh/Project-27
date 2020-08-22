class paper{
    constructor(x,y,radius){
       var options={
           isStatic: false,
           friction: 0.4,
           density: 1.2,
           restitution: 1.1
       }         
       this.body = Bodies.circle(x,y,radius,options);
       this.radius = radius;
       World.add(world, this.body);
    }
    display(){
       var pos = this.body.position
       ellipseMode(RADIUS);
       fill("yellow");
       circle(pos.x,pos.y,this.radius); 
    }
}