import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { getAuth } from "firebase/auth";

import Game from "./games/game/index.js";
import Nav from "./games/game/Nav.js";
import "./App.css";
import Login from "./screens/Login";
import { firebaseApp } from "./firebase";
import { useState } from "react";

function App() {
  // initialize firebase auth module
  const auth = getAuth(firebaseApp);

  const [isLoggedIn, toggleLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  return (
    <Router>
      <div>
        <Nav isLoggedIn={isLoggedIn} />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {isLoggedIn &&
              <li>
                <Link to="/" onClick={() => window.location.reload(false)}>Logout</Link>
              </li>
            }
            {!isLoggedIn && (
              <>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <Routes>
          <Route path="register" element={<h1>Register</h1>} />
          <Route
            path="login"
            element={
              <Login
                auth={auth}
                toggleLoggedIn={toggleLoggedIn}
                setUserInfo={setUserInfo}
              />
            }
          />
          <Route path="/" element={<Game user={userInfo} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;