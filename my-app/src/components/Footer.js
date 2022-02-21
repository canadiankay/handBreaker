import React from 'react'

const Footer = () => {
  const footerStyle = {
    padding: '10px',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'grey',
    color: 'white',
  }
  return (
    <footer style={footerStyle}>
      
      <h4>DMN Games Version 1.0.0 </h4>
      
      <p>Copyright DMN Games &copy; 2022</p>

    </footer>
  )
}

export default Footer