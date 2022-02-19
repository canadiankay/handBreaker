//function that will have each player's info and score

const Player = (ctx, player, canvas) => {
  // Display Name of the Player
  ctx.font = "20px serif";
  ctx.fillStyle = "white";
  ctx.fillText(`Name: ${player.name}`, 20, 30);

  // Display Player Lives
  ctx.font = "20px serif";
  ctx.fillStyle = "yellow";
  let gap = 0;
  for (let i = 0; i < player.lives; i++) {
    ctx.fillText("👤", canvas.width / 2 + gap, 30);
    gap += 30;
  }

  // Display player's score
  ctx.font = "20px serif";
  ctx.fillStyle = "white";
  ctx.fillText(`Score: ${player.score}`, canvas.width - 140, 30);
}

export default Player