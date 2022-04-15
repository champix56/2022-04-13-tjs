import React, { Component } from "react";
import FlexHLayout from "./components/layout/FlexHLayout/FlexHLayout";
import FlexWLayout from "./components/layout/FlexWLayout/FlexWLayout";
import Navbar from "./components/ui/Navbar/Navbar";
import "./App.css";
import MemeViewer from "./components/ui/MemeViewer/MemeViewer";
import MemeForm from "./components/functionnal/MemeForm/MemeForm";
import { ACTIONS_CURRENT, store } from "./store/store";
import { DummyMeme } from "./interfaces/common";
import MemeThumbnail from "./components/functionnal/MemeThumbnail/MemeThumbnail";
import { Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    // console.log(store)
    return (
      <div className="App" style={{ height: "95vh" }}>
        <FlexHLayout>
          <Navbar />
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/thumbnail" element={<MemeThumbnail />} />
            <Route
              path="/editor"
              element={
                <FlexWLayout>
                  <MemeViewer />
                  <MemeForm />
                </FlexWLayout>
              }
            />
          </Routes>
          <div className="footer" style={{ textAlign: "center" }}>
            Copyright &copy; DESORBAIX
          </div>
        </FlexHLayout>
      </div>
    );
  }
}

export default App;
