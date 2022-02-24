
import background from "../imgs/Ai.jpeg"
import "./header.css"

const Header = () => {
  

  return (
      <header>
       {/* <div style={{background:"black"}}>Welcome to MDN Games 🕹 🎮✨</div> */}
       <div className="header-title" >WELCOME TO MDN GAMES</div>
       <div className="div-ai"><img src={background} className="img-ai"/></div>
      </header>
    
  )
}

export default Header