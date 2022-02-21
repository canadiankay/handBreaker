
import background from "../imgs/Ai.jpeg"

const Header = () => {
  const headerStyles = {
    backgroundImage:`url(${background})`,
    fontSize:"50px",
    color:"white",
    height:"500px",
    display:"flex", 
    alignItems:"center",
    justifyContent:"center"

  }

  return (
      <header style={headerStyles}>
       <div style={{background:"black"}}>Welcome to DMN Games 🕹 🎮✨</div>
      </header>
    
  )
}

export default Header