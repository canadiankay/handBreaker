// this is the whole page-- for styling
import styles from '../styles/layout.css'

// import nav bar and header
import Nav from './nav'
import Header from './header'


const Layout = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <Header />
    <div/>
      
    
  )
}

export default Layout
