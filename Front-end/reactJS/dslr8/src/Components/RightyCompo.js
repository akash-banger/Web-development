import React from 'react'

export default function RightyCompo(props) {
  function decRight(){
    fetch(props.url + "decRight");
  }
  return (
    <div style={{ float: "Right" }}>
      <button
        className="unselectable"
        style={{ height: "120px", width: "120px" }}
        onTouchStart={decRight}
        onTouchEnd={props.implement}
      > 
      </button>
    </div>
  )
}
