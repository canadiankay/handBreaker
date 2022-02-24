//this is the home page 

import { useState } from "react";


//firebase stuff 
import { getAuth } from "firebase/auth";
import { firebaseApp } from "../firebase";

// this is the whole page-- for styling
import '../../src/App.css';

//use router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import nav bar and header
import Nav from './Nav.js'
import Header from './Header.js'
import Footer from './Footer'
import About from './About.js'
import Game from '../games/game/index.js'
import Leaderboard from './Leaderboard.js'
import Login from "./Login.js";
import Register from "./Register.js";



const Layout = () => {

  // initialize firebase auth module
  const auth = getAuth(firebaseApp);

  const [isLoggedIn, toggleLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  // Link lets user change the URL on browser
  return (
    <Router>
      <div>
        <Nav isLoggedIn={isLoggedIn} />

      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <Game user={userInfo} />
            </>
          } 
        />

        <Route path="register" element={<Register />} />
        
        <Route
          path="login"
          element={
            <Login
              auth={auth}
              toggleLoggedIn={toggleLoggedIn}
              setUserInfo={setUserInfo}
            />}
        />

        <Route path="/leaderboard" element={<Leaderboard />} />

        <Route path="/about" element={<About />} />

      </Routes>


      <Footer />
      </div>

    </Router>
  )
}

export default Layout








