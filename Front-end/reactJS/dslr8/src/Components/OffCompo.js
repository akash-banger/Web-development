import React from 'react'

export default function OffCompo(props) {
  return (
    <div style={{ textAlign: "center" }} >
      <button
        className="unselectable"
        style={{ height: "120px", width: "120px" }}
        onTouchStart={props.off}
      > 
      </button>
    </div>
  )
}
