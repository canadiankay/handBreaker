//the main game component-- handbreaker
// entry point into the game----- index.js
import React from 'react'
import Canvas from './Canvas.js'


export default function TheGame () {
  return (
    <div>

      <h1>This is the game component (i.e. canvas)</h1>

      <Canvas />

    </div>
  )
}

