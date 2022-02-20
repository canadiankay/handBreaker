// this is the whole page-- for styling
import styles from '../styles/layout.css'

//use router
import {BrowserRouter as Router, Route} from 'react-router-dom'

// import nav bar and header
import Nav from './Nav.js'
import Header from './Header.js'
import Footer from './Footer'
import About from './About'


const Layout = () => {
  return (
    <Router>
    <div className={styles.container}>
      <Route 
        path="/" 
        exact 
        render={(props)=> (
        <>
          <Nav />
          <Header />
        </>
        )} 
      /> 
      <Route path="/about" component={About} />
      <Footer />
      
    </div>
    </Router>
    
    
      
    
  )
}

export default Layout
