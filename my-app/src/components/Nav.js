// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import logo from "../imgs/MDN-Logo.png"
import { Link} from 'react-router-dom'
import "./nav.css"

function Nav({isLoggedIn}) {

  const linkStyles={
    fontFamily: "'Exo', sans-serif",
    fontSize:"20px",
    color:"white"

  }

  return (
    <nav>
      {/* insert logo */}
      <img src={logo} alt="" width="220px" height="220px" border-radius="50%" />

  
      <Link to="/" style={linkStyles}>HOME</Link>

      <Link to="/about" style={linkStyles}>ABOUT</Link>


      {/* if user is logged in  */}
      {isLoggedIn &&
        <Link to="/" onClick={() => window.location.reload(false)} style={linkStyles}>LOGOUT</Link>
      }

      {/* if user is not logged in */}
      {!isLoggedIn && (
        <>
          <Link to="/register" style={linkStyles}>REGISTER</Link>
          <Link to="/login" style={linkStyles} className="boxed">LOGIN</Link>
        </>)
      }

    </nav>
  )
}

export default Nav;
