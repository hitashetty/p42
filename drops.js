class drops {
    constructor(x,y,r){
      var options = {
        'isStatic' : false,
        'friction' : 0.1,

      }
      this.body = Bodies.circle(x,y,5,options)
      this.r = r;
      this.r = 5;
      World.add(world,this.body);

    }
    display(){
      ellipseMode(RADIUS);
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipse(0,0,this.r,this.r);
        pop(); 
    }

    update(){
      if(this.rain.position.y> height){
        Matter.Body.setPosition(this.rain, {x:random(0,400),y:random(0,400)})
      }
    }
}