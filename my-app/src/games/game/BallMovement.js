// we need to reference ctx each time
export function BallMovement(ctx, ball) {
  let data = new Ball(ball.x, ball.y, ball.radius) 
  

  // draw this new ball taking in the initial x, y and radius
  data.draw(ctx);

  //moves ball along x and y axises and icnrement by a certain#
  ball.x += ball.dx;
  ball.y += ball.dy;

}
  //ball should have a class to handle information
  class Ball {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    draw(ctx) { //ctx gets hold of canvas
      ctx.beginPath();
      //Should clear the canvas before each frame
      ctx.clearRect(0, 0, this.width, this.height); // clears each new render of the circle so doesnt leave a trail
      // takes in the ball's x and y position, radius and start angle and end angle (which is angle of circle)
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle="yellow";
      
  
      ctx.strokeStyle="red";
      ctx.strokeWidth=5;

      ctx.fill(); //to fill circle
      ctx.stroke(); //to draw circle
  
      ctx.closePath();
    }
  
}











