import Popup from 'reactjs-popup';

//the main game component-- handbreaker
// entry point into the game----- index.js
import React from 'react'
import Canvas from './Canvas.js'
// Breakout


export default function Game () {
  return (
    <div>

      <h1>Welcome to handBreaker</h1>

      <Popup trigger={<button> Leaderboard </button>} 
            position="bottom center">
              <h4>this is a placeholder for the leaderboard</h4>
      </Popup>

      <Canvas />


    </div>
  )
}

