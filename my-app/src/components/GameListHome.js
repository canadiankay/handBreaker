// bottom container where game will go middle of home page
import Game from '../games/game/index.js'

import "./gamelisthome.css"

const GameListHome = ({userInfo}) => {
  return (
    <div className="game-container">
      <div className="game-box">
      
      <Game user={userInfo} />





      </div>
    </div>
  )
}

export default GameListHome