import React,{useState} from 'react'

export default function ToggleCompo(props) {
    const [text,setText] = useState("Backward");
    var test = 1;
    function toggle(){
      if(test == 1){
        setText("Backward");
        test = 0;
      }else{
        setText("Forward");
        test = 1;
      }
    }
    function implement(){
      if(test == 1){
        fetch(props.url + "up");
      }else{
        fetch(props.url + "down");
      }
    }
  return (
    <div style={{ textAlign: "center" }}>
      <button
        className="unselectable"
        style={{ height: "120px", width: "120px" }}
        onTouchStart={toggle}
      > {text}
      </button>
    </div>
  )
}
