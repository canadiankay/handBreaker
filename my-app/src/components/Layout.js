//this is the home page 

// this is the whole page-- for styling
import styles from '../App.css'

//use router
import {BrowserRouter as Router, Route} from 'react-router-dom'

// import nav bar and header
import Nav from './Nav.js'
import Header from './Header.js'
import Footer from './Footer'
import About from './About.js'
import Game from '../games/game/index.js'
import GameList from './GameList'
import Leaderboard from './Leaderboard.js'



const Layout = () => {
  return (
    <Router>
    <div>
      <Nav />
      
      {<Route exact to path="/" component={Header} />}


      <main>
        <GameList /> 
      </main>

      <Route path="/game" component={Game}></Route>

      <Route path="/about" component={About} />

      <Route path="/leaderboard" component={Leaderboard} />

      <Footer />
      
    </div>
    </Router>
    
    
      
    
  )
}

export default Layout








