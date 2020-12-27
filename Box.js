class Box{
  constructor(x,y,width,height,angle){
  var options = {
      'restitution': 0.5,
      'friction': 1.0,
      'density':0.8
  }
  this.body = Bodies.rectangle(x,y,width,height,options)
  
  this.width = width;
  this.height = height;
  this.visibility = 255
  World.add(world, this.body);
  }
  display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      if(this.body.speed<5){
        push();
        translate(pos.x, pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("blue");
        rect(0,0,this.width,this.height)
        pop();
    }
      else{
        World.remove(world, this.body)
        
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visibility)   
      }
      }
      
      
      
  }
  