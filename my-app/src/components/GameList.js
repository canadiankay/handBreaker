//this will go into the main page body where it will show all of the games

import React from 'react'

const GameList = () => {
  return (
    <div>
      <body style={{height:"200px"}}>
        <p> this is the game list</p>
        <h2> but Go to <a href="/game"> THE GAME HERE</a></h2>
      </body>
    </div>
  )
}

export default GameList
