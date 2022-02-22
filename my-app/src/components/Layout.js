//this is the home page 

import { useState } from "react";


//firebase stuff 
import { getAuth } from "firebase/auth";
import firebaseApp from "../firebase";

// this is the whole page-- for styling
import '../../src/App.css';

//use router
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

// import nav bar and header
import Nav from './Nav.js'
import Header from './Header.js'
import Footer from './Footer'
import About from './About.js'
import Game from '../games/game/index.js'
import GameList from './GameList'
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

        <Header />

        <Link to="/">Home</Link>
            
        {/* if user is logged in  */}
        {isLoggedIn &&
          <Link to="/" onClick={() => window.location.reload(false)}>Logout</Link>
        }

        {/* if user is not logged in */}
        {!isLoggedIn && (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>)
        }

        <Link to="/about">About</Link>

       

      <Routes>
        <Route path="/" element={<Game user={userInfo} />} />

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

        <Route path="/about" element={<About />}></Route>

      </Routes>

      <Footer />

      </div>

    </Router>
    
    
      
    
  )
}

export default Layout








