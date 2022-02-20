import navStyles from '../../styles/nav.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function Nav() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Popup  
            trigger={<button text='Register'/>} 
            position="bottom center">
              <h4>Username:<input placeholder='Username'></input></h4>
              <h4>Email:<input placeholder='example@gmail.com'></input></h4>
              <h4>Password:<input placeholder='Password'></input></h4>
              <h4>Confirm Password:<input placeholder='Confirm password'></input></h4>
              <input type="Submit" value="Submit"></input>
          </Popup>
        </li>

        <li>
          <Popup trigger={<button text='Login' />} 
            position="bottom center">
              <h4>Username:<input placeholder='Username'></input></h4>
              <h4>Password:<input placeholder='Password'></input></h4>
              <input type="Submit" value="Submit"></input>
          </Popup>
        </li>

        <li>
          <Popup trigger={<button> Leaderboard </button>} 
            position="bottom center">
              <h4>this is a placeholder for the leaderboard</h4>
          </Popup>
        </li>
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