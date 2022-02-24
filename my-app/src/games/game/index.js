
import { useNavigate } from "react-router-dom";
//the main game component-- handbreaker
// entry point into the game----- index.js
// import {useState, useEffect}  from 'react'
import { useState } from 'react'
import Canvas from './Canvas.js'
// import Popup from 'reactjs-popup';
import Button from '../../components/Button.js'
import Popup1 from '../../components/Popup1.js'
import "./game.css"




export default function Game({ user }) {

  //useState(), which will help us to always re-render the page when we add new components
  // set it to false by default
  const [showGame, setShowGame] = useState(false);

  function loadGame() {

    setShowGame(!showGame)
    //will count how many times game was loaded
    console.log("Game has been loaded")
  }


  // this will set that variable for how to play game for the pop up to true 
  const [gamePopup, setGamePopup] = useState(false);
  // const [timedPopup, setTimedPopup] = useState();
  // this makes second pop up trigger after 3 seconds
  // useEffect allows it to only be called once instead of every second
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimedPopup(true);
  //   }, 3000)
  // }, []);


  // // this will allow us to set loading scores modal
  // const [scorePopup, setScorePopup] = useState(false);



  const navigate = useNavigate();
  // this allows us to press the button on game page to go to leaderboard
  const goToLeaderboard = () => navigate('/leaderboard');

  return (
    <div className="game-ready">

        <h2>Ready to Play?</h2>
        {/* this button will load the game when pressed */}
        <Button
          className="start-btn"
          text='START GAME'
          onClick={loadGame}
          input="submit"
        ></Button>
        <div>

        {/* if load game is true then show canvas component */}
        {showGame && <Canvas user={user} />}

        </div>
      

      <div className="howTo">
        <button onClick={() => setGamePopup(true)}>HOW TO PLAY</button>
        {/* this pop up will only appear if true */}
        <Popup1 trigger={gamePopup} setTrigger={setGamePopup}>
          <h2>How to Play</h2>
          <p>The game will begin three seconds after you press 'Start Game.' You will then be able to control the paddle using your mouse. You may also choose to control the paddle using your face or your hands by pressing 'Toggle Video'. </p>
        </Popup1>

        {/* this is our timed popup */}
        {/* <Popup1 trigger={timedPopup} setTrigger={setTimedPopup}>
            <h2>my Timed Pop up</h2>
            <p>My time triggered pop up</p>
        </Popup1> */}
      </div>

      <div>
        <Button
          // color='YELLOW'
          text='LEADERBOARD'
          onClick={goToLeaderboard}
          input="submit" />
      </div>

      {/* <section className={scoresStyles}>
        <button onClick={() => setScorePopup(true)}>SEE SCORES HERE</button>
        
        <Popup1 trigger={scorePopup} setTrigger={setScorePopup}>
          <h1>insert user.name here</h1>
          <h2>Your Scores:</h2>
          <h2>Date</h2>
          <h4>Checkout other people's scores<a href="/leaderboard">HERE</a></h4>
        </Popup1>
      </section> */}








    </div>
  )
}

