//this is the home page 

// this is the whole page-- for styling
import styles from '../styles/Layout.css'

//use router
import {BrowserRouter as Router, Route} from 'react-router-dom'

// import nav bar and header
import Nav from './Nav.js'
import Header from './Header.js'
import Footer from './Footer'
import About from './About.js'
import Game from '../games/game/index.js'



const Layout = () => {
  return (
    <Router>
    <div>
      <Nav />
      
      <Route 
        path="/" 
        exact 
        component={Header}
      /> 

     
        <h2>Go to <a href="/game"> THE GAME</a></h2>
      
      <Route path="/game" component={Game}></Route>


      <Route path="/about" component={About} />

      <Footer />
      
    </div>
    </Router>
    
    
      
    
  )
}

export default Layout








