import React from "react";
import Button from "./components/Button/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      DEMAT BREIZH
      <hr />
      <Button
        onButtonClicked={(unParam) => {
          console.log(unParam);
        }}
        bgColor="tomato"
      >
        <img src="/img/ok_check.png" />
        <div style={{ display: "inline" }}>Mon text</div>
      </Button>
      <Button bgColor="MidnightBlue">de lu</Button>
      <Button bgColor="grey" color="MidnightBlue">benjamin button</Button>
      <Button color="MidnightBlue">
        <img src="/img/ok_check.png" />
      </Button>
      <Button style={{textDecoration:'underline',fontSize:'48pt',color:'yellow'}}>Def. button</Button>
    </div>
  );
}

export default App;
