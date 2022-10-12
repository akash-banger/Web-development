import "./App.css";
import UpCompo from "./Components/UpCompo";
import LeftCompo from "./Components/LeftCompo";
import RightCompo from "./Components/RightCompo";
import DownCompo from "./Components/DownCompo";
import FastCompo from "./Components/FastCompo";
import RightyCompo from "./Components/RightyCompo";
import LeftyCompo from "./Components/LeftyCompo";
import OnCompo from "./Components/OnCompo";
import OffCompo from "./Components/OffCompo";
import React,{useState} from 'react'

function App() {
  var url = "http://192.168.4.1/control?";

  function off() {
    fetch(url + "off");
  }

  const [text, setText] = useState("Backward");
  var test = 1;
  function toggle() {
    // eslint-disable-next-line
    if (test === 1) {
      setText("Backward");
      test = 0;
    } else {
      setText("Forward");
      test = 1;
    }
  }
  function implement() {
    if (test === 1) {
      fetch(url + "up");
    } else {
      fetch(url + "down");
    }
    fetch(url + "normal");
  }

  return (
    <>
      <div>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <UpCompo url={url} off={off} />
        <LeftCompo url={url} off={off} />
        <RightCompo url={url} off={off} />
        <DownCompo url={url} off={off} />
      </div>
      <br /> <br /> <br /> <br /> <br /><br /><br /><br /><br /><br />
      <div>
        <OnCompo url={url} off={off} implement={implement} />
        <LeftyCompo url={url} off={off} implement={implement} />
        <RightyCompo url={url} off={off} implement={implement}/>
        <OffCompo url={url} off={off} />
        <DownCompo url={url} off={off} />
      </div>
      <br /> <br /> <br /> <br /> <br /><br /><br /><br /><br /><br />
    </>
  );
}
export default App;
