
import { useNavigate } from "react-router-dom";
//the main game component-- handbreaker
// entry point into the game----- index.js
// import {useState, useEffect}  from 'react'
import {useState}  from 'react'
import Canvas from './Canvas.js'
// import Popup from 'reactjs-popup';
import Button from '../../components/Button.js'
import Popup1 from '../../components/Popup1.js'




export default function Game ({user}) {

  //useState(), which will help us to always re-render the page when we add new components
  // set it to false by default
  const [showGame, setShowGame]= useState(false);

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


// this will allow us to set loading scores modal
const [scorePopup, setScorePopup] = useState(false);



  const navigate = useNavigate();
  // this allows us to press the button on game page to go to leaderboard
  const goToLeaderboard = () => navigate('/leaderboard');


  const howToPlayStyles ={
    padding:"32px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    minHeight:"100vh"
  }

  const scoresStyles ={
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
     { showGame && <Canvas user={user} />}
      </div>

      <section classname={howToPlayStyles}>
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
      </section>

      <section>
        <Button 
          color='YELLOW' 
          text='LEADERBOARD' 
          onClick={goToLeaderboard} 
          input="submit" />
      </section>

      <section classname={scoresStyles}>
      <button onClick={()=> setScorePopup(true) }>SEE SCORES HERE</button>
        {/* this pop up will only appear if true */}
        <Popup1 trigger={scorePopup} setTrigger={setScorePopup}>
        <h1>insert user.name here</h1>
        <h2>Your Scores:</h2>
        <h2>Date</h2>
        <h4>Checkout other people's scores<a href="/leaderboard">HERE</a></h4>
        </Popup1>
      </section>

        

      




    </div>
  )
}

