//board.js-- main board

import React, { useRef, useEffect } from 'react'

export default function Canvas() {

  const canvasRef = useRef(null) //initiate canvas as null first (from react) then we will utlizie it

//it's a component deadmount
  useEffect(() => {
    //We can access the canvas element through the canvasRef now. Now we just need to get the context and start drawing
    const canvas = canvasRef.current //current is a property inside the useRef
    const ctx = canvas.getContext('2d') 

    ////////////////////////////// VARIABLES AND CONSTANTS///////////////////
    // Paddle description
    const paddle_width = 100;
    const paddle_height = 20;
    const paddle_margin_bottom = 50;

    // paddle object + initial position 
    const paddle = {
      x: canvas.width / 2 - paddle_width / 2,
      y: canvas.height - paddle_height - paddle_margin_bottom, //this is constant wont change in the game
      width: paddle_width,
      height: paddle_height,
      dx: 5 //this is amount of pixels paddle will move to the right/left-- wont change
    }



    /////////////////////////////////DRAW PADDLE////////////////
    ctx.fillStyle = 'yellow'
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    ctx.strokeStyle = "#ffcd05";
    ctx.strokeRect(paddle.x, paddle.y, paddle.width, paddle.height);


  }, [])
    //^ this empty bracket allows it to load initially 

  return (
    
    <div className="canvas">
      {/* this is our gameboard */}
      {/* This is our game board/Canvas */}

      {/* //return canvas-- styling is in app.css */}
      <canvas id="myCanvas" ref= {canvasRef} height="600" width="1000"/> 
  </div>


  )
}

