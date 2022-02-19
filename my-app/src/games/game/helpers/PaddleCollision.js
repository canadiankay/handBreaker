// collision should happen on the top of the paddle + right and left sides
//if the ball hits the middle of the paddle, then it should go up in the middle of canvas 
// if it hits the right/left side then it should go in the right/left direction
const PaddleCollision = (ball, paddle) => {

  if ( // all of these conditions need to met for collision to happen
    ball.x < paddle.x + paddle.width &&
    ball.x > paddle.x &&
    paddle.y < paddle.y + paddle.height &&
    ball.y + ball.rad > paddle.y - paddle.height / 2
  ) {
    // CHECK WHERE THE ball HIT THE paddle
    let collisionPoint = ball.x - (paddle.x + paddle.width / 2);

    // NORMALIZE THE VALUES
    collisionPoint = collisionPoint / (paddle.width / 2);

    // CALCULATE THE ANGLE OF THE ball
    let angle = (collisionPoint * Math.PI) / 3;

    // when these conditions are met, then change should occur, at a certain speed and angle
    ball.dx = ball.speed * Math.sin(angle);
    ball.dy = -ball.speed * Math.cos(angle);
  }
}

export default PaddleCollision