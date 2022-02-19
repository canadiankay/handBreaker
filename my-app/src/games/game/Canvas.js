//board.js-- main board

import React, { useRef, useEffect } from 'react'
import { BallMovement } from './BallMovement';
import data from '../../data'

export default function Canvas() {

  let { ball } = data;

  const canvasRef = useRef(null) //initiate canvas as null first (from react) then we will utlizie it

  

//it's a component deadmount
  useEffect(() => {
    const loop = () => { //We can access the canvas element through the canvasRef now. Now we just need to get the context and start drawing
      const canvas = canvasRef.current //current is a property inside the useRef
      const ctx = canvas.getContext('2d') 
      ctx.clearRect(0, 0, canvas.width, canvas.height) // clears each new render of the circle so doesnt leave a trail
  


  
  
  
      // /////////////////////////////////DRAW PADDLE////////////////
      // ctx.fillStyle = 'yellow'
      // ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
      // ctx.strokeStyle = "#ffcd05";
      // ctx.strokeRect(paddle.x, paddle.y, paddle.width, paddle.height);
  
      
      
      ////////////// DRAW BALL //////////////////////////////////
      BallMovement(ctx, ball);

      // prevent ball from going beyond our canvas frame 
      // top and bottom 
      if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= canvas.height) {
        ball.dy *= -1; //deflect it in the other direction
      } 

     
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
        width="1000"/> 
  </div>


  )
}

