//board.js-- main board

import React, { useRef, useEffect } from 'react'

export default function Canvas() {

  const canvasRef = useRef(null) //initiate canvas as null first (from react) then we will utlizie it

  let x = 0;

//it's a component deadmount
  useEffect(() => {
    const loop = () => { //We can access the canvas element through the canvasRef now. Now we just need to get the context and start drawing
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
  
        // Draw ball object + initial position 
        const ball_radius = 8;
        const ball = {
          // the x and y position is at the center of the circle
          x: canvas.width / 2,
          y: paddle.y - ball_radius,
          radius: ball_radius,
          speed: 4,
          dx: 3 * (Math.random() * 2 - 1),  // this allows ball to go into random positions-- will generate random numbers between 3 and -
          dy: -3
        }
  
  
  
      // /////////////////////////////////DRAW PADDLE////////////////
      // ctx.fillStyle = 'yellow'
      // ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
      // ctx.strokeStyle = "#ffcd05";
      // ctx.strokeRect(paddle.x, paddle.y, paddle.width, paddle.height);
  
      ////////////// DRAW BALL //////////////////////////////////
      ctx.clearRect(0, 0, canvas.width, canvas.height) // clears each new render of the circle so doesnt leave a trail
      ctx.beginPath();
      // takes in the ball's x and y position, radius and start angle and end angle (which is angle of circle)
      ctx.arc(x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.stroke(); //to draw circle
       x++;
     
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
      <canvas id="myCanvas" ref= {canvasRef} height="600" width="1000"/> 
  </div>


  )
}

