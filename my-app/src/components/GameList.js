//this will go into the main page body where it will show all of the games

import React from 'react'
import StartButton from "../games/game/StartButton.js"

const GameList = () => {
  return (
    <div>
      <body style={{height:"400px", fontSize:"50px", color:"orange", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <p> this is the game list-- HandBreaker</p>
      </body>
      {/* this button will redirect to game page */}
        <StartButton />
    </div>
  )
}

export default GameList
