import React from "react";

export default function RightCompo(props) {
    function right(){
        fetch(props.url+"right");
      }
  return (
    <div style={{ float: "right" }}>
      <button
        className="unselectable"
        onTouchStart={right}
        onTouchEnd={props.off}
        style={{ height: "120px", width: "120px" }}
      >
      </button>
    </div>
  );
}
