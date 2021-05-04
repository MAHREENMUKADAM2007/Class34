class Slingshot{
    constructor(bodyA, pointB){
    var options =
    {
        bodyA:bodyA , 
        pointB: pointB  , 
        stiffness: 1.2 , 
        length: 250
    }
    this.sling = Matter.Constraint.create(options);
    this.pointB = pointB
    World.add(world,this.sling);
    }       
    display()
    {
      var pos1 = this.sling.bodyA.position  
      var pos2 = this.pointB
      line(pos1.x,pos1.y,pos2.x,pos2.y);  
       
    }
}   
