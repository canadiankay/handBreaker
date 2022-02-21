import navStyles from '../styles/Nav.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function Nav() {
  return (
    <nav className={navStyles.nav}>
      <a href="/">HOME</a>

      <a href="/about">ABOUT US</a>

      <ul>
          <Popup  
            trigger={<button text='Register'>REGISTER</button>} 
            position="bottom center">
              <h4>Username:<input placeholder='Username'></input></h4>
              <h4>Email:<input placeholder='example@gmail.com'></input></h4>
              <h4>Password:<input placeholder='Password'></input></h4>
              <h4>Confirm Password:<input placeholder='Confirm password'></input></h4>
              <input type="Submit" value="Submit"></input>
          </Popup>

          <Popup trigger={<button text='Login'>LOGIN</button>} 
            position="bottom center">
              <h4>Username:<input placeholder='Username'></input></h4>
              <h4>Password:<input placeholder='Password'></input></h4>
              <input type="Submit" value="Submit"></input>
          </Popup>
    
        </ul>
    </nav>
  )
}

export default Nav;

{/* <nav>
<ul>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/register">Register</Link>
  </li>
  <li>
    <Link to="/login">Login</Link>
  </li>
</ul>
</nav> */}