// deals mostly with the routes
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Canvas from './games/game/Canvas';
// import TheGame from './games/game/index.js';
import Game from './games/game/index.js';

function App() {
  return (
    <Router>
      <div>
        <nav>
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
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <h1>REGISTER</h1> 
          </Route>
          <Route path="/login">
            <h1>LOGIN</h1> 
          </Route>
          <Route path="/">
            <h1>HOME</h1> 
            <Game />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;



