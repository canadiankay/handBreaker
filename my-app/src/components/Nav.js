import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import logo from "../imgs/DMN-Games-Logo.png"
import { Link} from 'react-router-dom'
import {useState} from 'react'


function Nav() {
  const [isLoggedIn, toggleLoggedIn] = useState(false);

  const navStyles={
    background:"orange",
    display:"flex",
    alignItems: "center",
    justifyContent:"space-evenly",
    color: "white",
    width: "100%",
    height: "100px"
  }

  return (
    <nav style={navStyles}>
      {/* insert logo */}
      <img src={logo} alt="" width="90px" height="90px" border-radius="50%" />


      <Link to="/">HOME</Link>
            
      <Link to="/about">ABOUT</Link>

      {/* if user is logged in  */}
      {isLoggedIn &&
        <Link to="/game" onClick={() => window.location.reload(false)}>LOGOUT</Link>
      }

      {/* if user is not logged in */}
      {!isLoggedIn && (
        <>
          <Link to="/register">REGISTER</Link>
          <Link to="/login">LOGIN</Link>
        </>)
      }


    </nav>
  )
}

export default Nav;
