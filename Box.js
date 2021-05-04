class Box{
    constructor(x,y,width,height){
var options={
  'density': 0.05 , 
  'restitution': 0.7 ,
  'friction' : 1 

}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world,this.body);
}
display(){
 var pos = this.body.position
 rectMode(CENTER);
 push();
translate(pos.x,pos.y);

rotate(this.body.angle)

 rect(0,0,this.width,this.height)
pop();

}
}