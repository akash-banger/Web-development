import React from "react";

export default function DownCompo(props) {
    function down(){
        fetch(props.url+"down");
      }
  return (
    <div style={{ textAlign: "center" }}>
      <button
        className="unselectable"
        onTouchStart={down}
        onTouchEnd={props.off}
        style={{ height: "120px", width: "120px" }}
      >
      </button>{" "}
    </div>
  );
}
