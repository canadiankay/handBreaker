const WallCollision = (canvas, ball) => {
  // prevent ball from going beyond our canvas frame
  // top and bottom
  if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= canvas.height) {
    ball.dy *= -1; //deflect it in the other directio
  }
  //side wall
  if (ball.x + ball.radius >= canvas.width || ball.x - ball.radius <= 0) {
    ball.dx *= -1
  }
}

export default WallCollision