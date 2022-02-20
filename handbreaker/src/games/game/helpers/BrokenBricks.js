// this function will check if all the bricks are broken or not 
//and if they are then go to another level

// takes in bricks as an array of objects
// player, canvas and ball (to change position of the ball once all bricks are broken)

import data from "../../../data.js"
import ResetBall from "./ResetBall.js";


export default function BrokenBricks(bricks, player, canvas, ball) {
  let { brick, paddle }= data

  let total = 0;
  // check to see if each brick is broken
  for (let i = 0; i < bricks.length; i++) {
    if (bricks[i].broke === true) {
      total++;
    }
  }
  // if all bricks broken (total matches number of bricks i.e. 0) then go to next level
  if (total === bricks.length) {
    //alert("all bricks are broken!") // this gives us an alert as soon as it hits each inviidual brick :(
    player.level++; //increment the level
    // ball.y = canvas.height - 20;

    //reset ball position
    ResetBall(ball, canvas, paddle);

    // this is to prevent the rows from descending on canvas as each level progresses
    brick.y = 50; // this is where we set the height of all the bricks originally


  }
} 