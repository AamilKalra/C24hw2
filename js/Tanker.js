class Tanker {
  constructor(x, y, width, height,angle) {
      var options = {
      isStatic: true
     }
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      Matter.Body.setAngle(this.body,angle)
      World.add(world,this.body);
    };

    display(){
      var pos = this.body.position;
      var angle=this.body.angle;
      rect(pos.x,pos.y,this.width,this.height);
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
      pop();
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look

    };
}
