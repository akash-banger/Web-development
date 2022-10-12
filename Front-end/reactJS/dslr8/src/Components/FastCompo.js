import React,{useState} from "react";

export default function FastCompo(props) {
    var fast = 1;
    const [text,setText] = useState("fast")
    function toggle(){
        if(fast == 1){
            fetch(props.url+"fast")
            fast = 0;
            setText("slow");
        }else{
            fetch(props.url+"slow")
            fast = 1;
            setText("fast");
        }
    }
  return (
    <div style={{ textAlign: "center" }}>
      <button
        className="unselectable"
        id="toggle"
        onClick={toggle}
        style={{ height: "120px", width: "120px" }}
      >{text}
      </button>
    </div>
  );
}
