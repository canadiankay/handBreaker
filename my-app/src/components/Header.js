
import background from "../imgs/Ai.jpeg"
import "../App.css"

const Header = () => {
  

  return (
      <header>
       <div className="header-title" >WELCOME TO MDN GAMES</div>
       <div className="div-ai"><img src={background} alt="" className="img-ai"/></div>
      </header>
    
  )
}

export default Header