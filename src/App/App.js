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
      <Button>de lu</Button>
      <Button>benjamin button</Button>
      <Button>
        <img src="/img/ok_check.png" />
      </Button>
    </div>
  );
}

export default App;
