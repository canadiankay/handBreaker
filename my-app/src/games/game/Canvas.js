//board.js-- main board

import React, { useRef, useEffect } from 'react'

export default function Canvas() {

  const canvasRef = useRef(null) //initiate canvas as null first (from react) then we will utlizie it

//it's a component deadmount
  useEffect(() => {
    //We can access the canvas element through the canvasRef now. Now we just need to get the context and start drawing
    const canvas = canvasRef.current //current is a property inside the useRef
    const context = canvas.getContext('2d') 

    //draw a rectangle
    context.fillStyle = 'white' //this loads a white rectangle on top of canvas
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
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

