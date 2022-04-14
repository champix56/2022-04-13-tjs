import React from "react";
import Button from "./components/Button/Button";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        counter = {counter}
        <hr />
        <Button
          onButtonClicked={(unParam) => {
            counter++;
            console.log(counter);
          }}
          bgColor="tomato"
        >
          <img src="/img/ok_check.png" />
          <div style={{ display: "inline" }}>Mon text</div>
        </Button>
      </div>
    );
  }
}

/*
function App() {
  return (
   //equiv du render de la class
  );
}
*/
export default App;
