

const StartButton = ({onClick}) => {

  

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
    cursor: "pointer",
    backgroundColor:"orange"
  }



  return (

    <div style={{display:"flex",justifyContent: "center", alignItems: "center"}}>
      <button style={startStyles} onClick={onClick}><a href="/game">START</a></button>
      
    </div>


  )
  }

export default StartButton;


