import React from 'react'

const Popup = (props) => {
  return (
    <div className="popup">
      <div className="popup-inner">

        <button className="close-btn">close</button>
        { props.children }
      </div>


    </div>
  )
}

export default Popup