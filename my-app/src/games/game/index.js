import Popup from 'reactjs-popup';

//the main game component-- handbreaker
// entry point into the game----- index.js
import React from 'react'
import Canvas from './Canvas.js'


import Button from '../../components/Button.js'


export default function Game () {
  const onClick = () => {
    console.log("clicked")

  }
  return (
    <div>

      <h1> HANDBREAKER </h1>
      <section>
        <Button 
          color='YELLOW' 
          text='LEADERBOARD' 
          onClick={onClick} 
          input="submit" />
      </section>

      <section>
        <Button 
          color='ORANGE' 
          text='YOUR SCORES' 
          onClick={onClick} 
          input="submit" />
      </section>

      <main>
        <Canvas />
      </main>



    </div>
  )
}

