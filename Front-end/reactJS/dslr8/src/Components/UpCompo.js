import React from "react";

export default function UpCompo(props) {
    function up(){
        fetch(props.url+"up");
      }
  return (
    <div style={{ textAlign: "center" }}>
      <button
        className="unselectable"
        onTouchStart={up}
        onTouchEnd={props.off}
        style={{ height: "120px", width: "120px" }}
      >
      </button>
    </div>
  );
}
