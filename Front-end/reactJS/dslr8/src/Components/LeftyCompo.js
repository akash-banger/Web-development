import React from 'react'

export default function LeftyCompo(props) {
  function decLeft(){
    fetch(props.url + "decLeft");
  }
  return (
    <div style={{ float: "left" }}>
      <button
        className="unselectable"
        style={{ height: "120px", width: "120px" }}
        onTouchStart={decLeft}
        onTouchEnd={props.implement}
      > 
      </button>
    </div>
  )
}
