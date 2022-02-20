import navStyles from '../../styles/nav.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function Nav() {
  return (
    <nav className={navStyles.nav}>



      <ul>
        <li>
          <Popup trigger={<button> Register </button>}
            position="bottom center">
            <form method='POST' action="http://localhost:3002/auth/register">
              <h4>Username:<input placeholder='Username' value='username'></input></h4>
              <h4>Email:<input placeholder='example@gmail.com' value='email'></input></h4>
              <h4>Password:<input placeholder='Password' value='password'></input></h4>
              <h4>Confirm Password:<input placeholder='Confirm password'></input></h4>
              <input type="Submit" value="Submit"></input>

            </form>
          </Popup>
        </li>

        <li>
          <Popup trigger={<button> Login </button>}
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