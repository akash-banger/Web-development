import React from "react";

export default function LeftCompo(props){
  function left(){
    fetch(props.url+"left");
  }
  return (
    <div style={{ float: "left" }}>
      <button
        className="unselectable"
        onTouchStart={left}
        onTouchEnd={props.off}
        style={{ height: "120px", width: "120px" }}
      >
      </button>
    </div>
  );
}
