
import { useHistory } from "react-router-dom";
//the main game component-- handbreaker
// entry point into the game----- index.js
import React from 'react'
import Canvas from './Canvas.js'
import Popup from 'reactjs-popup';
import Popup1 from '../../components/Popup1.js'


import Button from '../../components/Button.js'


export default function Game () {

  const history = useHistory();
  const goToLeaderboard = () => history.push('/leaderboard');//eg.history.push('/login');

  const onClick = () => {
    console.log("clicked")
  }

  const mainStyles ={
    padding:"32px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    minHeight:"100vh"
  }


  return (
    <div>

      <h1> HANDBREAKER</h1>
      <section>
        <Button 
          color='YELLOW' 
          text='LEADERBOARD' 
          onClick={goToLeaderboard} 
          input="submit" />
      </section>

      <section>
        <Popup trigger={
          <Button 
            color='ORANGE' 
            text='YOUR SCORES' 
            onClick={onClick} 
            input="submit" 
          />}
          position="middle"
        >
          <h4>YOUR SCORE:</h4>
          <h4>DATE:</h4>

        </Popup>
      </section>
  
      <main classname={mainStyles}>
        <h2>Ready to Play?</h2>
        <button>START</button>
        {/* this pop up will only appear if true */}
        <Popup1 trigger={true}>
            <h2>my Pop up</h2>
            <p>Welcome to handBreaker</p>
        </Popup1>
        <Canvas />
      </main>



    </div>
  )
}

