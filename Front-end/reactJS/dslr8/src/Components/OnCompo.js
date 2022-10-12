import React from 'react'

export default function OnCompo(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <button
        className="unselectable"
        style={{ height: "120px", width: "120px" }}
        onTouchStart={props.implement}
      > 
      </button>
    </div>
  )
}
