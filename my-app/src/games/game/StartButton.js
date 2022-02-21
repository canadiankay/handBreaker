import React from 'react';

const StartButton = ({ callback }) => {

  const startStyles= { 
    boxSizing: "border-box",
    margin: "0 0 20px 0",
    padding: "20px",
    minHeight: "30px",
    width: "40%",
    borderRadius: "20px",
    border: "none",
    color: "white",
    background: "#333",
    fontFamily: "Pixel, Arial, Helvetica, sans-serif",
    fontSize: "1rem",
    outline: "none",
    cursor: "pointer"
  }

  return (
    <div>
      <button style={startStyles} onClick={callback}>START GAME</button>
    </div>


  )
  }

export default StartButton;


