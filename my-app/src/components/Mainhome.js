// bottom container where game will go middle of home page
import Game from '../games/game/index.js'

import "./home.css"

const Mainhome = ({userInfo}) => {
  return (
    <div className="game-container">
      <div className="title"><h2>HANDBREAKER</h2></div>
      <div className="game-box">
      
      <Game user={userInfo} />



     
     


      </div>
    </div>
  )
}

export default Mainhome