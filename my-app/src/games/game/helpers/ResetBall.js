// this function is to reset the ball from the middle after all lives are lost

function ResetBall(ball, canvas, paddle) {
  console.log("This is the ball:", ball);
  console.log("This is the paddle:", paddle);
  ball.x = paddle.x;
  ball.y = paddle.y - 80;
  ball.dx = 6 * (Math.random() * 2 - 1);
  ball.dy = -6;
}


export default ResetBall 