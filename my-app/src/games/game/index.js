
import { useHistory } from "react-router-dom";
//the main game component-- handbreaker
// entry point into the game----- index.js
import {useState, useEffect}  from 'react'
import Canvas from './Canvas.js'
import Popup from 'reactjs-popup';
import Button from '../../components/Button.js'
import Popup1 from '../../components/Popup1.js'




export default function Game () {

  //useState(), which will help us to always re-render the page when we add new components
  // set it to false by default
  const [showGame, setShowGame]= useState(false);

  function loadGame() {

    setShowGame(!showGame)
    //will count how many times game was loaded
    console.log("Game has been loaded")
  }


  // this will set that variable for the pop up to true 
  const [gamePopup, setGamePopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState();
  // this makes second pop up trigger after 3 seconds
  // useEffect allows it to only be called once instead of every second
useEffect(() => {
  setTimeout(() => {
    setTimedPopup(true);
  }, 3000)

}, []);

  const history = useHistory();
  const goToLeaderboard = () => history.push('/leaderboard');//eg.history.push('/login');

  // this is for line 61
  const onClick = () => {
    console.log("clicked scores")
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
    <div style={{display:"flex",justifyContent:"center", alignItems: "center", flexDirection: "column"}}>

      <h1> HANDBREAKER</h1>

      <div>
      <h2>Ready to Play?</h2>
        {/* this button will load the game when pressed */}
      <Button
        color='ORANGE' 
        text='START GAME' 
        onClick={loadGame} 
        input="submit" 
      ></Button>

      {/* if load game is true then show canvas component */}
     { showGame && <Canvas />}
      </div>

      <main classname={mainStyles}>
        <button onClick={()=> setGamePopup(true) }>How to Play HERE</button>
        {/* this pop up will only appear if true */}
        <Popup1 trigger={gamePopup} setTrigger={setGamePopup}>
            <h2>Welcome to HandBreaker</h2>
            <p>This game is done using handtracking technology. You will be able to control the paddle with your hand!</p>
        </Popup1>

          {/* this is our timed popup */}
        {/* <Popup1 trigger={timedPopup} setTrigger={setTimedPopup}>
            <h2>my Timed Pop up</h2>
            <p>My time triggered pop up</p>
        </Popup1> */}
      </main>

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

        

      




    </div>
  )
}

