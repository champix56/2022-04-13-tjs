import React, { Component } from "react";
import FlexHLayout from "./components/layout/FlexHLayout/FlexHLayout";
import FlexWLayout from "./components/layout/FlexWLayout/FlexWLayout";
import Navbar from './components/ui/Navbar/Navbar'
import './App.css'
class App extends Component {
  render() {
    return (
      <div className="App" style={{height:'95vh'}}>
        <FlexHLayout>
          <Navbar/>
          <FlexWLayout>
            <div className="left">left</div>
            <div className="right">right</div>
          </FlexWLayout>
          <div className="footer" style={{textAlign:'center'}}>Copyright &copy; DESORBAIX</div>
        </FlexHLayout>
      </div>
    );
  }
}

export default App;
