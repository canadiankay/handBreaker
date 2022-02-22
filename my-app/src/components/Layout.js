//this is the home page 

import { useState } from "react";


//firebase stuff 
import { getAuth } from "firebase/auth";
import { firebaseApp } from "../firebase";

// this is the whole page-- for styling
import '../../src/App.css';

//use router
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

// import nav bar and header
import Nav from './Nav.js'
import Header from './Header.js'
import Footer from './Footer'
import About from './About.js'
import Game from '../games/game/index.js'
import GameList from './GameList'
import Leaderboard from './Leaderboard.js'
import Login from "./Login.js";



const Layout = () => {

  // initialize firebase auth module
  const auth = getAuth(firebaseApp);

  const [isLoggedIn, toggleLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);


  return (
    <Router>
      <div>
        <Nav isLoggedIn={isLoggedIn} />

        <Header />

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* if user is logged in  */}
            {isLoggedIn &&
              <li>
                <Link to="/" onClick={() => window.location.reload(false)}>Logout</Link>
              </li>
            }
            {/* if user is not logged in */}
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




        <Footer />
      </div>

    </Router>




  )
}

export default Layout








