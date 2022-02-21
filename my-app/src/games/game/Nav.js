import { useState } from "react";
import navStyles from "../../styles/nav.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
function Nav() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Popup
            trigger={<button> Leaderboard </button>}
            position="bottom center"
          >
            <h4>this is a placeholder for the leaderboard</h4>
          </Popup>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

{
  /* <nav>
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
</nav> */
}