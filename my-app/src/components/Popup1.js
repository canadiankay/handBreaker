import React from 'react';
import 'reactjs-popup';

const Popup1 = (props) => {

  const popupStyles={
    position: 'fixed',
    top:'0',
    left:'0',
    width:'100%',
    height:'100vh',
    backgroundColor:'pink',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
    
  }

  const innerStyles={
    position: 'relative',
    padding:'32px',
    width:'100%',
    maxWidth: '640px',
    backgroundColor: 'white',
    color: 'black'
  }

  const closeBtn={
    position: 'absolute',
    top:'16px',
    right:'16px'

  }



  // if this trigger is true than the pop up will show, if not then it will not show
  return (props.trigger) ? (
    <div style={popupStyles}>
    <div style={innerStyles}>
      <button style={closeBtn} onClick={() => props.setTrigger(false)}>close</button>
      { props.children }
    </div>
  </div>
  ) : "";
}

export default Popup1