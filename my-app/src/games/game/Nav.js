import { useState } from "react";
import navStyles from "../../styles/nav.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
function Nav() {
  // right now it's empty but after connectign witht the table, you should have the leaderboard
  // so you have something like a leaderboard variable with the info
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Popup
            trigger={<button> Leaderboard </button>}
            position="bottom center"
          >
            <h4>this is a placeholder for the leaderboard</h4>
            <table>
              {/* here goes the leaderboard */}
            </table>
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