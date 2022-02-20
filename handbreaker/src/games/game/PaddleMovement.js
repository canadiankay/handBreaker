
export function PaddleMovement(ctx, canvas, paddle) {
  
  //this Paddle class gets its info from data
  class thePaddle {
    constructor(x) {
      this.x = x;
      this.y = canvas.height - 30;
      this.width = paddle.width;
      this.height = 20;
      this.colors = ["purple", "green"];
    }
    // this draws AND moves paddle
    move() {
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.fillStyle = this.broke ? "white" : this.colors[1];
      ctx.strokeStyle = this.broke ? "white" : "red";
      ctx.lineWidth = 2;
      ctx.fillStyle = this.broke ? "white" : this.colors[0]; //this actually changes the color of the paddle to colors in line 11
      ctx.shadowBlur = 10;
      ctx.shadowColor = "yellow";
      ctx.strokeRect(this.x, this.y, this.width, this.height);
      ctx.fill();
    }
  }


  /////////////////////////////////////////////////////MOVE LOGIC//////////////////// 

  // paddle only moves along x axis so all we need is x
  let data = new thePaddle(paddle.x); 
  data.move();

  // now to move paddle-- but we need to make sure it doesnt move beyond canvas width
  if (paddle.x <= 0) {
    paddle.x = 0;
    
  } else if (paddle.x + paddle.width >= canvas.width) {
    paddle.x = canvas.width - paddle.width; //move paddle to the right by deltax
  }
  
};










