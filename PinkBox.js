class Box1{
  constructor(x, y, width, height, angle){

    var options = {
      restitution:0.3,
      friction:1.5,
      density:1
    }

    this.Visibility = 255;
    this.boxObject = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.boxObject);
  }

  display(){
    //console.log(this.body.speed);
    if (this.boxObject.speed<3){
      push();
      strokeWeight(2);
      rectMode(CENTER);
      fill("pink");
      rect(this.boxObject.position.x,this.boxObject.position.y, this.width, this.height); 
      pop();
      }else{
      World.remove(world,this.boxObject);
      push();
      this.Visibility = this.Visibility-5;
      pop();
      }
    }
    Pscore(){
      if (this.Visibility<0 && this.Visibility>-105){
        score++;
        console.log("PINK");
      }
    }
}
     