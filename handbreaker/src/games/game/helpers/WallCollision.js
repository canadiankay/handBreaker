const WallCollision = (canvas, ball, player, paddle) => {
  // prevent ball from going beyond our canvas frame
  // top and bottom
  // if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= canvas.height) {//// the second half of this handles when the ball hits the bottom which we no longer want for score
  
  //when ball hits top wall
  if (ball.y - ball.radius < 0) {
    ball.dy *= -1;
  }

  // when ball hits bottom wall
  if (ball.y + ball.radius > canvas.height) {
    player.lives -= 1
    //deflect ball
    //ball.dy *= -1

    // reset ball from the middle of paddle after it hits the bottom wall
    ball.x = paddle.x;
    ball.y = paddle.y - 30;
    ball.dx = 6 * (Math.random() * 2 - 1);
    ball.dy = -6;  //deflect ball

  }

  //handles side walls
  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.dx *= -1
  }
}


export default WallCollision;