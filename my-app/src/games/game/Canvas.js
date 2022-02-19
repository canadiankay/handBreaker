//board.js-- main board

import React, { useRef, useEffect } from 'react'
import { BallMovement } from './BallMovement';
import data from '../../data'
import WallCollision from './helpers/WallCollision';
import {PaddleMovement} from './PaddleMovement';
import CreateBrick from './Brick';
import BrickCollision from './helpers/BrickCollision';
import PaddleCollision from './helpers/PaddleCollision';
import Player from './Player';
import BrokenBricks from './helpers/BrokenBricks';

let { ball, paddle, brick, player } = data;

// will have a state of bricks 
let bricks = [];

export default function Canvas() {
  const canvasRef = useRef(null) //initiate canvas as null first (from react) then we will utlizie it

//it's a component deadmount
  useEffect(() => {
    const loop = () => { 
      //We can access the canvas element through the canvasRef now. Now we just need to get the context and start drawing
      const canvas = canvasRef.current //current is a property inside the useRef
      const ctx = canvas.getContext('2d') 
      
      // need to provide y value for paddle-ball Collision since we dont have a y value in data.js
      paddle.y = canvas.height - 30;
      
      /////////////// BRICK CREATION ///////////////////////////
      // before clearing canvas we will assign (a) brick(s)
      // we will initiate it with 2 rows ------- can change it to however many rows we want 
      // CreateBrick(brick, canvas, 2, bricks); // returns an array of objects
      // ^this calls brick infinite amount of times
      let allBricks = CreateBrick(brick, canvas, 2, bricks); 
      // need to handle if all the bricks are undefined or empty 
      if (allBricks && allBricks.length > 0) {
        bricks = allBricks; // if they are then we assign it to bricks(empty array)
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height) // clears each new render of the circle so doesnt leave a trail

      //////////// DISPLAY PLAYER ////////////////
      // Player logic --- displays their name, lives and score
      Player(ctx, player, canvas);

      // restart/reset game if the player has no lives
      if (player.lives === 0) {
        alert ("GAME OVER! Press OK to restart")
        //bricks reset to 0
        bricks.length === 0;
        player.lives = 3;
      }
  
      //////////////////// DISPLAY BRICKS////////////////////////////
      // as soon as we have bricks, we want to draw/display each individual brick on the canvas
      //display bricks
      bricks.map((brick) => {
        return brick.draw(ctx);
      })

      ////////////////////// HANDLE BALL - BRICK COLLISION////////////////////
      // handle brick collision 
      let collision;

      //needs to go through each and every single brick
      for (let i = 0; i < bricks.length; i++) {
        // if a collision has happened
        collision = BrickCollision(ball, bricks[i]); //bricks[i] refers to the individual brick that was hit

        if (collision.hit && !bricks[i].broke) { //if brick hit or not broken (see Brick Collision logic)
          // console.log(collision);
          if (collision.axis === "X") {
            ball.dx *= -1; //if collision happened  divert the brick x-axis direction
            bricks[i].broke = true; // and change its brocken value to be true (dont wanna see it)
          
          } else if (collision.axis === "Y") {
            ball.dy *= -1;
            bricks[i].broke = true;
          }
          // everytime a brick is hit, we want to increment the score by 2
          player.score += 2;
        }
      }
      /////////////////// CHECK IF BRICKS ARE BROKEN////////////////     
      BrokenBricks(bricks, canvas, player, ball);
      
      // /////////////////////////////////DRAW + MOVE PADDLE////////////////
      // Paddle(ctx, canvas, paddle);
      PaddleMovement(ctx, canvas, paddle);
      
      ////////////// DRAW + MOVE BALL //////////////////////////////////
      BallMovement(ctx, ball);
      
      ///////////Prevent Ball from hitting walls //////////////////////////////////
      WallCollision(canvas, ball, player, paddle);


      /////////////// Allow ball to bounce off paddle//////////////
      //handles ball-paddle collision
      PaddleCollision(paddle, ball)
      // console.log("paddle", paddle, "ball:", ball);


      
      
      requestAnimationFrame(loop); // this keeps rendering the function and allows ball to move
  
    };
    loop();

  

  }, [])
    //^ this empty bracket allows it to load initially 

  return (
    
    <div className="canvas">
      {/* this is our gameboard */}
      {/* This is our game board/Canvas */}

      {/* //return canvas-- styling is in app.css */}
      <canvas 
        id="myCanvas" 
        ref= {canvasRef} 
        height="600" 
        width="1000"
        // width={ window.innerWidth - 25 }
        //allows paddle to move via mouse
        //onMouseMove={(event) => {paddle.x = event.clientX - paddle.width / 2; console.log(paddle.x)}} // this works with width being inner width
        onMouseMove={(event) => {
          paddle.x = event.clientX - 500; 
          // console.log(paddle.x)
        }} // this works with setting width to 1000
        
        /> 
        
  </div>


  )
}

