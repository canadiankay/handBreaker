import React from 'react';
import 'reactjs-popup';

const Popup1 = (props) => {
  // if this trigger is true than the pop up will show, if not then it will not show
  return (props.trigger) ? (
    <div className="popup">
    <div className="popup-inner">
      <button className="close-btn">close</button>
      { props.children }
    </div>
  </div>
  ) : "";
}

export default Popup1